import { defineStore } from 'pinia';

export const useFormDataStore = defineStore('form', {
    state: () => ({ 
        formData: {},
        formSubmitted: false,
    }),
  
    actions: {
        setFormData(formData) {
            this.formData = formData;
        },
        markFormSubmitted() {
            this.formSubmitted = true;
        }
    }
});
