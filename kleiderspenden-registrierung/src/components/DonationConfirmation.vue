<template>
    <div class="container">
      <div class="row">
        <div class="col-md-10">
          <h2 class="text-center">Bestätigung</h2>
          <h3 class="text-center">Vielen Dank für deine Spende!</h3>
          <div class="mb-3">
            <p><strong>Art der Übergabe:</strong> {{ formData.collection ? 'Abholung' : '' }}{{ formData.personalDelivery ? 'Persönliche Übergabe an der Geschäftsstelle' : '' }}</p>
            <p><strong>Straße und Hausnummer:</strong> {{ formData.streedAndNumber }}</p>
            <p><strong>Stadt:</strong> {{ formData.city }}</p>
            <p><strong>Postleitzahl:</strong> {{ formData.postalCode }}</p>
            <p><strong>Art der Kleidung:</strong> {{ formData.typeOfClothe }}</p>
            <p><strong>Krisengebiet:</strong> {{ formData.crisisArea }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
    export default {
        props: ['formData'],
        name: 'DonationConfirmation'
    }
</script>