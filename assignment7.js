//Selomea Beyene

let x = 23;

//True evaluations 
console.log(x == 23); //true: x is equal to 23
console.log(x === 23); //true: x is strictly equal to 23
console.log(x != 11); //true: x is not equal to 11
console.log(x !== '23'); //true: x is not strictly equal to '23' (string vs number)
console.log(x > 10); //true: x is greater than 5
console.log(x < 45); //true: x is less than 45
console.log(x >= 20); //true: x is greater than or equal to 20
console.log(x <= 45); //true: x is less than or equal to 45
console.log(x && true); //true: x is true and true is also true
console.log(x == 23 || false); //true: x is 23, so the left side is true regardless of the right side
console.log(!(x === 5)); //true: x is not equal to 5, so the negation is true

//False evaluations
console.log(x == 11); //false: x is not equal to 11
console.log(x === '23'); //false: x is not strictly equal to the string '23'
console.log(x != 23); //false: x is equal to 23, so this is false
console.log(x !== 23); //false: x is strictly equal to 23, so this is false
console.log(x > 50); //false: x is not greater than 50
console.log(x < 5); //false: x is not less than 5
console.log(x >= 100); //false: x is not greater than or equal to 100
console.log(x <= 10); //false: x is greater than 10
console.log(x && false); //false: x is true, but false makes the whole expression false
console.log(x == 11 || false); //false: x is not 11, so the whole expression is false
console.log(!(x === 23)); //false: x is strictly equal to 23, so the negation is false