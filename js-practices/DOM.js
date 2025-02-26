const render = document.getElementById("render");
const emojis = ["😀", "😂", "😍", "🤔", "😎"];
const button = document.getElementById("action");

function createElement() {
  let element = document.createElement("span");
  element.classList.add("letter");
  return element;
}

function fillElement() {
  for (let index = 0; index < emojis.length; index++) {
    let element = createElement();
    element.innerHTML = `${emojis[index]}`;
    render.appendChild(element);
  }
}

button.addEventListener("click", () => {
  fillElement();
  render.classList.remove("hide");
  button.classList.add("hide");
  setTimeout(() => {
    button.classList.remove("hide");
    render.classList.add("hide");
    render.innerHTML = "";
  }, 5000);
});
