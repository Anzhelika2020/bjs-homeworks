'use strict'

//задача 1

String.prototype.isPalindrome = function isPalindrome() {
	let string = this.toLowerCase().replace(/\s+/g, "").split("");
  return string.join("") === string.reverse().join("");
}

"А роза упала на лапу Азора".isPalindrome();

//задача 2

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}