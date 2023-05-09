export const isStringEmpty = (stringValue: string): boolean => {
  return !stringValue ? true : false
}

export const minLength = (fieldValue: string, min: number): boolean => {
  return fieldValue.length < min
}

export const isValidISINNumber = (fieldValue: string): boolean => {
  const regex = /^([A-Z]{2})([A-Z0-9]{9})([0-9]{1})$/
  return regex.test(fieldValue)
}
