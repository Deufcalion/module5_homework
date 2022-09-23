/* Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее. */

let arr = [1, 2, 3, 4, 5, 6, 7, null, 'SkillFactory'];

let evenElem = arr.filter(function(elem) {
	if (elem % 2 == 0) {
		return true;
	} else {
		return false;
	}
});

console.log(`Колличество чётных элементов - ${ evenElem.length }`); 

let oddElem = arr.filter(function(elem) {
	if (elem % 2 !== 0) {
		return true;
	} else {
		return false;
	}
});

console.log(`Колличество нечётных элементов - ${ oddElem.length }`); 