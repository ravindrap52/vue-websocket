import { defineStore } from 'pinia';
import type { WebSocketSubject } from 'rxjs/webSocket';
import { reactive, ref } from 'vue';

export const useFormStore = defineStore('formStore', () => {
  const isinNumbers = ref<string[]>([]);
  const mySubscriptions = reactive<{
    [key: string]: {
      isin: string;
      bid: number;
      price: number;
      ask: number;
    }[];
  }>({});
  return {
    isinNumbers,
    setISINNumber(_isinNumber: string) {
      isinNumbers.value.push(_isinNumber);
    },
    subscribeToISINNumber(subject: WebSocketSubject<any>) {
      subject.subscribe({
        next: (data) => {
          console.log(data);
          mySubscriptions[data.isin].push({
            isin: data.isin,
            bid: data.bid,
            price: data.price,
            ask: data.ask
          });
        }
      });
    }
  };
});
