//
// Bootstrap the JavaScript application
//
// JS in this file is visible only to modern browsers
// after the first if statement. You can also use classes
// "no-modern" & "modern" which are added in init.js
//
// Author: @viljamis
//
if ("querySelector" in document && 
    "localStorage" in window && 
    "addEventListener" in window) {

  var doc = document,
    win = window,
    $ = doc.querySelectorAll.bind(doc);
    Element.prototype.on = Element.prototype.addEventListener;

  // $(".somelink")[0].on("touchstart", doSomething);
  
  // Init Responsive Nav
  var navigation = responsiveNav("#nav");

  // Init fast click
  win.addEventListener("load", function() {
    FastClick.attach(doc.body);
  }, false);

  // Enquire usage
  enquire.register("screen and (min-width: 30em)", {
    match : function() {},
    unmatch : function() {}
  });

}
