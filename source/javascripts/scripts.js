// Bootstrap the JavaScript application
if ("querySelector" in document && 
    "localStorage" in window && 
    "addEventListener" in window) {
  
  // Alternatively, instead of on.js, just
  // var $ = document.querySelectorAll.bind(document);
  // Element.prototype.on = Element.prototype.addEventListener;
  // $("somelink")[0].on('touchstart', handleTouch);
  
  // Custom events:
  // $('a').on('foo', function () {
  //    foo was fired
  // });
  // $('a:first-child').trigger('foo');

  // Enquire usage
  enquire.register("screen and (min-width: 30em)", {
    match : function() {},
    unmatch : function() {}
  });

  // Looping through links
  $(".selector a").forEach(function(el, i) {
    i++;
    el.on("click", function(event) {
      event.preventDefault();
      // Something happens
    });
  });

}
