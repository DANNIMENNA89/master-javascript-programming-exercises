function getLongestElement(arr) {
    // your code here
    let word = "";
    if (arr.length>0){
        word = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (word.length<arr[i].length){
                word=arr[i];
            }
            
        }
    }
    return word;
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
