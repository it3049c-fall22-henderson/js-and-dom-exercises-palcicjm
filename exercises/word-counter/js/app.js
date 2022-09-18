// 🤖: create 2 constants with references to textarea input and the stats section from the DOM

textInput = document.querySelector(".text");
wordCount = document.querySelector(".word-count");
charCount = document.querySelector(".char-count");

// 🤖: Create an Event Listener on textarea input
// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.

textInput.addEventListener("input", () => {
  const splitChar = textInput.value.split("").length;
  const splitWord = textInput.value.split(" ").length;
  wordCount.textContent = splitWord;
  charCount.textContent = splitChar;
});




