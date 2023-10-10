function detectOutlierValue(string) {
    // your code here
    let par = 0;
    let impar = 0;
    let arr = string.split(' ');
   
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2==0){
            par = par + 1;
        }
        else{
            impar = impar + 1;
        }
    }
    if (par==1){
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]%2==0) return i+1;   
        }
    }else{
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]%2!=0) return i+1;
        }
        
    }
     
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // --> 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  // --> 2
