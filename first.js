// javascript Lecture 1.......shradha khapra
//console.log used!
console.log("Apna college");
console.log("welcome to Apna College");
console.log("Shradha Khapra");
console.log("I Love JS!");

fullName = "Tony stark";
console.log("fullName");
console.log(fullName);

//variables in js rules
// variable names are case sensitive "a" & "A" is different
//only letters, digit, underscore(_) and $ is allowed (not even space)
//only a letter underscore or $ should be 1st character.
//reserved words cannot be variable names.
fullName = "Tony stark";
age = 24;
price = 99.99;
x = null;
y = undefined;
isFollow = false;

//re-declear of fullName
fullName = 25;
console.log(fullName);

//case sensitive
fullname = "Vaibhav shimpi";
FULLNAME = "Manisha shimpi";
console.log(fullname);
console.log(FULLNAME);

//case sensitive
//Console = "Apna college";
//console.log(console); //error : console.log is not a function.

Console = "Apna college";
console.log(Console);

// let, const, & var
//var : variable can be re-declared & updated. a global scope variable.
//let : variable can't be re-declared but can be updated.A block scope variable
//const : variable can't be re-declared or updated. A block scope variable.
let name = "Tony Stark";
console.log(name);

let FullName = "daniel Stark";
console.log(FullName);
//var : variable can be re-declared & updated. a global scope variable.
var age = 24;
var age = 59;
var age = 86;
console.log(age);

//let : variable can't be re-declared but can be updated.A block scope variable
// let age =24;
// let age =59;
// let age =80;
// console.log(age);

//const : variable can't be re-declared or updated. A block scope variable.
// const age =25;
// age = 50;
// age = 87;
// console.log(age); //error : Assignment to constant variable.

const PI = 3.14;
console.log(PI);

//let "a" is a undifined
let a;
console.log(a);
//let "B" is a difined
let B;
B = 10;
console.log(B);

//error : missing initializer in const.
// const c;
// console.log(c);

//initialize const value.
const d = 50;
console.log(d);

// let block scope variable.
{
    let a = 8;
    console.log(a);
}

// let can't re-declared block scoped varible 
/*{
    let a = 5;
    let a =10;
    console.log(a);
}*/

//let can be update in block of scope.
{
    let a = 5;
    console.log(a);
}
{
    let a = 10;
    console.log(a);
}

// datatype in js 
// number, string ,boolean, undifined, null, Bigint, symbol - primitive Data types
let agegroup = 29;
let pricetag = 100.5;

let FuLLName = "tony stark";

isFollow = true;

let z;

let E = null;

let V = BigInt("123");

let S = Symbol("Hello!");

// non-primitive data types -Objects is a key:value pairs(Array,Functions)
/*{
eg- students -(object)
Name -String    name : "rahul" - key:value pair
Age - Number    age : 24 - key:value pair
marks - Number 
Is pass - boolean
}*/

const student = {
    fullName : "Rahul kumar",
    age : 20,
    cgpa : 8.2,
    ispass : true
};

console.log(student["age"]);
console.log(student.cgpa);

student["age"] = student["age"] + 1;
console.log(student["age"]);

student["name"] = "Rahul Sharma";
console.log(student["name"]);

//practice example 
const product = {
    title: "Ball pen",
    rating: 4,
    offer: 5,
    price: 270,
};
console.log(product);

//practice example 
const profile = {
    username: "@shrdhakhapra",
    isFollow: false,
    followers: 123,
    following:123,
};
console.log(typeof profile);
console.log(typeof profile["username"]);
console.log(typeof profile["isFollow"]);
console.log(typeof profile["followers"]);





