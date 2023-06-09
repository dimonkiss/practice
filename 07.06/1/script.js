//2
function power(base, exponent) {
  return Math.pow(base, exponent);
}
//4
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  
  return true;
}
//6
function modulo(a, b) {
  while (a >= b) {
    a -= b;
  }
  return a;
}
//8
function findMax() {
  let max = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

//10
function getNextDay(day, month, year) {
  const isLeapYear = checkLeapYear(year);

  const daysInMonth = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  if (day < daysInMonth[month - 1]) {
    return `${day + 1}.${month}.${year}`;
  } else if (month < 12) {
    return `1.${month + 1}.${year}`;
  } else {
    return `1.1.${year + 1}`;
  }
}

function checkLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
