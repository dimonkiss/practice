//Task 1
class Circle {
    constructor(radius) {
      this._radius = radius;
    }
  
    get radius() {
      return this._radius;
    }
  
    set radius(value) {
      if (value >= 0) {
        this._radius = value;
      } else {
        console.error("Радіус повинен бути не від'ємним!");
      }
    }
  
    get diameter() {
      return this._radius * 2;
    }
  
    calculateArea() {
      return Math.PI * this._radius ** 2;
    }
  
    calculateCircumference() {
      return 2 * Math.PI * this._radius;
    }
  }
  
 
  const myCircle = new Circle(5);
  console.log("Радіус:", myCircle.radius);
  console.log("Діаметр:", myCircle.diameter);
  console.log("Площа:", myCircle.calculateArea());
  console.log("Довжина:", myCircle.calculateCircumference());
  
  myCircle.radius = 7;
  console.log("Новий радіус:", myCircle.radius);
  console.log("Новий діаметр:", myCircle.diameter);
  console.log("Нова площа:", myCircle.calculateArea());
  console.log("Нова довжина:", myCircle.calculateCircumference());
