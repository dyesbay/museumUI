import './jquery.min.js'

const kzTextURL = 'texts/kz.txt';
const ruTextURL = 'texts/ru.txt';
const enTextURL = 'texts/en.txt';
const kzCapURL = 'texts/kz_cap.txt';
const ruCapURL = 'texts/ru_cap.txt';
const enCapURL = 'texts/en_cap.txt';
const mainText  = $("#text")
const caption = $("#caption")
const ruBtn = $("#ru")
const kzBtn = $("#kz")
const enBtn = $("#en")
const audioButton = $("#audio-button")
const audioStopButton = $("#audio-button-stop")
let audioURL = 'audio/song.mp3'
let audio = new Audio(audioURL);
mainText.load(kzTextURL);
caption.load(kzCapURL);
audioStopButton.hide();

ruBtn.click(function(){
    clickLangButton(ruTextURL,ruCapURL);
})

kzBtn.click(function(){
    clickLangButton(kzTextURL,kzCapURL);
})

enBtn.click(function(){
    clickLangButton(enTextURL,enCapURL);
})

audioButton.click(function(){
    audio.play();
    audioButton.hide();
    audioStopButton.show();
})

audioStopButton.click(function(){
    audio.pause();
    audioStopButton.hide();
    audioButton.show();
})

function clickLangButton (textURL, capURL){
    mainText.load(textURL);
    caption.load(capURL);
}
