//= require_tree .

// Variables
var hasTouch = false,
  ua = navigator.userAgent,
  docEl = document.documentElement;

// Remove "preload" and "no-js" classes from <html> element and add "js" class
docElement.className = docElement.className.replace(/(^|\s)no-js preload(\s|$)/, 'js ');

// Check for touch support and add "touch" class for <html> element
if (("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch || ua.match(/(Windows Phone OS)/)) {
  docEl.className += " touch";
  hasTouch = true;
}

// Check for font-face support and add "no-fontface" class for <html> element
if (ua.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Nokia)|(OSRE\/)|(Opera (Mini|Mobi))|(w(eb)?OSBrowser)|(UCWEB)|(Windows Phone OS 7)|(XBLWP)|(ZuneWP)/)) {
  docEl.className += " no-fontface";
}
