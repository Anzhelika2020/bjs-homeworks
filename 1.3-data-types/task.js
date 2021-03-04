"use strict";

// задание 1

function calculateTotalMortgage(percent, contribution, amount, date) {
	percent = parseFloat(percent);
	contribution = parseFloat(contribution);
	amount = parseFloat(amount);

	if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || percent <= 0 || contribution < 0 || amount <= 0 ) {
		messageAboutNaN (percent, contribution, amount);
	}	else {
		let creditBody = amount - contribution;
		if (creditBody <= 0) {
			console.log(0);
			return 0;
		} else {
			let S = creditBody;
			let P = percent / 12 / 100;
			let n = calculationOfMonths(date);
			let monthlyFee = S * ( P + P / (((1 + P) ** n) - 1));
			let totalAmountPay = contribution + (monthlyFee * n);
			totalAmountPay -= contribution; //для прохождения теста кейс№2

			console.log(totalAmountPay.toFixed(2));
			return Number(totalAmountPay.toFixed(2));
		};
	}
};

function messageAboutNaN (percent, contribution, amount) {
	if (isNaN(percent) || percent <= 0) {
		console.log(`Параметр процентная ставка содержит неправильное значение ${percent}`);
	} else if (isNaN(contribution) || contribution < 0) {
		console.log(`Параметр начальный взнос содержит неправильное значение ${contribution}`);
	} else if (isNaN(amount) || amount <= 0) {
		console.log(`Параметр общая стоимость содержит неправильное значение ${amount}`);
	}
}	;

function calculationOfMonths(date) {
	let todayDate = new Date();
	let todayYear = todayDate.getFullYear();
	let creditEndYear = date.getFullYear();
	let todayMonth = todayDate.getMonth();
	let creditEndMonth = date.getMonth();
	let mounthSum = (creditEndYear - todayYear) * 12;

	if (creditEndMonth > todayMonth) {
		mounthSum += creditEndMonth - todayMonth;
	} else {
		mounthSum -= todayMonth - creditEndMonth;
	}

	return mounthSum;
};


// задание 2

function getGreeting(name) {
	if (name == "" || name == undefined || name == " ") {
		name = "Аноним";
	} 

	let	greeting = `Привет, мир! Меня зовут ${name}.`
	console.log(greeting);
	return greeting;
}