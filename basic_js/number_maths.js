const score = 334;
const balance = new Number(554);

console.log(balance);

console.log(balance.toString().length);  //convert into string and use all properity of string

console.log(balance.toFixed(3));  //fixed point after decimal

const num1 = 43.44545;
console.log(num1.toPrecision(3));  // give total number by round of

const num2 =  100000;
console.log(num2.toLocaleString('en-IN')); //by default usa standard;


// +++++++++++++maths++++++++++++++

console.log(Math);


console.log(Math.abs(-23)); //convert only negative value in positive;

console.log(Math.round(4.56)); //give round of value;
console.log(Math.ceil(4.56)); //give max val ...
console.log(Math.floor(4.56)); //give min val...

console.log(Math.max(4,3,5,6,2,1)); 
console.log(Math.min(4,3,5,6,2,1));

console.log(Math.random());  //alway give value between 0-1 
console.log(Math.random()*10 + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

