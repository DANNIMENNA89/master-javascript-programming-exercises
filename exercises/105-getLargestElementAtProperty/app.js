function getLargestElementAtProperty(obj, key) {
    // your code here
    let resultado = [];
    if (obj.hasOwnProperty(key) && obj[key].length>0 && Array.isArray(obj[key])) {
        resultado = Math.max.apply(Math, obj[key]);
        
    }
    return resultado;
    
}

let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
