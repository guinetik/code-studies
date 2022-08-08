// The Merge Sort algorithm is based on recursion.
// It reduces the array to a decision tree
// It uses a Dynamic Programming concept called Divide and Conquer.
// Divide And Conquer can be summarized with 3 steps:
// 1. Divide the array into two halves
// 2. Sort each half
// 3. Merge the two sorted halves
// Whenever you divide in half, you're kind of cutting half of the work most of the time, so this will reduce the time complexity.
// Time Complexity: O(n log n) - Logarithmic time

function mergeSort(items) {
  const half = items.length / 2;
  if (items.length <= 1) {
    return items;
  }
  const left = items.splice(0, half);
  const right = items;
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let sortedArr = []; // the sorted elements will go here
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}
const testArray = [13, 2, 1, 3, 8, 5];
console.time("mergeSort");
console.log("merge sort", mergeSort(testArray)); // [1,2,3,5,8,13]
console.timeEnd("mergeSort");
