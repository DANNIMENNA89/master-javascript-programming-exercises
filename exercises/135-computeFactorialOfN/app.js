function computeFactorialOfN(n) {
    // your code here
    let factor =0;
    if (n>0){
        factor = n;
        for (let i = 1; i < n; i++) {
            factor = factor * i;            
        }
    }
    return factor;
    
}

let output = computeFactorialOfN(4);
console.log(output); // --> 24
