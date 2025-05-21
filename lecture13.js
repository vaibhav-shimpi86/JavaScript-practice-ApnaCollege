//chapter - 13  - Fetch API

//fetch API

//The fetch API provides an interface for fetching (sending/receiving) resources.
//it uses (Request) and (Response) objects  // highlighted with ()
//the [fetch()] method is used to fetch a resource(data).  // highlighted with []

//let promise = fetch(url, [options])

//API Calls initiate, request send, or data received
//Himself request send to API or API response data
//API another person create system/website/server in creates.
//Request or response cycle to fetch data
//API - application programming interface
//Request send by API who's prepared that doesn't matter we needed only that output data that API return.

//API are nothing but URL end points/link on send request/data send
//eg - search - google.com - request send open the google.com page
//browser in google.com send request so that request going to google server. then response
//in open the google.com first page open.

//Fetch API
//Fetch API provides an interface for fetching (sending/receiving) resources
//it uses request & response objects
//Fetch() method is used to fetch resources(data)
//Fetch in return promises.
//status 200  - successful request status code
//Any API call & data received that is Asyncronous work
//Get,delete,put,push Request
//Only data taken any server, API that called get request.


//example - 1

/*const URL = "https://cat-fact.herokuapp.com/facts";

const getFacts = async () => {
    console.log("getting data .....");
    let response = await fetch(URL);
    console.log(response.status);
}; */

//understanding Terms

//AJAX is Asynchronous JS & XML -  (file not used)

//JSON is javascript Object Notation  - (Most of used)

//json() method : returns a second promise that resolves with the result of parsing the
//response body text as JSON. (Input is JSON, output is JS object)

//Note - JSON format data return - API called AJAJ
//AJAJ - Asynchronous javascript & Json

//Response - (json) format

//convert

//Js object(javascript Object)

//This convert used special method called json() method

//json() method - Asynchronous method return promises.


//example -1

//const URL = "https://cat-fact.herokuapp.com/facts";
//const factPara = document.querySelector("#fact");
//const btn = document.querySelector("#btn");

//const getFacts = async () => {
//    console.log("getting data ......");
//    let response = await fetch(URL);
//    console.log(response);  //JSON format
//    let data = await response.json();
//    factPara.innerText = data[1].text;
//    };  

/*function getFacts() {
    fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        factPara.innerText = data[2].text;
    });
} */

//btn.addEventListener("click, getFacts");



//Requests & Response

//HTTP Verbs

//Response Status Code

//Note - HTTP response headers also contain details about the responses, such as content type,
//HTTP status code etc.

//Notes

//Request in HTTP verbs
//HTTP - hyper text transfer protocol/rules
//1 - Get - Get/retrive some data
//2 - post - To send some data
//3 - delete - Any data delete request used delete
//4 - Any update data used patch request

//Response status code 
//200 - successful response
//API response in header additional information in headers.

//example - 1

const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
    console.log("getting data ......");
    let response = await fetch(URL);
    console.log(response);  //JSON format
    let data = await response.json();
    factPara.innerText = data[2].text;
    }; 
    
btn.addEventListener("click, getFacts");
    




