// Write your function here
function countAllCharacters(str){
    let obj={};

    if (str.length>0){
        for (let i = 0; i < str.length; i++) {
                    if (obj[str[i]]){
                        obj[str[i]]= obj[str[i]] + 1;
                    }
                    else{
                        obj[str[i]]=1;
                    }
                }
  

    }

    return obj;

       
}

let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}
