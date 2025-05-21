//DOM - Document object Model
//HTML- (structure) - content
//CSS(style) - Effect & Move Elements
//JS(logic) - click after change (info show/ site link(hyperlink))
//<style></style> - tag connects html with css //starter code
//<script></script> - tag connects html with JS  // starter code
//Note- HTML file script tag using inside body tag before of </body> ending tag
//<body>
// <script>Tag write most of</script>
// </body> - before ending body Tag
//benefit - js code js file inside write that increases readability
//modular - code in different parts isolate 
//browser caches - browser loading time faster
//Note - multiple CSS / JS files added(link with) in html file(index.html)
//Inspect - Element tab - html code,  style tab - css code, console tab - JS code 
//important another tabs - Network, performance, Application etc.
//box with arrow - Element select then element related info shows
//Note - console/ inspect inside any changes all temparly (file in changes are permenant)

//example -1
/*
console.log("hello!");
alert("apna college"); */


// window object

//The window object represents an open window in a browser. it is browser's object(not javascripts)
// & is automatically created by browser.
//it is a global object with lots of properties & methods
//window object open in console Tab
//it is browser object(not javascript) & it is automatically created by browser
//it is global object with lots of properties & Methods
//Note - console.log or prompt it is part of window object many more

//example - 2

console.log("hello");
window.console.log("hello2");

// what is DOM?
//when a web page is loaded, the browser creates a (document object model (DOM) of the page
//Html & JS Accessable in DOM
//document available in window object
//console.log - print
//console.dir - document - properties & method print
//Boxes - called Node (object)
//dynamic changes(manipulation) that DOM used

//window => document => html in (head) & (body)
//html => head - meta, meta, title, link
// html => body - (div) & (script)
//html => body => div => img, h1, p, div
//html => body => script (javascript code)

// both options open window document
//console.dir(window); 
//or 
//console.log(window);
//or
//console.dir(window.document); - window all documents shows

//isolated all body or head realated option are open
//console.dir(document.body);  - body option related all options open
//or
//console.log(document.body); - current html body part file open
//or
//console.dir(document.head); - Head related all option open

//console.dir(document.body.childNodes[1]); - childNodes open

//inspect => console => in write document.body.style.background = "green";  - Enter (then green color apply)

//inspect => console => document.body.childNodes[3].innerText = "abcd"; - Enter (then abcd text apply on browser)




//DOM Manipulation - (changes)

//selecting with id - Unique - single used
//document.getElementById("myId")

//selecting with class - multiple classes used 
//document.getElementsByClassName("myClass")

//selecting with Tag - specific element tag used
//document.getElementsByTagName("p")



// example - 1

/*let heading = document.getElementById("heading");  //h1 -access by using id element
console.log(heading);
console.dir(heading);*/

/*let headings = document.getElementsByClassName("heading-class"); // h1 -access by using class element
console.dir(headings);
console.log(headings); */ 

let button = document.getElementById("myId");
console.dir(button);

let headings = document.getElementsByClassName("myclass");
console.dir(headings);
console.log(headings);

let parahs = document.getElementsByTagName("p");
console.dir(parahs);

// DOM Manipulation - Query Selector

//document.querySelector("myId / myClass / tag")
//returns first element

//document.querySelectorAll("myId / myClass / tag")
//returns a NodeList

//query selector - this inside id, class or Tag name pass or that detect himself which type of element needed.
//(query selector All) node list returns
//Access by one or multiple elements
//(Query selector) returns only first element.

//By Tag

let elements = document.querySelector("p");
console.dir(elements);

let firstEl = document.querySelector("p");  //1st element By Tag
console.dir(firstEl);

let allEl = document.querySelectorAll("p");  //All element By Tag
console.dir(allEl);

//By Class

let FirstEl = document.querySelector(".myclass");  //1st element By class
console.dir(FirstEl);

let AllEl = document.querySelectorAll(".myclass");  //All element BY class
console.dir(AllEl);

//By Id 

let FirstEL = document.querySelector("#myId");  //1st element By Id
console.dir(FirstEL);

//All elements selector By Class

let AllEL = document.querySelectorAll(".myclass");  //All elements By class
console.dir(AllEL);


//DOM Manipulation - Properties

//tagName : returns tag for element nodes

//innerText : returns the text content of the element and all its children (parent, child, sibling)

//innerHTML : returns the plain text or HTML contents in the element

//textContent : returns textual content even for hidden elements

//elements value checked or change it
//properties basis value get(checked) or value set(changed/update)

let FirstELe = document.querySelector("#myId");  //1st element By Id (FirstELe.tagName - BUTTON)
console.dir(FirstELe);


let firstEle = document.querySelector("p");  //1st element By Tag (firstEle.tagName - 'p')
console.dir(firstEle);

//sibling - div or script 
//div => img, h1, p, div - sibling

//read documentation MDN
//DOM three in 3 nodes - 1- Text nodes  2- comment nodes  3- Elements nodes
//Note- DOM three in always Elements nodes on work

/*<body> // - parent
    <div> // -child
        <img></img> // - sibling / childnodes - div.children[0] -first child
        <h1></h1>   // - sibling  / childnodes - div.children[1]    
        <p></p>     // - sibling  / childnodes - div.children[2] 
        <div></div> // - sibling  / childnodes  - div.children[3] - last child
    </div>
    <script></script> // JS - child
</body>*/

console.dir(document.body.firstChild);

let div = document.querySelector("div");
console.dir(div);

//innerText -Text content Return (inner Text properties set Div all text change)
//innerHTML - Return the plain text or HTML contents in the elements(runtime/ elements or content changed dynamically)
//TextContent - Return textual content even for hidden elements

//practice

let h2 = document.querySelector("h2");
console.dir(h2);
console.dir(h2.innerText);

h2.innerText = h2.innerText + "from Apna College students"; //concatenate

let divs = document.querySelectorAll(".Box");
console.log(divs);
console.log(divs[0]);
console.log(divs[1]);
console.log(divs[2]);

let divss = document.querySelectorAll(".Box");

/*divss[0].innerText = "New unique value 1";
divss[1].innerText = "New unique value 2";
divss[2].innerText = "New unique value 3";*/

//or

let idx = 1;
for(div of divss) {
    div.innerText = `new unique value ${idx}`;
    idx++;
}




