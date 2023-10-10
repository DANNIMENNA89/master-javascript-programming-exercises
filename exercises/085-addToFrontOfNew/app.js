function addToFrontOfNew(arr, element) {
    // your code here
    let arr1 = [element];
    arr1= arr1.concat(arr);
    return arr1;
    
}

let input = [1, 2];
let output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]
