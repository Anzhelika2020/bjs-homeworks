"use strict";

// Задание 1

function getSolutions(a, b, c) {
  let D = (b ** 2) - (4 * a * c);

  if (D < 0) {
    return {
      D,
      roots: []
    };
  } else if (D === 0) {
    let x1 = (-b) / (2 * a);
    return {
      D,
      roots: [x1]
    };
  } else if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    return {
      D,
      roots: [x1, x2]
    };
  };
};

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);

  let messages = {
    message1: `Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`,
    message2: `Значение дискриминанта: ${result.D}`
  };

  if (result.D < 0) {
    messages.message3 = `Уравнение не имеет вещественных корней`;
  } else if (result.D === 0) {
    messages.message3 = `Уравнение имеет один корень X₁ = ${result.roots[0]}`;
  } else if (result.D > 0) {
    messages.message3 = `Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`;
  };

  return `${messages.message1} \n${messages.message2} \n${messages.message3}`;
};

console.log(showSolutionsMessage(7, 20, -3));

