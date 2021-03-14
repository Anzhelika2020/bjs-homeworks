'use strict'

//задача 1

String.prototype.isPalindrome = function isPalindrome() {
	let string = this.toLowerCase().replace(/\s+/g, "").split("");	
	return string.join("") === string.reverse().join("");
}

"А роза упала на лапу Азора".isPalindrome();

//задача 2

function getAverageMark(marks) {
	let averageMark;

	if (marks.length === 0) {
		return 0;
  } else {
		let sumMarks = 0;
		for (let i = 0; i < marks.length; i++) {
			sumMarks += marks[i];
		};
		averageMark = sumMarks / marks.length;
		const roundedAverage = Math.round(averageMark);
		return roundedAverage;
	};
}

//задача 3

/*
Два варианта решения
1 вариант по заданию через миллисекунды

function checkBirthday(birthday) {
	let now = Date.now();
	birthday = +new Date(birthday);	//или const parsedBirthday = new Date(birthday).getTime();
	let diff = now - birthday;
	let age = diff / (365.25 * 24 * 60 * 60 * 1000);
	return age >= 18;
}
*/

//2 вариант более точный
function checkBirthday(birthday) {
	let now = new Date();
	birthday = new Date(birthday);
	//или лучше было сделать так 
	//const parsedBirthday = new Date(birthday);

	let age = now.getFullYear() - birthday.getFullYear();
		if (now.getMonth() < birthday.getMonth()) {
			age = age - 1;
		} else if (now.getMonth() === birthday.getMonth() && birthday.getDate() < now.getDate()) {
			age = age - 1;
		};
	return age >= 18;
}