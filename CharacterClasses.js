/*With a "character class", also called "character set", you can tell the regex engine to match only one out of several characters. Simply place the characters you want to match between square brackets. If you want to match an a or an e, use [ae]. You could use this in gr[ae]y to match either gray or grey. Very useful if you do not know whether the document you are searching through is written in American or British English.
*/



//You can find a word, even if it is misspelled
var re = /gr[ea]y/g; //[ 'grey' ]
console.log( "grey".match(re) );

var re = /sep[ae]r[ae]te/g; //[ 'seperete' ]
console.log( "seperete".match(re) );









//Negated Character Classes

//Typing a caret after the opening square bracket negates the character class
var re = /[^0-9\r\n]/;
console.log( 'abcd'.match(re) ); //[ 'a', index: 0, input: 'abcd'  )]

//q must be followed by another char that is NOT 'u'
var re = /q[^u]/;
console.log( 'qa'.match(re) ); //[ 'qa', index: 0, input: 'qa'  )]



//Repeating Character Classes

//If you repeat a character class by using the ?, * or + operators, you're repeating the entire character class. You're not repeating just the character that it matched. The regex [0-9]+ can match 837 as well as 222
var re = /[0-9]+/;
console.log( '12312'.match(re) ); //[ '12312', index: 0, input: '12312'  )]


//If you want to repeat the matched character, rather than the class, you need to use backreferences. ([0-9])\1+ matches 222 but not 837. When applied to the string 833337, it matches 3333 in the middle of this string. If you do not want that, you need to use lookaround.

var re = /([0-9])\1+/;
console.log( '1222312'.match(re) ); //[ '222', '2', index: 1, input: '1222312'  )]

