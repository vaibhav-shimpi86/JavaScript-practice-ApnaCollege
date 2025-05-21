//lecture 9 - Tic-Tac-Toe game 
//lecture 10 - Rock paper siccor game

// lecture 11 - classes & objects in Js 

//prototypes in Js
//A javascript object is an entity having state and behavior(properties and method).
//Js objects have a special property called prototype
//We can set prototype using  _ _proto_ _
//Note- of object & prototype have same method, objects method will be used.
//objects in an [entity(two things) - properties, and behaviors] having state & behavior
//properties - variable
//method- store in objects/functions in object

//eg- student(student - object) = {
//   full name
//   marks
//   print marks: function() {
//   (print marks - method)
//   console.log(method)
//   } 
//   } 

//special property [prototype(is a object) by default properties & methods] is a object
//prototype different type methods or properties methods(behaviors)

//prototype - of type actually a reference to an object

//if object & prototype have same method (object method)will be used.

//prototype - objects

//example -1

const student = {
    fullname: "shradha khapra",
    marks: 94.4,
    printMarks: function () {
        //console.log("marks = ", marks);
        console.log("marks = ", this.marks); // student.marks
    },
};

//example - 2

const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },
    /*calcTax1() {
        console.log("tax rate is 10%");
    },
    calctax2: function () {
        console.log("tax rate is 10%");
    }*/
};

const karanArjun = {
    salary: 50000,
};

const karanArjun2 = {
    salary: 30000,
};

const karanArjun3 = {
    salary: 20000,
};

const karanArjun4 = {
    salary: 80000,
};

karanArjun.__proto__ = employee;
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
karanArjun4.__proto__ = employee;


//example - 3

const Employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },
};

const vaibhav = {
    salary: 50000,
    calcTax() {
        console.log("tax rate is 20%");
    },
};

vaibhav.__proto__ = employee;

//Classes in Js 

//class is a program-code template for creating objects.

//those objects will have some state (variables) & some behavior (functions) inside it.

//     class MyClass {
//     constructor() { ... }
//     myMethod() { ... }
//     }
//     let myObj = new MyClass();

//classes in js - Bulk in similar objects create that's create using class
//eg - 50 employee objects create then again and again info feed that's called repeatation

//classes object create for template/blueprint

//classes through those objects will have some state properties(variables) & some behaviours
//(functions) inside it.

//class to object create - let myobj = new myclass();

//classes blueprint/template using different object create or again and again every object
//same function/same properties not difined needed that benefit of classes create.

//classes generally preferred some templates on multiple objects create 
//eg - bank software create for employee info

//class create employee that inside blueprint of employee side which info stored or
//tamplate use employee individual object creates.

//example - 1

class ToyotaCar {
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    setBrand(brand) {
        this.brandName = brand;
        //this.brand = brand;
    }
}

let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");

let lexus = new ToyotaCar();
lexus.setBrand("lexus");


//classes in js 

//constructor() method is:
//automatically invoked by new
//initializes object

//   class MyClass{
//   constructor() { ... }
//   myMethod() { .... }
//     }

//classes in js  - constructor

//constructor is a method but it is special method

//constructor means reserve keyword

//Automatically invoked by new constructor in js

//constructor method general work to intializes objects

//different values initialization time set/any new object which is getting cerate.

//class blueprint create

//constructor inside variable/values thats initialize in the costructor itself

//properties or behavior set in class

//example - 2

class toyotaCar {
    constructor(brand, mileage) {
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }

    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }
}
    
let Fortuner = new toyotaCar("Fortuner", 10);  //constructor
console.log(Fortuner);

let Lexus = new toyotaCar("Lexus", 12);    // constructor
console.log(Lexus);


//Inheritance in js 

//Inheritance is passing down properties & methods from parent class to child class.

//    class parent {
//    }
//    class child extends parent {
//    }

//Note - if child & parent have same method, child's method will be used.[Method Overriding]

//programming inside heritence means one class properties & methods pass in another/ second class & methods
//Keyword used - extends

//parent class & child class same functions that case child class functions invoke

//if child & prent have same methods child method will be used(method overriding)/ cover

//example - 1

class parent {
    hello() {
        console.log("hello");
    }
}

class child extends parent {}

let obj = new child();



//example - 2

class person {
    constructor() {
        this.species = "homo sapiens";
    }

    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }

    work() {
        console.log("do nothing");
    }
}

class Engineer extends person {
    work() {
        console.log("solve problems, build something");
    }
}

class Doctor extends person {
    work() {
        console.log("treat patients");
        
    }
}

let shradhaobj = new Engineer();


//super Keyword 

//The super keyword is used to call the constructor of its parent class to access the parents
//properties and methods.

//   super(args) //calls parents constructor

//   super.parentMethod(args)

//super keyword used to call constructor of parent class to access parent properties & methods
//keyword used - super

//derived - means comes to another class/passed on

//child class inside(derived) any constructor create that use super keyword parents class
//constructor before call it.

//Generally constructor inside this use before or exit before super constructor call it

//Inheritence time child and class to parent class constructor any important info 
//pass on that pass on through super keyword.

//example - 1

class Person {
    constructor() {
        console.log("enter parent constructor");
        this.species = "homo sapiens";
    }

    eat() {
        console.log("eat");
    }
}

class Engineers extends Person {
    constructor(branch) {
        console.log("enter child constructor");
        super();  //to invoke parent class constructor
        this.branch = branch;
        console.log("exit child costructor");
    }

    work() {
        console.log("solve problem, build something");
    }
}

let engObj = new Engineers("chemical engg");


//example -2 

class Persons {
    constructor(name) {
        this.species = "homo sapiens";
        this.name = name;
    }

    eat() {
        console.log("eat");
    }
}

class engineers extends Persons {
    constructor(name) {
        super(name);  //to invoke parent class constructor
        
    }

    work() {
        super.eat();
        console.log("solve problem, build something");
    }
}

let EngObj = new engineers("shradha");



//practice 

let Data = "secret information";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data = ", Data);
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        Data = "some new value";
    }
}

let student1 = new User("shradha", "abc@gmail.com");
let student2 = new User("aman", "aman@gmail.com");

let teacher1 = new User("Dean", "dean@college.com");

let admin1 = new Admin("admin", "admin@college.com");


// Error Handling

//  try-catch
//   try{
//      ...normal code
//   }catch(err) {   //err is error object
//      .... handling error
//    }

//try - catch block
//supposed any 1 to 5 line code write & 3rd line code error then 1 & 2 line code execute or
//3rd line code error show or 4 & 5 line code correct but not executed beacuse of 3rd line code error
//happens then how to handle error.

//Try block inside error code write

//catch block handle the error in catch block



//Example -1

let a = 5;
let b = 10;

console.log("a = ", a);
console.log("b = ", b);
console.log("a + b = ", a + b);

try{
    console.log("a + b = ", a + c);    // write here mistake C then //error -how to handle
} catch (err) {
    console.log(err);
}

console.log("a + b = ", a + b);
console.log("a + b = ", a + b);
console.log("a + b = ", a + b);
console.log("a + b = ", a + b);
console.log("a + b = ", a + b);

 






