// Events in JS  - (Event handle)

//the change in the state of an object is known as an Event

//Events are fired to notify code of "interesting changes" that may affect code execution.

//Mouse events(click, double click etc.)

//Keyboard events(Keypress, keyup, keydown)

//Form events(submit etc.)

//print event & many more



//Note - Event code inside interesting changes eg- button - click / double click

//change in the state of object is known event eg - button

//Fired notify code "interesting changes" that may affect code execution

//Events use for any work of Tigger

//Inline event handling - Html tag inside events handle not a good way of handling events
//beacuse(Html code too much bulky)


//Event Handling in JS

// Node.event = () => {
    //handle here
//  }  

//Note - (priority of JS Handling) not of html inline handling (html code too much bulky)

//onetime any event handle in js
//eg - onclick event handle then again same onclick event not handle(old code overwrite)

//let btn1 = document.querySelector("#btn1");

/*btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log(a);    //26
};

let div = document.querySelector("div");

div.onmouseover = () => {
    console.log("you are inside div");
};*/

let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("HANDLER1");
    let a = 25;
    a++;
    console.log(a);    //26
};

btn1.onclick = () => {
    console.log("HANDLER2");
};

let div = document.querySelector("div");

div.onmouseover = () => {
    console.log("you are inside div");
};


//Event Object in JS

//it is special object that has details about the event

//All event handlers have access to the Event object's properties and methods

//node.event = (e) => {
    //handle here
//    }

//e.target, e.type, e.clientX, e.clientY

//Event which types eg - mouse, pointer, keyboard

//Target - div, button, input element(background information special object save it)

/* let btn2 = document.querySelector("#btn2");

btn2.onclick = (e) => {
    console.log(e);
};

let divv = document.querySelector("divv");

divv.onmouseover = () => {
    console.log("you are inside div");
};  */

let btn2 = document.querySelector("#btn2");

btn2.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};

/* let divv = document.querySelector("divv");

divv.onmouseover = () => {
    console.log("you are inside div");
};  */

let divv = document.querySelector("divv");

divv.onmouseover = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
}; 


//Event Listeners

//node.addEventListener(event, callback)

//node.removeEventListener(event, callback)

//Note - the callback reference should be same to remove

//event handling Two types
//1> inline handling - tag inside element attribute use for event handling - drawback - html code bulky

//2> JS inside - node every event write any function through event handle
//drawback - one time in only one function event handle

//3>better use for event listeners for event handling
//Benefit - event listeners through some event in multiple work done
//A - Event listener inside event object access
//B- Event listeners remove function pass as a variable

//Note - The callback reference should be same to remove

//example -1

let btn3 = document.querySelector("#btn3");

//btn3.onclick = (evt) => {
//    console.log(evt);
//    console.log(evt.type);
//    console.log(evt.target);
//    console.log(evt.clientX, evt.clientY);
//    }; 

btn3.addEventListener("click", () => {
    console.log("button3 was clicked");
});

let divvs = document.querySelector("divvs");

//example -2

let btn4 = document.querySelector("#btn4");

//btn3.onclick = (evt) => {
//    console.log(evt);
//    console.log(evt.type);
//    console.log(evt.target);
//    console.log(evt.clientX, evt.clientY);
//    }; 
  
//or 


//btn4.addEventListener("click", () => {
//    console.log("button4 was clicked");

//or
    

btn4.addEventListener("click", (evt) => {
    console.log("button4 was clicked");
    console.log(evt);
    console.log(evt.type);
});

btn4.addEventListener("click", () => {
    console.log("button4 was clicked - handler3");
});

let divvvs = document.querySelector("divvvs");

//example -3

let btn5 = document.querySelector("#btn5");

btn5.addEventListener("click", (evt) => {
    console.log("btn5 was clicked - handler11");
});

btn5.addEventListener("click", () => {
    console.log("btn5 was clicked - handler12");
});

   btn5.addEventListener("click", () => {
   console.log("btn5 was clicked - handler13");
    });

//or

//    const handler13 = () => {
//    console.log("btn5 was clicked - handler13")  // remove event code
//    }

btn5.addEventListener("click", () => {
    console.log("btn5 was clicked - handler14");
});

//btn5.removeEventListener("click", handler13); //remove event code

//practice

//Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again?

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";  //dark


modeBtn.addEventListener("click", () => {
   // console.log("you are trying to change mode");
   if (currMode === "light") {
    currMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
   // document.querySelector("body").style.backgroundColor = "black";
   } else {
    currMode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
    //document.querySelector("body").style.backgroundColor = "white";

}
    console.log(currMode);

});

   


