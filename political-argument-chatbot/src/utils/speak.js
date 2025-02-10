// src/utils/speak.js

// src/utils/speak.js
export function speakText(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
  
    function setVoiceAndSpeak() {
      const voices = synth.getVoices();
      // Try to find the desired voice
      const chosenVoice = voices.find(voice =>
        voice.name.includes('Eddy (English (United Kingdom)) en-GB')
      );
      if (chosenVoice) {
        utterance.voice = chosenVoice;
      }
      utterance.rate = 1.25;
      utterance.pitch = 0.5;
      synth.speak(utterance);
    }
  
    // If voices are not yet loaded, wait for the voiceschanged event.
    if (synth.getVoices().length === 0) {
      synth.onvoiceschanged = setVoiceAndSpeak;
    } else {
      setVoiceAndSpeak();
    }
  }
  
/**export function speakText(text) {
    const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  
  // List available voices
  const voices = synth.getVoices();
  
  const chosenVoice = voices.find(voice => voice.name.includes('Google UK English Male'));
  if (chosenVoice) {
    utterance.voice = chosenVoice;
  }
  
  utterance.rate = 0.3;
  utterance.pitch = 0.5;
  synth.speak(utterance);
}*/
  