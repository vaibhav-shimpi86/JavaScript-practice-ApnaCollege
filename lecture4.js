//Arrays - collection of items -linear method 
//position matter - index
//some type information collection stored used arrays
//multiple item stored collections but all items given one name
//property- value given only method -work it
// Arrays is a special type of object index : value

//examples - 
let heroes = ["ironman", "hulk", "Thor", "Batman"];

let marks = [96, 75, 48, 83, 66];

let info = ["rahul", 86, "Delhi"];

//example -1 
let Marks =  [97, 82, 75, 64, 36];
console.log(Marks);
console.log(Marks.length); //property

let Heroes = ["Ironman", "Thor", "Hulk", "Shaktiman", "Spiderman"];
console.log(Heroes);

//Arrays in JS 

//arr[0],arr[1],arr[2]....  - arrays indices - Array inside index through item access
//immutable - not changed
//mutable - changed


// Looping over an Array - Print all elements of an array

//Loop - iterable (item of iterate/loop applied)
//Strings - character collection
//object - key : value collection
//Array - smilier types of item collection(value collection)
//note for -of- this loop preferred generally.

//example - 1
let HEroes = ["Ironman", "Thor", "Hulk", "Shaktiman", "Spiderman", "Antman"]; //for loop

for (let idx = 0; idx < HEroes.length; idx++) {
    console.log(HEroes[idx]);
}

//or this code - output same 

for (let idx = 1; idx <= HEroes.length; idx++) {
    console.log(HEroes[idx-1]);
}

//or this code - output same

for (let i = 0; i < HEroes.length; i++) {
    console.log(HEroes[i]);
}

//or  this code using - for of 

for (let hero of HEroes) {
    console.log(hero);
}

//example -2  - for of

let cities = ["delhi", "Pune", "Mumbai", "Hyderabad", "Gurgaon"];

for (let city of cities) {
    console.log(city);
}

for (let city of cities) {
    console.log(city.toUpperCase());
}

//example -3 - parctice

let MarkS = [85, 97, 44, 37, 76, 60];

let SUm = 0;

for (let val of MarkS) {
    SUm += val;
}

console.log(SUm);

let avg = SUm / MarkS.length;
console.log(`avg marks of the class = ${avg}`);

//example - 4 - practice

let items = [250, 645, 300, 900, 50];

let it = 0;

for (let val of items) {
    console.log(`value at index ${it} = ${val}`);
    let offer = val / 10;
    items[it] = items[it] - offer;
    console.log(`value after offer = ${items[it]}`);
    it++;
}
//for (let it = 0; it < items.length; it++) {}

// example -5 practice

let Items = [250, 645, 300, 900, 50];

for (let jt = 0; jt < Items.length; jt++) {
    let offer = Items[jt] / 10;
    Items[jt] -= offer;
}

console.log(Items);


//Arrays in JS - Arrays Methods

//Push() : add to end - existing / original array inside changed
//Pop() : delete from end & return - existing / original arrays inside change delete from end & return again
//toString() : converts array to string - Original Arrays as it is intake new Arrays convert in string
//concat - join multiple Arrays & returns result
//unshift - add to start
//shift - delete from start & return
//slice - return a piece of the Arrays (original arrays inside not changed) // slice(startldx,endldx)
//splice - change original arrays (add, remove, replace)  // splice(startldx,delCount,newEl1....)
//note - all arrays method start with small letters

//example - 1 - push 

let fooditems = ["potato", "apple", "litchi", "tomato"];

fooditems.push("chips", "burger", "paneer");

console.log(fooditems);

//example -2 - pop

let foodItems = ["potato", "apple", "litchi", "tomato"];

console.log(foodItems);
foodItems.pop();
console.log(foodItems);

//example - 3  - pop

let Fooditems = ["potato", "apple", "litchi", "tomato"];

console.log(Fooditems);
let deletedItem = Fooditems.pop();
console.log(Fooditems);
console.log("deleted", deletedItem);

//example - 4 - toString

let FoodItems = ["potato", "apple", "litchi", "tomato"];

console.log(FoodItems);
console.log(FoodItems.toString());

//example - 5  - toString

let FoodItem = ["potato", "apple", "litchi", "tomato"];
let Mark = [97, 86, 54, 36];
console.log(FoodItem);
console.log(FoodItem.toString());
console.log(FoodItem);

//example - 6 - Concat

let marvelHeroes = ["thor", "spiderman", "ironman"];
let dcHeroes = ["superman", "batman"];
let indianHeroes = ["shaktiman", "krish"];

let Heroe = marvelHeroes.concat(dcHeroes, indianHeroes);
console.log(Heroe);

//example - 7 -unshift

let MarvelHeroes = ["thor", "spiderman", "ironman"];

MarvelHeroes.unshift("antman");

//example - 8 - shift

let marvelHeroe = ["thor", "spiderman", "ironman"];

let val = marvelHeroe.shift();
console.log("deleted", val);

//example - 9 - slice

let MarvelHeroe = ["thor", "spiderman", "ironman", "antman", "dr.strange"];

console.log(MarvelHeroe);

console.log(MarvelHeroe.slice(1, 3));
console.log(MarvelHeroe.slice(1));
console.log(MarvelHeroe.slice());


//example - 10 - splice

let arr = [1, 2, 3, 4, 5, 6, 7];

//arr.splice(2, 2, 101, 102);

//add element
//arr.splice(2, 0, 101);

//delete element
//arr.splice(3, 1);

//replace element
arr.splice(3, 1, 101);

//practice 

companies = ["Bloomberg", "microsoft", "uber", "google", "IBM", "netflix"];

companies.shift(); //shift

companies.splice(2, 1, "ola"); //splice

companies.push("amazon");










