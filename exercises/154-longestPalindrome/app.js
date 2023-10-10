function findLongestPalindrome(sentence) {
  let sent = sentence;
  let pal = "";

  for (let i = 0; i < sent.length; i++) {
    for (let j = i + 1; j <= sent.length; j++) {
      let wor = sent.slice(i, j);
      if (isPalindrome(wor) && wor.length >= pal.length) {
        pal = wor;
      }
    }
  }
  return pal;
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

function isPalindrome(word) {
  // your code here
  return  word.toLowerCase() === reverseString(word).toLowerCase();
}

let output = findLongestPalindrome("My dad is a racecar athlete");
console.log(output); // --> "a racecar a"
