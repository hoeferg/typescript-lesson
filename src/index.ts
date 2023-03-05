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
    // const small = 1;
    // const medium = 2;
    // const large = 3;
    // // Use PascalCase
    // // Will start at 0
    // const enum Size { Small = 1, Medium, Large};
    // let mySize: Size =Size.Medium;
    // console.log(mySize);

// function
    // define the value type for both in input and the output. 
    // The last number in the top line of the function is the number
    // We can make a variable optional by using a ?

// function calculateTax(income: number, taxYear = 2022): number {
//     if ((taxYear  < 2022) 
//         return income * 1.2
//     return income * 1.3
// }

// calculateTax(10_000, 2023)

// objects
// let employee : {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// } = { 
//     id : 1,
//     name: ' Gayle', 
//     retire: (date: Date) => {
//         console.log(date);
//     } 
// }