function findPairForSum(array, number) {
  // your code here
  let arr=[];
  for (let i = 0; i < array.length-1; i++) {
    for (let j = i+1; j < array.length; j++) {
      if(array[i]+array[j]==number){
        arr.push(array[i]);
        arr.push(array[j]);
        return arr;

      }
      
    }
    
  }
}

let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
