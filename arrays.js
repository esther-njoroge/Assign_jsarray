// Find the last element of the arrays        (not sure b)
let arr1 =[3,7,34,90,12];
console.log(`last item`,arr1[arr1.length -1]);

let arr2 = [true, "green", "where", 12, 56];
console.log(`last item`,arr2[arr2.length -1]);

// Write a program that will join the array elements into a string
let myPets = ["Cow", "Bird", "Snake", "Dog"];
console.log(myPets.join())
// console.log(myPets.toString());

// Write a js script to sort the array items     (not sure on var)
var arr3 = [-5,9,5,3,2,-3,6,8,4,1];
var ans = arr3.sort();
console.log({ans})

// Write a program to remove duplicates from the array. Console the array without duplicates, and console another array that contains the duplicates
let arr = ["boy", "man", "girl",     "school", "girl", "woman"];
console.log({arr});

function removeDuplicate(arr){
    return [...new Set(arr)];
}
console.log(removeDuplicate(arr));
 

// Write a js script to search for the word "food", if present return it else, return "the search word was not found"
let arr5 = ["the", "way", "x", 4];
let z = arr5.includes("food");
if(z==true){
    console.log("food")
}
else{
    console.log("the search word was not found")
}


// Write a js script to sort the string
let word = "renniw";
let a = word.split("").reverse().join("");
console.log({a})


