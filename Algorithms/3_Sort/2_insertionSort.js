function inserstionSort(arr){
    for(let i= 1; i<arr.length; i++){
        let numberToInsert = arr[i];
        let j= i-1;

        while(j>=0 && numberToInsert<arr[j]){
            arr[j+1] = arr[j];
            j = j-1;
        }
        arr[j+1] = numberToInsert;
    }
}

//descending

// function inserstionSort(arr){
//     for(let i= 1; i<arr.length; i++){
//         let numberToInsert = arr[i];
//         let j= i-1;

//         while(j>=0 && numberToInsert>arr[j]){
//             arr[j+1] = arr[j];
//             j = j-1;
//         }
//         arr[j+1] = numberToInsert;
//     }
// }

// let arr = [-6, 20, 8, -2, 4];
let arr = [100, -6, 20, 8, -2, 4];
inserstionSort(arr);
console.log(arr);