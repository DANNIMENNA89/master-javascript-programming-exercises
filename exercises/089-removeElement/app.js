// Write your function here
function removeElement (arr, item){
return arr.filter(element => element!=item);
}
let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]