// function climbinStaircase(n){
//     if(n<=2){
//         return n;
//     }
//     return climbinStaircase(n-1) + climbinStaircase(n-2);
// }

//big O = O(2^n)

function climbinStaircase(n){
    const noOfWays = [1,2];
    for(let i= 2; i<=n; i++){
        noOfWays[i] = noOfWays[i-1] + noOfWays[i-2]
    }
    return noOfWays[n-1]
}

//big O = O(n)


let n = 6;
console.log(climbinStaircase(n))