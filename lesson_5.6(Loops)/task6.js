/* Дан массив. Проверить, одинаковые ли элементы в массиве. 
Вывести результат true или false в консоль. 
Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. 
Проверить, все ли элементы в массиве одинаковые. */

const arr = ['mother', 'father', 'sister', 'brother'];

let isArrayEqual = true;
const reference = arr[0];

for (let item of arr) {
	if (item !== reference) {
		isArrayEqual = false;
	}
}

console.log(isArrayEqual)