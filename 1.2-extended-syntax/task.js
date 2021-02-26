"use strict";

function getResult(a, b, c) {
	let A = a; 
	let B = b; 
	let C = c;
	let D = (B ** 2) - (4 * A * C);

	if (D < 0) {
		return [];
	} else if (D === 0) {
		let x1 = (-B) / (2 * A);
		return [x1];
	} else if (D > 0) {
		let x1 = (-B + Math.sqrt(D)) / (2 * A);
		let x2 = (-B - Math.sqrt(D)) / (2 * A);
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
    return 0;
  } else if (marks.length <= 5) {
    return Math.round(averageMark);
	} else if (marks.length > 5) {
		let marks2 = marks.slice(0, 5);
    averageMark = calcSumMarks(marks2) / 5;
		return Math.round(averageMark);
	}
}

function askDrink(name,dateOfBirthday){
		// код для задачи №3 писать здесь
		// return result;
}