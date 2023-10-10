function computeProductOfAllElements(arr) {
  // your code here
  let prod = 0;
  if (arr.length>0){
    prod=1;
    arr.forEach(element => {
      prod=prod*element;
    });
  }
  return prod;
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
