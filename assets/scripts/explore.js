// explore.js

window.addEventListener('DOMContentLoaded', init);
const synth = window.speechSynthesis;

function init() {
  const face = document.querySelector("[alt='Smiling face']");
  const text = document.querySelector("#text-to-speak");
  const voice_select = document.querySelector("#voice-select");
  const button = document.querySelector("button");

  let cur_voice = null;

  populateVoiceList(voice_select);
  speechSynthesis.addEventListener('voiceschanged', populateVoiceList);

  button.addEventListener('click', function() {
    // remove previous phrase
    speechSynthesis.cancel();

    let utterance = new SpeechSynthesisUtterance(text.value);
    if (cur_voice !== null)
      utterance.voice = cur_voice;

    face.setAttribute('src', "assets/images/smiling-open.png");
    utterance.addEventListener('end', function() {
      face.setAttribute('src', "assets/images/smiling.png");
    });

    speechSynthesis.speak(utterance);
  });

  voice_select.addEventListener('change', function() {
    const voices = synth.getVoices();
    const selectedOption = voice_select.selectedOptions[0].getAttribute("data-name");
    
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        cur_voice = voices[i];
        return;
      }
    }
  });
}

function populateVoiceList() {
  const voice_select = document.querySelector("#voice-select");
  const voices = synth.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voice_select.appendChild(option);
  }
}