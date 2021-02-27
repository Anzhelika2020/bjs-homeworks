"use strict";

// Задание 1
function getResult(a, b, c) {
	let D = (b ** 2) - (4 * a * c);

	if (D < 0) {
		return [];
	} else if (D === 0) {
		let x1 = (-b) / (2 * a);
		return [x1];
	} else if (D > 0) {
		let x1 = (-b + Math.sqrt(D)) / (2 * a);
		let x2 = (-b - Math.sqrt(D)) / (2 * a);
		return [x1, x2];
	}
}

// Задание 2
function getAverageMark(marks) {
	let averageMark = calcSumMarks(marks) / marks.length;
  
	function calcSumMarks(marks) {
		let sumMarks = 0;
		for (let i = 0; i < marks.length; i++) {
			sumMarks += marks[i];
		}
		return sumMarks;
	} 
  
  if (marks.length === 0) {
    return 0;
  } else if (marks.length > 5) {
		console.log("Подсчет будет произведен только по первым 5 оценкам");
		let marks2 = marks.slice(0, 5);
    averageMark = calcSumMarks(marks2) / 5;
	}
	return Math.round(averageMark);
}

// Задание 3
function askDrink(name, dateOfBirthday){
	let result;
	let todayDate = new Date();
	let todayYear = todayDate.getFullYear();
	let birthYear = dateOfBirthday.getFullYear();
	let todayMonth = todayDate.getMonth();
	let birthMonth = dateOfBirthday.getMonth();
	let todayDay = todayDate.getDate();
	let birthDay = dateOfBirthday.getDate();

	if (ageCalculation (todayYear, todayMonth, todayDay, birthYear, birthMonth, birthDay) >= 18) {
		result = `Не желаете ли олд-фэшн, ${name}?`;
	} else {
		result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
	}

	function ageCalculation (todayYear, todayMonth, todayDay, birthYear, birthMonth, birthDay) {
		let age = todayYear - birthYear;
		if (todayMonth < birthMonth) {
			age = age - 1;
		} else if (todayMonth === birthMonth && birthDay < todayDay) {
			age = age - 1;
		}
		return age;
	}

	return result;
}