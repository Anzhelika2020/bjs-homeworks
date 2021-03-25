"use strict";

class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  };

  addClock(time, callback, id) {
    //добавляет новый звонок в коллекцию существующих.
    if (id === undefined) {
      throw new Error('параметр ID не передан');

    } else if (this.alarmCollection.some(elem => elem.id === id)) {
      console.error("такой звонок уже существует");

      return;
    };

    return this.alarmCollection.push ({
      id,
      time,
      callback
    });
  };

  removeClock(id) {
    //удаляет определённый звонок.
    let indexFind = this.alarmCollection.findIndex(elem => elem.id === id);

    if(indexFind !== -1) {
      this.alarmCollection.splice(indexFind, 1);
    };

    return this.alarmCollection.some(elem => elem.id !== id);
  };

  getCurrentFormattedTime(ifAddHours = 0, ifAddMinutes = 0) {
    //без указания параметров возвращает текущее время в строковом формате HH:MM 
    //!для тестовой функции с параметрами + к текущему времени
    let hours = new Date().getHours() + ifAddHours;
    let minutes = new Date().getMinutes() + ifAddMinutes;

    if (hours < 10) {
      hours = `0${hours}`;
    };

    if (minutes < 10) {
      minutes = `0${minutes}`;
    };

    return `${hours}:${minutes}`;
  };

  start() {
    //запускает все звонки
    if (this.timerId === null) {
      this.timerId = setInterval(() => this.alarmCollection.forEach(checkClock), 1000);//стрелочная функция берет this из своего замыкания
    };
 
    let checkClock = call => {//стрелочная ф-я для доступа к this из замыкания
      if (call.time === this.getCurrentFormattedTime()) {
        return call.callback();
      };
    };
  };

  stop() {
    //останавливает выполнение всех звонков
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  };

  printAlarms() {
    // печатает все звонки
    this.alarmCollection.forEach(call => console.log(`звонок в ${call.time}, id: ${call.id}`));
  };

  clearAlarms() {
    //удаляет все звонки
    clearInterval(this.timerId);

    this.alarmCollection.splice(0);
  };

};

testCase();

function testCase() {
  let clock = new AlarmClock();

  clock.addClock(clock.getCurrentFormattedTime(), () => {
    console.log('пора вставать');
  }, 5);

  clock.addClock(clock.getCurrentFormattedTime(0, 1), () => {
    console.log('пора вставать, прошла 1 минута');
    clock.removeClock(7);
  }, 7);

  clock.addClock(clock.getCurrentFormattedTime(0, 2), () => {
    console.log('пора вставать, прошло 2 минуты');
    clock.stop();
    clock.clearAlarms();
    clock.printAlarms();
  }, 9);

  clock.printAlarms();

  console.log(clock.alarmCollection);

  clock.start();
};

