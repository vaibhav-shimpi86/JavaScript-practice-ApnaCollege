// functions or methods 

// Functions - block of code that performs a specific task, can be invoked (call) whenever needed
//eg - log, touppercase, push etc - all this functions (many more functions in js)
//() - function write with () -parentheses used that functions invoked (call) it / used it
//input given in () inside functions definition - what works 
//keyword used - function
//functions call - responsibility / invoke (call)
//Redundancy - repeated work less that convert in functions(minimize repeated of code using functions)
//parameter is a input inside()  - parameter - function definition used
//Argument - function call used 
//note - NAN - not a number(error)
//Return - keyword(reserve keyword) (value return in function) (only one value return at a time)
//function return that after any write in code that never executed in code
//function function name(param1,param2.....){
//  do some work
// }
//function parameter - like local variables of function - function block scope{}


//example - 1 

/*console.log("hello!");

"abc".toUpperCase()

[1, 2, 3].push(4);*/

//example -2 

function myFunction() {
console.log("Welcome to Apna College!");
console.log("We are learning JS :");
}

myFunction();

//example - 3

function myfunction(msg) {
    //parameter -> input
    console.log(msg);
}

myfunction("I love JS");  //Argument

//example - 4 

function MYfunction(msg, n) {
    //parameter -> input 
    console.log(msg * n);
}

MYfunction("I love JS", 100); //Argument // output -NAN - not a number

//example - 5  //function -> 2 numbers , sum

function sums(x, y) {
    //console.log(x + y);
    s = x + y;
    return s;
}

let vals = sums(3, 4);
console.log(vals);

//example - 6 //Function -> 2 numbers, sum
function sumss( x, y) {
    t = x + y;
    console.log("before return");
    return t;
    console.log("after return");
}

let valss = sumss(3, 4);
console.log(valss);

//Arrow Functions - compact way of writing a function
//Arrow function value stored in any variable
//const arrow mul=(a,b)=>{code
// return a*b;
//}
//const arrow mul - function variable

//const functionName = (param1,param2....) =>{
    //do some work
    // } //very imp 

//const sum = (a,b) =>{
//    return a+b;
// }  //very imp

//example - 1  //sum function

function Sums(a, b) {
    return a + b;
} 

const xx = 5;

const arrowsum = (a, b) => {
    console.log(a + b);
};

//multiplication function
function mul(a, b) {
    return a * b;
}

//example - 2 

//sum function
function sums(a, b) {
    return a + b;
}

//Modern Js
const arrowSum = (a, b) => {
    console.log(a + b);
};

//multiplication function
function mul(a, b) {
    return a * b;
}

const arrowMul = (a, b) => {
    return a * b;       //console.log(a * b);
}

//or

let ArrowMul = (a, b) => {
    return a * b;
};

ArrowMul = 5;

//or

const printHello = () => {
    console.log("hello");
};

//or

const PrintHello = () => console.log("hello");


//practice

function countVowels (str) {
    //"ApnaCollege", count = 5

    for(const char of str) {
        console.log(char);
    }
}

//practice- 2

function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if (
            char === "a"  ||
            char === "e"  ||
            char === "i"  ||
            char === "o"  ||
            char === "u"  

        ) {
            count++;
        }
    }

    return count;
}

const countVow = (str) => {
    let count = 0;
    for (const char of str) {
        if (
            char ==="a" ||
            char ==="e" ||
            char ==="i" ||
            char ==="o" ||
            char ==="u" 
        ) {
            count++;
        }
    }

    return count;
};


//forEach Loop in Arrays

//Function associate with object/data structure with bind so that create as a method.
//Note- methods is a fuctions but associate/bind with object/data structure so that create called as a method
//(call back function) passed as an argument to another function
//function js in parameter wise pass or function value return.
//call back function there parameters used that's optional
//1- value/item  2- index - position 3- array - itself
//higher order function/method function parameter or function return that called higher order function/method
//call back seen that (higher order function / method (HOF / HOM)

//arr.forEach(callBackFunction)
//callbackFunction : Here, it is a function to execute for each element in the array
//*A callback is a function passed as an argument to anoter function

//    arr.forEach((val) => {
//    console.log(val);
//    })

//example -1

function abc() {
    console.log("hello");
}

function myFunction(abc) {
    return abc;
}

//example - 2

let Arr = [1, 2, 3, 4, 5];

Arr.forEach(function printVal(val) {
    console.log(val);
});

//example - 3 

let arR = [1, 2, 3, 4, 5];

arR.forEach((val) => {
    console.log(val);
});

//example - 4

let ARR = ["pune", "delhi", "mumbai"];

ARR.forEach((val) => {
    console.log(val);
});

