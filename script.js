/* Task 1 - Complete the function according to the TODO */
function addComment(username, comment, addToStart) {}

/* Task 2 - Create your showWinnerMessage below according to the TODO */

/* Task 3 - Create your pickWinner below according to the TODO */

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
