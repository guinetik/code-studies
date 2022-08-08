// compare neighboring elements and swap if out of order.
// keep doing this until no more swaps are made.
// Time Complexity: O(n^2)
// Space Complexity: O(1)

function bubbleSortBasic(items) {
  for (let j = 0; j < items.length; j++) {
    for (let i = 0; i < items.length - 1; i++) {
      if (items[i] > items[i + 1]) {
        const aux = items[i];
        items[i] = items[i + 1];
        items[i + 1] = aux;
      }
    }
  }
  return items;
}

function bubbleSortOrdered(items) {
  for (let j = 0; j < items.length; j++) {
    for (let i = 0; i < items.length - 1; i++) {
      if (items[i] > items[i + 1]) {
        //array destructuring
        [items[i], items[i + 1]] = [items[i + 1], items[i]];
      }
    }
  }
  return items;
}

function bubbleSortSwapCheck(items) {
    let swap;
    let last = items.length-1;
    do {
        swap = false;
        for (let i = 0; i < last; i++) {
            if (items[i] > items[i + 1]) {
                [items[i], items[i + 1]] = [items[i + 1], items[i]];
                swap = true;
            }
        }
        last--;
    } while (swap);
    return items;
  }

const testArray = [13, 2, 1, 3, 8, 5];
console.time("bubbleSortBasic");
console.log("bubble sort", bubbleSortBasic(testArray)); // [1,2,3,4,5]
console.timeEnd("bubbleSortBasic");
console.time("bubbleSortOrdered");
console.log("bubble sort", bubbleSortOrdered(testArray)); // [1,2,3,4,5]
console.timeEnd("bubbleSortOrdered");
console.time("bubbleSortOrderedDoWhile");
console.log("bubble sort", bubbleSortSwapCheck(testArray)); // [1,2,3,4,5]
console.timeEnd("bubbleSortOrderedDoWhile");