/**
 * Check if string is empty or not.
 * @param {string} stringValue - some string value.
 * @returns {boolean}  True if string is empty, false otherwise.
 */
export const isStringEmpty = (stringValue: string): boolean => {
  return !stringValue ? true : false;
};

/**
 * Check for the minimun length of the string.
 * @param {string} stringValue - some string value.
 * @param {number} minimum - minimum number.
 * @returns {boolean}  True if the string length is less than the minimum number, false otherwise.
 */
export const minLength = (stringValue: string, minimum: number): boolean => {
  return stringValue.length < minimum;
};

/**
 * Validate the ISINNUmber.
 * @param {string} stringValue - some string value.
 * @returns {boolean}  True if the regex pattern matched, false otherwise.
 */
export const isValidISINNumber = (stringValue: string): boolean => {
  const regex = /^([A-Z]{2})([A-Z0-9]{9})([0-9]{1})$/;
  return regex.test(stringValue);
};
