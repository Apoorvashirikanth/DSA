function cartesianProduct(arrA, arrB){
    let cartesian = [];
    for(let i=0; i<arrA.length; i++){
        for(let j=0; j<arrB.length; j++){
            cartesian.push([arrA[i], arrB[j]])
        }
    }
    return cartesian;
}

const arrA = [1,2];
const arrB = [3,4,5];
console.log(cartesianProduct(arrA, arrB))

//big O = O(m*n) since the 2 arrays can be of varying lengths 