function findSmallestElement(arr) {
    // your code here
    if (arr.length == 0){
        return 0
    }
    else{
        let num= arr[0];
        arr.forEach(element => {
            if(num>element){
                num = element;
            }
        });
        return num;
 
    }
    
   
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1