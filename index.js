const form = document.getElementById("forms");

const usernames = [
  { username: "ledead", password: "assassins350" },
  { username: "johndoe", password: "password123" },
  { username: "janesmith", password: "qwerty456" },
  { username: "emirchelo", password: "wasaamf2364" },
];

function showError(errorType) {
  let error = document.getElementById("error");
  error.innerHTML = errorType;
  error.classList.remove("hide");
  setTimeout(() => {
    error.classList.add("hide");
  }, 5000);
}

function validation(username, password) {
  let userFound = false;
  for (let i = 0; i < usernames.length; i++) {
    if (username === usernames[i].username) {
      userFound = true;
      if (password === usernames[i].password) {
        window.location.href = "./dashboard.html";
      } else {
        showError("Incorrect password");
      }
    }
  }

  if (!userFound) {
    showError("Incorrect user");
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault(); // avoid refresh action when clicking submit button

  let username = document.getElementById("user").value.toLocaleLowerCase();
  let password = document.getElementById("password").value.toLocaleLowerCase();
  console.log(`Credentials: ${username} ${password}`);

  validation(username, password);
});
