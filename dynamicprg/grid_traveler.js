/**
Say that you are a traveler on a 2D grid. 
You begin in the top-left corner and your goal is to travel to the bottom-right corner.
You may only move right and down.
In how many ways can you travel to the goal on a grid with dimensions m x n?
Write a function gridTraveler(m,n) that returns the number of ways to travel to the goal.
*/
// Example: gridTraveler(2,3) -> 3
/**
 *
 * @param {number} m - grid rows
 * @param {number} n - grid columns
 */
const gridTravelerRecursive = (m, n) => {
  // identify base cases
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return gridTravelerRecursive(m - 1, n) + gridTravelerRecursive(m, n - 1);
};
console.log(gridTravelerRecursive(1, 1)); // 1
console.log(gridTravelerRecursive(2, 3)); // 3
console.log(gridTravelerRecursive(3, 2)); // 3
console.log(gridTravelerRecursive(3, 2)); // 3
console.log(gridTravelerRecursive(3, 3)); // 6
console.time("grid 18x18");
console.log(gridTravelerRecursive(18, 18)); // 2333606220
console.timeEnd("grid 18x18");
//
// Here the time complexity is O(2^(m+n)) - Exponential
// Space complexity is O(m+n) - Linear
// Calculating grid 18x18 takes ~50 seconds in average.
//
// A dynamic programming approach can be used to improve the time complexity.
// Deconstructing the grid into a tree structure yields a binary tree, where each node has two children.
// We can use memoization to store the results of the recursive calls.
/**
 * Calculates the number of ways to travel to the goal on a grid with dimensions m x n using dynamic programming.
 * @param {*} m - grid rows
 * @param {*} n - grid columns
 * @param {*} memo - memoization array
 */
const gridTravelerMemo = (m, n, memo = {}) => {
  // create a key for the memo object
  const key = `${m}-${n}`;
  // check if the key exists in the memo object
  if (key in memo) return memo[key];
  // identify base cases
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  // calculate the result and store it in the memo object
  memo[key] =
    gridTravelerMemo(m - 1, n, memo) + gridTravelerMemo(m, n - 1, memo);
  // return the result
  return memo[key];
};
//
console.log(gridTravelerMemo(1, 1)); // 1
console.log(gridTravelerMemo(2, 3)); // 3
console.log(gridTravelerMemo(3, 2)); // 3
console.log(gridTravelerMemo(3, 2)); // 3
console.log(gridTravelerMemo(3, 3)); // 6
console.time("grid 18x18");
console.log(gridTravelerMemo(18, 18)); // 2333606220
console.timeEnd("grid 18x18");