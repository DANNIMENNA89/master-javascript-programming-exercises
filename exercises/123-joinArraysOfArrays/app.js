function joinArrayOfArrays(arr) {
  // your code here
  let ar= arr[0];
  for (let i = 1; i < arr.length; i++) {
    ar=ar.concat(arr[i]);
    
  }
return ar;
}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']
