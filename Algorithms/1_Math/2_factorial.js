function fact(n){
    let product = 1;
    for(let i=1; i<=n ;i++){
        product *= i;
    }
    return product;
}

console.log(fact(4));
console.log(fact(5));
console.log(fact(0));
console.log(fact(1));

// Big O = O(n)