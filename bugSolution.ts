function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // Works fine
let result2 = subtract(10, 5); // Works fine

//Corrected
let result3 = add(5, 3); 
let result4 = subtract(10, 5);

//Alternative solution using type guards
function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    throw new Error("Invalid input: arguments must be numbers");
  }
}

function subtractSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a - b;
  } else {
    throw new Error("Invalid input: arguments must be numbers");
  }
}

let result5 = addSafe(5, "3"); // Throws an error
let result6 = subtractSafe("10", 5); // Throws an error