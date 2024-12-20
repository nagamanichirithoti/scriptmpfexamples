// map Examples

// Multiply each number by 2:
const number = [1, 2, 3, 4];
const doubled = number.map(num => num * 2);
console.log(doubled); 
// Convert an array of strings to uppercase:
const word = ["hello", "world"];
const upperWords = word.map(word => word.toUpperCase());
console.log(upperWords); 
// Extract names from an array of objects:
const peopl = [{ name: "Alice" }, { name: "Bob" }];
const names1 = peopl.map(person => person.name);
console.log(names1); 
// Convert prices in USD to EUR (assuming 1 USD = 0.9 EUR):
const pricesUSD = [10, 20, 30];
const pricesEUR = pricesUSD.map(price => price * 0.9);
console.log(pricesEUR); 
// Add 5 years to ages:
const ages = [20, 25, 30];
const updatedAges = ages.map(age => age + 5);
console.log(updatedAges); 

// filter Examples

// Filter numbers greater than 2:
const numberss = [1, 2, 3, 4];
const greaterThanTwo = numberss.filter(num => num > 2);
console.log(greaterThanTwo); 
// Filter even numbers:
const numb = [1, 2, 3, 4];
const evens = numb.filter(num => num % 2 === 0);
console.log(evens); 
// Find people older than 18:
const people = [{ age: 15 }, { age: 20 }];
const adults = people.filter(person => person.age > 18);
console.log(adults); 
// Filter strings shorter than 5 characters:
const worde = ["hello", "to", "world"];
const shortWords = worde.filter(word => word.length < 5);
console.log(shortWords); 
// Filter products cheaper than $50:
const products = [{ price: 30 }, { price: 60 }];
const cheapProducts = products.filter(product => product.price < 50);
console.log(cheapProducts); 

// forEach Examples

// Log each number in the array:
const num1 = [1, 2, 3];
num1.forEach(num => console.log(num));
// Add all numbers to get a sum:
const numbers = [1, 2, 3];
let sum = 0;
numbers.forEach(num => sum += num);
console.log(sum); 
// Capitalize and log each string:
const words = ["hello", "world"];
words.forEach(word => console.log(word.toUpperCase()));
// Log the indices and values:
const items = ["apple", "banana"];
items.forEach((item, index) => console.log(`Index: ${index}, Item: ${item}`));
// Append "is cool" to each string and log it:
const names = ["JavaScript", "Python"];
names.forEach(name => console.log(`${name} is cool`));
