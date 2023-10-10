function transformEmployeeData(array) {
  // your code here
  let empleado = array.length;
  let inf =array[0].length;
  console.log(empleado);
  console.log(inf);
  let arr = [];
  for (let i = 0; i < empleado; i++) {
    let obj = {};
    for (j=0; j<inf; j++){
      obj[array[i][j][0]] = array[i][j][1];
    }
   arr.push(obj);
    
  }
  
  return arr;
}

let output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']], [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]);
console.log(output); // --> [{ firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' }, { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }]
