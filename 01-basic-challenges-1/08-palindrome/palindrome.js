function isPalindrome(str) {
	let reverseStr = str.split('').reverse().join('');
  
    return str == reverseStr;
  
}


module.exports = isPalindrome;
