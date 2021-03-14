"use strict";

//задача 1

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = String(name);
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

/*
проверка

const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

console.log(sherlock.releaseDate); //2019

console.log(sherlock.state); //100

sherlock.fix();

console.log(sherlock.state); //100
*/

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

/*
проверка

const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;

console.log(picknick.state); //10

picknick.fix();

console.log(picknick.state); //15
*/


// Задача 2

class Library {
	constructor(name) {
		this.name = String(name);
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		};	
	}

	findBookBy(type, value) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i][type] === value) {
				return this.books[i];
			};
		};

		return null;
	};


	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i]["name"] === bookName) {
				return this.books.splice(i, 1)[0];
			};
		};

		return null;
	};
};

/*
проверка:

const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));

library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));

library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));

library.addBook(new Magazine("Мурзилка", 1924, 60));

library.addBook(new FantasticBook("какой-то автор", "какая-то книга", 1919, 60));

console.log (library.books);

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 5

let giveBook = library.giveBookByName("какая-то книга");

console.log(giveBook);

console.log (library.books);

console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 4

giveBook.state = 50;

console.log(giveBook.state); 

console.log(giveBook);

giveBook.fix();

console.log(giveBook.state); 

console.log(giveBook);

let newBook;

library.addBook(newBook = giveBook);

console.log (library.books);

console.log("Количество книг после возврата: " + library.books.length); //Количество книг после возврата: 5

*/


// Задача 3

