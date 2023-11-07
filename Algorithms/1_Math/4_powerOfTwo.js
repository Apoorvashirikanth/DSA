/*this method provides the right answers but isn't the right way to do it 
function isPowerOfTwo(n){
    if(n%2 ==0 || (0<n && n<2) ){
        return true
    }
    return false
}*/

function isPowerOfTwo(n){
    if(n<1){
        return false
    }
    while(n>1){
        if(n%2 !== 0){
            return false
        }
        n= n/2;
    }
    return true
}

console.log(isPowerOfTwo(1)) // 2^0
console.log(isPowerOfTwo(2)) // 2^1
console.log(isPowerOfTwo(5)) // false

//big O= O(log n) cuz n=n/2

/* optimal solution with O(1) use BITWISE operation
if(n<1) return false
else return ( n & (n-1) ) === 0 
*/
