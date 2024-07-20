function redirectToPlay() {
  window.location.href = "play.html";
}

function wordcheck() {
  let word = document.getElementById('random_word').textContent.split(":")[1].trim();
  let answer = document.getElementById('answer').value.trim();
  if (word == answer) {
    alert("You guessed the word! Congratulations!");
  } else {
    alert("Better luck next time!");
  }
}

function getRandomWord() {
  fetch('words.json')
   .then(response => response.json())
   .then(words => {
      const randomWord = words[Math.floor(Math.random() * words.length)];
      return randomWord;
    })
   .then(randomWord => {
      const wordElement = document.getElementById("random_word");
      wordElement.textContent = `Guess: ${randomWord}`;
    })
   .catch(error => console.error('Error:', error));
}
