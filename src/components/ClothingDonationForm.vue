<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <h2 class="text-center mb-4">Kleiderspende registrieren</h2>
        <form @submit.prevent="handleRegistration">
          <div class="form-group row mb-3">
            <label class="col-sm-3 col-form-label">Art der Übergabe:</label>
            <div class="col-sm-9">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" id="collection" value="Abholung" v-model="formData.selectedHandoverOption" name="handoverOption" required>
                <label class="form-check-label" for="collection">Abholung</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" id="personalDelivery" value="Persönliche Übergabe an der Geschäftsstelle" v-model="formData.selectedHandoverOption" name="handoverOption" required>
                <label class="form-check-label" for="personalDelivery">Persönliche Übergabe an der Geschäftsstelle</label>
              </div>
            </div>
          </div>
          <div class="form-group row mb-3">
            <label for="typeOfClothe" class="col-sm-3 col-form-label">Art der Kleidung:</label>
            <div class="col-sm-9">
              <input type="text" id="typeOfClothe" class="form-control" v-model="formData.typeOfClothe" required>
            </div>
          </div>
          <div class="form-group row mb-3">
            <label for="crisisArea" class="col-sm-3 col-form-label">Krisengebiet:</label>
            <div class="col-sm-9">
              <select id="crisisArea" class="form-select" v-model="formData.crisisArea" required>
                <option value="">Bitte wählen</option>
                <option v-for="(area, index) in crisisAreas" :key="index" :value="area.value">{{ area.label }}</option>
              </select>
            </div>
          </div>
          <div v-if="formData.selectedHandoverOption === 'Abholung'">
            <div class="form-group row mb-3">
              <label for="steetAndNumber" class="col-sm-3 col-form-label">Straße und Hausnummer:</label>
              <div class="col-sm-9">
                <input type="text" id="steetAndNumber" class="form-control" v-model="formData.streedAndNumber" required>
              </div>
            </div>
            <div class="form-group row mb-3">
              <label for="city" class="col-sm-3 col-form-label">Stadt</label>
              <div class="col-sm-9">
                <input type="text" id="city" class="form-control" v-model="formData.city" required>
              </div>
            </div>
            <div class="form-group row mb-3">
              <label for="postalCode" class="col-sm-3 col-form-label">Postleitzahl:</label>
              <div class="col-sm-9">
                <input type="number" id="postalCode" class="form-control" v-model="formData.postalCode" required>
                <p v-if="checkPostalCodeAndShowError" class="text-danger">Eine Abholung ist leider nicht möglich. Die Postleitzahl muss in der Nähe der Geschäftsstelle liegen (73123).</p>
                <p v-if="invalidPostalCode" class="text-danger">Die Postleitzahl muss aus 5 Zahlen bestehen.</p>
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-primary btn-block">Jetzt spenden</button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
  import crisisAreas from '@/assets/data/crisisAreas.json';
  import { useFormDataStore } from '@/store/formDataStore';
  import router from '@/router'

  export default{
    name: 'ClothingDonationForm',
    data(){
      return {
        formData: {
          collection: false,
          selectedHandoverOption: 'Abholung',
          personalDelivery: false,
          streedAndNumber: '',
          city: '',
          postalCode: '',
          typeOfClothe: '',
          crisisArea: '',
          currentDateTime: this.getCurrentDateTime()
        },
        crisisAreas: crisisAreas,
        invalidPostalCode: false
      }
    },
    methods: {
      handleRegistration() {
        if(this.isPostalCodeValid() || this.formData.selectedHandoverOption !== 'Abholung'){
          const formDataStore = useFormDataStore();
          formDataStore.setFormData(this.formData);
          formDataStore.markFormSubmitted();

          router.push('/Kleiderspende/Bestaetigung')
        }
        else {
          this.invalidPostalCode = true;
        }
      },
      getCurrentDateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        this.currentDate = now.toLocaleDateString(undefined, options);
        this.currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
        return `${this.currentDate}, ${this.currentTime} Uhr`;
      },
      isPostalCodeValid(){
        return !this.checkPostalCodeAndShowError && this.hasPostalCodeFiveNumbers() && this.validateNumeric();
      },
      hasPostalCodeFiveNumbers() {
        const postalCodeRegex = /^\d{5}$/;
        return postalCodeRegex.test(this.formData.postalCode);
      },
      validateNumeric() {
        return /^\d+$/.test(this.formData.postalCode);
      }
    },
    computed: {
      checkPostalCodeAndShowError() {
        const officePostalCode = '73123';
        const enteredPostalCode = this.formData.postalCode.toString();
        
        if (enteredPostalCode.length >= 2) {
          const enteredFirstTwoDigits = enteredPostalCode.substring(0, 2);
          const officeFirstTwoDigits = officePostalCode.substring(0, 2);
          
          return enteredFirstTwoDigits !== officeFirstTwoDigits 
           
        } else {
          return false;
        }
      }
    }
  }
</script>