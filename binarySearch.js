function binarySearch(A, key){
    let low = 0;
    let high = A.length - 1;
    console.log(low, high)
    while(low <= high){
        let mid = Math.floor((high + low)/2);
        if (A[mid] == key){
            return mid;
        }
        else if (key > A[mid]){
            low = mid + 1;
        }
        else{
            high = mid - 1;
        }
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));