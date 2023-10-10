function filterOddElements(arr) {
  // your code here

  let resultado = arr.filter(el => el%2 != 0);

  return resultado;
  
}

let output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]
