 /*
 Write a function `howSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.
 The function should return an array containing any combination of elements that add up to exactly the targetSum.
 If there is no valid combination, return null.
 If there are multiple combinations possible, you may return any single one.
*/

const howSum = (targetSum, numbers, memo={}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;
    for(let num of numbers) {
        const diff = targetSum - num;
        const result = howSum(diff, numbers, memo);
        if(result !== null) {
            memo[targetSum] = [...result, num];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
}
console.log("how to sum 2 and 3 to get 7", howSum(7, [2, 3])); // [3,2,2]
console.log("how to sum 5,3,4,7 to get 7", howSum(7, [5, 3, 4, 7])); // [4,3]
console.log("how to sum 2,4 to get 7", howSum(7, [2,4])); //null
console.log("how to sum 2,3,5 to get 8", howSum(8, [2,4])); // [2, 2, 2, 2]
// m = target sum
// n = numbers.length
// Memoized Time Complexity: O(n*m^2)
// Memoized Space Complexity: O(m^2) - each m is a key in the memo object and each value is an array of solutions