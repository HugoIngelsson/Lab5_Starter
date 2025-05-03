// expose.js
const jsConfetti = new JSConfetti()

window.addEventListener('DOMContentLoaded', init);

function init() {
  let current = null;

  const image = document.querySelector("[alt='No image selected']");
  const horn_select = document.querySelector("#horn-select");

  const volume_control = document.querySelector("#volume");
  const volume_icon = document.querySelector("#volume-controls img");

  const audio_button = document.querySelector("button");
  const audio = document.querySelector(".hidden");
  audio.volume = 0.50;

  horn_select.addEventListener('change', function() {
    current = horn_select.value;
    switch (current) {
      case 'air-horn':
        image.setAttribute('src', "assets/images/air-horn.svg");
        image.setAttribute('alt', "Image of air horn");
        audio.setAttribute('src', "assets/audio/air-horn.mp3");
        break;
      case 'car-horn':
        image.setAttribute('src', "assets/images/car-horn.svg");
        image.setAttribute('alt', "Image of car horn");
        audio.setAttribute('src', "assets/audio/car-horn.mp3");
        break;
      case 'party-horn':
        image.setAttribute('src', "assets/images/party-horn.svg");
        image.setAttribute('alt', "Image of party horn");
        audio.setAttribute('src', "assets/audio/party-horn.mp3");
        break;
    }
  });

  volume_control.addEventListener('input', function() {
    let volume = volume_control.value;
    audio.volume = volume / 100.0;

    if (volume == 0) {
      volume_icon.setAttribute('src', "assets/icons/volume-level-0.svg");
    } else if (volume < 33) {
      volume_icon.setAttribute('src', "assets/icons/volume-level-1.svg");
    } else if (volume < 67) {
      volume_icon.setAttribute('src', "assets/icons/volume-level-2.svg");
    } else {
      volume_icon.setAttribute('src', "assets/icons/volume-level-3.svg");
    }
  });

  audio_button.addEventListener('click', function() {
    if (current != null) {
      audio.load();
      audio.play();
    }

    if (current === 'party-horn')
      jsConfetti.addConfetti()
  });
}