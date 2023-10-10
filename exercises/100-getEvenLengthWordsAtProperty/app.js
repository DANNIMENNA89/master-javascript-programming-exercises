function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    let resultado = [];
    if (obj.hasOwnProperty(key) && obj[key].length>0 && Array.isArray(obj[key])) {
        resultado = obj[key].filter(elem => elem.length%2==0);
    }
    return resultado;
    
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
