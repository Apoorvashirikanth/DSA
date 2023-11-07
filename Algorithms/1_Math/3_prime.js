function isPrime(n){
    if(n<2){
        return false;
    }
    for(let i=2; i< n; i++){
        if(n%i ==0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(5));
console.log(isPrime(4));
console.log(isPrime(3));
console.log(isPrime(9)); //false
console.log(isPrime(11));
console.log(isPrime(2)); // true - the only even prime number 
console.log(isPrime(1)); //false
console.log(isPrime(0)); // false

//big O = o(n)

// optimised solution  
// for(let i = 2; i<=Math.sqrt(n); i++){}
// big O= O(sqrt(n))