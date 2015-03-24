//Since certain character classes are used often, a series of shorthand character classes are available

// \d = [0-9] = digit

// \w = [A-Za-z0-9_] = word character

// \s = [ \t\r\n\f] = whitespace character = matches a space, a tab, a line break, or a form feed

var re = /\d/g;
console.log( "123".match(re) ); //[ '1', '2', '3' ]

var re = /\w/g;
console.log( "123asdasd".match(re) ); // [ '1', '2', '3', 'a', 's', 'd', 'a', 's', 'd' ]




//Negated Shorthand Character Classes

// \D = [^\d]

// \W = [^\w]

// \S = [^\s]

//Be careful when using the negated shorthands inside square brackets. [\D\S] is not the same as [^\d\s]. The latter matches any character that is neither a digit nor whitespace. It matches x, but not 8. The former, however, matches any character that is either not a digit, or is not whitespace. Because all digits are not whitespace, and all whitespace characters are not digits, [\D\S] matches any character; digit, whitespace, or otherwise.