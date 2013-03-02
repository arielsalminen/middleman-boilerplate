// matchMedia polyfill, Author: Scott Jehl, Paul Irish, Nicholas Zakas
window.matchMedia = window.matchMedia || (function (doc, undefinedx) {
  "use strict";

  var bool,
    docElem = doc.documentElement,
    refNode = docElem.firstElementChild || docElem.firstChild,
    // fakeBody required for <FF4 when executed in <head>
    fakeBody = doc.createElement("body"),
    div = doc.createElement("div");

  div.id = "mq-test-1";
  div.style.cssText = "position:absolute;top:-100em";
  fakeBody.style.background = "none";
  fakeBody.appendChild(div);

  return function (q) {
    div.innerHTML = "&shy;<style media=\"" + q + "\"> #mq-test-1 { width: 42px; }</style>";

    docElem.insertBefore(fakeBody, refNode);
    bool = div.offsetWidth === 42;
    docElem.removeChild(fakeBody);

    return {
      matches: bool,
      media: q
    };
  };

}(document));

// A fix for the iOS orientationchange zoom bug. Script by @scottjehl, rebound by @wilto.
(function (w) {

  if (!(/iPhone|iPad|iPod/.test(navigator.platform) && /OS [1-5]_[0-9_]* like Mac OS X/i.test(ua) && ua.indexOf("AppleWebKit") > -1)) {
    return;
  }

  var doc = w.document;

  if (!doc.querySelector) {
    return;
  }

  var meta = doc.querySelector("meta[name=viewport]"),
    initialContent = meta && meta.getAttribute("content"),
    disabledZoom = initialContent + ",maximum-scale=1",
    enabledZoom = initialContent + ",maximum-scale=10",
    enabled = true,
    x,y,z,aig;

  if (!meta) {
    return;
  }

  function restoreZoom() {
    meta.setAttribute("content", enabledZoom);
    enabled = true;
  }

  function disableZoom() {
    meta.setAttribute("content", disabledZoom);
    enabled = false;
  }

  function checkTilt(e) {
    aig = e.accelerationIncludingGravity;
    x = Math.abs(aig.x);
    y = Math.abs(aig.y);
    z = Math.abs(aig.z);

    // If portrait orientation and in one of the danger zones
    if ((!w.orientation || w.orientation === 180) && (x > 7 || ((z > 6 && y < 8 || z < 8 && y > 6) && x > 5))) {
      if (enabled) {
        disableZoom();
      }
    } else if (!enabled) {
      restoreZoom();
    }
  }

  w.addEventListener("orientationchange", restoreZoom, false);
  w.addEventListener("devicemotion", checkTilt, false);

})(this);

// Picturefill. Author: Scott Jehl, Filament Group, 2012
(function (w) {
  "use strict";

  w.picturefill = function () {
    var ps = w.document.getElementsByTagName("div");

    // Loop the pictures
    for (var i = 0, il = ps.length; i < il; i++) {
      if (ps[i].getAttribute("data-picture") !== null) {

        var sources = ps[i].getElementsByTagName("div"),
          matches = [];

        // See if which sources match
        for (var j = 0, jl = sources.length; j < jl; j++) {
          var media = sources[j].getAttribute("data-media");
          // if there's no media specified, OR w.matchMedia is supported 
          if (!media || (w.matchMedia && w.matchMedia(media).matches)) {
            matches.push(sources[j]);
          }
        }

      // Find any existing img element in the picture element
      var picImg = ps[i].getElementsByTagName("img")[0];

      if (matches.length) {
        if (!picImg) {
          picImg = w.document.createElement("img");
          picImg.alt = ps[i].getAttribute("data-alt");
          ps[i].appendChild(picImg);
        }

        picImg.src =  matches.pop().getAttribute("data-src");
      } else if (picImg) {
        ps[i].removeChild(picImg);
      }
    }
    }
  };

  // Run on resize and domready (w.load as a fallback)
  if (w.addEventListener) {
    w.addEventListener("resize", w.picturefill, false);
    w.addEventListener("DOMContentLoaded", function () {
      w.picturefill();
      // Run once only
      w.removeEventListener("load", w.picturefill, false);
    }, false);
    w.addEventListener("load", w.picturefill, false);
  } else if (w.attachEvent) {
    w.attachEvent("onload", w.picturefill);
  }

}(this));

// Nav toggle for mobile
(function (w) {

  w.navigation = function () {

    var nav_open = false,
      doc = w.document,
      nav = doc.getElementById('nav'),
      nav_toggle = doc.getElementById('menu');
    
    // The touchstart event fires before the mousedown event, and therefore
    // we can wipe the mousedown event handler before it’s ever executed
    // http://www.quirksmode.org/blog/archives/2010/02/do_we_need_touc.html
    nav_toggle.onmousedown = function () {
      // initialize mouse interface
      if (nav_open === false) {
        nav.className = nav.className.replace('closed', 'opened');
        nav_open = true;
      } else {
        nav.className = nav.className.replace('opened', 'closed');
        nav_open = false;
      }
      return false;
    };

    nav_toggle.ontouchstart = function (e) {
      nav_toggle.onmousedown = null;
      // initialize touch interface
      if (nav_open === false) {
        nav.className = nav.className.replace('closed', 'opened');
        nav_open = true;
      } else {
        nav.className = nav.className.replace('opened', 'closed');
        nav_open = false;
      }
      return false;
    };

    nav_toggle.onclick = function () {
      return false;
    };

  }

  // Run on domready (w.load as a fallback)
  if (w.addEventListener) {
    w.addEventListener("DOMContentLoaded", function () {
      w.navigation();
      // Run once only
      w.removeEventListener("load", w.navigation, false);
    }, false);
    w.addEventListener("load", w.navigation, false);
  } else if (w.attachEvent) {
    w.attachEvent("onload", w.navigation);
  }

})(this);
