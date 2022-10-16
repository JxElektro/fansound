const turn = document.getElementById('btn');
const close = document.getElementById('close');
const music = new Audio('/fan.mp3');

turn.addEventListener('click', () => {
// if the text says 'on' then change it to 'off'
if (turn.textContent === 'on') {
turn.textContent = 'off';
music.play();
music.loop =true;
} else {
// if the text says 'off' then change it to 'on'
turn.textContent = 'on';
music.pause();
}
});


close.addEventListener('click', () => {
music.pause();
// close the window
window.close();
});
