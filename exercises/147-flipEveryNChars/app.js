function flipEveryNChars(input, n) {
    // your code here
    let i=0;
    let str=[];

    if (input.length%n==0){
        while(i<input.length){
            
            for (let j = i+(n-1); j >= i ; j--) {
                str.push(input[j]);
            }
            i=i+n;   
        }           
    }
    else{
        
        while(i<input.length-(input.length%n)){
            for (let j = i+(n-1); j >= i ; j--) {
                str.push(input[j]);
                
            }
            i=i+n;   
        }
        let t = input.length-1;
        let s = input.length%n;
        console.log (t, s);
        while (s>=1){
            str.push(input[t]);
            t = t - 1;
            s= s - 1;     
        }
      
    }

    return str.join('');  
}

let input = 'a short example';
let output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma
