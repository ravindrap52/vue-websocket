import { defineStore } from 'pinia';
import { ref } from 'vue';



export const useFormStore = defineStore('formStore', () => {
  const isinNumbers = ref<string[]>([]);
  return {
    isinNumbers,
    setISINNumber(_isinNumber: string) {
      isinNumbers.value.push(_isinNumber);
    }
  }
});