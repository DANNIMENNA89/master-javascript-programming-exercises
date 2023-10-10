function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    let suma = 0;
    if (obj[key] && Array.isArray(obj[key]) && obj[key].length >0) {
         obj[key].forEach(element => {
        suma = suma + element;
        });
          
    }

    return suma; 

}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13