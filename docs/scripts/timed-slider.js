
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
var JNationTimedSlider = (function () {
  'use strict';

  var timedSlider = (function (slots, timeout) {
    var updateImage = function updateImage() {
      var currentTime = new Date();
      var currentTimeString = ('0' + currentTime.getHours()).slice(-2) + ':' + ('0' + currentTime.getMinutes()).slice(-2);
      if (slots) {
        for (var i = slots.length - 1; i >= 0; i--) {
          if (currentTimeString >= slots[i].time) {
            document.querySelector('main').style.backgroundImage = "url(\"../../images/".concat(slots[i].image, "\")");
            break;
          }
        }
      }
    };
    window.setInterval(function () {
      updateImage();
    }, timeout);
    updateImage();
  });

  return timedSlider;

}());
