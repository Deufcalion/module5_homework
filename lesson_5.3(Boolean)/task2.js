/* Дана переменная x, которая может принимать любое значение. 
Написать программу, которая в зависимости от типа данных x выводит в консоль сообщение вида: «x — число».
Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».

Примечание: в этом задании использовать promt не нужно. */

let x = 'Hello World!'

/* if(typeof x === 'number'){
  console.log('x - это число!')
} else if (typeof x === 'string'){
  console.log('x - это строка!')
} else if (typeof x === 'boolean'){
  console.log('x - это логический тип!')
} else {
  console.log('Тип x не определён!')
} */

switch (typeof x) {
  case 'number':
    console.log('x - это число!');
    break;
  case 'string':
    console.log('x - это строка!');
    break;
  case 'boolean':
    console.log('x - логический тип!');
    break;
  default:
    console.log('Тип x не определён!')    
}