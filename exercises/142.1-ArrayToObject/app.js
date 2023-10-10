function transformFirstAndLast(array) {
  // your code here
  let key = array[0];
  let valor = array[array.length-1]
  let obj= new Object;
  obj[key] = valor;

  return obj;
}

let arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
console.log(transformFirstAndLast(arr)); // --> { Queen: "Beyonce" }
