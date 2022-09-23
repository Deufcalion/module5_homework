/* Дан произвольный массив. Необходимо вывести количество элементов массива, 
затем перебрать его и вывести в консоль каждый элемент массива. */

let arr = ['mother', 'father', 'sister', 'brother'];

console.log(arr.length);

let result = arr.map(function(item, index, array) {
  
  return 'my ' + item
  
})

console.log(result)

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

/* или так, через циклы ???

for (let i = 0; i < arr.length; i++){
  console.log(arr[i])
}

*/

/* и еще вариант:

arr.forEach (function(item, index, array) {
  console.log(`item: ${item}`)
})

*/