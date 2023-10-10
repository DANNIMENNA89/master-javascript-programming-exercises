function getAllWords(str) {
    // your code here
    let word = str.split(' ');
    return word;

}

let output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
