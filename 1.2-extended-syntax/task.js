"use strict";

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
		alert("Оценок нет.");
    return 0;
  } else if (marks.length > 5) {
		alert("Подсчет будет произведен только по первым 5 оценкам");
		let marks2 = marks.slice(0, 5);
    averageMark = calcSumMarks(marks2) / 5;
	}
	return Math.round(averageMark);
}


function askDrink(name,dateOfBirthday){
		// код для задачи №3 писать здесь
		// return result;
}