 // Usage example
import XValidatorX from './xvalidatorx.mjs';
// const XValidatorX = require('./xvalidatorx.js');

console.log(XValidatorX.isEmail('test@example.com')); // true
console.log(XValidatorX.isURL('https://www.example.com')); // true
console.log(XValidatorX.isNotEmptyString('Hello')); // true
console.log(XValidatorX.isPalindrome('A man, a plan, a canal, Panama')); // true

console.log(XValidatorX.isWithinRange(5, 1, 10)); // true
console.log(XValidatorX.isInArray('apple', ['banana', 'apple', 'orange'])); // true
console.log(XValidatorX.isUUID('123e4567-e89b-12d3-a456-426614174000')); // true
console.log(XValidatorX.isHexColor('#ffcc00')); // true

console.log(XValidatorX.isDateYYYYMMDD('2024-04-09')); // true
console.log(XValidatorX.isCreditCard('4111-1111-1111-1111')); // true
console.log(XValidatorX.isPhoneNumber('+1234567890')); // true
console.log(XValidatorX.isPostalCode('12345')); // true
console.log(XValidatorX.isStrongPassword('Password1!')); // true
console.log(XValidatorX.isAlpha('abcdefghijklmnopqrstuvwxyz')); // true
console.log(XValidatorX.isAlphanumeric('abc123')); // true
console.log(XValidatorX.isNumeric('12345')); // true
