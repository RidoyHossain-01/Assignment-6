# JavaScript ES6 Basics

## 1) Difference between `var`, `let`, and `const`
- `var` is function-scoped and can be redeclared.  
- `let` is block-scoped and can be updated but not redeclared.  
- `const` is block-scoped and cannot be reassigned.  

## 2) Difference between `map()`, `forEach()`, and `filter()`
- `map()` returns a **new array** after applying a function to each item.  
- `forEach()` just loops through items but doesn’t return anything.  
- `filter()` returns a **new array** with items that pass a condition.  

## 3) Arrow Functions in ES6
- Arrow functions are a shorter way to write functions using `=>`.  
- They don’t have their own `this`, so they are good for callbacks.  

## 4) Destructuring Assignment in ES6
- Destructuring lets you pull values from arrays or objects into variables.  
- Example: `const {name, age} = person;` or `const [a, b] = arr;`.  

## 5) Template Literals in ES6
- Template literals use backticks (`` ` ``) and support `${}` for variables.  
- They are easier and cleaner than string concatenation with `+`.  
