// Loop in JS - loops are used to execute a piece of code again & again.(Repeat code multiple times)
//for Loop - ....
for (let i = 1; i <= 5; i++) {
    console.log("apna college"); // apna college executed 5 times.
}
//let i = 1; - initilize,  i <= 5; - stopping condition,   i++  - updation.

// example - write multiple times 
console.log("Apna College");
console.log("Apna College");
console.log("Apna College");
console.log("Apna College");
console.log("Apna College");

// example - 1 write for loop 

for (let count = 1; count <= 5; count++) {
    console.log("Apna College"); // apna college executed 5 times
}

//example - 2 for loop
for (let count = 1; count <= 5; count++) {
    console.log("Apna College");  //5 times executed
}

console.log("loop has ended");

// example - 3 for loop 
for (let count = 1; count <= 100; count++) {
    console.log("Apna College");  //100 times executed
}

console.log("loop has ended");

//example - 4 for loop
//calculate sum of 1 to 5
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum + i;  // sum = 15
}
console.log("sum = ", sum);
console.log("loop has ended");

//example - 5 for loop 
//calculate sum of 1 to n
let Sum = 0;
let NN = 5;
for (let i = 1; i <= NN; i++) {
    Sum = Sum + i;
}
console.log("Sum =", Sum);
console.log("loop has ended");

// example - 6 calculate sum of 1 to 100
let SUM = 0;
let nn= 100;
for (let i = 1; i <= nn; i++) {
  SUM = SUM + i;  // SUM = 5050
}
console.log("SUM =", SUM);
console.log("loop has ended");

// example - 7 for loop - print 1 to 5 
for (let i = 1; i <= 5; i++) {
    console.log("i = ", i);
}

// loops in JS 
//Infinite Loop : A loop that never ends

// example - print 1 to 5 - chances of crash the site beacuse continuous randam code executed (not stoppable)
//for (let i = 1; i>= 0; i++){
// console.log("i = ", i); 
// }

// Loop in JS 

// While Loop - before while - initialization, condition - stopping condition, //do some work(code) - updation

/*while(condition) {
    // do some work
} */ 

// example 1 - while loop - print 1 to 5 

let ii = 1;         // i = 1; - initialization, i<= 5; - stopping condition, i++ - updation
while (ii <= 5) {
    console.log("ii = ", ii);
    ii++;
}

// example - 2 while loop -print apna college

let jj = 1;
while (jj <= 10) {
    console.log("Apna College");
    jj++;
}

//do -while loop - before do - initialization , // do some work - updation, while(condition) - condition 
// [ checked condition at the end]

/*do {
    //do some work
} while (condition); */

let tt = 20;
do {
    console.log("Apna College");
    tt++;
} while (tt <= 10);

//example - do - while 
let dd = 1;
do {
    console.log("dd=", dd);
    dd++;
} while (dd <= 5);

// for-of loop 

/*for (let val of strVar ) {
    //do some work
}*/

let str = "ApnaCollege";

for(let rr of str) {    // iterator
    console.log("rr=", rr);
}

//example - 2 - for - of loop
let Str = "JavaScript";

let size = 0;
for (let ll of Str) {
    console.log("ll=", ll);
    size++;
}
console.log("string size =", size);  //10

//exaample - 3 - for -of loop
let STR = "JavaScript";

let Size = 0;
for (let val of STR) {
    console.log("val=", val);
    Size++;
}
console.log("string Size =", Size);  //10

//for - in loop 

/*for(let key in objVar) {
    //do some work
}*/

let Student = {
    name : "Rahul kumar",
    age : 20,
    cgpa: 7.5,
    ispass : true
};

for(let RR in Student) {
    console.log(RR);
}

//example -2 - for - in loop 
let StudenT = {
    name : "Rahul kumar",
    age : 20,
    cgpa : 7.5,
    ispass : true
};

for (let key in StudenT) {
    console.log("key = ", key);
}

for (let key in StudenT) {
    console.log("key = ", key, "value = ", StudenT[key]);
}

// ..................................****** ..............*********..............

// String in JS - String is a sequence of characters used to represent text
//inbuilt properties or functions that called methods
//index start with a Zero - 0 
//individual character will be access possible using(string indices)

//Strings
let str1 = "ApnaCollege";
let str2 = "shradha";

console.log(str1[0]);  //A

// example 2 
let str3 = "ApnaCollege";

console.log(str3[8]);  //e

// Templates literals in Js - a way to have embedded expression in strings.
// eg - `this is a template literal`

//strng interpolation - To create strings by doing substitution of placeholders
//eg - `string text ${expression} string text`

// Templates Literals
let specialString = `This is a template literal`;
console.log(specialString);
console.log(typeof specialString);

//example -2 
let obj = {
    item : "pen",
    price : 10,
};

//console.log("the cost of", obj.item," is", obj.price, "rupees"); // or 

let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);


//template Literals
let SpecialString = `This is a template literal`;
console.log(typeof SpecialString);

//example - 3 - Template literals

let SpecialSTring = `This is a template literal ${1 + 2 + 3}`;
console.log(SpecialSTring);

//example - 4 - Template literals
console.log("Apna \n College");  // \n - next line

console.log("Apna\tCollege");   // \t - Tab space

//exaple -5 // Template literals
let str4 = "Apna\tCollege";  // 12
console.log(str4.length);

//String methods in Js - These are built-in functions to manipulate a string 
//methods is like a block of code
//note- original value not changes its return new value
//note- original string are immutable in javascript (never change)
//then new string create for changed
//Trim starting or end white spaces removes.

str.toUpperCase()

str.toLowerCase()

str.trim( ) //removes whitespaces

//example - 1 

let str5 = "ApnaCollege";
str5.toUpperCase();
console.log(str5);

//example - 2 
let str6 = "ApnaCollege";
let newstr = str6.toUpperCase();
console.log(str6);
console.log(newstr);

//example - 3 
let str7 = "ApnaCollege";
str = str7.toUpperCase();
console.log(str);   // APNACOLLEGE

//example - 4 - tolowercase
let str8 = "ApnaCollege";
str = str8.toLowerCase();
console.log(str);

//example - 5 -trim
let str9 = "      Apna College JS    ";
console.log(str9.trim());

//String Methods in JS

//str.slice(start,end?) //returns part of string      slice - ending value non-exclusive/ not Added.
//str1.concat(str2) //join str2 with str1             concat - two string join.
//str.replace(searchVal,newVal)                       Replace- string inside value search for used (search value).
//str.charAt(idx)                                     charAt- string inside index any character find out/return.

let str10 = "01234546";
console.log(str10.slice(1, 3));

//example - 2
let str11 = "01234567";
console.log(str11.slice(1, 6));

//example - 3 
let str12 = "hello";
console.log(str12.slice(0, 3));

//example - 4 
let str13 = "apna";
let str14 = "studio";

let res = str13.concat(str14);
console.log(res);

let Ro = str14.concat(str13);
console.log(Ro);

let RES = str13 + str14;
console.log(RES);

let RE = "I am learning coding from" + str13 + str14;
console.log(RE);

let RS = "hello" + 123;
console.log(RS);

//example - 5 
let str15 = "hello";
console.log(str15.replace("h", "y"));
console.log(str15.replace("lo", "p"));

//example - 6 
let str16 = "IloveJs";
console.log(str16.charAt(0));
console.log(str16.charAt(3));

//example  - 7 
let str17 = "IloveJS";
str17[0] = "S";
console.log(str17); //IloveJS

//example- 8 
let str18 = "IloveJS";
str18 = str18.replace("I", "S");
console.log(str18); //SloveJS