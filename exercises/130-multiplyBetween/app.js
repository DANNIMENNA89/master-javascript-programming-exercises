function multiplyBetween(num1, num2) {
    // your code 
    if(num2<=num1){
        return 0;
    }
    else{
        let num = num1;
        num1=num1+1
        while(num1!=num2){
            num=num*num1;
            num1=num1+1;
                    }
        return num;
    }

}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24
