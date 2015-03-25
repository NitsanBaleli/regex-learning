// ^ = begining of string
// $ = end of string


var re = /^\d+/g;
console.log( '123asd'.match(re) ); // [ '123' ]
console.log( 'a123asd'.match(re) ); // null


var re = /\d+$/g;
console.log( '123asd123'.match(re) ); // [ '123' ]
console.log( 'a123asd'.match(re) ); // null
