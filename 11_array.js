let fruits = ["Apple", "Bannan", "Mango"]
console.log(fruits.length) // Array length check

// Add Elements

// push : add end of the array

console.log(fruits.push("cherry"));
console.log(fruits);

// unshift : add start of the array

console.log(fruits.unshift("Grapes"));
console.log(fruits);


// Remove Elements
// pop : remove last item

console.log(fruits.pop());
console.log(fruits);

// shift : remove first item

console.log(fruits.shift());
console.log(fruits);


// Loop of array


for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


