function modulo(num1, num2) {
    // your code here
   if (num1<0){
    return (num1-(num2*(parseInt(num1/num2))));
   }
   else{
    return num1-(num2*(parseInt(num1/num2)));
   }
    
}

let output = modulo(-25, 4);
console.log(output); // --> 1
