// Write your function here
function getElementsThatEqual10AtProperty (obj, key){
    let resultado = [];
    if (obj.hasOwnProperty(key) && obj[key].length>0 && Array.isArray(obj[key])) {
        resultado = obj[key].filter(elem => elem ==10);
    }
    return resultado;
}

let obj = {
    keyli: [1000, 100, 50, 10]
  };
  let output = getElementsThatEqual10AtProperty(obj, 'key');
  console.log(output); // --> [10, 10]