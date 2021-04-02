window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    // if no audio, stop function
    if (!audio) return;

    // rewind audio to the start
    audio.currentTime = 0;

    //play audio
    audio.play();

    //apply transition to key
    key.classList.add('playing');


    const keys = document.querySelectorAll('.key');
 
    function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
    }

    keys.forEach(key => key.addEventListener('transitionend',removeTransition));

});

