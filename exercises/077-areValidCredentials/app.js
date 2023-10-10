// Write your function here
function areValidCredentials(us, pw){
    if(us.length>3 && pw.length>=8) return true;
    else return false;
}

let output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> true
