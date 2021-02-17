
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

function getQuestion(){
  document.querySelector('.numOfQ').innerText = quiz[quizIndex].numberQ;
  document.querySelector('.question').innerText =quiz[quizIndex].question;
// }
// setTimeout (getQuestion,2000)


const timeCount =() =>{ 
  document.querySelector('#result').remove
  quizIndex++;
  getQuestion();
}

// cat attacked - false question 
let catAttackStore =[];

function catAttack(){
  document.querySelector('#result').innerText = `Cat attack you`;
 
  var lifeIndex =0;
   console.log(lifeIndex++); 

 let lifePoint= document.getElementById('pointsante');
 if(lifeIndex<3){
 console.log(lifePoint.childNodes[lifeIndex]); 
  lifePoint.removeChild(lifePoint.childNodes[lifeIndex]);
 }
 
  
 catAttackStore.unshift("cat attack");
  console.log(catAttackStore.length);
}


function Conglaturation(){

}





// trueButton function

trueButton.onclick =  function(){

  if(catAttackStore.length<3 && quiz[quizIndex].answers[0] === quiz[quizIndex].correct){
    document.querySelector('#result').innerText = `Correct`;
    const timeOut = setTimeout(timeCount,1500);
  } else if(quiz[quizIndex]===10){
    return "finish !"
  }

  else if(catAttackStore.length<3){
    catAttack();
    const timeOut = setTimeout(timeCount,1500);
  }
  else
    {
    console.log('you lose'); 
    }
    }
 

// falseButton function


 falseButton.onclick = function() {
 
  if(catAttackStore.length<3 && quiz[quizIndex].answers[1] === quiz[quizIndex].correct ){ 
    document.querySelector('#result').innerText = `Correct`
    const timeOut = setTimeout(timeCount,1500);
    } 
    else if(quiz[quizIndex]===10){
      document.querySelector('#result').innerText = `Cheeeeese !!`
    }
    else if(catAttackStore.length<3){
      catAttack();
      const timeOut = setTimeout(timeCount,1500);
    }
    else
      {
        document.querySelector('#result').innerText = `Cat killed you`
      }
      
    }

