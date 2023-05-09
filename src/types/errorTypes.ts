export const errorTypes = {
  stringEmpty: (fieldName: string): string => {
    return `The ${fieldName} is required`
  },
  minLength: (fieldName: string, min: number): string => {
    return `The ${fieldName} should be minimum ${min} characters`
  },
  notValidISINNumber: (): string => {
    return `Not a valid ISINNumber`
  }
}
