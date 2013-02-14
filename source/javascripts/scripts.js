// Variables
var hasTouch = false,
  ua = navigator.userAgent,
  doc = document,
  docEl = doc.documentElement;



// "Detect" JavaScript support
docEl.className = docEl.className.replace(/(^|\s)no-js preload(\s|$)/, " js ");



// A fix is on the way to get Windows Phone 8 to recognize
// CSS pixels rather than device pixels (which is preferred behavior).
// In the meantime, use this javascript before any other script
// if you need an immediate patch:
//
// http://trentwalton.com/2013/01/16/windows-phone-8-viewport-fix/
if (ua.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = doc.createElement("style");
  msViewportStyle.appendChild(doc.createTextNode("@-ms-viewport{width:auto!important}"));
  doc.getElementsByTagName("head")[0].appendChild(msViewportStyle);
}



// Detect "font-face" support
//
// p.s. this doesn't check support on desktop browsers
// so you should use Modernizr in combination with this
// UA detection to get the most out of it.
// BUT: in many cases this detection is all that's needed.
//
// Can I use: http://caniuse.com/fontface
var isFontfaceSupported = (function () {
  if (ua.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Nokia)|(Opera (Mini|Mobi))|(w(eb)?OSBrowser)|(webOS)|(UCWEB)|(Windows Phone OS 7)|(XBLWP)|(ZuneWP)/)) {
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



// Detect input type=file support
var isFileInputSupported = (function () {
  // Handle devices which falsely report support
  if (navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) {
    return false;
  }
  // Create test element
  var el = document.createElement("input");
  el.type = "file";
  return !el.disabled;
})();
// Was "file input" supported?
if (isFileInputSupported) {
  docEl.className = docEl.className.replace(/(^|\s)no-fileinput(\s|$)/, " fileinput ");
}
