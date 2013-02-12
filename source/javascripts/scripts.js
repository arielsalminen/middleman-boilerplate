//= require_tree .

// Variables
var hasTouch = false,
  ua = navigator.userAgent,
  docEl = document.documentElement;

// Remove "preload" and "no-js" classes from <html> element and add "js" class
docEl.className = docEl.className.replace(/(^|\s)no-js preload(\s|$)/, " js ");

// Detect fontface support
var isFontfaceSupported = (function () {
  if (ua.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Nokia)|(Opera (Mini|Mobi))|(w(eb)?OSBrowser)|(UCWEB)|(Windows Phone OS 7)|(XBLWP)|(ZuneWP)/)) {
    return false;
  }
  return true;
})();

// Remove "no-fontface" and "fontface" class for <html> element
if (isFontfaceSupported) {
  docEl.className = docEl.className.replace(/(^|\s)no-fontface(\s|$)/, " fontface ");
}

// Check for touch support and add "touch" class for <html> element
if (("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch || ua.match(/(Windows Phone OS)/)) {
  docEl.className = docEl.className.replace(/(^|\s)no-touch(\s|$)/, " touch ");
  hasTouch = true;
}
