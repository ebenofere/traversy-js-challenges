function countOccurrences(word, character) {
    let newArray = word.split("");
    let sum = 0;

   	newArray.forEach((item) => {
      if (item == character) {
        sum++;
      }
   	});
    
    return sum;
}

module.exports = countOccurrences;
