console.log("Let Start JavaScript");

const inputArea = document.querySelector(".first");
const rendering = document.querySelector(".render");
const renderingTwo = document.querySelector(".renderTwo");
const buttons = document.querySelectorAll(".number");

document.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    rendering.innerHTML = inputArea.value;
    renderingTwo.innerHTML = inputTwo.value;
    creatingTips();
  }
});
// inputArea.addEventListener("click", () => {
//   console.log(inputArea.value);
// });
let percentage, percentageTwo, answer, answerB;

buttons.forEach((div) => {
  div.addEventListener("click", () => {
    if (!inputArea == "") {
      if (div.classList.contains("five")) {
        percentage = (5 / 100) * inputArea.value;
        percentageTwo = percentage * inputThree.value;
        answer = percentage.toFixed(1);
        answerB = percentageTwo.toFixed(1);
        console.log(percentage);
      } else if (div.classList.contains("ten")) {
        percentage = (10 / 100) * inputArea.value;
        percentageTwo = percentage * inputThree.value;
        answer = percentage.toFixed(1);
        answerB = percentageTwo.toFixed(1);

        console.log(percentage);
      } else if (div.classList.contains("fifteen")) {
        percentage = (15 / 100) * inputArea.value;
        percentageTwo = percentage * inputThree.value;
        answer = percentage.toFixed(1);
        answerB = percentageTwo.toFixed(1);

        console.log(percentage);
      } else if (div.classList.contains("twenty-five")) {
        percentage = (25 / 100) * inputArea.value;
        percentageTwo = percentage * inputThree.value;
        answer = percentage.toFixed(1);
        answerB = percentageTwo.toFixed(1);

        console.log(percentage);
      } else if (div.classList.contains("fifty")) {
        percentage = (50 / 100) * inputArea.value;
        percentageTwo = percentage * inputThree.value;
        answer = percentage.toFixed(1);
        answerB = percentageTwo.toFixed(1);

        console.log(percentage);
      }
    }

    TotalValue.innerText = "$" + answer;
    TotalValueB.innerText = "$" + answerB;
  });
});
const TotalValue = document.querySelector(".value");
const TotalValueB = document.querySelector(".value-two");
const inputTwo = document.querySelector(".cus");
const inputThree = document.querySelector(".peop");
// let checking = inputTwo.value;
let answerTwo, answerOne;

const creatingTips = () => {
  if (!inputArea.value == "") {
    answerOne = (inputTwo.value / 100) * inputArea.value;
    console.log(answerTwo);
    TotalValue.innerText = "$" + answerOne.toLocaleString();
  }
};

const creatingTipsTwo = () => {
  if (!inputArea.value == "") {
    answerTwo = (inputTwo.value / 100) * inputArea.value * inputThree.value;
    console.log(answerTwo);
    TotalValueB.innerText = "$" + answerTwo.toLocaleString();
  }
};

inputTwo.addEventListener("input", () => {
  creatingTips();
  creatingTipsTwo();
});
inputThree.addEventListener("input", () => {
  creatingTipsTwo();
});

// Clearing Aspect
const clear = document.querySelector(".res");

const clearing = () => {
  inputArea.value = "";
  inputTwo.value = "";
  inputThree.value = "";
  TotalValue.innerText = "$0.00";
  TotalValue.innerText = "$0.00";
  TotalValueB.innerText = "$0.00";
  console.log("Keep");
};

clear.addEventListener("click", clearing);
