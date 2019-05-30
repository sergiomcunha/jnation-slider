export default (frames) => {
  let sourceIndex = 0;

  refreshFrame();

  function refreshFrame() {
    console.log(`Changing frame source to ${frames[sourceIndex].source}`);
    document.querySelector('iframe').src = frames[sourceIndex].source;

    window.setTimeout(() => {
      sourceIndex++;

      if (sourceIndex >= frames.length) {
        sourceIndex = 0;
      }

      refreshFrame();
    }, frames[sourceIndex].timeout);
  }
};
