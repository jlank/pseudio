var pseudio = require('../pseudio');
var assert  = require('assert');

var uncleaned = '.clearfix:not([type="submit"]), .thing:nth-child(1), .ship:only-child, .foo:before';
var cleaned = pseudio.pseudio(uncleaned);
console.log('unstripped: ' + uncleaned);
console.log('stripped:   ' + cleaned + '\n');
assert.equal(cleaned, '.clearfix, .thing, .ship, .foo');

var uncleans = '.clearfox:not(s), .thong:nth-child(n - 2), .shop:root, .bar::selection';
var cleans  = pseudio.collins(uncleans);
console.log('unstripped: ' + uncleans);
console.log('stripped:   ' + cleans + '\n');
assert.equal(cleans, '.clearfox, .thong, .shop, .bar');


var uncleanse = '.clearfax:not(table), .thang:nth-child(n + 1), .shat:first-line, .baz:after';
var cleanse = pseudio.bateman(uncleanse);
console.log('unstripped: ' + uncleanse);
console.log('stripped: ' + cleanse + '\n\n');
assert.equal(cleanse, '.clearfax, .thang, .shat, .baz');

console.log('all tests passed');
