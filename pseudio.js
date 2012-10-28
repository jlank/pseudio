exports.pseudio = function (selector) {
  var parens = "\(([^\)]+)\)";

  /* (CSS2.1) obtained from http://www.w3.org/TR/CSS2/selector.html */
  var pseudoClasses2_1 = [
    /:first-child/g,
    /:link/g,
    /:visited/g,
    /:active/g,
    /:hover/g,
    /:focus/g,
    /:lang\(([^\)]+)\)/g
  ];

  /* (CSS3) obtained from: http://reference.sitepoint.com/css/css3psuedoclasses */
  var pseudoClasses3 = [
    /:nth-child\(([^\)]+)\)/g,
    /:nth-last-child\(([^\)]+)\)/g,
    /:nth-of-type\(([^\)]+)\)/g,
    /:nth-last-of-type\(([^\)]+)\)/g,
    /:last-child/g,
    /:first-of-type/g,
    /:last-of-type/g,
    /:only-child/g,
    /:only-of-type/g,
    /:root/g,
    /:empty/g,
    /:target/g,
    /:enabled/g,
    /:disabled/g,
    /:checked/g,
    /:not\(([^\)]+)\)/g
  ];

  /* (CSS3) obtained from: http://reference.sitepoint.com/css/pseudoelement-selection */
  var pseudoElements = [
    /:first-letter/g,
    /:first-line/g,
    /:before/g,
    /:after/g,
    /::selection/g
  ];

  var pseudo = [].concat(pseudoClasses2_1, pseudoClasses3, pseudoElements);

  pseudo.forEach(function (pclass) {
    var query = (selector.search(pclass) > 0) ? selector.replace(pclass,'') : selector;
    if (selector.search(pclass) > 0) {
      selector = query;
    }
  });

  return selector;

};

exports.collins = exports.pseudio;

exports.bateman = exports.pseudio;
