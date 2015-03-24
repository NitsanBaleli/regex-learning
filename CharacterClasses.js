/*With a "character class", also called "character set", you can tell the regex engine to match only one out of several characters. Simply place the characters you want to match between square brackets. If you want to match an a or an e, use [ae]. You could use this in gr[ae]y to match either gray or grey. Very useful if you do not know whether the document you are searching through is written in American or British English.
*/



//You can find a word, even if it is misspelled
var re = /gr[ea]y/g;
var myArray = "grey".match(re);
console.log(myArray);

var re = /sep[ae]r[ae]te/g;
var myArray = "seperete".match(re);
console.log(myArray);




//Negated Character Classes

//Typing a caret after the opening square bracket negates the character class
var re = /[^0-9\r\n]/;
var myArray = 'abcd'.match(re);
console.log(myArray);

//q must be followed by another char that is NOT 'u'
var re = /q[^u]/;
var myArray = 'qa'.match(re);
console.log(myArray);



//Repeating Character Classes

//If you repeat a character class by using the ?, * or + operators, you're repeating the entire character class. You're not repeating just the character that it matched. The regex [0-9]+ can match 837 as well as 222
var re = /[0-9]+/;
var myArray = '12312'.match(re);
console.log(myArray);


//If you want to repeat the matched character, rather than the class, you need to use backreferences. ([0-9])\1+ matches 222 but not 837. When applied to the string 833337, it matches 3333 in the middle of this string. If you do not want that, you need to use lookaround.

var re = /([0-9])\1+/;
var myArray = '1222312'.match(re);
console.log(myArray);

