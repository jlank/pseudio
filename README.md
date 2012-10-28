# Pseudio - A CSS Pseudo Class & Element Stripper

Borne out of a need, a need to strip CSS pseudo classes and elements from selectors.

## Usage

``` js
var pseudio = require('pseudio');
var cleaned = pseudio.collins('.clearfix:nth-child(1)');
console.log(cleaned);
// .clearfix
```

/end module

![wink](http://www.the80sman.com/wp-content/uploads/2011/06/americanpsycho.jpg)