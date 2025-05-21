//javascript lecture 2......shradha khapra
//operators and conditional statments - used to perform some operation on data
//Arithmetic operators......
//increment, decrement,  Exponentiation, Modulus [ + -  * /]
let b = 5;
let c = 2;
console.log("b + c =", b + c); 

let g = 5;
let e = 2;
let f = g + e;
console.log ("g + e =", f);

let x = 5;
let y =2;
console.log("x + y =", x + y); //addition
console.log("x - y =", x - y); //substration

let p = 6;
let q = 5;

console.log("p =", p, "& q =", q);
console.log("p + q =", p + q); 
console.log("p - q =", p - q); 
console.log("p * q =", p * q); 
console.log("p / q =", p / q); 
console.log("p % q =", p % q); 
console.log("p ** q =", p ** q); 

//unary operator
let m = 6;
let n = 2;
console.log("m =", m, "& n =", n);
//m = m + 1; //7
//OR
m++; //7
console.log("m = ", m); //7


let r = 6;
let s = 2;
console.log("r =", r, "& s =", s);
//r = r - 1; //5 
//OR
r--;
console.log("r = ", r);
console.log("++r =", ++r); // pre increment
console.log("r++ =", r++); // post increment//6
console.log("r = ", r); //7

let j = 8;
let k = 5;
console.log("j =", j, "& k =", k);
console.log("--j =", --j); // pre decrement
console.log("j = ", j);

console.log("k-- =", k--); // post decrement
console.log("k = ", k);

// assignment operators- = += -= *= /= %= **=

let u = 5;
let v = 2;
u += 4; // u = u + 4
console.log("u = ", u); //9 (+=)

let l = 5;
let t = 2;
l -= 4; // l = l - 4 
console.log("l = ", l); //1 (-=)

let w = 5;
let i = 2;
w *= 4; // w = w - 4 
console.log("w = ", w); //20  (*=)

let A = 5;
let D = 2;
A /= 4; //A = A / 4
console.log("A = ", A); // 1.25 (/=)

let F = 5;
let C = 2;
F %= 4; //F = F % 4
console.log("F = ", F); // 1 (%=)

let G = 5;
let H = 2;
G **= 4; //G = G ** 4
console.log("G = ", G); // 1 (**=)

//Comparison Operators - ==(equal to), !=(not equal to), ===(equal to & type), !== (not equal to & type),
// > >= (grater & greater than equal to ), < <= (less & less than equal to)

let I = 5;
let J = 2;
console.log("I == J", I == J); //false (== equal to)
console.log("5 == 2", I == J); //false (== equal to)
console.log("5 != 2", I != J); //True (!= Not equal to)

let K = 5;
let L = 5;
console.log("5 == 5", K == L); //True (== equal to)
console.log("5 != 5", K != L); //false (!= Not equal to)

let M = 5;  // number
let N = "5";  // string
console.log("M == N", M == N); //True (number == string) (== equal to)
console.log("M === N", M === N); //False (number === string) (=== equal to & type)
console.log("M !== N", M !== N); //True (number !== string) (!== Not equal to & type)

let O = 5;
let P = 3;
console.log("5 > 3", O > P); // True  ( > greater than)
console.log("5 < 3", O < P); // False  ( < less than)

let Q = 5;
let R = 5;
console.log("5 <= 5", Q <= R); // True  ( <= less than equal to)
console.log("5 >= 5", Q >= R); // True  ( >= Greater than equal to)

let U = 6;
let T = 5;
console.log("6 >= 5", U >= T); // True  ( >= Greater than equal to)

// Logical Operator - (AND &&)  (OR ||)  (NOT !)
//AND && Operator......

let X = 6;
let W = 5;
let cond1 = X > W;  // True
let cond2 = X === 6; // True 
console.log("cond1 && cond2 =", cond1 && cond2);  //  True (&& AND Operator - true && true = true)

let cond3 = X > W;  // True
let cond4 = X === 5; // false
console.log("cond3 && cond4 =", cond3 && cond4);  // Flase (&& AND Operator - true && False = False)

let cond5 = X < W;  // Flase
let cond6 = X === 6; // True
console.log("cond5 && cond6 =", cond5 && cond6);  // Flase (&& AND Operator - False && true = False)

