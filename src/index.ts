// let sales: number = 123_456_789;
// let course: string = 'TypeScript';
// let is_published: boolean = true;
// let level;

// any type
// function render(document: any) {
//     console.log(document);
// }

// arrays
// let numbers: number[] = [];
// numbers.forEach(n => n.toExponential)

// Tuple is a fix length array where each item is a fix type
// restrict it to two values
// let user: [number, string] =[1, 'Mosh']
// user.push(1);

// Enums
const small = 1;
const medium = 2;
const large = 3;
// Use PascalCase
// Will start at 0
const enum Size { Small = 1, Medium, Large};
let mySize: Size =Size.Medium;
console.log(mySize);