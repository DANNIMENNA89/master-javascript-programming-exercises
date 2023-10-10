function fromListToObject(array) {
  // your code here
  let obj = new Object;
  for (let i = 0; i < array.length; i++) {
    let key = array[i][0];
    let valor = array[i][1];
    obj[key] = valor;
    
  }
  return obj;
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // --> { make: 'Ford', model: 'Mustang', year: 1964 }
