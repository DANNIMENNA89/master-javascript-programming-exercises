function getLengthOfShortestElement(arr) {
    // your code here
    let cont =0;
    if(arr.length==0){
       cont=0;
    }
    else{
        cont = arr[0].length;
        arr.forEach(element => {
            if(element.length < cont){
                cont = element.length;
            }
        });
        
    }
    
    return cont;
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
