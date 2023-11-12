function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }
    const mid = Math.floor(arr.length /2);
    const leftArr = arr.slice(0,mid);
    const rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));  //heart of the merge sort algorithm 
}
//log n complexity for divide

function merge(leftArr, rightArr){
    let sortedArr = []
    while(leftArr.length>0 && rightArr.length>0)
    {
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]; 
//[-6] [20] , -6<20 , so now -6 is pushed to sorted arr, 
//so sorted array =[-6] ! what about 20 ?? it needs to be concatenated to the sorted arr, hence use spread operator to concatenate
}
//n complexity for merge
        
let arr = [-6, 20, 8, -2, 4];
console.log(mergeSort(arr));

//big O = O(n logn)