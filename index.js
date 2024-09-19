// // 1. Write a function reverseString(str) that takes a string and returns it reversed. Ex: reverseString("hello"); // Output: "olleh"


// function reverseString(str) {
//     revStr= str.split('').reverse()
//     return revStr.join('')
// }

// console.log(reverseString("hello"))



// // 2. Write a function sumArray(arr) that takes an array of numbers and returns the sum of all the numbers. Ex: sumArray([1, 2, 3, 4]); // Output: 10


// function sumArray(arr) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum;
// }

// let arr= [10, 20, 30, 40];
// console.log(sumArray(arr))



// // 3. Write a function removeDuplicates(arr) that takes an array and returns a new array with only unique values (duplicates removed). Ex: removeDuplicates([5, 5, 5, 6, 7]); // Output: [5, 6, 7]


// function removeDuplicates(arr) {
//     return[...new Set(arr)];
// }

// const arr = [1,1,2,66,66,22,22,2,2,66,22,0,0,0,1,1]

// console.log(removeDuplicates(arr))




// 4.  Write a function celsiusToFahrenheit(celsius) that takes a temperature in Celsius and converts it to Fahrenheit.


function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

console.log(celsiusToFahrenheit(37));


