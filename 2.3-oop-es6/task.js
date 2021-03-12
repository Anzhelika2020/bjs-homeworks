"use strict";

//задача 1

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	};

	fix() {
		this.state = this.state * 1.5;
	};

	set state(status) {
		if (status < 0) {
			this._state = 0;
		} else if (status > 100) {
			this._state = 100;
		} else {
			this._state = status;
		};
	};

	get state() {
		return this._state;
	};
};

const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100


class Magazine extends PrintEditionItem {
	constructor (name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	};
};

class Book extends PrintEditionItem {
	constructor (author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "book";
		this.author = author;
	};
};

class NovelBook extends Book {
	constructor (author, name, releaseDate, pagesCount)  {
		super(author, name, releaseDate, pagesCount) ;
		this.type = "novel";
	};
};

class FantasticBook extends Book {
	constructor (author, name, releaseDate, pagesCount)  {
		super(author, name, releaseDate, pagesCount) ;
		this.type = "fantastic";
	};
};

class DetectiveBook extends Book {
	constructor (author, name, releaseDate, pagesCount)  {
		super(author, name, releaseDate, pagesCount) ;
		this.type = "detective";
	};
};

const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15

// Задача 2




