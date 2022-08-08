// A HeapSort is an improved Selection Sort.
// It divides the array into a sorted and an unsorted partitions 
// and iteratively shrinks the unsorted partition by extracting the largest element 
// and moving that to the sorted region.

const buildMaxHeap = (arr) => {
  // Get index of the middle element
  let i = Math.floor(arr.length / 2 - 1);

  // Build a max heap out of
  // All array elements passed in
  while (i >= 0) {
    heapify(arr, i, arr.length);
    i -= 1;
  }
};

const heapify = (heap, i, max) => {
  let index;
  let leftChild;
  let rightChild;

  while (i < max) {
    index = i;

    // Get the left child index
    // Using the known formula
    leftChild = 2 * i + 1;

    // Get the right child index
    // Using the known formula
    rightChild = leftChild + 1;

    // If the left child is not last element
    // And its value is bigger
    if (leftChild < max && heap[leftChild] > heap[index]) {
      index = leftChild;
    }

    // If the right child is not last element
    // And its value is bigger
    if (rightChild < max && heap[rightChild] > heap[index]) {
      index = rightChild;
    }

    // If none of the above conditions is true
    // Just return
    if (index === i) {
      return;
    }

    // Else swap elements
    swap(heap, i, index);

    // Continue by using the swapped index
    i = index;
  }
};

const swap = (arr, firstItemIndex, lastItemIndex) => {
  const temp = arr[firstItemIndex];

  // Swap first and last items in the array
  arr[firstItemIndex] = arr[lastItemIndex];
  arr[lastItemIndex] = temp;
};

const heapSort = (arr) => {
  // Build max heap
  buildMaxHeap(arr);

  // Get the index of the last element
  lastElement = arr.length - 1;

  // Continue heap sorting until we have
  // One element left
  while (lastElement > 0) {
    swap(arr, 0, lastElement);
    heapify(arr, 0, lastElement);
    lastElement -= 1;
  }

  // Return sorted array
  return arr;
};


const heapsortSpread = arr => {
    const a = [...arr];
    let l = a.length;
  
    const leHeapify = (a, i) => {
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      let max = i;
      if (left < l && a[left] > a[max]) max = left;
      if (right < l && a[right] > a[max]) max = right;
      if (max !== i) {
        [a[max], a[i]] = [a[i], a[max]];
        leHeapify(a, max);
      }
    };
  
    for (let i = Math.floor(l / 2); i >= 0; i -= 1) leHeapify(a, i);
    for (i = a.length - 1; i > 0; i--) {
      [a[0], a[i]] = [a[i], a[0]];
      l--;
      leHeapify(a, 0);
    }
    return a;
  };

const testArray = [13, 2, 1, 3, 8, 5];
console.time("heapSort");
console.log("heap sort", heapSort(testArray)); // [1,2,3,5,8,13]
console.timeEnd("heapSort");
//
console.time("heapsortSpread");
console.log("heap sort spread", heapsortSpread(testArray)); // [1,2,3,5,8,13]
console.timeEnd("heapsortSpread");