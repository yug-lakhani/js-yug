const name = "Yug Lakhani";
const value = "01122005";

//console.log(name + value +" you know this is demo ");

console.log(` Hello my name is ${name} and my favourite number is ${value}`); //modern way...

const gameName = new String('rajeshlakhani');

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('j'));

const newstr = gameName.substring(0,4); //0,1,2,3 
console.log(newstr);

const another = gameName.slice(-13,4);
console.log(another);

const str1 = "  yug     ";
console.log(str1);
console.log(str1.trim());

const str2 = "yug&77";
console.log(str2.replace('&77','.com'));

console.log(str2.includes('yu'));   //search in string and give true or false;

const str3 = "yug lakhani rajeshbhai";

console.log(str3.split(' '));   //convert string into array;