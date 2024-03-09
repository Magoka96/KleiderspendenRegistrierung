import { defineStore } from 'pinia';

export const useFormDataStore = defineStore('form', {
  state: () => ({ formData: {} }),
  
  actions: {
    setFormData(formData) {
      this.formData = formData;
    }
  }
});
