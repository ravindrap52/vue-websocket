import { reactive } from 'vue'
import { isStringEmpty, minLength, isValidISINNumber } from './validators'
import { errorTypes } from '@/types/errorTypes'

interface validationObject {
  validateTextField: (fieldName: string, fieldValue: string) => void
  error: IError
}
interface IError {
  message: string
  isFormValid: boolean
}

export const formValidation = (): validationObject => {
  const error: IError = reactive({
    message: '',
    isFormValid: false
  })
  const validateTextField = (fieldName: string, fieldValue: string) => {
    if (isStringEmpty(fieldValue)) {
      error.message = errorTypes.stringEmpty(fieldName)
    } else if (minLength(fieldValue, 12)) {
      error.message = errorTypes.minLength(fieldName, 12)
    } else if (!isValidISINNumber(fieldValue)) {
      error.message = errorTypes.notValidISINNumber()
    } else {
      error.isFormValid = true
      error.message = ''
    }
  }
  return {
    error,
    validateTextField
  }
}
