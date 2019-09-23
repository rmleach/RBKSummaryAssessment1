// Remember to relax and ask for help when you need it (only from staff)
// YOU CAN ONLY USE MDN AS A RESOURCE for JavaScript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript
// you can use W3 school for HTML-CSS
// for the jquery you can only use jquery documentaion.
// https://api.jquery.com
//For the the jQuery questions, you can access the jQuery library via CDN, 
//just search jQuery CDN and click the first link you see, then copy 
//the minified version and add it to your html file.
// NOTE: you are accountable for your styling, so make sure your styling is good.
// ANOTHER NOTE:leave comments about your intent or pseudo-code describing your plan.

// Use the following helper functions in your solution

function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function(element, i) {
    acc = f(acc, element, i);
  });
  return acc;
}

//=============================================================================
/*                              Q1                                           */
//=============================================================================
//write a function that takes a string as an input and returns an array
//containing the last letter of each word in that string.
//solve it using the most appropriate helper functions(reduce,each,map,filter).
//wordLetters("hello its me") // ["o","s","e"]

function wordLetters(str) {
    // TODO: your code here 
}

//=============================================================================
/*                                  Q2                                    */
//=============================================================================
/*
Write a function that takes a string and a target, 
and returns true or false if the target is present in the string.
isPresent('abcd', 'b') // => true
isPresent('efghi', 'a') // => false
*/

function isPresent(string, target) {
  // TODO: your code here 
}


//=============================================================================
/*                                  Q3                                    */
//=============================================================================
//write a function that takes a string as an input and returns an array
//with only the words of length that are longer or equal 5.
//solve it using the most appropriate helper functions(reduce,each,map,filter).
// wordsLongerThanFive("Hello Mad World") //["Hello", "World"]

function wordsLongerThanFive(str) {
    // TODO: your code here 
}

//=============================================================================
/*                                  Q4                                        */
//=============================================================================
/*
Using recursion, write a function called powerOfTwo that takes a number,
and returns true if a number is a power of two, false if its not.
Hint: https://en.wikipedia.org/wiki/Power_of_two
powerOfTwo(1); // true
powerOfTwo(16); // true
powerOfTwo(10); // false
*/
function powerOfTwo(number) { 
 // TODO: your code here 
} 
 

//=============================================================================
/*                                  Q5                                       */
//=============================================================================
/*
 using closures create a function called makePizza that has the following properties and methods
 crust a property represented by a string. ex "thin","thick". 
 size a property represented by a string. ex "M","L".
 numberOfSlice a property that hold the number of slice, ex: 8
 ** the values of all properties will be provided as arguments in the function invocation. 
 addIngredients a function that add a new ingredient to the ingredients property.
 displayIngredients a function that displays a comma separated string of all ingredients. ex: The ingredients are:tomato,mushroom,meat
 bakePizza a function that display a string with your pizza description after 2 seconds. ex "Your thin M 8 slice pizza is done" 
 eatSlice a function that let you eat from the pizza as long as the numberOfSlice is greater than zero and decrease the total number of slices by one.
 */
//Example:
// var pizza = makePizza("thin", "M", 2);
// pizza.addIngredients("tomato");
// pizza.addIngredients("meshroom");
// pizza.addIngredients("meat");
// console.log(pizza.displayIngredaints());
// pizza.bakePizza();
// pizza.eatSlice();
// pizza.eatSlice();
// pizza.eatSlice();

// Write your code here .....

//=============================================================================
/*                                  Q6                                      */
//=============================================================================
/*
Create a Circle class by using OOP concept, where:
we need to create the circles (lets create only one for now), 
the invocation should take the radius of the circle. 
var circle1 = Circle(70);
Create a function increaseRadius that multiplies circle radius by n value.
Create a function circleArea to compute the area of the circle.
Create a function  circlePerimeter to compute the perimeter of the circle.
Create two circles  from Circle function and save them in one array called circles!
Write function displayCircles that take circles array as an input and 
the output should display all the circle's information(Radius, Area, and Perimeter of a circle).
Hints:
https://www.efunda.com/math/areas/CircleGen.cfm 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI
*/

//  Write your code here

// Now, to make sure that you are actually reading, make a comment below this and type: Yes I am

//=============================================================================
/*                                  Q7                                       */
//=============================================================================
//Using closures create makeSafe Function that accepts an initial integer value to specify the storage size limit
//makeSafe should contain addItem function that accepts two parameters the item and the itemSize as Strings
//itemSize should be either "big", "medium" and "small"
//big sized items will hold 3 slots in the storage
//medium sized items will hold 2 slots in the storage
//small sized items  will hold 1 slot in the storage
//return "Can't fit" if you try to add an item that exceeds the storage size limit
//when the safe is full return a string representing all the items that are in the safe
//Example:
//  var safe = makeSafe(5)
//  safe('watch','small')
//  safe('gold-bar','big')
//  safe('silver-bar','big') => "Can't fit"
//  safe('money','small') => "watch gold-bar money"

// Write your code here .....

//=============================================================================
/*                                  Q8                                       */
//=============================================================================
/*
You are managing a sales team and you are interested is analyzing some data related to their age and total sales.
Take a moment to review the following data structure you will be analyzing:
var salesTeam = [
    {name: {first: 'Earline', last: 'Erickson'}, age: 19, sales: '$18876'},
    {name: {first: 'Jin', last: 'Jeffrey'}, age: 17, sales: '$14402'},
    {name: {first: 'Joleen', last: 'Jolin'}, age: 17, sales: '$15736'},
    {name: {first: 'Jude', last: 'Jarrett'}, age: 53, sales: '$7557'},
    {name: {first: 'Magda', last: 'Mireles'}, age: 18, sales: '$1498'},
    {name: {first: 'Susan', last: 'Shilling'}, age: 29, sales: '$8542'},
    {name: {first: 'Tama', last: 'Tworek'}, age: 16, sales: '$9200'},];
    
Write a function, isTeenager, that takes an array of information, salesTeam, and returns an array 
that lists the full names of each member of the sales team that is a teenager (their age < 18).
Make sure the first and last names are separated by a space.
Note: Write the function using while loop and for loop.

// Write your code here .....


//================================================================================
/*                              Q9                                            */
//================================================================================

//Create HTML, CSS & JS files
//Link jQuery
//Create an empty unordered list
//Create three input elements of type checkbox
//Create two buttons "create" & "remove"
//Create 7 classes in CSS each with the appropriete color (black, purple, green, orange, red, yellow, blue)
//Using jQuery run a function that gets called using the button's id (#create)
//The function takes see if the checkboxes are checked or not (true or false), use $("#id").prop('checked')
//If all 3 checkboxes are checked add an list item with the word black in it and add the "black" class to it
//If 2 of the checkboxes are checked add (purple = blue + red), (green = blue + yellow), (orange = red + yellow)
//If 1 of the checkboxes is checked add (yellow, blue or red) as li and the class to it

//Using jQuery call a function from the button's id (#delete)
//The function removes all the elements from the unordered list based on the checkboxes as the previous function
//Use jQuery as much as you can in selecting elements and other tasks

//================================================================================
/*                              Q10                                           */
//================================================================================
// Theoretical questions.
// 1- In your own words,Why do we use Closures ?

// 2- In OOP, what does "this" refer to ?

// 3- What is jQuery?

// 4- what is the diffrence between Closure's methods and The OOP's methods?




