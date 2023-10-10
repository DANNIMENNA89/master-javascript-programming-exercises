function computeSumOfAllElements(arr) {
  // your code here
  let sum = 0;
  arr.forEach(element => {
    sum = sum + element;
  });
  return sum;
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
