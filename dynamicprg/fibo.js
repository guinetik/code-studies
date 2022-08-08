// Write a function fib(n) that takes in a number as an argument.
// The function should return the n-th number of the Fibonacci sequence.
// The 1st and 2nd number of the sequence is 1.
// To generae the next number of the sequence, we sum the previous two.

/**
 * Returns the n-th number of the Fibonacci sequence using a recursive strategy.
 * @param {number} n - The sequence index to return the number for.
 * @returns the n-th number of the Fibonacci Sequence
 */
const fibRecursive = (n) => {
    if(n<= 2) return 1;
    return fibRecursive(n-1) + fibRecursive(n-2);
}
console.log(3, fibRecursive(3));
console.log(4, fibRecursive(4));
console.log(5, fibRecursive(5));
console.log(6, fibRecursive(6));
console.log(7, fibRecursive(7));
console.time("fib 8");
console.log(8, fibRecursive(8));
console.timeEnd("fib 8");
console.time("fib 50");
console.log(50, fibRecursive(50));
console.timeEnd("fib 50");
// 
// The time complexity is O(2^n) - exponential.
// The space complexity is O(n) - linear.
// The problem with this approach is the exponential time complexity, 
// When fib 50 is called, the function takes over a minute to execute.
// for fib(50) it takes 2^50 iterations to execute, which adds to 1.125.899.906.842.624 iterations to execute. 
// Thats over a quadrillion iterations. And 50 is not even a big number.
// One way to reduce the time complexity is to use a dynamic programming approach.
// Notice how this function doesn't store any values in memory, 
// so for each subsequent call to fib(n), it needs to traverse the whole call stack again, even if the value was already computed before.

// One dynamic programing approach is to use a constant-time data structure to store the values of the Fibonacci sequence.
// This technique is called memoization.

/**
 * Calculates the n-th number of the Fibonacci sequence using a dynamic programming approach.
 * @param {*} n - The sequence index to return the number for.
 * @param {*} memo - The memoization data structure to use.
 * @returns - The n-th number of the Fibonacci Sequence.
 */
const fibMemo = (n, memo = {}) => {
    if(n in memo) return memo[n];
    if(n<= 2) return 1;
    memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo);
    return memo[n];
}

console.log(3, fibMemo(3));
console.log(4, fibMemo(4));
console.log(5, fibMemo(5));
console.log(6, fibMemo(6));
console.log(7, fibMemo(7));
console.time("fib memo 8");
console.log(8, fibMemo(8));
console.timeEnd("fib memo 8");
console.time("fib memo 50");
console.log(50, fibMemo(50));
console.timeEnd("fib memo 50");

// By Memoizing the fibonacci sequence, we can reduce the time complexity to O(n) - linear.