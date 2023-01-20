const allQstnArr = [];
let countQuestion = 10;
let qstn = {};
var id = 1;
async function loadQuestion() {
  if (id <= 10) {
    const Url = "https://opentdb.com/api.php?amount=1";
    const result = await fetch(`${Url}`);
    const data = await result.json();
    console.log("DATA : ", data);
    qstn = data.results[0];
    allQstnArr.push(qstn);
    // allQstnArr.push(data.result[0]);
    console.log("ALL QSTN ARR : ", allQstnArr);

    if (qstn.type == "multiple") {
      //   console.log("i am MCQ");
      document.querySelector(
        ".section"
      ).innerHTML = `<div class="type">Type:- ${qstn.type}</div><div class="type">Difficulty:- ${qstn.difficulty}</div><div class="question">
            <span class="questionNo">${id}/10</span>
            ${qstn.question}
          </div>
          <div class="answerlist">
            <div class="ans1 option" id="option1">${qstn.correct_answer}</div>
            <div class="ans2 option" id="option2">${qstn.incorrect_answers[0]}</div>
            <div class="ans3 option" id="option3">${qstn.incorrect_answers[1]}</div>
            <div class="ans4 option" id="option3">${qstn.incorrect_answers[2]}</div>
          </div>`;
    } else {
      // console.log("i am Boolean");
      document.querySelector(
        ".section"
      ).innerHTML = `<div class="type">Type:- ${qstn.type}</div><div class="type">Difficulty:- ${qstn.difficulty}</div><div class="question">
            <span class="questionNo">${id}/10</span>
            ${qstn.question}
          </div>
          <div class="answerlist">
            <div class="ans1 option">${qstn.correct_answer}</div>
            <div class="ans2 option">${qstn.incorrect_answers[0]}</div>
            
          </div>`;
    }
    const tap = document.querySelectorAll(".option");
    for (const butt of tap) {
      butt.addEventListener("click", function (event) {
        butt.style.backgroundColor = "#0e5a62";
        butt.style.color = "white";
      });
    }
  }
}
loadQuestion();

const next = document.querySelector(".next");

next.addEventListener("click", myFunction1);
function myFunction1() {
  if (id < 10) {
    id++;
    console.log("iD++ " + id);
    loadQuestion();
  }
}
const previous = document.querySelector(".previous");
previous.addEventListener("click", () => {
  if (id > 1) {
    id--;
    console.log("ID -- " + id);
    loadQuestionFromArray();
    // console.log("ID is " + id);
  }
});
function loadQuestionFromArray() {
  Aqstn = allQstnArr.find((element, index) => {
    return index == id;
  });
  if (Aqstn.type == "multiple") {
    //   console.log("i am MCQ");

    document.querySelector(
      ".section"
    ).innerHTML = `<div class="type">Type:- ${qstn.type}</div><div class="type">Difficulty:- ${qstn.difficulty}</div><div class="question">
            <span class="questionNo">${id}/10</span>
            ${Aqstn.question}
          </div>
          <div class="answerlist">
            <div class="ans1 option" id="correct">${Aqstn.correct_answer}</div>
            <div class="ans2 option" id="incorrect">${Aqstn.incorrect_answers[0]}</div>
            <div class="ans3 option" id="incorrect">${Aqstn.incorrect_answers[1]}</div>
            <div class="ans4 option" id="incorrect">${Aqstn.incorrect_answers[2]}</div>
          </div>`;
  } else {
    // console.log("i am Boolean");
    document.querySelector(
      ".section"
    ).innerHTML = `<div class="type">Type:- ${qstn.type}</div><div class="type">Difficulty:- ${qstn.difficulty}</div><div class="question">
            <span class="questionNo">${id}/10</span>
            ${Aqstn.question}
          </div>
          <div class="answerlist">
            <div class="ans1 option" id="correct">${Aqstn.correct_answer}</div>
            <div class="ans2 option" id="incorrect">${Aqstn.incorrect_answers[0]}</div>
            
          </div>`;
  }
  const tap = document.querySelectorAll(".option");
  for (const butt of tap) {
    butt.addEventListener("click", function (event) {
      butt.style.backgroundColor = "#0e5a62";
      butt.style.color = "white";
      console.log(butt.value);
    });
  }
}
score = document.querySelector(".score");
submit = document.querySelector(".submit");
submit.addEventListener("click", () => {
  score.innerHTML = `YOUR SCORE - 80`;
});
