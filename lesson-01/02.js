let number1 = Math.floor(Math.random() * 100);
const arr = [];
if (number1 % 2 === 0) {
  console.log(arr.push(number1) + " " + "Это четное число");
} else {
  console.log(arr.push(number1) + " " + "Это нечетное число");
}

let number = 1;

console.log(number++);
console.log(++number);
console.log(number--);
console.log(--number);