//example - 5

let RRA = ["pune", "delhi", "mumbai"];

RRA.forEach((val) => {
    console.log(val.toUpperCase());
});

//example- 6

let rrr = ["pune", "delhi", "mumbai"];

rrr.forEach((val, idx) => {
    console.log(val.toUpperCase(), idx);
});

//example- 7 

let RRR = ["pune", "delhi", "mumbai"];

RRR.forEach((val, idx, RRR) => {
    console.log(val.toUpperCase(), idx, RRR);
});

//practice 

let nums = [2, 3, 4, 5, 6];

nums.forEach((num) => {
    console.log(num * num);  //num**2
});

//practice

let Nums = [67, 52, 39];

Nums.forEach((num) => {
    console.log(num * num);  //num**2
});

//practice

let NumS = [67, 52, 39];

let calcSquare = (num) => {
    console.log(num * num);
};

NumS.forEach(calcSquare);

//some more Array methods - Map
//Creates a new array with the results of some operation. the value its callback returns are 
//used to form new array.

//arr.map(callbackFnx(value,index,array))

//let newArr = arr.map((val) => {
//  return val * 2;  
//  })

// new array return
//call back function
//Three parameter used - value, index, Arrays

//example- 1

let NuM = [67, 52, 39];

NuM.map((val) => {
    console.log(val);
})

let CalcSquare = (num) => {
    console.log(num * num);
};

//example - 2

let numss = [67, 52, 39];

let newArr = numss.map((val) => {
    return val;
});

console.log(newArr);

let calcsquare = (num) => {
    console.log(num * num);
};

//example - 3

let numsss = [67, 52, 39];

let NewArr = numsss.map((val) => {
    return val * val;
});

console.log(NewArr);

let Calcsquare = (num) => {
    console.log(num * num);
};

//example - 4

let rums = [67, 52, 39];

let newARR = rums.map((val) => {
    return val * 2;
});

console.log(newARR);

let Calcsquares = (num) => {
    console.log(num * num);
};

// some more Array methods -filter
//Create a new array of elements that give true for a condition / filter.
//eg : all even elements

//let newArr = arr.filter((val) => {
//     return val % 2 === 0;
//    })

//give true for a condition / filter
//create new Arrays
//call back function

//example - 1

let arrs = [1, 2, 3, 4, 5, 6, 7];

let evenArr = arrs.filter((val) => {
    return val % 2 === 0;
});

console.log(evenArr);

//example -2

let arrss = [1, 2, 3, 4, 5, 6, 7];

let evenArrs = arrss.filter((val) => {
    return val % 2 !== 0;
});

console.log(evenArrs);

//example -3

let ars = [1, 2, 3, 4, 5, 6, 7];

let evenArs = ars.filter((val) => {
    return val > 3;
});

console.log(evenArs);

//some more Array methods - Reduce
//performs some operations & reduces the array to a single value. it returns that single value.

//javascript demo: Array.reduce()
//const array1 = [1, 2, 3, 4];
//0 + 1 + 2 + 3 + 4
//const initialValue = 0;
//const sumWithInitial = array1.reduce(
//  (accumulator, currentValue) => accumulator + currentValue, initialValue,
//  );
//console.log(sumWithInitial);
//Expected output : 10

//Reusable code - again & again use / invoke (call)

//example - 1

let Arrs = [1, 2, 3, 4];

const Output = Arrs.reduce((res, curr) => {
    return res + curr;
});

console.log(Output);

//Example - 2

let are = [5, 6, 2, 1, 3];

const OutPut = are.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});

console.log(OutPut);  // 6

//Example - 3

let sss = [5, 6, 2, 1, 101, 3];

const OutPuT = sss.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});

console.log(OutPuT);  //101

//example -4

let ttt = [5, 6, 2, 1, 101, 3];

const outPUT = ttt.reduce((prev, curr) => {
    return prev < curr ? prev : curr;
});

console.log(outPUT);  // 1


//practice

let mark = [97, 64, 32, 49, 99, 96, 86];

let toppers = mark.filter((val) => {
    return val > 90;
});

console.log(toppers);

//practice

/*let UU = prompt("enter a number : ");

let aaa = [];

for(let i = 1; i <= UU; i++) {
    aaa[i - 1] = i;
}

console.log(aaa);

let sumsss = aaa.reduce((res, curr) => {
    return res + curr;
})

console.log(sumsss);*/



//practice

/*console.log(Arr);

let dum = Arr.reduce((res, curr) => {
    return res + curr;
});

console.log("dum = ", dum);

let factorial = Arr.reduce((res, curr) => {
    return res * curr;
});

console.log("factorial = ", factorial);*/







