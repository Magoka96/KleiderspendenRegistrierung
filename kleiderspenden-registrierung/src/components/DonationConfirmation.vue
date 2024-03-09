<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card-body border border-black rounded-4 p-3 bg-white">
          <h1 class="card-title text-center"><strong>Bestätigung</strong></h1>
          <h3 class="card-title text-center mb-4">Vielen Dank für deine Spende!</h3>
          <p><strong>Art der Übergabe:</strong> {{ formData.selectedHandoverOption }} </p>
          <p><strong>Adresse:</strong></p>
          <div v-if="formData.collection">
            <div>
              <p>{{ formData.streedAndNumber }}</p>
              <p>{{ formData.city }}, {{ formData.postalCode }}</p>
            </div>
          </div>
          <div v-else>
            <p>Die-Gütige-Straße 100a</p>
            <p>Hoffnung, 73123</p>
          </div>
          <p><strong>Art der Kleidung:</strong> {{ formData.typeOfClothe }}</p>
          <p><strong>Krisengebiet:</strong> {{ formData.crisisArea }}</p>
          <p><strong>Datum und Uhrzeit:</strong> {{ formData.currentDateTime }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { useFormDataStore } from '@/store/formDataStore';

  export default { 
      name: 'DonationConfirmation',
      setup() {
        const formDataStore = useFormDataStore();
        const formData = formDataStore.formData;

        return {
          formData
        };
      }
  };
</script>