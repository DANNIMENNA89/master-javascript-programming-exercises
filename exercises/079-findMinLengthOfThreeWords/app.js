// Write your function here
function findMinLengthOfThreeWords (w1, w2, w3){

    let min = Math.min(w1.length, w2.length, w3.length);
    return min;

}

let output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1
