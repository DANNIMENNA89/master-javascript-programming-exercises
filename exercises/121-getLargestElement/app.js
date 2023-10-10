function getLargestElement(arr) {
  // your code here
  if (arr.length == 0){
    return 0
}
else{
    let num= arr[0];
    arr.forEach(element => {
        if(num<element){
            num = element;
        }
    });
    return num;

}

}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;