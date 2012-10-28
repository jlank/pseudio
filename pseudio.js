exports.pseudio = function (selector) {
  var parens = "\(([^\)]+)\)";

  /* obtained from: http://reference.sitepoint.com/css/css3psuedoclasses */
  var pseudoClasses = [
    ":nth-child" + parens,
    ":nth-last-child" + parens,
    ":nth-of-type" + parens,
    ":nth-last-of-type" + parens,
    ":last-child",
    ":first-of-type",
    ":last-of-type",
    ":only-child",
    ":only-of-type",
    ":root",
    ":empty",
    ":target",
    ":enabled",
    ":disabled",
    ":checked",
    ":not" + parens
  ];

  /* obtained from: http://reference.sitepoint.com/css/pseudoelement-selection */
  var pseudoElements = [
    ":first-letter",
    ":first-line",
    ":before",
    ":after",
    "::selection"
  ];

  var pseudo = [].concat(pseudoClasses, pseudoElements);

  // for pseudo classes that take arguments, strip that shit
  var rePseudoClasses = {};
    rePseudoClasses[":nth-child" + parens] =  /:nth-child\(([^\)]+)\)/;
    rePseudoClasses[":nth-last-child" + parens] =  /:nth-last-child\(([^\)]+)\)/;
    rePseudoClasses[":nth-of-type" + parens] = /:nth-of-type\(([^\)]+)\)/;
    rePseudoClasses[":nth-last-of-type" + parens]  = /:nth-last-of-type\(([^\)]+)\)/;
    rePseudoClasses[":not" + parens] = /:not\(([^\)]+)\)/;

  pseudo.forEach(function (pclass) {
    var re = rePseudoClasses[pclass] === undefined ? pclass : rePseudoClasses[pclass],
        query = (selector.search(pclass) > 0) ? selector.replace(re,'') : selector;
    if (selector.search(pclass) > 0) {
      selector = query;
    }
  });

  return selector;

};

exports.collins = exports.pseudio;

exports.bateman = exports.pseudio;
