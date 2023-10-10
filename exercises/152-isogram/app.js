function isIsogram(text) {
  // your code here
  text = text.toLowerCase();
  let array = text.split('');
  for (let i = 0; i < array.length-1; i++) {
    for (let j = i+1; j < array.length; j++) {
      if(array[i]=== array[j]) return false;
    }
    
  }
  return true;
}

console.log(isIsogram("Camile")); // --> true
console.log(isIsogram("Camille")); // --> false
