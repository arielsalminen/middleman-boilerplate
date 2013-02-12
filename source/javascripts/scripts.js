var hasTouch = false,
  ua = navigator.userAgent,
  docEl = document.documentElement;

// JavaScript support
docEl.className = docEl.className.replace(/(^|\s)no-js preload(\s|$)/, " js ");

// Font-face support
var isFontfaceSupported = (function () {
  if (ua.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Nokia)|(Opera (Mini|Mobi))|(w(eb)?OSBrowser)|(UCWEB)|(Windows Phone OS 7)|(XBLWP)|(ZuneWP)/)) {
    return false;
  }
  return true;
})();

if (isFontfaceSupported) {
  docEl.className = docEl.className.replace(/(^|\s)no-fontface(\s|$)/, " fontface ");
}

// Touch support
if (("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch || ua.match(/(Windows Phone OS)/)) {
  docEl.className = docEl.className.replace(/(^|\s)no-touch(\s|$)/, " touch ");
  hasTouch = true;
}
