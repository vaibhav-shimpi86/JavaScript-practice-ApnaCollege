// callbacks, Promises, & Async Await - chapter - 12 

//what this chapter is about?
//async await >> promises chains >> callback hell

//sync in Js  - synchronous programming
//which sequence of code write that seqence code execution complete

// 1- print first
// 2 - wait code - print second
// 3 - wait code - print third

//sync in Js - synchronous
// synchronous means the code runs in a particular sequence of instructions given in the program.
//Each instruction waits for thr previous instruction to complete its execution.

//Asynchronous 
//due to synchronous programming, sometimes imp insrtuction get blocked due to some previous instructions,
//which causes a delay in the UI.
//Asynchronous code execution allows to execute next instructions immediately & doesnt block the flow.

//synchronous program doing instruction in sequence from but sometimes middle of code taken more time
//(sec, ms) for execution then next of instruction why are waited for execution.

//due to synchronous progframmimng - sometimes important insrtuction get blocked due to some previous 
//instructions ehich causes a delay in the UI.

//Asynchronous code execution allows to execute next instruction immediately & doesnt block the flow.

//sometime code taken time for execution (2s, 10s) etc. Delay then after another code waited for
//execution so this cases asynchronous programming doing.

//Set timeout - own delay decided which time code execution/Run (take time to out execution)
//eg - timeout - 2s - 2000ms
// print - 1
// print - 2
// print - 3 - (hello) - set timeout(4s)
// print - 4
// print - 5

//output
// 1 
// 2
// 3
// 4
// 5
// hello - (4000ms) after this code print (asynchronous programming)

//example -1 

console.log("one");
console.log("two");
console.log("three");

//example - 2

function hello() {
    console.log("hello");
}

setTimeout(hello, 4000)  //timeout ; 4s = 4000ms

//or

//example -3 
 setTimeout(() => {
    console.log("hello");
 }, 4000);      // timeout;



 //example - 4

 console.log("one");
 console.log("two");

 setTimeout(() => {
    console.log("hello");
 }, 4000);       // timeout ;

 console.log("three");
 console.log("four");


 //Callbacks 
 //A callback is a function passed as an argument to another function.
 //callbacks synchronous or Asynchronous with used.

 //example - 1

 function sum(a, b) {
    console.log(a + b);
}

function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}

calculator(1, 2, sum);


//example - 2

function sum(a, b) {
    console.log(a + b);
}

function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}

calculator(1, 2, (a, b) => {
    console.log(a + b);
});


//example - 3

const hellos = () => {
    console.log("hello");
}

setTimeout(hellos, 3000);


//Callback Hell 

//Callback hell: Nested callbacks stacked below one another forming a pyramid structure.(pyramid of Doom)

//This style of programming becomes difficult to understand & manage.

//Nested callbacks
//(if inside if -else) - nested if - else
//Nested loop - for loop inside another for loop write(for - inside for loop) - nested for loop 
//Nesting means one thing inside another things write
//pyramid like one code inside second code or second code inside third code or third code inside forth code 
// that called pyramid.

//Callback nesting possible its very dipper level then callback hell problem arise.
// 1-data
// 2-data
// 3-data

// Output
// 1-data
//(2s delay of code)

// 2-data
//(2s delay of code)

// 3-data

//Data comes not together we need individual delay with data comes there using callbacks

//Callback hell problem in js that solve for new concept is - promises.

//Example - 1  //Nesting

let age = 19;
if (age >= 18) {
    if (age >= 60) {
        console.log("senior");
    } else {
        console.log("middle");
    }
} else {
    console.log("child");
}

//Example - 2  //nesting

for(let i=0; i<5; i++) {
    for(let j=0; j<5; j++) {
        console.log(j);
    }
}


//Example - 3  //nesting

for (let i = 0; i < 5; i++) {
    let str = "";
    for (let j = 0; j < 5; j++) {
        str = str + j;
    }
    console.log(str);  //or
    //console.log(i, str);
}


//Example - 4 

function getData(dataId) {
    //2s
    setTimeout(() => {
        console.log("data", dataId);
    }, 2000);
}


//example -5 

function getData(dataId) {
    //2s
    setTimeout(() => {
        console.log("data", dataId);
    }, 2000);
}

getData(1);  //2s
getData(2);  //2s
getData(3);  //2s

//example - 6 

function getData(dataId, getNextData) {
    //2s
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}

getData(1, () => {
    getData(2, () => {
        getData(3);
    });
});


//example - 7

function getData(dataId, getNextData) {
    //2s
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}
// callback hell
getData(1, () => {
    console.log("getting data2 ....");

    getData(2, () => {
    console.log("getting data3 ....");

    getData(3, () => {
        console.log("getting data4 ....");
        getData(4);
    });
});

});



