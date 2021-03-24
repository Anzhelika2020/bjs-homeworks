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
  return arr1.length === arr2.length && arr1.every((value, i) => value === arr2[i]);
 };


function memorize(fn, limit) {
  let memory = [];

  return function mSum(...args) {
    let memo = memory.find(element => compareArrays(element.args, args));

    if (memo) {
      return memo.result;
    };
    
    let result = fn(...args);

    memory.push({
      args,
      result
    });

    if (memory.length > limit) {
      memory.shift();
    };
    
    return result;
  };
};