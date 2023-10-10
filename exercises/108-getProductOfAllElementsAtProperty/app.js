function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    let prod = 0;
    if(obj.hasOwnProperty(key) && Array.isArray(obj[key]) && obj[key].length>0){
      prod = 1;
      obj[key].forEach(element => {
        prod = prod * element;
        
      });

    } 
    return prod;
}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
