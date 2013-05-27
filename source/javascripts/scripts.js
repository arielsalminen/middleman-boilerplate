// Bootstrap the JavaScript application
if ("querySelector" in document && 
    "localStorage" in window && 
    "addEventListener" in window) {

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
