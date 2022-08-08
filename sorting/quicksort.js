// QUick Sort follows the Divide and Conquer approach.
// Select an element called pivot from the array.
// Next, compare each element in the array with the pivot element.
// Finally, perform the same operations on the left and right side of the pivot element.

function quickSortImperative(origArray) {
	if (origArray.length <= 1) { 
		return origArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(quickSortImperative(left), pivot, quickSortImperative(right));
	}
}

// This implementation also uses recursion, but uses the spread to clone the original array.
// If the length of the array is less than 2, return the array.
// Use Math.floor to calculate the pivot index.
// Use the reduce method to partition the array.
// Recursively call the quickSort function on the left and right partitions.
const quickSort = arr => {
    const a = [...arr];
    if (a.length < 2) return a;
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = a[pivotIndex];
    const [lo, hi] = a.reduce(
      (acc, val, i) => {
        if (val < pivot || (val === pivot && i != pivotIndex)) {
          acc[0].push(val);
        } else if (val > pivot) {
          acc[1].push(val);
        }
        return acc;
      },
      [[], []]
    );
    return [...quickSort(lo), pivot, ...quickSort(hi)];
  };
const testArray = [13, 2, 1, 3, 8, 5];
console.time("quickSortImperative");
console.log("quick sort", quickSortImperative(testArray)); // [1,2,3,5,8,13]
console.timeEnd("quickSortImperative");
//
console.time("quickSort");
console.log("quick sort", quickSort(testArray)); // [1,2,3,5,8,13]
console.timeEnd("quickSort");
//