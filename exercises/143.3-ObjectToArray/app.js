function convertObjectToList(obj) {
  // your code here
  let arr = [];
  for (const key in obj) {
      let arr1 = [];
      arr1[0]= key;
      arr1[1]=obj[key];
      arr.push(arr1);
      
    }
    return arr;
  }
    
 

let output = convertObjectToList({ name: 'Holly', age: 35, role: 'producer' });
console.log(output); // --> [ ['name', 'Holly'], ['age', 35], ['role', 'producer'] ]
