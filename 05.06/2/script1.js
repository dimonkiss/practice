// //Task 2
// let number = prompt("Введіть число від 0 до 9:");
// let symbol;

// switch (number) {
//   case "1":
//     symbol = "!";
//     break;
//   case "2":
//     symbol = "@";
//     break;
//   case "3":
//     symbol = "#";
//     break;
//     case "4":
//     symbol = ";";
//     break;
//     case "5":
//     symbol = "$";
//     break;
//     case "6":
//     symbol = ":";
//     break;
//     case "7":
//     symbol = "+";
//     break;
//     case "8":
//     symbol = "=";
//     break;
//     case "9":
//     symbol = "/";
//     break;
//     case "0":
//         symbol = "*";
//         break;
//   default:
//     symbol = "Невідомий символ";
// }

// alert(symbol);
// //TAsk 4
// let year = prompt("Введіть рік:");


// if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
//     alert("Високосний рік");
// } 
// else {
//     alert("Невисокосний рік");
// }


// //Task 6
// let amount = prompt("Введіть кількість USD:");
// let currency = prompt("Виберіть валюту для конвертації (EUR, UAN або AZN):");


// switch (currency) {
//   case "EUR":
//     alert("Конвертована сума:"+ amount * 0.9);
//     break;
//   case "UAN":
//     alert("Конвертована сума:"+ amount*27.5);
//     break;
//   case "AZN":
//     alert("Конвертована сума:"+ amount*1.7);
//     break;
//   default:
//     convertedAmount = "Невідома валюта";
// }


// //Task 8
// let circleLength = prompt("Введіть довжину кола без п:");
// let squarePerimeter = prompt("Введіть периметр квадрата:");

// let circleRadius = circleLength * Math.PI / (2 * Math.PI); 
// let squareSide = squarePerimeter / 4; 

// let circleArea = Math.PI * Math.pow(circleRadius, 2); 
// let squareArea = Math.pow(squareSide, 2); 

// if (circleArea <= squareArea) {
//   alert("Коло може поміститися в квадрат");
// } else {
//   alert("Коло не може поміститися в квадрат");
// }
//Task 10
let day = parseInt(prompt("Введіть день:"));
let month = parseInt(prompt("Введіть місяць:"));
let year1 = parseInt(prompt("Введіть рік:"));


function isLeapYear(year1) {
  return (year1 % 4 === 0 && year1 % 100 !== 0) || year1 % 400 === 0;
}


function getDaysInMonth(month, year1) {
  const daysInMonth = [31, isLeapYear(year1) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return daysInMonth[month - 1];
}


function getNextDate(day, month, year1) {
  let daysInMonth = getDaysInMonth(month, year1);

  if (day < 1 || day > daysInMonth) {
    return "Некоректна дата";
  }

  day++;

  if (day > daysInMonth) {
    day = 1;
    month++;
  }

  if (month > 12) {
    month = 1;
    year1++;
  }

  return `${day}.${month}.${year1}`;
}

let nextDate = getNextDate(day, month, year1);
alert("Наступна дата:"+ nextDate);


