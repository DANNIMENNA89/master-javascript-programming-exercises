// Write your function here
function getFirstElementOfProperty (obj, key){
    if (Array.isArray(obj[key]) && obj[key].length>0 && obj.hasOwnProperty(key)) return obj[key][0];
    else return undefined;
}
let obj = {
    key: [1, 2, 4]
  };
  let output = getFirstElementOfProperty(obj, 'key');
  console.log(output); // --> 1