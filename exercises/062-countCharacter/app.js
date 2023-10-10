function countCharacter(str, char) {
    // your code here
    let sum =0;
    for (let i = 0; i < str.length; i++) {
        if (str[i]==char) sum = sum +1;
    }
    
     return sum;
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
