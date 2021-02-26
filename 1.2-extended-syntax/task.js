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


function getAverageMark(marks){
		// код для задачи №2 писать здесь
		// return averageMark;
}

function askDrink(name,dateOfBirthday){
		// код для задачи №3 писать здесь
		// return result;
}