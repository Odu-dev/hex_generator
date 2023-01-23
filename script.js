const counter = document.querySelector(".count"),
  showGen = document.querySelector(".generate"),
  showReset = document.querySelector(".reset"),
  button = document.querySelector(".button"),
  container = document.querySelector(".container");

generateNum = (e) => {
  if (e.target.classList.contains("generate")) {
    randomNum = (Math.random() * 10).toString(16).substring(2, 8);
    counter.innerHTML = "#" + randomNum;
    counterValue = counter.innerHTML;
    container.style.backgroundColor = "#" + randomNum;
    resetBtn();
  }

  if (e.target.classList.contains("reset")) {
    counter.innerHTML = "#fff";
    counterValue = counter.innerHTML;
    container.style.backgroundColor = counterValue;
    genBtn();
  }
};

genBtn = () => {
  showReset.style.display = "none";
  showGen.style.display = "inline-block";
};

resetBtn = () => {
  showReset.style.display = "inline-block";
  showGen.style.display = "none";
};

button.addEventListener("click", generateNum);
