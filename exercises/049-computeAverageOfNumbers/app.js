// Write your function here
function computeAverageOfNumbers (arr){

    if (arr.length==0) return 0;

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]; 
    }
    sum= sum/arr.length;
    return sum;
}

let input = [1, 2, 3, 4, 5];
let output = computeAverageOfNumbers(input);
console.log(output); // --> 3
