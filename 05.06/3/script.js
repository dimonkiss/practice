// //Task 2
// let num1 = parseInt(prompt("Введіть перше число:"));
// let num2 = parseInt(prompt("Введіть друге число:"));
// let gcd = 1;

// for (let i = 1; i <= num1 && i <= num2; i++) {
//   if (num1 % i === 0 && num2 % i === 0) {
//     gcd = i;
//   }
// }

// alert("Найбільший спільний дільник: " + gcd);
// //Task 4
// let number = parseInt(prompt("Введіть число:"));
// let count = 0;

// while (number !== 0) {
//   number = Math.floor(number / 10);
//   count++;
// }

// alert("Кількість цифр у числі: " + count);
// //Task 6
// let answer;

// do {
//   let num1 = parseInt(prompt("Введіть перше число:"));
//   let num2 = parseInt(prompt("Введіть друге число:"));
//   let operator = prompt("Введіть знак (+, -, *, /):");
//   let result;

//   switch (operator) {
//     case "+":
//       result = num1 + num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "*":
//       result = num1 * num2;
//       break;
//     case "/":
//       result = num1 / num2;
//       break;
//     default:
//       alert("Невірний знак!");
//       continue; // Перехід до наступної ітерації циклу
//   }

//   alert("Результат: " + result);
//   answer = prompt("Бажаєте розв'язати ще один приклад? (Так/Ні)").toLowerCase();
// } while (answer === "так");
//Task 8
let daysOfWeek = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
let index = 0;
let answer1 = "так";

while (answer1.toLowerCase() === "так") {
  alert("День тижня: " + daysOfWeek[index]);

  answer1 = prompt("Бажаєте побачити назву наступного дня тижня? (Так/Ні)");
  index = (index + 1) % daysOfWeek.length;
}
//Task 10
let secretNumber = Math.floor(Math.random() * 101); // Загадане число від 0 до 100
let attempts = 0;
let guess;

alert("Вгадайте число від 0 до 100.");

while (guess !== secretNumber) {
  guess = parseInt(prompt("Ваш варіант:"));
  attempts++;

  if (guess < secretNumber) {
    alert("Більше.");
  } else if (guess > secretNumber) {
    alert("Менше.");
  }
}

alert("Ви вгадали число " + secretNumber + " за " + attempts + " спроб(и).");


