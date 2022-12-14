/* Simple dumb solution*/

function bubbleSort(array){
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            if (array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

/* A little more efficient 
***************************
Each itereation push 1 largets element to the end.
This method shriks the size of array to look at every iteration.
for array [3, 1, 8, 78, 34, 21] i = 6(array length)
after first iteration, 78 is pushed to end and i = 5 
so next iteration only need to look at 5 values not 6.
*/

function bubbleSort2(array){
    for (let i = array.length; i > 0; i--){
        for (let j = 0; j < i -1; j++){
            if (array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}




/* 
Swap function
This nice/interesting swap function can also be used instead of manual swapping in above algorithms
*/

const swap = (arr, indx1, indx2) => {
    [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
};

// Using this in above function

function bubbleSort3(array){
    for (let i = array.length; i > 0; i--){
        for (let j = 0; j < i -1; j++){
            if (array[j] > array[j+1]){
                swap(array, j, j+1);
            }
        }
    }
    return array;
}

ar1 = [3, 1, 8, 78, 34, 21]
// console.log(bubbleSort(ar1));
console.log(bubbleSort3(ar1));