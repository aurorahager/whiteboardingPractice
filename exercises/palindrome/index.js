// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// original way 
function palindrome(str) {
    // reverse a string
    var reverse = str.split('').reverse().join('')
    // check if reversed is === to original
    if ( reverse === str) {
    return true;
    }//END if true
    //else return false
    else {
        return false;
    }//END else false
}//END function palindrome

// reduced way
function palindrome1(str) {
    // reverse a string
    var reverse = str.split('').reverse().join('')
    // return if reversed is === to original
    return reverse === str
}//END function palindrome

// es6 not ideal solution
function palindrome2(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });//END every function
}//END function palindrome


module.exports = palindrome;