console.log("cond5 && cond6 =", X < W && X===6); // Flase (&& AND Operator - X < W =False && X===6 -True = False)

//OR || Operator......

let Y = 6;
let Z = 5;
console.log("cond1 || cond2 = ", Y < Z || Y === 6); // True (|| OR in any one cond is true = True)

console.log("!(6<5) = ", !(Y < Z)); // False (! NOT in opposite answer applied False=True)
console.log("!(6<5) = ", !(Y === 6)); // True(! NOT in opposite answer applied true=false)

// Conditional satatements......
// if statement - condition-true-code executed otherwise condition-false-code not executed.

let Age = 25;
if (Age > 18) {
    console.log("you can vote"); // cond -true - code executed
}

// example -2 - code execution or not
let AGE = 16;
if (AGE > 18) {
    console.log("you can vote"); // cond -false - code not executed
}
if (AGE >= 18) {
    console.log("you can vote"); // cond -flase -code not executed

}if (AGE < 18) {
    console.log("you cannot vote"); // cond -true  - code executed  
}

// example -3 
 
let mode = "dark";
let color;

if (mode === "dark") {
    color = "black";
}

if (mode === "light") {
    color = "white";
}

console.log(color); // mode dark = color is black

//example - 4 

let Mode = "light";
let Color;

if (Mode === "dark") {
    Color = "black";
}

if (Mode === "light") {
    Color = "white";
}

console.log(Color); // Mode light = Color is white

// if - else statement.... - if true otherwise false is Run

let MOde = "light";
let COlor;

if (MOde === "dark") {
    COlor = "black";
}
else{
    COlor = "white";
}

console.log(COlor); // else satement run - MOde-light COlor is white

//example - 2 .... if else statements
 
let agelimit = 25;

if (agelimit >= 18) {
    console.log("Vote");  // if statement run because agelimit >=18 = true condition - vote applied
} else {
    console.log("Not Vote"); 
}

//example - 3 .... if else statements

let ageLimit = 16;

if (ageLimit >= 18) {
    console.log("Vote");
} else {
    console.log("Not Vote");   // else statement run because agelimit >=18 = false condition -  Not vote applied
}

//example - 4 ..... if else statements

//odd or even
let num = 10;

if (num % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}

if (num % 2 === 0) {
    console.log(num, "is even"); //even statement
} else {
    console.log(num, "is odd");
}

//example -5 ...... if else statements
//odd or even 
let Num = 7;

if (Num % 2 === 0) {
    console.log(Num, "is even"); 
} else {
    console.log(Num, "is odd");
}

// else - if statements - if (cond1) - else if (cond2) - else

let MODE = "dark";
let COLOR;

if (MODE === "dark") {
    COLOR = "black";
}else if (MODE === "blue") {
    COLOR = "blue";
}else if (MODE === "pink") {
    COLOR = "pink";
}else {
    COLOR = "white";
}

console.log(COLOR);

if (MODE === "dark") console.log(MODE);

//Ternary Operators - condition?true output : false output
//example -  age > 18 ? "adult" : "not adult";

let AgE = 25;

let result = AgE >= 18 ? "adult" : "not adult";
console.log(result);

// example - 2 
let AgEE = 16;

let results = AgEE >= 18 ? "adult" : "not adult";
console.log(results);

//or
let AgEEE = 16;
AgEEE >= 18 ? console.log("adult") : console.log("not adult");

//example - 3 

let agge = 25;
agge >= 18 ? console.log("adult") : console.log("not adult");

//prompt enter a number?

//prompt("enter a number");

//practice code which can give grades to studnets according to score?
//90-100,A  70-89,B  60-69, C  50-59, D  0-49, F

let score = 75;
let grade;

if(score >= 90 && score <= 100) {
    grade = "A";
} else if (score >=70 && score <= 89) {
    grade = "B";
} else if (score >=60 && score <= 69) {
    grade = "C";
}else if (score >=50 && score <=59) {
    grade = "D";
}else if (score >=0 && score <=49) {
    grade = "f";
}

console.log("according to your scores, your grade was : ", grade);













































