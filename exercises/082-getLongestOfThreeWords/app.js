function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    let max = Math.max(word1.length, word2.length, word3.length);
    for (let i = 0; i < 3; i++) {
        if(word1.length==max) return word1;
        else if (word2.length==max) return word2;
        else return word3;
        
    }
        
    
    
}

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
