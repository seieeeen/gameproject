// quizpart


const quizNormal  = [
  {numberQ :"Question 1.",
    question :'Rembrandt was both a great painter and sculptor.',
    answers :["TRUE","FALSE"],
    correct: "FALSE"
  },

  { numberQ :"Question 2.",
    question :'Seppuku, or ritual suicide, was reserved for samurai who had lost a battle or their honour.',
  answers :["TRUE","FALSE"],
  correct: "FALSE"},

  { numberQ :"Question 3.",
    question :'Football has been played at every Summer Olympic Games.',
  answers :["TRUE","FALSE"],
  correct: "FALSE"},

  { numberQ :"Question 4.",
     question :'Napoleon’s remains rest at the Pantheon of Paris.',
  answers :["TRUE","FALSE"],
  correct: "FALSE"},

  { numberQ :"Question 5.",
    question :'The diet of a grizzly is similar to that of a polar bear.',
  answers :["TRUE","FALSE"],
  correct: "FALSE"},

  { numberQ :"Question 6.",
    question :'The death of Louis XIV (1638-1715) marked the debut of the Age of Enlightenment.',
  answers :["TRUE","FALSE"],
  correct: "TRUE"},

  { numberQ :"Question 7.",
    question :'Every year, over a million euros in change are tossed into the Trevi Fountain in Rome.',
  answers :["TRUE","FALSE"],
  correct: "TRUE"},

  { numberQ :"Question 8.",
    question :'Your dog has no idea whether you’re sick or healthy.',
  answers :["TRUE","FALSE"],
  correct: "FALSE"},

  { numberQ :"Question 9.",
    question :'The flag of Saudi Arabia features a sword.',
  answers :["TRUE","FALSE"],
  correct: "TRUE"},

  { numberQ :"Question 10.",
    question :'Mario began his career as a carpenter.',
  answers :["TRUE","FALSE"],
  correct: "TRUE"},

];


var quizIndex = 0;



const trueButton =  document.getElementById("true_button");
const falseButton =  document.getElementById("false_button"); 




// // const quizz = {
// //   easy:quizEasy,
// //   normal: quizNormal,
// //   hard: quizHard,
// }





function getQuestion(){
  document.querySelector('.numOfQ').innerText = quizNormal[quizIndex].numberQ;
  document.querySelector('.question').innerText =quizNormal[quizIndex].question;
}
getQuestion();


const timeCount =() =>{ 
  document.getElementById('result').innerText ="";
  timeleft = 10;
  downloadTimer = setInterval(game, 1000);
  quizIndex++;
  const getQuestionAfterTimer = setTimeout(getQuestion,1000)
  
}





// countdown function part

// quand le countdown fini 10->0 si HP(coeur) reste, la question avance et dans la prochaine question, relance Timer de 10

function game(){
  if(timeleft <= 0 && catAttackStore.length<2){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Time<br>Up!";
    catAttack();
    lifePoint();
    const timeOut = setTimeout(timeCount,1000);
    }
   else if(timeleft <= 0 && catAttackStore.length>=2){
    clearInterval(downloadTimer);
    catAttack();
    lifePoint();
      const youLoose = setTimeout(failed,1000);
    
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
  <script type="module" src="./quizNormal.js"></script>

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
    <script type="module" src="./quizNormal.js"></script>
  
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

  if(catAttackStore.length<3 && quizNormal[quizIndex].answers[0] === quizNormal[quizIndex].correct && quizIndex<9){
    
    document.querySelector('#result').innerText = `Correct !`;
    clearInterval(downloadTimer)
    const timeOut = setTimeout(timeCount,1000);
    
  } 
  
  else if(quizIndex ===9){clearInterval(downloadTimer)
    document.querySelector('#result').innerText = `Cheeeeese !!`
    const congrats = setTimeout(finish,1000);
  }

  else if(quizNormal[quizIndex].answers[0] !== quizNormal[quizIndex].correct && catAttackStore.length<2){
    catAttack();
    lifePoint();
    clearInterval(downloadTimer)
    const timeOut = setTimeout(timeCount,1000);
  }
  else if(catAttackStore.length>=2)
    {clearInterval(downloadTimer)
      lifePoint();
      catAttackStore.unshift("cat attack");
      document.querySelector('#result').innerText = `Cat killed you ...`
      const youLoose = setTimeout(failed,1000);
    }
    }
 

// falseButton function


 falseButton.onclick = function() {
 
  if(catAttackStore.length<3 && quizNormal[quizIndex].answers[1] === quizNormal[quizIndex].correct && quizIndex<9){ 
    document.querySelector('#result').innerText = `Correct !`
    clearInterval(downloadTimer)
     const timeOut = setTimeout(timeCount,1000);
    
    } 
    else if(quizNormal[quizIndex]===9){clearInterval(downloadTimer)
      document.querySelector('#result').innerText = `Cheeeeese !!`;
      const congrats = setTimeout(finish,1000);

    }
    else if(quizNormal[quizIndex].answers[1] !== quizNormal[quizIndex].correct && catAttackStore.length<2){
      catAttack();
      lifePoint();
      clearInterval(downloadTimer)
    const timeOut = setTimeout(timeCount,1000);
  
    }
    else if(catAttackStore.length>=2)
      {clearInterval(downloadTimer)
        lifePoint();
        catAttackStore.unshift("cat attack");
        document.querySelector('#result').innerText = `Cat killed you...`
        const youLoose = setTimeout(failed,1000);
      }
      
    }

