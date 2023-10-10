function getSquaredElementsAtProperty(obj, key) {
    // your code here
    let resultado = [];
    if (obj.hasOwnProperty(key) && obj[key].length>0 && Array.isArray(obj[key])) {
        resultado = obj[key].map(x => x**2);
    }
    return resultado;
}

let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
