const XValidatorX = {
    // Basic email validation
    isEmail: function(email) {
      const emailRegex = /\S+@\S+\.\S+/;
      return emailRegex.test(email);
    },
  
    // Basic URL validation
    isURL: function(url) {
      const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
      return urlRegex.test(url);
    },
  
    // Basic check for a non-empty string
    isNotEmptyString: function(str) {
      return typeof str === 'string' && str.trim() !== '';
    },
  
    // Custom method to check if a string is a palindrome
    isPalindrome: function(str) {
      const cleanStr = str.toLowerCase().replace(/[\W_]/g, '');
      const reversed = cleanStr.split('').reverse().join('');
      return cleanStr === reversed;
    },
  
    // Method to check if a number is within a range
    isWithinRange: function(num, min, max) {
      return num >= min && num <= max;
    },
  
    // Method to check if a value is in an array
    isInArray: function(value, array) {
      return array.includes(value);
    },
  
    // Method to check if a string is a valid UUID
    isUUID: function(uuid) {
      const uuidRegex = /^[a-f\d]{8}-[a-f\d]{4}-[a-f\d]{4}-[a-f\d]{4}-[a-f\d]{12}$/i;
      return uuidRegex.test(uuid);
    },
  
    // Method to check if a string is a valid HEX color
    isHexColor: function(color) {
      const hexColorRegex = /^#?([0-9A-F]{3}){1,2}$/i;
      return hexColorRegex.test(color);
    },
  
    // Method to check if a string is a valid date in format YYYY-MM-DD
    isDateYYYYMMDD: function(dateString) {
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (!dateRegex.test(dateString)) return false;
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return (
        year.toString() === dateString.substring(0, 4) &&
        month.toString().padStart(2, '0') === dateString.substring(5, 7) &&
        day.toString().padStart(2, '0') === dateString.substring(8, 10)
      );
    },
  
    // Method to check if a string is a valid credit card number
    isCreditCard: function(cardNumber) {
      // Accepts only digits, dashes or spaces
      if (!/^[0-9 \-]+$/.test(cardNumber)) return false;
  
      // Remove dashes and spaces
      const cleaned = cardNumber.replace(/[\s\-]/g, '');
  
      // Check if the cleaned number is a valid Luhn algorithm number
      let sum = 0;
      let doubleUp = false;
      for (let i = cleaned.length - 1; i >= 0; i--) {
        let digit = parseInt(cleaned.charAt(i), 10);
        if (doubleUp) {
          digit *= 2;
          if (digit > 9) digit -= 9;
        }
        sum += digit;
        doubleUp = !doubleUp;
      }
      return sum % 10 === 0;
    },
  
    // Method to check if a string is a valid phone number
    isPhoneNumber: function(phone) {
      const phoneRegex = /^\+?([0-9]\d{1,14})$/;
      return phoneRegex.test(phone);
    },
  
    // Method to check if a string is a valid postal code
    isPostalCode: function(postalCode, countryCode = 'US') {
      let regex;
      switch (countryCode.toUpperCase()) {
        case 'US':
          regex = /^\d{5}(?:[-\s]\d{4})?$/;
          break;
        case 'CA':
          regex = /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ][ -]?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i;
          break;
        default:
          // Default to US postal code format
          regex = /^\d{5}(?:[-\s]\d{4})?$/;
      }
      return regex.test(postalCode);
    },
  
    // Method to check if a string is a valid password with specific criteria
    isStrongPassword: function(password) {
      // At least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return passwordRegex.test(password);
    },
  
    // Method to check if a string contains only alphabetic characters
    isAlpha: function(str) {
      return /^[a-zA-Z]+$/.test(str);
    },
  
    // Method to check if a string contains only alphanumeric characters
    isAlphanumeric: function(str) {
      return /^[a-zA-Z0-9]+$/.test(str);
    },
  
    // Method to check if a string contains only numeric characters
    isNumeric: function(str) {
      return /^[0-9]+$/.test(str);
    }
  };
  
  // Export the object if in a Node.js environment
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = XValidatorX;
  }

  export default XValidatorX;
  