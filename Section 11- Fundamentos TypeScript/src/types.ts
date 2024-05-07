// Number
let age: number = 30;
let price: number = 9.99;
console.log(typeof age); // Output: "number"

// String 
let fullName: string = "John Doe";
let greeting: string = `Hello, ${fullName}!`;
console.log(typeof price); // Output: "number"

// Boolean
let isLogged: boolean = true;
let hasError: boolean = false;
console.log(typeof isLogged); // Output: "boolean"

// Null and Undefined
let emptyValue: null = null;
let notDefined: undefined = undefined;
console.log(typeof emptyValue); // Output: "object"
console.log(typeof notDefined); // Output: "undefined"


// Object
let person: object = { name: "Alice", age: 25 };
let car: object = { brand: "Toyota", model: "Corolla" };
console.log(typeof person); // Output: "object"

// Array
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "orange"];
console.log(typeof numbers); // Output: "object"


// Tuple
let employee: [string, number] = ["John", 30]; // tuple [string, number]
console.log(typeof employee); // Output: "object"


// Functions
const multiply = function(a: number, b: number): number {
    return a * b;
};

const result: number = multiply(4, 2);
console.log(result); // Output: 8


function greet(name: string, greeting: string = "Hello"): void {
    console.log(`${greeting}, ${name}!`);
}

greet("John"); // Output: Hello, John!
greet("Alice", "Hi"); // Output: Hi, Alice!


// Enum
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

const primaryColor: Color = Color.Red;
console.log(primaryColor); // Output: "RED"
