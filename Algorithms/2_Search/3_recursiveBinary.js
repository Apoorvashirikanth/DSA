function recursiveBinary(arr, t){
    return search(arr, t, 0, arr.length-1)
}

function search(arr, t, min, max){
    if(min>max){
        return -1
    }

    let mid = Math.floor((min+max)/2);
    if(t == arr[mid]){
        return mid;
    }

    if(t < arr[mid]){
        return search(arr, t, min, mid-1);
    }

    else{
        return search(arr, t, mid+1, max);
    }
}


console.log(recursiveBinary([-5,2,4,6,10], 6))
console.log(recursiveBinary([-5,2,4,6,10], -5))
console.log(recursiveBinary([-5,2,4,6,10], 10))
console.log(recursiveBinary([-5,2,4,6,10], 16))

//big O = O(log n)