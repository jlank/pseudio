# Pseudio - A CSS Pseudo Class & Element Stripper

Borne out of a need, a need to strip CSS pseudo classes and elements from selectors.

## Usage

var pseudio = require('pseudio');
var cleaned = pseudio.collins('.clearfix:nth-child(1)');
console.log(cleaned);
// .clearfix

</end module>