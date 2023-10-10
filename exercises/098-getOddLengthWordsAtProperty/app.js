// Write your function here
function getOddLengthWordsAtProperty(obj, key){
    let resultado = [];
    if (obj.hasOwnProperty(key) && obj[key].length>0 && Array.isArray(obj[key])) {
        resultado = obj[key].filter(elem => elem.length%2!=0);
    }
    return resultado;
}

let obj = {
    key: ['It', 'has', 'some', 'words']
  };
  let output = getOddLengthWordsAtProperty(obj, 'key');
  console.log(output); // --> ['has', 'words']