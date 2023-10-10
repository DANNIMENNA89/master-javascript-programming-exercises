function multiply(num1, num2) {
    // your code here
    let sum = 0;
    if (num1<0 && num2>0){
        for (let i = 0; i < num2; i++) {
            sum = sum + num1;
        }
    }
    else if (num1>0 && num2<0){
        for (let i = 0; i < num1; i++) {
            sum = sum + num2;
        }
    }
    else if (num1>0 && num2>0){
        for (let i = 0; i < num2; i++) {
            sum = sum + num1;
        }
    }
    else{
        num1 = -num1;
        num2=-num2;
        for (let i = 0; i < num2; i++) {
            sum = sum + num1;
        }
    }
    
    return sum;
}

let output = multiply(-4, -7);
console.log(output); // --> 28
