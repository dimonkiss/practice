// Task 2
const currentYear = 2023; 
var birthYear = prompt("Введіть рік свого народження:");
var age = currentYear - birthYear;
alert("Вам " + age + " років.");

// Task 4
var radius = prompt("Введіть радіус кола:");
var area = Math.PI * radius * radius;
alert("Площа кола: " + area.toFixed(2));

// Task 6
const exchangeRate = 0.85; 
var dollars = prompt("Введіть суму в доларах:");
var euros = dollars * exchangeRate;
alert("Отримаєте " + euros.toFixed(2) + " євро.");

// Task 8
var walletMoney = prompt("Введіть суму грошей у гаманці:");
var chocolatePrice = prompt("Введіть вартість однієї шоколадки:");
var chocolates = Math.floor(walletMoney / chocolatePrice);
var change = walletMoney % chocolatePrice;
alert("Ви можете купити " + chocolates + " шоколадок, а решта у вас залишиться " + change + " гривень.");
// Task 10
var number = prompt("Введіть ціле число:");
var isEven = number % 2 === 0;

var result = isEven ? "Парне" : "Непарне";
alert(result);
