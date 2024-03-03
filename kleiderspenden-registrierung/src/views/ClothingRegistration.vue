<template>
    <div>
      <ClothingDonationForm @formSubmitted="handleFormSubmitted" v-if="!formSubmitted" />
      <DonationConfirmation :formData="formData" v-if="formSubmitted" />
    </div>
  </template>
  
  <script>
  import ClothingDonationForm from '@/components/ClothingDonationForm.vue';
  import DonationConfirmation from '@/components/DonationConfirmation.vue';
  
  export default {
    components: {
      ClothingDonationForm,
      DonationConfirmation,
    },
    data() {
      return {
        formSubmitted: false,
        formData: {}
      };
    },
    methods: {
      handleFormSubmitted(formData) {
        this.formData = formData;
        this.formSubmitted = true;
      }
    }
  };
  </script>