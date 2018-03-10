// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// short answer
function reverse(str) {
    return str.split('').reverse().join('')

}

// short ES6
function reverse1(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}

// with a loop
function reverse2(str) {
    var reversed = '';
    for ( var i = 0; i < str.length; i++) {
        reversed = str[i]+ reversed
    }
    return reversed
}

// with backwards loop
function reverse3(str) {
    var reversed = '';
    for (var i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i]
    }
    return reversed
}

// ES6 loop
function reverse4(str) {
    let reversed = '';
    for (let char of str) {
        reversed = char + reversed
    }
    return reversed
}

module.exports = reverse;
