// Bootstrap the JavaScript application
if ("querySelector" in document && 
    "localStorage" in window && 
    "addEventListener" in window) {

  // $("somelink")[0].on('touchstart', handleTouch);
  var $ = document.querySelectorAll.bind(document);
  Element.prototype.on = Element.prototype.addEventListener;

  // Enquire usage
  enquire.register("screen and (min-width: 30em)", {
    match : function() {},
    unmatch : function() {}
  });

}
