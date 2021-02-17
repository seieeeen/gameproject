

const slice = document.getElementById('easyMode');
const camenbert = document.getElementById('normalMode');
const bleu = document.getElementById('hardMode');

const audio = new Audio("./music/pika1.mp3");
slice.onclick = function() {
          audio.currentTime = 0;  
          audio.play();  
      };


  const audio2 = new Audio("./music/pikachu2.mp3");
  camenbert.onclick = function() {
          audio2.currentTime = 0;  
          audio2.play;  
      };


 const audio3 = new Audio("./music/pikapika3.mp3");
 bleu.onclick = function() {
          audio3.currentTime = 0;  
          audio3.play();        
      };


  