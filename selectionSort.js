function findMinIndex(array, start){
    let index = start;
    for (let i = start + 1; i < array.length; i++){
        if (array[i] < array[index]){
            index = i;
        }
    }
    return index;
}

function selectionSort(array){
    let temp;
    for (let i = 0; i < array.length; i++){
        let min_index = findMinIndex(array, i)
        if (array[min_index] < array[i]){
            temp = array[i];
            array[i] = array[min_index];
            array[min_index] = temp;
        }
    }
    return array;
}

a1 = [10, 2, 6, 7, 3, 30, 1, 3, 2, 0]
console.log(`Original array: ${a1}`)
console.log(`Sorted array: ${selectionSort(a1)}`)