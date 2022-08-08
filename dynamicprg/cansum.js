/**
Write a function canSum(targetSum, numbers) that takes in a target sum and an array of numbers as arguments.
The function should return a boolean indicating wether or not it is possible 
to generate the targetSum using numbers from the array.
You may use an element of the array as many time as needed.
You may assume that all input numbers are positive.
*/

const canSum = (targetSum, numbers) => {
    //We're testing for a target sum, but we actually need to do is subtract the targetSum from each item of the array.
    // When the sum reaches 0, we know a solution is possible for that set of numbers.
    if(targetSum === 0) return true;
    if(numbers.length === 0) return false;
    // if the current iteration of targetSum is negative, we know it's impossible to reach the target sum.
    if(targetSum < 0) return false;
    // loop through the array and recurse on the remaining numbers.
    for (let num of numbers) {
        //We're subtracting the current number from the target sum.
        const difference = targetSum - num;
        //If the difference is 0, we know we've found a solution.
        if( canSum(difference, numbers) === true ) return true;
    }
    // If we get to this point, we know that no solution is possible for this set of numbers.
    return false;
};
//
console.log("Can [2,3] sums to 7?", canSum(7, [2,3])); // true
console.log("Can [5,3,4,7] sums to 7?", canSum(7, [5,3,4,7])); // true
console.log("Can [2,4] sums to 7?", canSum(7, [2,4])); // false
console.log("Can [2,3,5] sums to 8?", canSum(8, [2,3,5])); // true
console.time('canSum-300');
console.log("Can [7,14] sums to 300?", canSum(300, [7,14])); // true
console.timeEnd("canSum-300");
//
// To analyse the time complexity of this algorithm, let's think of it as a tree.
// The root node is the target sum, and the children are the difference between the target sum and each number in the array.
// we take the size of the numbers array, lets call it `n`.
// Also we need to take the targetSum, let's calle it `m` will be the height of the tree.
// So it takes `m` steps to go to the top to the leaf of the tree.
// Each step takes `n` steps to go to the next node.
// So it takes `m * n` steps to move between each node of the tree.
// In conclusion, the time complexity is O(m^n) - exponential.
// The space complexity is O(m) - Linear.
// This complexity sucks again because we are brute forcing the tree without caching already known results.
/**
 * Calculate if a target sum can be reached from a set of numbers using memoization.
 * @param {number} targetSum - The target sum to reach.
 * @param {Array<number>} numbers - The array of numbers to use.
 * @returns {boolean} - True if a solution is possible, false otherwise.
 */
const canSumMemo = (targetSum, numbers, memo={}) => {
    // If we have already calculated the result, return it.
    if(targetSum in memo) return memo[targetSum];
    //We're testing for a target sum, but we actually need to do is subtract the targetSum from each item of the array.
    // When the sum reaches 0, we know a solution is possible for that set of numbers.
    if(targetSum === 0) return true;
    if(numbers.length === 0) return false;
    // if the current iteration of targetSum is negative, we know it's impossible to reach the target sum.
    if(targetSum < 0) return false;
    // loop through the array and recurse on the remaining numbers.
    for (let num of numbers) {
        //We're subtracting the current number from the target sum.
        const difference = targetSum - num;
        //If the difference is 0, we know we've found a solution.
        if( canSumMemo(difference, numbers, memo) === true ) {
            memo[targetSum] = true;
            return true;
        }
    }
    // If we get to this point, we know that no solution is possible for this set of numbers.
    memo[targetSum] = false;
    return false;
};
//
console.log("Can [2,3] sums to 7?", canSumMemo(7, [2,3])); // true
console.log("Can [5,3,4,7] sums to 7?", canSumMemo(7, [5,3,4,7])); // true
console.log("Can [2,4] sums to 7?", canSumMemo(7, [2,4])); // false
console.log("Can [2,3,5] sums to 8?", canSumMemo(8, [2,3,5])); // true
console.time('canSum-300');
console.log("Can [7,14] sums to 300?", canSumMemo(300, [7,14])); // true
console.timeEnd("canSum-300");
// By memoizing the results, we can drastically reduce the time complexity to O(m*n) - Linear.