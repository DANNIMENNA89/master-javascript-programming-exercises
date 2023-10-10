function sumDigits(num) {
    // your code here
    let sum = 0;
    let a = num.toString();
    if(num>0){
        for (i=0;i<a.length;i++){
        sum = sum + Number(a[i]);
        }
    }
    else{
        sum = Number(a[1])*(-1);
        for (i=2;i<a.length;i++){
            sum = sum + Number(a[i]);
        }
    }
    return sum; 
}

let output = sumDigits(-316);
console.log(output); // --> 4
