<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import Header from '@/components/Header.vue';
import TextField from '@/components/TextField.vue';
import Button from '@/components/InputButton.vue';
import '@/index.css';
import '@/utils.css';
import { formValidationStatus } from '@/helpers/formValidation';
import { useFormStore } from '@/stores/formStore';
import { initiateWebsocketConnection } from './helpers/websocket';
import { storeToRefs } from 'pinia';
import { WebSocketSubject } from 'rxjs/webSocket';

const isinNumber = ref<string>('');


const formStore = useFormStore();

const { isinNumbers } = storeToRefs(useFormStore());

const onSubmit = () => {
  // const isinNumbers = isinNumbers.value;
  if (isinNumbers.value.includes(isinNumber.value)) {
    toast.error(`${isinNumber.value} already exists`);
  } else {
    formStore.setISINNumber(isinNumber.value);
    const subject = initiateWebsocketConnection() as WebSocketSubject<any>;
    subject.subscribe();
    subject.next({subscribe: isinNumber.value});
    formStore.subscribeToISINNumber(subject);
  }
};
</script>

<template>
  <Header />
  <main class="main">
    <section class="test rounded">
      <form class="d-flex flex-col p-4" @submit.prevent="onSubmit">
        <TextField placeHolder="USXXXXX" v-model="isinNumber" type="text" label="ISIN Number" />
        <Button :disable="formValidationStatus.value">submit</Button>
      </form>
    </section>
  </main>
</template>

<style>
#app {
  font-family: var(--font-regular);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.main {
  max-width: var(--max-width);
  margin: 0 auto;
}

.heading1 {
  font-family: var(--font-bold);
}

.component-list {
  padding: 0 0 0 12px;
}
</style>
