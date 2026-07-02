function fibonacci(n) {
let num1 = 0, num2 = 1, next;
console.log(num1); // first term
console.log(num2); // second term

for (let i = 2; i < n; i++) {
next = num1 + num2;
console.log(next);
num1 = num2;
num2 = next;
}
}

fibonacci(10); 