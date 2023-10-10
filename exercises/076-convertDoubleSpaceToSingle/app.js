function convertDoubleSpaceToSingle(str) {
    // your code here
    let word1 = str.split('  ');
    let word2= word1.join(' ');
    return word2;

    //  let frase = str.replaceAll('  ',' ');
   //   return frase;

}

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
