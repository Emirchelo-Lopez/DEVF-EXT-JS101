let commentForm = document.getElementById("comment-form");
let textarea = document.getElementById("comment-input");
let newComments = document.getElementById("newComments");

function formatDate() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString("es-MX", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return formattedDate;
}

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
  lastPosted.textContent = formatDate();

  // adding the span to list item
  newComment.appendChild(lastPosted);

  // adding the list item to the ul
  newComments.appendChild(newComment);

  textarea.value = "";
});
