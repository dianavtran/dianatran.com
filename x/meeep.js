$(document).ready(function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'bell.mp3');
        audioElement.setAttribute('autoplay', 'autoplay');
        //audioElement.load()

        $.get();

        audioElement.addEventListener("load", function() {
            audioElement.play();
        }, true);

        $('.play').click(function() {
            audioElement.play();
            console.log('yay')
        });

        $('.pause').click(function() {
            audioElement.pause();
        });
    });