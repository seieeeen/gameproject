// mode select part audio



 document.getElementById("easyMode").onclick = function() {
  const audio = new Audio("./music/pika1.mp3");
          audio.currentTime = 0;  
          audio.play();  
      }


  const audio2 = new Audio("./music/pikachu2.mp3");
      document.getElementById("normalMode").onclick = function() {
          audio2.currentTime = 0;  
          audio2.play();  
      }




 const audio3 = new Audio("./music/pikapika3.mp3");
      document.getElementById("hardMode").onclick = function() {
          audio3.currentTime = 0;  
          audio3.play();  
      }









// quizpart

const quizEasy = [
  { numberQ :"Question 1.",
    question :'Each snowflake is unique.',
    answers :'["TRUE","FALSE"]',
    correct: 'FALSE'
  },

  {numberQ :"Question 2.",
     question :'Shanghai is the capital of China.',
  answers :'["TRUE","FALSE"]',
  correct: 'FALSE'
},

  {numberQ :"Question 3.",
    question :' In recipes, coffee is used only in desserts.',
  answers :'["TRUE","FALSE"]',
  correct: "FALSE"},

  { numberQ :"Question 4.",
     question :"It's possible to become intoxicated by drinking too much coffee.",
  answers :'["TRUE","FALSE"]',
  correct: "TRUE"},

  { numberQ :"Question 5.",
    question :'Home Alone takes place in New York.',
  answers :'["TRUE","FALSE"]',
  correct: "FALSE"},

  { numberQ :"Question 6.",
    question :'The ocean floor covers 50% of the world’s surface.',
  answers :'["TRUE","FALSE"]',
  correct: "FALSE"},

  { numberQ :"Question 7.",
    question :'In 2020, astronomers discovered evidence that there may be life on Venus.',
  answers :'["TRUE","FALSE"]',
  correct: "TRUE"},

  { numberQ :"Question 8.",
    question :'Without snow, glaciers could not form.',
  answers :'["TRUE","FALSE"]',
  correct: "TRUE"},

  { numberQ :"Question 9.",
    question :'The cold vaccine is 70% effective.',
  answers :'["TRUE","FALSE"]',
  correct: "FALSE"},

  { numberQ :"Question 10.",
    question :'Rouen is the setting for Monet’s series “Cathedral.”',
  answers :'["TRUE","FALSE"]',
  correct: "TRUE"},

];

const quizNormal  = [
  {numberQ :"Question 1.",
    question :'Rembrandt was both a great painter and sculptor.',
    answers :'["TRUE","FALSE"]',
    correct: "FALSE"
  },

  { numberQ :"Question 2.",
    question :'Seppuku, or ritual suicide, was reserved for samurai who had lost a battle or their honour.',
  answers :'["TRUE","FALSE"]',
  correct: "FALSE"},

  { numberQ :"Question 3.",
    question :'Football has been played at every Summer Olympic Games.',
  answers :'["TRUE","FALSE"]',
  correct: "FALSE"},

  { numberQ :"Question 4.",
     question :'Napoleon’s remains rest at the Pantheon of Paris.',
  answers :'["TRUE","FALSE"]',
  correct: "FALSE"},

  { numberQ :"Question 5.",
    question :'The diet of a grizzly is similar to that of a polar bear.',
  answers :'["TRUE","FALSE"]',
  correct: "FALSE"},

  { numberQ :"Question 6.",
    question :'The death of Louis XIV (1638-1715) marked the debut of the Age of Enlightenment.',
  answers :'["TRUE","FALSE"]',
  correct: "TRUE"},

  { numberQ :"Question 7.",
    question :'Every year, over a million euros in change are tossed into the Trevi Fountain in Rome.',
  answers :'["TRUE","FALSE"]',
  correct: "TRUE"},

  { numberQ :"Question 8.",
    question :'Your dog has no idea whether you’re sick or healthy.',
  answers :'["TRUE","FALSE"]',
  correct: "FALSE"},

  { numberQ :"Question 9.",
    question :'The flag of Saudi Arabia features a sword.',
  answers :'["TRUE","FALSE"]',
  correct: "TRUE"},

  { numberQ :"Question 10.",
    question :'Mario began his career as a carpenter.',
  answers :'["TRUE","FALSE"]',
  correct: "TRUE"},

];

const quizHard = [
  { numberQ :"Question 1.",
    question :'Putting money into traditional red New Year envelopes should be avoided as it brings bad luck.',
    answers :'["TRUE","FALSE"]',
  correct: "FALSE"
  },

  { numberQ :"Question 2.",
    question :"Egypt is the world's largest producer of dates.",
  answers :'["TRUE","FALSE"]',
  correct: "TRUE"},

  
  { numberQ :"Question 3.",
    question :"The princess of Caraman-Chimay, a member of the Belgian nobility, was born in the United States.",
  answers :'["TRUE","FALSE"]',
  correct: "TRUE"},

  
  { numberQ :"Question 4.",
    question :"In the manga 'Death Note', Ryuk is the god of death ",
  answers :'["TRUE","FALSE"]',
  correct: "TRUE"},

  { numberQ :"Question 5.",
    question :'My birthday is 16 feburary',
  answers :'["TRUE","FALSE"]',
  correct: "TRUE"},

  {numberQ :"Question 6.",
     question :'Call of Duty: Black Ops 4 was the first game in the series not to include a single-player campaign.',
  answers :'["TRUE","FALSE"]',
  correct: "TRUE"},

  {numberQ :"Question 7.",
     question :'The video game series The Witcher is based on novels by Polish author Andrzej Sapkowski.',
  answers :'["TRUE","FALSE"]',
  correct: "TRUE"},

  { numberQ :"Question 8.",
    question :'During the Second World War, Canadians defended Hong Kong.',
  answers :'["TRUE","FALSE"]',
  correct: "TRUE"},

  { numberQ :"Question 9.",
    question :'Mongolia enjoys around 260 days of sunshine per year.',
  answers :'["TRUE","FALSE"]',
  correct: "TRUE"},

  { numberQ :"Question 10.",
    question :'The Micmacs arrived on the northeastern coast of America at the same time as the first Vikings.',
  answers :'["TRUE","FALSE"]',
  correct: "FALSE"},

];

const quizLength = quizEasy.length;
let quizIndex =0;
let score =0;