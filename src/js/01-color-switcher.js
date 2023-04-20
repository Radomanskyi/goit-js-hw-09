
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  const buttonStart = document.querySelector(".js-button-start");
  const buttonStop = document.querySelector(".js-button-stop");
  let colorSwitcher = null;

  buttonStart.addEventListener("click", () => {
    buttonStart.disabled = true;
    colorSwitcher = setInterval(() => {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
    }, 1000);
  });
  
  buttonStop.addEventListener("click", () => {
    clearInterval(colorSwitcher);
    buttonStart.disabled = false;
  });