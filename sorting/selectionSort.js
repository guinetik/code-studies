const testArray = [13,2, 1, 3, 8, 5];
// Selection sort is a simple algo, but it has a big time complexity, so it's not a good choice for large arrays.
// Worst Case Time Complexity: O(n^2) - Quadratic time
// Iterates through the array, search for the smallest elements and bring it to the front.
function selectionSort(items) {
    let smallest;
    for(let i=0;i<items.length;i++){
        smallest = i;
        for(let j=i+1;j<items.length;j++){
            if(items[j]<items[smallest]){
                smallest = j;
            }
        }
        if(smallest!==i){
            [items[i],items[smallest]] = [items[smallest],items[i]];
        }
    }
    return items;
}
console.time("selectionSort");
console.log("selection sort", selectionSort(testArray)); // [1,2,3,5,8,13]
console.timeEnd("selectionSort");