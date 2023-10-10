function getStringLength(string) {
    // your code here
    for (let i = 0; i < Infinity; i++) {
        if (string.substring(i, i+1)=='')return i;
        
    }
}

let output = getStringLength('hello');
console.log(output); // --> 5
