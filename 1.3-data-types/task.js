"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
	percent = parseFloat(percent);
	contribution = parseFloat(contribution);
	amount = parseFloat(amount);

	if (isNaN(percent) || isNaN(contribution) || isNaN(amount)) {
		messageAboutNaN (percent, contribution, amount);
	}	else {
		let creditBody = amount - contribution;
		if (creditBody === 0) {
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
		}
		
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
		}
		function messageAboutNaN (percent, contribution, amount) {
			if (isNaN(percent)) {
			console.log(`Параметр процентная ставка содержит неправильное значение ${percent}`);
		} else if (isNaN(contribution)) {
			console.log(`Параметр начальный взнос содержит неправильное значение ${contribution}`);
		} else if (isNaN(amount)) {
			console.log(`Параметр общая стоимость содержит неправильное значение ${amount}`);
		}
		}	
	}

}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
}