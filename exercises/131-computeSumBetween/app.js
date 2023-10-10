function computeSumBetween(num1, num2) {
    // your code here
    if(num2<=num1){
        return 0;
    }
    else{
        let num = num1;
        num1=num1+1
        while(num1!=num2){
            num=num+num1;
            num1=num1+1;
                    }
        return num;
    }


}

let output = computeSumBetween(2, 5);
console.log(output); // --> 9
