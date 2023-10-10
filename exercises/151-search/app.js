function search(array, value) {
  // your code here
let ini = 1;
let fin = array.length;
let i = Math.floor(array.length/2);
while(ini != fin){
  if (array[i]<value){
    ini = i;
    i= Math.floor((array.length/(i+1)+ (i+1))/2);

  }
  else if (array[i]>value){
    fin = i;
    i = Math.floor((i/ini)/2);
  }
  else{
    return i;
  }
}

if(array[ini-1]===value) return parseInt(ini-1);
return null;

}

let arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 22)); // --> 4
