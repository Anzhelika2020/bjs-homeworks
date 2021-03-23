"use strict";

// Задание 2

function sleep(milliseconds) {
  // функция замедления на половину секунды.
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
};


function sum(...args) {
  // Замедление на половину секунды.
  sleep(100);
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
};

function compareArrays(arr1, arr2 ) {
  // сравнение массивов
  if (arr1.length === arr2.length) {
    //запускаем проверку для каждого элемента
    return arr1.every(compare); 

  } else {
    return false;
  };

  //функция проверки получает значение элемента массива из метода every
  function compare(value) {
    let index = arr1.indexOf(value);
    return value === arr2[index];
  };
};

function memorize(sum, limit) {
  let memory = [];

  return function mSum(...args) {

    let memo = memory.find(element => compareArrays(element.args, args));

    if (memo !== undefined) {
      return memo.result;

    } else {
      let result = sum(...args);

      memory.push({
        args,
        result
      });

      if (memory.length > limit) {
        memory.shift();
      };
      
      return result;
    }
  };
};