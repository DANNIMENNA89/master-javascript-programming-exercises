function getLengthOfLongestElement(arr) {
    // Your code here
    let cont = 0;

    if(arr.length>0){
        arr.forEach(element => {
            if (cont<element.length){
                cont=element.length;
            }
        });
    }
    return cont;
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
