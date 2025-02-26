const title = document.getElementById("heading");
const button = document.getElementById("background-button");

button.addEventListener("click", () => {
  styleElements(hexRandomColorGtr(), hexRandomColorGtr(), hexRandomColorGtr());
  console.log("clicked");
});

function hexRandomColorGtr() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

function styleElements(randomColor1, randomColor2, randomColor3) {
  document.body.style.backgroundColor = `#${randomColor1}`;
  title.style.color = `#${randomColor2}`;
  button.style.backgroundColor = `#${randomColor3}`;
}
