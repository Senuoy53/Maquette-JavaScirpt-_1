

const readSound=(e)=>{
  var span = document.querySelector(`div[data-key="${e.keyCode}"]`)
  var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)

  if(!span || !audio) return;

  span.classList.add('playing');
  // start the next audio from the beginning  
  audio.currentTime = 0
  audio.play();

//   To delay the function / tip : 1000 ms = 1 second
  setTimeout(() => { span.classList.remove('playing')}, audio.duration*1000);
}

window.onkeydown=readSound