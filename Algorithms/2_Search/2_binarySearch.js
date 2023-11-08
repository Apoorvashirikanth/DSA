/*this is correct but using for loop defeats the purpose of using binary search
big o of this code is O(n)
function binarySearch(arr, target){
    let max = arr.length-1 //4
    let min = 0 
    let mid = Math.floor((max + min) / 2)
    if(arr[mid] == target){
        return mid
    }
    else if(arr[mid] > target){
        max = mid -1 ;
        for(let i=min; i<mid ; i++){
            if(arr[i]==target){
                return i
            }
        }
    }else{
        min = mid+1;
        for(let i=min; i<=max ; i++){
            if(arr[i]==target){
                return i
            }
        }
    }
return -1;
}*/

function binarySearch(arr, target) {
    let max = arr.length - 1;
    let min = 0;
  
    while (min <= max) {
      let mid = Math.floor((max + min) / 2);
  
      if (arr[mid] === target) {
        return mid; 
      } else if (arr[mid] < target) {
        min = mid + 1; 
      } else {
        max = mid - 1; 
      }
    }
  
    return -1; 
  }

console.log(binarySearch([-5,2,4,6,10], 6))
console.log(binarySearch([-5,2,4,6,10], -5))
console.log(binarySearch([-5,2,4,6,10], 10))
console.log(binarySearch([-5,2,4,6,10], 16))

//big O = o(log n)