// Write your function here
function getIndexOf (char, str){
    let va = -1;
    for (let i = 0; i < str.length; i++) {
        if (str[i]===char) return i;        
    }
    return va;

}

let output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2
