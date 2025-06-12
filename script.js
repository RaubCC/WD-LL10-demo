/* Task 1 - Complete the function according to the TODO */
function addComment(username, comment, addToStart) {
  // If the username does not start with '@', add it
  if (!username.startsWith("@")) {
    username = `@${username}`;
  }
  // Create the comment string in the format: @username: comment
  const newComment = `${username}: ${comment}`;
  // Add the comment to the start or end of the comments array
  if (addToStart) {
    comments.unshift(newComment); // Adds to the beginning
  } else {
    comments.push(newComment); // Adds to the end
  }
  // After adding, scroll to the new comment in the list
  setTimeout(() => {
    // Find all comment elements in the list
    const commentElements = document.querySelectorAll(".list-group-item");
    if (addToStart && commentElements.length > 0) {
      // Scroll to the first comment if added to start
      commentElements[0].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else if (!addToStart && commentElements.length > 0) {
      // Scroll to the last comment if added to end
      commentElements[commentElements.length - 1].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, 100); // Wait for DOM update
}

/* Task 2 - Create your showWinnerMessage below according to the TODO */

/* Task 3 - Create your pickWinner below according to the TODO */
function pickWinner() {
  // Pick a random index from the comments array
  const randomIndex = Math.floor(Math.random() * comments.length);
  // Get the winner's comment
  const winnerComment = comments[randomIndex];
  // Display the winner's comment in the #winner-display element
  const winnerDisplay = document.getElementById("winner-display");
  winnerDisplay.textContent = winnerComment;
  // Show a random celebratory emoji
  showRandomEmoji();
  // Animate the winning comment in the list
  animateWinningComment(winnerComment);
}

/* Task 4 - Complete the function according to the TODO */
function showRandomEmoji() {
  // Get the #winner-emoji element from the page
  const emojiElement = document.getElementById("winner-emoji");
  // Pick a random emoji from the emojis array (from data.js)
  const randomIndex = Math.floor(Math.random() * emojis.length);
  const randomEmoji = emojis[randomIndex];
  // Display the emoji in the #winner-emoji element
  emojiElement.textContent = randomEmoji;
}

/* Task 5 - Complete the function according to the TODO */
function reverseOrder() {
  // Reverse the order of the comments array
  comments.reverse();
  // If you have a function to update the displayed list, call it here (example: renderComments())
  // renderComments();
}

/* Task 6 - Complete the function according to the TODO */
function removeComment(index) {}

/* Task 7 - Complete the function according to the TODO */
function filterEmojiComments() {}

/* Level Ups */

/* Level Up - Task 8 - Complete the filterList function according to the TODO */
function filterList(searchTerm, searchUsers) {}

/* Level Up - Task 9 - Compelte the task according to the TODO */

/* Level Up - Task 10 - Add to the `addComment` function so that the an `@` sign is added to the username if there is not already one before it gets pushed into the array.  */

/* Additional Functions */
// This function adds an animation class to the winning comment in the list
function animateWinningComment(winnerComment) {
  // Find all comment elements in the list (assuming they have a class 'list-group-item')
  const commentElements = document.querySelectorAll(".list-group-item");
  // Loop through each comment element
  commentElements.forEach((el) => {
    // Check if the text matches the winner's comment
    if (el.textContent === winnerComment) {
      // Add the 'winner' and animation classes
      el.classList.add("winner", "animate__animated", "animate__tada");
      // Remove the animation class after it finishes (1s)
      setTimeout(() => {
        el.classList.remove("animate__animated", "animate__tada");
      }, 1000);
    } else {
      // Remove winner class from non-winners
      el.classList.remove("winner");
    }
  });
}
