//1
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
//2
function printNumbersForward(start, end) {
    if (start <= end) {
      console.log(start);
      printNumbersForward(start + 1, end);
    }
  }
//2.1
function printNumbersBackward(start, end) {
    if (end >= start) {
      console.log(end);
      printNumbersBackward(start, end - 1);
    }
  }

//3
function reverseNumber(number) {
    if (number < 10) {
      return number;
    } else {
      const lastDigit = number % 10;
      const remainingNumber = Math.floor(number / 10);
      const digitsCount = Math.floor(Math.log10(number)) + 1;
      return lastDigit * Math.pow(10, digitsCount - 1) + reverseNumber(remainingNumber);
    }
  }
//4
function sumOfDigits(number) {
    if (number < 10) {
      return number;
    } else {
      const lastDigit = number % 10;
      const remainingNumber = Math.floor(number / 10);
      return lastDigit + sumOfDigits(remainingNumber);
    }
  }
//5
function generateParenthesesPairs(n) {
    if (n === 0) {
      return "";
    } else {
      return "(" + generateParenthesesPairs(n - 1) + ")";
    }
  }  
