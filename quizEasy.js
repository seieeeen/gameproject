
const quizEasy = [
  { numberQ :"Question 1.",
    question :'Each snowflake is unique.',
    answers :["TRUE","FALSE"],
    correct: 'FALSE'
  },

  {numberQ :"Question 2.",
     question :'Shanghai is the capital of China.',
  answers :["TRUE","FALSE"],
  correct: 'FALSE'
},

  {numberQ :"Question 3.",
    question :' In recipes, coffee is used only in desserts.',
  answers :["TRUE","FALSE"],
  correct: "FALSE"},

  { numberQ :"Question 4.",
     question :"It's possible to become intoxicated by drinking too much coffee.",
  answers :["TRUE","FALSE"],
  correct: "TRUE"},

  { numberQ :"Question 5.",
    question :'Home Alone takes place in New York.',
  answers :["TRUE","FALSE"],
  correct: "FALSE"},

  { numberQ :"Question 6.",
    question :'The ocean floor covers 50% of the world’s surface.',
  answers :["TRUE","FALSE"],
  correct: "FALSE"},

  { numberQ :"Question 7.",
    question :'In 2020, astronomers discovered evidence that there may be life on Venus.',
  answers :["TRUE","FALSE"],
  correct: "TRUE"},

  { numberQ :"Question 8.",
    question :'Without snow, glaciers could not form.',
  answers :["TRUE","FALSE"],
  correct: "TRUE"},

  { numberQ :"Question 9.",
    question :'The cold vaccine is 70% effective.',
  answers :["TRUE","FALSE"],
  correct: "FALSE"},

  { numberQ :"Question 10.",
    question :'Rouen is the setting for Monet’s series “Cathedral.”',
  answers :["TRUE","FALSE"],
  correct: "TRUE"},

];


var quizIndex = 0;



const trueButton =  document.getElementById("true_button");
const falseButton =  document.getElementById("false_button"); 




// // const quizz = {
// //   easy:quizEasy,
// //   normal:quizEasy,
// //   hard: quizEasy,
// }





function getQuestion(){
  document.querySelector('.numOfQ').innerText =quizEasy[quizIndex].numberQ;
  document.querySelector('.question').innerText =quizEasy[quizIndex].question;
}
getQuestion();


const timeCount =() =>{ 
  document.getElementById('result').innerText ="";
  quizIndex++;
  timeleft = 10;
    getQuestion();
    clearInterval(downloadTimer)
  downloadTimer = setInterval(game, 1000)
}





// countdown function part

// quand le countdown fini 10->0 si HP(coeur) reste, la question avance et dans la prochaine question, relance Timer de 10

function game(){
  if(timeleft <= 0 && catAttackStore.length<2){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Time<br>Up!";
    catAttack();
    lifePoint();
    const timeOut = setTimeout(timeCount,1500);
    }
   else if(timeleft <= 0 && catAttackStore.length>=2){
    clearInterval(downloadTimer);
    catAttack();
    lifePoint();
      const youLoose = setTimeout(failed,2500);
    
  } 
  
  else {
    document.getElementById("countdown").innerHTML = timeleft ;
  }
  timeleft --;
}

var timeleft = 10;
var downloadTimer = setInterval(game, 1000);




// cat attacked - false question 
let catAttackStore =[];

function catAttack(){
  document.querySelector('#result').innerText = `Cat attack you`;
 catAttackStore.unshift("cat attack");
}

function lifePoint(){
  let heart =  document.querySelectorAll('.active');
  let lifeIndex =0;
  if(heart.length >=1){heart[lifeIndex].remove();}
console.log(heart.length);
}


const finish = () =>{
  console.log(document.querySelector('body'));
document.querySelector('body').innerHTML = `

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="stylesheet" href="./stylequiz.css">
  <script type="module" src="./quizEasy.js"></script>

  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet">


  <title>cheese or die!</title>
</head>
<body>

<div class="orderPage"><h1 class="youAreWin">Conglaturation !!</h1>
<img class="MouseEatsCheese bounce-in-top" src="./image/animal_character_nezumi_cheese.png" alt="">
<h2 class="conglat_message">You survived,
  and you got the cheese!</h2>
  
  <a id="return_top"  href="./index.html"><img src="./image/kunsei_cheese.png" alt="top"> <span>Top</span> </a>
  </div>

  
  <embed name="selectMode" src=./music/ooatari3.mp3 loop="true" hidden="true" autostart="true">
  </body>

</body>
</html>

`
}

const failed =() =>{
  console.log(document.querySelector('body'));
 document.querySelector('body').innerHTML = `

  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
    <link rel="stylesheet" href="./stylequiz.css">
    <script type="module" src="./quizEasy.js"></script>
  
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet">
  
  
    <title>cheese or die!</title>
  </head>
  <body>
  
  <h1 class="youAreLost">You are eaten by kitten....</h1>
  <div class="return_top_continer">
  <img class="catEatsMouse" src="./image/tenor.gif" alt="">
  
  <a id="Retry_button" href="./selection.html"><img id="Retry_img" src="./image/kunsei_cheese.png" alt=""> <span class="retry_text">Retry ?</span> </a>
  </div>
 
  <embed name="selectMode" src=./music/meow.mp3 loop="true" hidden="true" autostart="true">
  </body>

  </html>
  
  `
}




// trueButton function

trueButton.onclick =  function(){

  if(catAttackStore.length<3 &&quizEasy[quizIndex].answers[0] ===quizEasy[quizIndex].correct && quizIndex<9){
    
    document.querySelector('#result').innerText = `Correct !`;

    const timeOut = setTimeout(timeCount,1500);
  
  } 
  
  else if(quizIndex ===9){
    document.querySelector('#result').innerText = `Cheeeeese !!`
    const congrats = setTimeout(finish,1000);
  }

  else if(quizEasy[quizIndex].answers[0] !==quizEasy[quizIndex].correct && catAttackStore.length<2){
    catAttack();
    lifePoint();
   
    const timeOut = setTimeout(timeCount,1500);
  }
  else if(catAttackStore.length>=2)
    {
      lifePoint();
      catAttackStore.unshift("cat attack");
      document.querySelector('#result').innerText = `Cat killed you ...`
      const youLoose = setTimeout(failed,1000);
    }
    }
 

// falseButton function


 falseButton.onclick = function() {
 
  if(catAttackStore.length<3 &&quizEasy[quizIndex].answers[1] ===quizEasy[quizIndex].correct && quizIndex<9){ 
    document.querySelector('#result').innerText = `Correct !`
    
    const timeOut = setTimeout(timeCount,1500);
    
    } 
    else if(quizEasy[quizIndex]===9){
      document.querySelector('#result').innerText = `Cheeeeese !!`;
      const congrats = setTimeout(finish,1000);

    }
    else if(quizEasy[quizIndex].answers[1] !==quizEasy[quizIndex].correct && catAttackStore.length<2){
      catAttack();
      lifePoint();
      
    const timeOut = setTimeout(timeCount,1500);
      
    }
    else if(catAttackStore.length>=2)
      {
        lifePoint();
        catAttackStore.unshift("cat attack");
        document.querySelector('#result').innerText = `Cat killed you...`
        const youLoose = setTimeout(failed,2500);
      }
      
    }

