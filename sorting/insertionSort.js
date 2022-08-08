// Insertion Sort is based on the idea of drawing a deck of cards and then arranging them in order as they're being drawn.
// For implementation it takes two loops:
// The external loop starts at the second element and it keeps track of the current element to be inserted
// The inner loop starts at the first element it's responsible for comparing the current value with the other pre-sorted values.
// Time Complexity: O(n^2) - Quadratic time
function insertionSort(items) {
    let current;
    for (let i = 1; i < items.length; i++) {
        let j = i-1;
        current = items[i];
        while(j>=0 && current < items[j]){
            items[j+1] = items[j];
            j--;
        }
        items[j+1] = current;
    }
    return items;
}
const testArray = [13,2, 1, 3, 8, 5];
console.time("insertionSort");
console.log("insertion sort", insertionSort(testArray)); // [1,2,3,5,8,13]
console.timeEnd("insertionSort");