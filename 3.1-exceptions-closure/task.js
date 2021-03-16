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
  conctructor(a, b, c) {
    if (a + b < c || a + c < b || b + c < a) {
      throw new Error ("Треугольник с такими сторонами не существует");
    }
  };

  getPerimeter() {

  };

  getArea() {

  };


};
