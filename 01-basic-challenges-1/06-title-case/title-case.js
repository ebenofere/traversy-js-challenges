// Solution 1 -using a for loop
function titleCase(str) {
    // make the sentence to be in lowercase and break the sentence into an array of words
    const words = str.toLowerCase().split(' ');

    //use a for loop to iterate through each item in the array
    for (i = 0; i < words.length; i++) {
        // make the first word in each item in the array to be in capital letter while the rest of the characters in the item is lowercase.
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    // join the items and then return it
    return words.join(" ");
}


// charAt(0).toUpperCase()
module.exports = titleCase;
