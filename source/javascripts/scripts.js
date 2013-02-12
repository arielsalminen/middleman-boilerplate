// Variables
var hasTouch = false,
  ua = navigator.userAgent,
  docEl = document.documentElement;


// "Detect" JavaScript support
docEl.className = docEl.className.replace(/(^|\s)no-js preload(\s|$)/, " js ");


// Detect "font-face" support
//
// p.s. this doesn't check support on desktop browsers
// so you should use Modernizr in combination with this
// UA detection to get the most out of it.
// BUT: in many cases this detection is all that's needed.
//
// Can I use: http://caniuse.com/fontface
var isFontfaceSupported = (function () {
  if (ua.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Nokia)|(Opera (Mini|Mobi))|(w(eb)?OSBrowser)|(UCWEB)|(Windows Phone OS 7)|(XBLWP)|(ZuneWP)/)) {
    return false;
  }
  return true;
})();


// Was "font-face" supported?
if (isFontfaceSupported) {
  docEl.className = docEl.className.replace(/(^|\s)no-fontface(\s|$)/, " fontface ");
}


// Detect "touch" support and act accordingly
//
// Windows Phone doesn't really support touch events in JS
// but it's still included here as it has a touch screen.
// Remove ua.match part if you don't want it in. ;(
if (("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch || ua.match(/(Windows Phone OS)/)) {
  docEl.className = docEl.className.replace(/(^|\s)no-touch(\s|$)/, " touch ");
  hasTouch = true;
}
