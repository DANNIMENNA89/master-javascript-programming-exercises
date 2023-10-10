function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    let min = Math.min(word1.length, word2.length, word3.length);
    for (let i = 0; i < 3; i++) {
        if(word1.length==min) return word1;
        else if (word2.length==min) return word2;
        else return word3;
        
    }
    
}

let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
