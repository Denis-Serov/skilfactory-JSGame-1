let guessNumber = Math.round(Math.random() * 30);
let tries = 10;

// Текстовые переменные
function restartMessage() {
 return "Загаданное число поменялось";
}
function triesMore() {
 return "Попыток осталось: " + tries;
}

// Булевые функции
function isLose() {
 return tries === 0;
}
function isWin(number) {
 return guessNumber === number;
}
function isGt(number) {
 return guessNumber > number;
}
function isLt(number) {
 return guessNumber < number;
}

// Функциии действия
function makeTriesLess() {
 tries--;
}

function init() {
 guessNumber = Math.round(Math.random() * 30);
 tries = 10;
}
function win() {
 init();
 return `Правильно! ${restartMessage()}`;
}

function lose() {
 init();
 return `Попытки закончились - Вы проиграли. ${restartMessage()}`;
}

function gt() {
 makeTriesLess();
 return `Загаданное число больше. ${triesMore()}`;
}

function lt() {
 makeTriesLess();
 return `Загаданное число меньше. ${triesMore()}`;
}

function guess(number) {
 if (isLose()) {
   return lose();
 }
 if (isWin(number)) {
   return win();
 }
 if (isGt(number)) {
   return gt();
 }
 if (isLt(number)) {
   return lt();
 }
 return "ошибка, введите число";
}

$(document).ready(function() {
 		$(".btn").click(function() {
  			const inputValue = $("input").val(); // получение значения текстового поля
   	    	const resultValue = guess(+inputValue); //запуск основной функции guess
 			const $result = $(".result"); // результат работы функции в контейнер result, при первом запуске пусто 
 			$result.html(resultValue); // вывод result в html
 });
});