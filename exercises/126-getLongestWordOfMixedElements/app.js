function getLongestWordOfMixedElements(arr) {
    // your code here
    if (arr.length == 0){
        return ''
    }
    else{
        let word ='';
        arr.forEach(element => {
            if(typeof element=='string'){
               if (word.length<element.length){
                word=element;
               }
    
            }
        });
        return word;
    }
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
