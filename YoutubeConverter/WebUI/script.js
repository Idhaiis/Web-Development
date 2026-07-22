const mp4ButtonEl = document.getElementById('mp4Button');
const mp3ButtonEl = document.getElementById('mp3Button');
const convertButtonEl = document.getElementById('convertButton');
const inputEl = document.getElementById('inputBox');

let isMp3 = true;
mp3ButtonEl.style.borderColor = "red";

mp3ButtonEl.addEventListener('click', function () {
    if (isMp3 === false) {
        isMp3 = true;
        mp3ButtonEl.style.borderColor = "red";
        mp4ButtonEl.style.borderColor = "#8f8f8f";
    };
});

mp4ButtonEl.addEventListener('click', function () {
    if (isMp3 === true) {
        isMp3 = false;
        mp4ButtonEl.style.borderColor = "red";
        mp3ButtonEl.style.borderColor = "#8f8f8f";
    };
});

convertButtonEl.addEventListener('click', function () {

    const youtubeUrl = inputEl.value.trim();

    if (youtubeUrl === "") {
        alert("Please enter a valid YouTube Url!");
        return;
    };

    const requestData = {
        url: youtubeUrl,
        format: isMp3 ? "mp3" : "mp4"
    };


});