<template>
  <div class="container">
    <div class="row">
      <div class="col-md-10">
        <h2 class="text-center">Kleiderspende registrieren</h2>
        <form @submit.prevent="handleRegistration">
          <div class="form-group row mb-3">
            <label class="col-sm-3 col-form-label">Art der Übergabe:</label>
            <div class="col-sm-9">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="collection" v-model="formData.collection">
                <label class="form-check-label" for="collection">Abholung</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="personalDelivery" v-model="formData.personalDelivery">
                <label class="form-check-label" for="personalDelivery">Persönliche Übergabe an der Geschäftsstelle</label>
              </div>
            </div>
          </div>
          <div v-if="formData.personalDelivery || formData.collection">
              <div class="form-group row mb-3">
              <label for="typeOfClothe" class="col-sm-3 col-form-label">Art der Kleidung:</label>
              <div class="col-sm-9">
                <input type="text" id="typeOfClothe" class="form-control" v-model="formData.typeOfClothe">
              </div>
            </div>
            <div class="form-group row mb-3">
              <label for="crisisArea" class="col-sm-3 col-form-label">Krisengebiet:</label>
              <div class="col-sm-9">
                <input type="text" id="crisisArea" class="form-control" v-model="formData.crisisArea">
              </div>
            </div>
          </div>
          <div v-if="formData.collection">
            <div class="form-group row mb-3">
              <label for="steetAndNumber" class="col-sm-3 col-form-label">Straße und Hausnummer:</label>
              <div class="col-sm-9">
                <input type="text" id="steetAndNumber" class="form-control" v-model="formData.streedAndNumber">
              </div>
            </div>
            <div class="form-group row mb-3">
              <label for="city" class="col-sm-3 col-form-label">Stadt</label>
              <div class="col-sm-9">
                <input type="text" id="city" class="form-control" v-model="formData.city">
              </div>
            </div>
            <div class="form-group row mb-3">
              <label for="postalCode" class="col-sm-3 col-form-label">Postleitzahl:</label>
              <div class="col-sm-9">
                <input type="number" id="postalCode" class="form-control" v-model="formData.postalCode">
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
  export default{
    name: 'ClothingDonationForm',
    data(){
      return {
        formData: {
          collection: false,
          personalDelivery: false,
          streedAndNumber: '',
          city: '',
          postalCode: '',
          typeOfClothe: '',
          crisisArea: '',
        }
      }
    },
    methods: {
      handleRegistration(){
        this.$emit('formSubmitted', this.formData);
        console.log('form submitted')
      }
    },
  }
</script>