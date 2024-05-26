
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35730/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
var JNationFramedSlider = (function () {
  'use strict';

  var framedSlider = (function (frames) {
    var sourceIndex = 0;
    refreshFrame();
    function refreshFrame() {
      console.log("Changing frame source to ".concat(frames[sourceIndex].source));
      document.querySelector('iframe').src = frames[sourceIndex].source;
      window.setTimeout(function () {
        sourceIndex++;
        if (sourceIndex >= frames.length) {
          sourceIndex = 0;
        }
        refreshFrame();
      }, frames[sourceIndex].timeout);
    }
  });

  return framedSlider;

}());
