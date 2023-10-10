// Write your function here
function getElementsGreaterThan10AtProperty(obj, key){
    let resultado = [];
    if (obj.hasOwnProperty(key) && obj[key].length>0 && Array.isArray(obj[key])) {
        resultado = obj[key].filter(elem => elem > 10);
    }
    return resultado;
}

let obj = {
    key: [1, 20, 30]
  };
  let output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output); // --> [20, 30]