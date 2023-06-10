//Task 1
var car = {
    manufacturer: "Toyota",
    model: "Camry",
    year: 2022,
    averageSpeed: 60,
  
    displayInfo: function() {
      console.log("Manufacturer:", this.manufacturer);
      console.log("Model:", this.model);
      console.log("Year:", this.year);
      console.log("Average Speed:", this.averageSpeed);
    },
  
    calculateTravelTime: function(distance) {
      var travelTime = distance / this.averageSpeed;
      var restTime = Math.floor(travelTime / 4);
      var totalTravelTime = travelTime + restTime;
      console.log("Total Travel Time:", totalTravelTime.toFixed(2), "hours");
    }
  };
  
  car.displayInfo(); // Виведе інформацію про автомобіль
  car.calculateTravelTime(200); // Виведе час подолання відстані 200 км
//Task 2
var fraction = {
    numerator: 3,
    denominator: 4,
  
    add: function(otherFraction) {
      var result = {};
  
      result.numerator = this.numerator * otherFraction.denominator + otherFraction.numerator * this.denominator;
      result.denominator = this.denominator * otherFraction.denominator;
  
      return result;
    },
  
    subtract: function(otherFraction) {
      var result = {};
  
      result.numerator = this.numerator * otherFraction.denominator - otherFraction.numerator * this.denominator;
      result.denominator = this.denominator * otherFraction.denominator;
  
      return result;
    },
  
    multiply: function(otherFraction) {
      var result = {};
  
      result.numerator = this.numerator * otherFraction.numerator;
      result.denominator = this.denominator * otherFraction.denominator;
  
      return result;
    },
  
    divide: function(otherFraction) {
      var result = {};
  
      result.numerator = this.numerator * otherFraction.denominator;
      result.denominator = this.denominator * otherFraction.numerator;
  
      return result;
    },
  
    simplify: function() {
      var gcd = this.gcd(this.numerator, this.denominator);
      this.numerator = this.numerator / gcd;
      this.denominator = this.denominator / gcd;
    },
  
    gcd: function(a, b) {
      if (b === 0) {
        return a;
      }
      return this.gcd(b, a % b);
    }
  };
  
  var fraction1 = {
    numerator: 1,
    denominator: 2
  };
  
  var fraction2 = {
    numerator: 1,
    denominator: 4
  };
  
  var result = fraction.add(fraction1);
  console.log("Addition:", result.numerator + "/" + result.denominator);
  
  result = fraction.subtract(fraction1);
  console.log("Subtraction:", result.numerator + "/" + result.denominator);
  
  result = fraction.multiply(fraction1);
  console.log("Multiplication:", result.numerator + "/" + result.denominator);
  
  result = fraction.divide(fraction1);
  console.log("Division:", result.numerator + "/" + result.denominator);
  
  fraction.simplify();
  console.log("Simplified Fraction:", fraction.numerator + "/" + fraction.denominator);
//Task 3
var time = {
    hours: 20,
    minutes: 30,
    seconds: 45,
  
    displayTime: function() {
      var formattedTime = this.formatTime(this.hours) + ":" + this.formatTime(this.minutes) + ":" + this.formatTime(this.seconds);
      console.log("Current Time:", formattedTime);
    },
  
    changeSeconds: function(numSeconds) {
      this.seconds += numSeconds;
      this.normalizeTime();
    },
  
    changeMinutes: function(numMinutes) {
      this.minutes += numMinutes;
      this.normalizeTime();
    },
  
    changeHours: function(numHours) {
      this.hours += numHours;
      this.normalizeTime();
    },
  
    normalizeTime: function() {
      if (this.seconds >= 60) {
        var extraMinutes = Math.floor(this.seconds / 60);
        this.seconds %= 60;
        this.minutes += extraMinutes;
      }
  
      if (this.minutes >= 60) {
        var extraHours = Math.floor(this.minutes / 60);
        this.minutes %= 60;
        this.hours += extraHours;
      }
  
      this.hours %= 24;
    },
  
    formatTime: function(timeValue) {
      return (timeValue < 10 ? "0" : "") + timeValue;
    }
  };
  
  time.displayTime(); // Виведе поточний час
  time.changeSeconds(30); // Змінить час на 30 секунд
  time.displayTime(); // Виведе оновлений час
  time.changeMinutes(15); // Змінить час на 15 хвилин
  time.displayTime(); // Виведе оновлений час
  time.changeHours(2); // Змінить час на 2 години
  time.displayTime(); // Виведе оновлений час
  