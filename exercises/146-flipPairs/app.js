function flipPairs(input) {
    // your code here
    let i = 0;
    let str=[];

    if (input.length%2==0){
        while(i<input.length){
                str.push(input[i+1]);
                str.push(input[i]);
                i = i +2;
        }
    }
    else{
        while(i<input.length-1){
            str.push(input[i+1]);
            str.push(input[i]);
            i = i +2;
        }
        str.push(input[input.length-1]);
    }
    
    return str.join('');    
    
}

let input = "Can you see what this is about?";
let output = flipPairs(input);
console.log(output); // --> aC noy ues ehwtat ih ssia obtu?
