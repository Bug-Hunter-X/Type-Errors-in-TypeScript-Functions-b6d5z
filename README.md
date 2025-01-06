# Type Errors in TypeScript Functions

This example demonstrates a common type error in TypeScript that arises when passing incorrect argument types to functions.  TypeScript's type system helps catch these issues during development, preventing runtime errors. 

## Bug
The `add` and `subtract` functions are defined to accept two numbers as input.  However, in the code, strings are passed as arguments, which leads to a TypeScript compilation error. 

## Solution
The solution involves ensuring that only numbers are passed as arguments. This can be achieved through improved input validation or stricter type handling.