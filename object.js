const myDog = {
    "name": "Britain",
    "legs": 4,
    "tails": 1,
    "colour": "Black",
    "Dog Breed": "German Sherperd",
    "friends": ["Joe", "Dickson", "Jenny"],
};

// property: value

// Accessing object properties using dot notation

const dogName = myDog.name;
const dogFriends = myDog.friends;

console.log(dogName);
for (var i = 0; i < dogFriends.length; i++){
    console.log("Friend " + (i + 1) + ": " + dogFriends[i]  + "\n");
}


// Accessing object properties using bracket notation

// If the property of the object you are trying to access has a space in its name, 
// you will need to use bracket notation.
// you can still use bracket notation on object properties without spaces.

console.log(myDog["Dog Breed"]);
console.log(myDog['tails']);


// Accessing object properties with variables

const cars = {
    Toyota: "Camry",
    Honda: "Accord",
    Benz: "Maybach"
};

const myCar = "Toyota";
const model = cars[myCar];
console.log(model);


// Updating Object properties

// object properties can updated using either dot or bracket notation.

/* To update myDog name to "Odogwu 1" and colour to "Brown" */

myDog.name = "Odogwu 1"; //using dot notaion
myDog["colour"] = "Brown"; //using bracket notation

console.log(myDog.name);
console.log(myDog["colour"]);


// Add new property to Object

/* adding new property "age" with value 12 */

myDog.age = "4 years"; // or myDog[age] = "4 years";
console.log(myDog.age);


// Deleting property from object

/* deleting tails property */

delete myDog.tails;
console.log(myDog);


// Using Objects for Lookups

const article = {
    "title": "How to create objects in JavaScript",
    "link": "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
    "author": "Kaashan Hussain",
    "language": "JavaScript",
    "tags": "TECHNOLOGY",
    "createdAt": "NOVEMBER 28, 2018"
  };
  
  const articleAuthor = article["author"];
  const articleLink = article["link"];
  
  const value = "title";
  const valueLookup = article[value];
  
  /* articleAuthor is the string "Kaashan Hussain", 
    articleLink is the string "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/", 
    and valueLookup is the string "How to create objects in JavaScript". */


function phoneticLookup(val) {
    let result = "";

    const results =  {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
    };

    result = results[val];
  
     console.log(result);
  }
  phoneticLookup("charlie");