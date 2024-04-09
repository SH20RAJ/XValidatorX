# XValidatorX

[![npm version](https://img.shields.io/npm/v/xvalidatorx.svg)](https://www.npmjs.com/package/xvalidatorx)
[![GitHub issues](https://img.shields.io/github/issues/SH20RAJ/XValidatorX)](https://github.com/SH20RAJ/XValidatorX/issues)
[![GitHub stars](https://img.shields.io/github/stars/SH20RAJ/XValidatorX)](https://github.com/SH20RAJ/XValidatorX/stargazers)
[![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2FSH20RAJ%2FXValidatorX%2F&labelColor=%23f47373&countColor=%232ccce4&style=flat)](https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2FSH20RAJ%2FXValidatorX%2F)
[![Twitter Follow](https://img.shields.io/twitter/follow/SH20RAJ.svg?style=social)](https://twitter.com/SH20RAJ)

A comprehensive validation library for common data validation tasks.

## Installation

You can install `XValidatorX` via npm:

```bash
npm install xvalidatorx
```

Or include it via CDN:

```html
<!-- Latest release -->
<script src="https://cdn.jsdelivr.net/gh/SH20RAJ/XValidatorX@latest/xvalidatorx.js"></script>

<!-- <script src="https://cdn.jsdelivr.net/npm/xvalidatorx"></script> -->



<!-- Specific version (replace '1.0.0' with the desired version) -->
<!-- <script src="https://cdn.jsdelivr.net/npm/xvalidatorx@1.0.0"></script> -->
```

## Usage

Here's an example of how you can use `XValidatorX`:

```javascript
const XValidatorX = require('xvalidatorx');

console.log(XValidatorX.isEmail('test@example.com')); // true
console.log(XValidatorX.isURL('https://www.example.com')); // true
// More examples...
```

## Features

- **isEmail(email)**: Checks if a string is a valid email address.
- **isURL(url)**: Checks if a string is a valid URL.
- **isNotEmptyString(str)**: Checks if a string is not empty.
- **isPalindrome(str)**: Checks if a string is a palindrome.
- **isWithinRange(num, min, max)**: Checks if a number is within a specified range.
- **isInArray(value, array)**: Checks if a value exists in an array.
- **isUUID(uuid)**: Checks if a string is a valid UUID.
- **isHexColor(color)**: Checks if a string is a valid HEX color.
- **isDateYYYYMMDD(dateString)**: Checks if a string is a valid date in the format `YYYY-MM-DD`.
- **isCreditCard(cardNumber)**: Checks if a string is a valid credit card number.
- **isPhoneNumber(phone)**: Checks if a string is a valid phone number.
- **isPostalCode(postalCode, countryCode)**: Checks if a string is a valid postal code.
- **isStrongPassword(password)**: Checks if a string is a strong password.
- **isAlpha(str)**: Checks if a string contains only alphabetic characters.
- **isAlphanumeric(str)**: Checks if a string contains only alphanumeric characters.
- **isNumeric(str)**: Checks if a string contains only numeric characters.

### Usage via CDN

You can also use `XValidatorX` directly in the browser via CDN:

```html
<!-- Latest release -->
<script src="https://cdn.jsdelivr.net/npm/xvalidatorx"></script>

<!-- Specific version (replace '1.0.0' with the desired version) -->
<!-- <script src="https://cdn.jsdelivr.net/npm/xvalidatorx@1.0.0"></script> -->
```

### Documentation

#### isEmail(email)

Checks if a string is a valid email address.

**Parameters:**
- `email`: String - The email address to validate.

**Example:**
```javascript
const isValidEmail = XValidatorX.isEmail('test@example.com');
console.log(isValidEmail); // true
```

#### isURL(url)

Checks if a string is a valid URL.

**Parameters:**
- `url`: String - The URL to validate.

**Example:**
```javascript
const isValidURL = XValidatorX.isURL('https://www.example.com');
console.log(isValidURL); // true
```

#### isNotEmptyString(str)

Checks if a string is not empty.

**Parameters:**
- `str`: String - The string to check.

**Example:**
```javascript
const isValid = XValidatorX.isNotEmptyString('Hello');
console.log(isValid); // true
```

<!-- #### More Methods...

You can find detailed examples and parameters for all methods in the XValidatorX Documentation. -->

## Issues

If you encounter any issues or have suggestions, please feel free to [open an issue on GitHub](https://github.com/SH20RAJ/XValidatorX/issues).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.