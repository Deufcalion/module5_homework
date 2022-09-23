/* Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH". */

let str = 'Hello World!'
let msv = [...str]
console.log(msv.reverse().join(""))