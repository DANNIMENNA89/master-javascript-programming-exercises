function getSmallestElementAtProperty(obj, key) {
    // your code here
    let resultado = [];
    if (obj.hasOwnProperty(key) && obj[key].length>0 && Array.isArray(obj[key])) {
        resultado = Math.min.apply(Math, obj[key]);
        
    }
    return resultado;
}


let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
