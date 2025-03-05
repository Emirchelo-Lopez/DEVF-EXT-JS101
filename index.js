let commentForm = document.getElementById("comment-form");
let textarea = document.getElementById("comment-input");
let newComments = document.getElementById("newComments");
let localComments = JSON.parse(localStorage.getItem("savedComments")) || [];

// Function to format the current date and time
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

// Function to create a new comment element
function createCommentElement(content, id) {
  // Create a new list item element
  let newComment = document.createElement("li");
  newComment.setAttribute("data-id", id); // Add a unique identifier

  // Create a span to store the date and time posted
  let lastPosted = document.createElement("span");
  lastPosted.textContent = formatDate();

  // Create a delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    newComment.remove(); // Remove the comment from the DOM
    localComments = localComments.filter((comment) => comment.id !== id); // Remove the comment from local storage
    localStorage.setItem("savedComments", JSON.stringify(localComments)); // Update local storage
  });

  // Add the content, date, and delete button to the list item
  newComment.textContent = content;
  newComment.appendChild(lastPosted);
  newComment.appendChild(deleteButton);

  return newComment;
}

// Event listener for form submission
commentForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from submitting and reloading the page

  let content = textarea.value; // Get the value of the textarea
  let id = Date.now().toString(); // Generate a unique identifier based on the current timestamp

  // Create a new comment element
  let newComment = createCommentElement(content, id);

  // Add the new comment to the list
  newComments.appendChild(newComment);

  // Save the comment to local storage
  localComments.push({ id, content: newComment.outerHTML });
  localStorage.setItem("savedComments", JSON.stringify(localComments));

  // Clear the textarea
  textarea.value = "";
});

// Load saved comments from local storage when the page loads
document.addEventListener("DOMContentLoaded", () => {
  const savedComments = localStorage.getItem("savedComments");
  if (savedComments) {
    const commentsArray = JSON.parse(savedComments);
    commentsArray.forEach((comment) => {
      const commentElement = createCommentElement(comment.content, comment.id);
      newComments.appendChild(commentElement);
    });
  }
});
