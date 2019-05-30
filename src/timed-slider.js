export default (slots, timeout) => {
  const updateImage = function () {
    const currentTime = new Date();
    const currentTimeString = ('0' + currentTime.getHours()).slice(-2) + ':' + ('0' + currentTime.getMinutes()).slice(-2);

    if (slots) {
      for (let i = slots.length - 1; i >= 0; i--) {
        if (currentTimeString >= slots[i].time) {
          document.querySelector('main').style.backgroundImage = `url("../../images/${slots[i].image}")`;
          break;
        }
      }
    }
  };

  window.setInterval(() => {
    updateImage();
  }, timeout);

  updateImage();
};
