/* Создайте произвольный массив Map. 
Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
Используйте шаблонные строки. */

let myMap = new Map();

myMap.set('Car', 'Red');
myMap.set('House', 'White');
myMap.set('Phone', 'Black');

for (let pair of myMap.entries()){
  
  console.log(`Ключ - ${pair[0]}, Значение - ${pair[1]}`);
}
