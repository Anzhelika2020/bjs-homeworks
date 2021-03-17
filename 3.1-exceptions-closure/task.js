"use strict";

//Задача 1

function parseCount(value) {
  let parsedValue = Number.parseInt(value);

  if (isNaN(parsedValue)) {
    throw new Error ("Невалидное значение");
  };

  return parsedValue;
};

function validateCount(value) {
  try {
    return parseCount(value);

  } catch(error) {
    return error;
  };
};



//Задача 2

class Triangle {
  constructor(a, b, c) {

    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0 || (a + b) < c || (a + c) < b || (b + c) < a) {
      throw new Error ("Треугольник с такими сторонами не существует");
    }

    this.a = a;
    this.b = b;
    this.c = c;
  };

  getPerimeter() {
    return this.a + this.b + this.c;
  };

  getArea() {
    let p = (1 / 2) * (this.a + this.b + this.c);

    let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return +area.toFixed(3);
  };
};


function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);

  } catch { 
    let err = "Ошибка! Треугольник не существует";

    return {
      getPerimeter() {
        return err;
      },

      getArea() {
      return err
      }
    };
  };
}
