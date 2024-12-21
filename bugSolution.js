function foo(a, b) {
  // Handle null and undefined using the nullish coalescing operator
  a ??= 0; // Assign 0 if a is null or undefined
  b ??= 0; // Assign 0 if b is null or undefined
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0
console.log(foo(undefined,2)); // Output: 2
console.log(foo(1, undefined)); // Output: 1
console.log(foo(undefined, undefined)); // Output: 0