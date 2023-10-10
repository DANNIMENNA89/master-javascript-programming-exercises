let obj = {
    firstName: "Rafael",
    lastName: "Leao",
    country: "Italy",
    city: "Milan",
    phoneNum: "123-456-789",
    jerseyNum: 27
}

function countNumberOfKeys(obj) {
    // your code here
    let sum = 0;
   for (const key in obj) {
    sum++;  
   }
   return sum;
}

let output = countNumberOfKeys(obj);
console.log(output); // --> 6
