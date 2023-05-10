import { computed, ref } from 'vue';
import { isStringEmpty, minLength, isValidISINNumber } from '@/helpers/validators';
import { errorTypes } from '@/types/errorTypes';

interface IError {
  message: string;
}

interface IValidationFields {
  fieldName: string;
  fieldValue: string;
}

const isFormValid = ref<boolean>(false);
 
export const formValidation = ({ fieldName, fieldValue }: IValidationFields) => {
  
  const error: IError = {
    message: ''
  };
  if (isStringEmpty(fieldValue)) {
    error.message = errorTypes.stringEmpty(fieldName);
  } else if (minLength(fieldValue, 12)) {
    error.message = errorTypes.minLength(fieldName, 12);
  } else if (!isValidISINNumber(fieldValue)) {
    error.message = errorTypes.notValidISINNumber();
  } else {
    isFormValid.value = true;
    error.message = '';
  }
  return {
    error,
    isFormValid
  };
};

export const formValidationStatus = computed(() => {
  return isFormValid;
})