function findShortestWordAmongMixedElements(arr) {
    // your code here
    if (arr.length == 0){
        return ''
    }
    else{
        let word ='';
        arr.forEach(element => {
            if(typeof element=='string'){
               if (word.length>element.length || word==''){
                word=element;
               }
    
            }
        });
        return word;
    }
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
