function getLargestNumberAmongMixedElements(arr) {
    // your code here
    if (arr.length == 0){
        return 0;
    }
    else{
        let num = 0;
        arr.forEach(element => {
            if(typeof element==='number'){
               if (num<element){
                num=element;
               }
    
            }
        });
        return num;
    }
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
