let commentForm = document.getElementById("comment-form");
let textarea = document.getElementById("comment-input");
let newComments = document.getElementById("newComments");
let currentDate = new Date();

commentForm.addEventListener("submit", () => {
  event.preventDefault();
  let content = textarea.value;

  // creating list item
  let newComment = document.createElement("li");

  // assigning content to list item
  newComment.textContent = content;

  // creating span to store date and time posted
  let lastPosted = document.createElement("span");

  // assigning the date and time to the span
  lastPosted.textContent =
    " Posted on " +
    currentDate.getDate() +
    "/" +
    (currentDate.getMonth() + 1) +
    "/" +
    currentDate.getFullYear() +
    " at " +
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes();

  // adding the span to list item
  newComment.appendChild(lastPosted);

  // adding the list item to the ul
  newComments.appendChild(newComment);

  textarea.value = "";
});
