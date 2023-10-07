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


// Testing Objects for Properties

/* To check if a property on a given object exists or not, you can use the .hasOwnProperty() method. 
    someObject.hasOwnProperty(someProperty) returns true or false 
    depending on if the property is found on the object or not. */

function checkProp(obj, prop) {
    if (obj.hasOwnProperty(prop)){
        console.log(obj[prop]); // return the value of the property
    } else {
        console.log ("Not Found");
    };
}

checkProp({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift");

// complex objects

const ourMusic = [
    {
      "artist": "Daft Punk",
      "title": "Homework",
      "release_year": 1997,
      "formats": ["CD", "Cassette", "LP"],
      "gold": true
    },
    {
        "artist": "Michael Jackson",
        "title": "Billy Jean",
        "release_year": 1982,
        "formats": ["CD", "8T", "LP"],
        "gold": true,
      }
  ];
  console.log(ourMusic[0].artist); // this should output daftpunk

  // Accessing nested objects

  const ourStorage = {
    "desk": {
      "drawer": "stapler"
    },
    "cabinet": {
      "top drawer": { 
        "folder1": "a file",
        "folder2": "secrets"
      },
      "bottom drawer": "soda"
    }
  };

  // to access the value of folder2
  console.log(ourStorage.cabinet["top drawer"].folder2);



// Record collection
/*
You are creating a function that aids in the maintenance of a musical album collection. 
The collection is organized as an object that contains multiple albums which are also objects. 
Each album is represented in the collection with a unique id as the property name. 
Within each album object, there are various properties describing information about the album. 
Not all albums have complete information.

The updateRecords function takes 4 arguments represented by the 
following function parameters:

    records - an object containing several individual albums
    id - a number representing a specific album in the records object
    prop - a string representing the name of the album’s property to update
    value - a string containing the information used to update the album’s property

Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire records object.
If value is an empty string, delete the given prop property from the album.
If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
If prop is tracks and value isn't an empty string, you need to update the album's tracks array. 
    First, if the album does not have a tracks property, assign it an empty array. 
    Then add the value as the last item in the album's tracks array.

Note: A copy of the recordCollection object is used for the tests. 
You should not directly modify the recordCollection object.

*/

// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
function updateRecords(records, id, prop, value) {
    if (prop == "tracks" && value != ""){
        if (records[id].hasOwnProperty(prop)){
            records[id][prop].push(value);
        }else{
            records[id][prop] = [value];
        }
    }
    if (value == ""){
        delete records[id][prop];
    }
    if (prop != "tracks" && value != ""){
        records[id][prop] = value;
    }
    return records;
  }
  
updateRecords(recordCollection, 5439, 'artist', 'ABBA');

/*

updateRecords(recordCollection, 5439, "artist", "ABBA"), artist should be the string ABBA
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"), tracks should have the string Take a Chance on Me as the last and only element.
updateRecords(recordCollection, 2548, "artist", ""), artist should not be set
After updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"), tracks should have the string Addicted to Love as the last element.
updateRecords(recordCollection, 2468, "tracks", "Free"), tracks should have the string 1999 as the first element.
updateRecords(recordCollection, 2548, "tracks", ""), tracks should not be set
updateRecords(recordCollection, 1245, "albumTitle", "Riptide"), albumTitle should be the string Riptide

*/

var itemData = [
    { category: 'fruit',  itemName: 'apple', onSale: false },
    { category: 'canned', itemName: 'beans', onSale: false },
    { category: 'canned', itemName: 'corn',  onSale: true  },
    { category: 'frozen', itemName: 'pizza', onSale: false },
    { category: 'fruit',  itemName: 'melon', onSale: true  },
    { category: 'canned', itemName: 'soup',  onSale: false },
  ];
  
/*
  {
    fruit:  ['apple', 'melon($)'],
    canned: ['beans', 'corn($)', 'soup'],
    frozen: ['pizza']
  };
*/
var output = {};
for (let i = 0; i < itemData.length; i++){
    var cat = itemData[i].itemName;
    var fName = itemData[i].category;
    var sold = itemData[i].onSale;
    
    if (sold){
        cat = cat + "$"
    }
    if (output.hasOwnProperty(itemData[i].category)){        
        output[fName].push(cat);
    }else{
        output[fName] = [];
        output[fName].push(cat);
        //output[[itemData[i]].category] = [];
        //output[itemData[i].category].push(itemData[i].itemName);
    }

}
console.log(output);