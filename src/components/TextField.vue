<script setup lang="ts">
import { ref } from 'vue'
import { formValidation } from '../helpers/formValidation'

defineProps<{
  label: string
  placeHolder: string
  modelValue: string | number
}>()

const isinNumber = ref<string>('')
const { validateTextField, error } = formValidation()

const validateInput = () => {
  validateTextField('isinNumber', isinNumber.value)
}
</script>
<template>
  <div class="d-flex flex-col pt-3 pb-3">
    <label class="user icon" :for="label">{{ label }}</label>
    <input
      :id="label"
      v-bind="$attrs"
      :placeholder="placeHolder"
      autocomplete="off"
      class="text-field pt-2 pb-2"
      v-model="isinNumber"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      @keyup="validateInput"
      @blur="validateInput"
    />
  </div>
  <div class="pb-3" v-if="error.message">{{ error.message }}</div>
</template>

<style lang="scss">
.text-field {
  border: none;
  border-bottom: 1px solid var(--color-foreground1);
  background: transparent;
  color: var(--color-foreground3);
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: var(--color-foreground3);
    color: var(--color-foreground3);
  }
}
</style>