// Promises

// Promise is for "eventual" completion of task.it is an object in JS.
//It is a solution to callback hell.

//let promise = new Promise(resolve,reject) => {...})  //Function with 2 handlers //imp

//Note - resolve & reject are callbacks provided by JS

//Promises - eg - Amazon any product purchase/order or online payment done or product not still
//in delivery in home.

//promises unfulfilled - amazon given promises this product dilivered soon your home address
//Two cases happend - promises reject/cancel - order cancel or money refund account(not reachable ur product)
//promises resolved/successfully - successfully product delivered in address.

//promises is for "eventual" compltion of task it is an object in js(resolved or reject-eventually)
//it is a solution to callback hell

//console window - promises inside prototype(object) promises state, promises result
//promises about in 3 states in js - 1-pending 2- fullfilled/resolved 3- rejected
//Resolved or rejected both of handlers

//This handlers automatically js in create
//Any promises inside resolved or rejected that promises complete it or that inside error generated
//or final result taken.

//general programming inside API in send request for any data needed then API return
//promises(or we are data deal with promises) (data,statements,result taken)

//promises used
// .then() &  .catch()
//fulfill with used(.Then)
//reject with used(.Catch)

//example -1 

let promisess = new Promise((resolve, reject) => {
    console.log("I am a promise");      // promises pending
}); 


//example -2 

let promises = new Promise((resolve, reject) => {
    console.log("I am a promise");
    //resolve(123);       // promises fullfilled
    resolve("success");       // promises fullfilled
}); 

//example - 3

let Promises = new Promise((resolve, reject) => {
    console.log("I am a promise");
    reject("some error occurred");       // promises reject
}); 


//Promises

//A javascript promise object can be:
//pending : the result is undefined
//Resolved : the result is a value(fullfilled) - resolve(result)
//Rejected : the result is an error object  - reject(error)

//Note : promise has state(Pending,fullfilled) & some result(result for resolve & error for reject).


//example -1

let Promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    reject("some error occurred");
}); 

function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            if (getNextData) {
                getNextData();
            }
        }, 5000);

    });
} 

//Promises
// .then() & .catch()
//promises.then((res) => {...})
//promises.catch((err)) => {...})

//example - 1

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        resolve("success");
      // reject("error");
    });
};

let promise = getPromise();
promise.then((res) => {
    console.log("promise fullfilled", res);
});

promise.catch((err) => {
    console.log("rejected", err);
});


//promises chain
//one then with second then chain in write
// .then inside - .then - .then  => This is chain of promises/promises chaining.

//example - 1  //page -108

function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        }, 4000);
    });
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success");
        }, 4000);
    });
}

console.log("fetching data1.....");
let p1 = asyncFunc1();
p1.then((res) => {
    console.log(res);
});

console.log("fetching data1.....");
let p2 = asyncFunc2();
p2.then((res) => {
    console.log(res);
});

//promise chain

//getdata(1)
// .then((res) => {
// return getdata(2);
// })   
//.then((res) => {
// return getdata(3);
// })
//.then((res) => {
// console.log(res);
// });



//Async - Await

//async function always returns a promise

//async function myFunc() {...}

//await pauses the execution of its surrounding async function until the promise is settled.

//Async - Await (to wait/pauses) maximum used
//asynce await both of keywords in js
//asynchronous programming simple it using async await
//async function always return a promises
//await pauses the execution of its surrounding async function until the promises is settled
//await keyword used only async function inside used(await normally not used)
//200 - success of API call status code.

//eg - first username checked then after passward checked & after user access that for work async-await 
//suitable syntax provided

//async  - await used code in function inside used or that function call first time that unnecessary call

//IIFE - immediately invoked function expression

//only one time used or immediately executed

//example -1

async function hello() {
    console.log("hello");
}

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
}


//example - 2

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 2000);
    });
}

async function getweatherData() {
    await api();  //1st
    await api();  //2nd
}


function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
}


//example - 3

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
}

//Async - await

async function getAllData() {
    console.log("getting data1.....");
    await getData(1);
    console.log("getting data2.....");
    await getData(2);
    console.log("getting data3.....");
    await getData(3);
    console.log("getting data4.....");
    await getData(4);
    console.log("getting data5.....");
    await getData(5);
    
}


//IIFE - Immediately invoked function expression
//IIFE is a function that is called immediately as soon as it is defined

//(function () {
//  ....
// }) ();
// (() => {
//  ....   
// }) ();

// (async () => {
// ....
// }) ();






















    
        
