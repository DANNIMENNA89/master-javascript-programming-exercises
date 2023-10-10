function isRotated(str1, str2) {
    // your code here

    if (str1.length != str2.length) return false;

    for (let i = 0; i < str2.length; i++){
      str2 = str2.substring(1) + str2.charAt(0);
      if (str1===str2) return true;
    }
    return false;
    
  }
  
  console.log(isRotated('hello world', 'orldhello w')); // --> true
  console.log(isRotated('hello world', 'omrel wp')); // --> false
  
