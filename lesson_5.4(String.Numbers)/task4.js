/* Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math. */

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(0, 100));