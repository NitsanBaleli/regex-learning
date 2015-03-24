//In regular expressions, the dot or period is one of the most commonly used metacharacters. Unfortunately, it is also the most commonly misused metacharacter.

// The dot matches a single character, without caring what that character is. The only exception are line break characters. In all regex flavors discussed in this tutorial, the dot does not match line breaks by default.


var re = /./g;
console.log( "123".match(re) ); // [ '1', '2', '3' ]

var re = /./g;
console.log( "\n\r".match(re) ); // null

//This character matches a character that is either a whitespace character (including line break characters), or a character that is not a whitespace character
var re = /[\s\S]/g;
console.log( "\n\r".match(re) ); // [ '\n', '\r' ]




//Use The Dot Sparingly

//we want to match a date in mm/dd/yy format, but we want to leave the user the choice of date separators
var re = /\d\d.\d\d.\d\d/g;

console.log( "02/12/03".match(re) ); // [ '02/12/03' ]
console.log( "02512603".match(re) ); // [ '02512603' ] - not good!

var re = /\d\d[- /.]\d\d[- /.]\d\d/g;
console.log( "02512603".match(re) ); // null - better
console.log( "99/99/99".match(re) ); // [ '99/99/99' ] - not good!

var re = /\d\d[- /.]\d\d[- /.]\d\d/g;
console.log( "02512603".match(re) ); // null - better
console.log( "99/99/99".match(re) ); // [ '99/99/99' ] - not good!

//above regexes aren't perfect for a date match
//this one is good (dd-mm-yy):

var re = /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.]\d\d$/g;
console.log( "02512603".match(re) ); // null
console.log( "99/99/99".match(re) ); // null
console.log( "01/01/15".match(re) ); // [ '01/01/15' ] great!

