import { defineStore } from 'pinia';

interface State {
  isinNumbers: string[];
}

export const useFormStore = defineStore('formStore', {
  state: (): State => {
    return {
      isinNumbers: []
    };
  },
  getters: {
    getISINNumbers: (state) => state.isinNumbers
  },
  actions: {
    setISINNumber(isinNumber: string) {
      this.isinNumbers.push(isinNumber);
    }
  }
});
