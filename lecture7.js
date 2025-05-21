//DOM - part-2

//DOM Manipulation - Attributes or style

//Attributes

//getAttribute(attr) //to get the attribute value

//setAttribute(attr, value) // to set the attribute val th

//Attributes - Elements inside additional/ information that is in the form of attributes
//eg - <div id="box">This is a Div</div>
//eg - <p class="para">This is a simple line</p> 
//Element - div, p
//Attributes - box, para

//get Attributes - checked

//set Attributes - change

//style - style access for any elemets style value change

//node.style - any node style changed

let divv = document.querySelector("divv");
console.log(divv);
divv.style.backgroundColor = "green";
divv.style.backgroundColor = "purple";
divv.style.fontSize = "26px";
divv.innerText = "Hello!";

let id = divv.getAttribute("id");
console.log(id);

let names = divv.getAttribute("names");
console.log(names);

let para = document.querySelector("pp");
console.log(para.getAttribute("class"));
console.log(para.setAttribute("class", "newClass"));

//DOM Manipulation - MDN read -append child() or Remove child()

//Insert Elements - let el = document.createElement("div") - create element or add new element

//node.append(el) //adds at the end of node(inside)

//node.prepend(el) // adds at the start of node(inside)

//node.before(el) // adds before the node(outside)

//node.after(el) // adds after the node(outside)

//Delete Element 

//node.remove() // removes the node

let newBtn = document.createElement("button");
newBtn.innerText = "click me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);

console.log(newBtn);

let Div = document.querySelector("Div");
Div.append(newBtn);

let Divv = document.querySelector("Divv");
Div.prepend(newBtn);

let Divvv = document.querySelector("Divvv");
Div.before(newBtn);

let Divvvv = document.querySelector("Divvvv");
Div.after(newBtn);

let pp = document.querySelector("pp");
pp.after(newBtn);

//new heading

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am new!</i>";

document.querySelector("body").prepend(newHeading);

let paraa = document.querySelector("p")
para.remove();

newHeading.remove();