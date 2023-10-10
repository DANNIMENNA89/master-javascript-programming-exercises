function getEvenElementsAtProperty(obj, key) {
    // your code here
    let resultado = [];
    if (obj.hasOwnProperty(key) && obj[key].length>0 && Array.isArray(obj[key])) {
        resultado = obj[key].filter(elem => elem%2==0);
    }
    return resultado;
}

let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
