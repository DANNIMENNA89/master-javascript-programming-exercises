function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  if (arr.length == 0){
    return 0;
}
else{
    let num = 0;
    arr.forEach(element => {
        if(typeof element==='number'){
           if (num>element || num==0){
            num=element;
           }

        }
    });
    return num;
}
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
