function redirectToPlay() {
  window.location.href = "play.html";
}


function getRandomWord() {
  fetch('words.json')
   .then(response => response.json())
   .then(words => {
      var randomWord = words[Math.floor(Math.random() * words.length)];
      return randomWord;
    })
   .then(randomWord => {
      var wordElement = document.getElementById("random_word");
         wordElement.textContent = `Guess: ${randomWord.word}`; // Access the 'word' property
    })
   .catch(error => console.error("Error:", error));
}


function wordcheck() {
  var randomWordElement = document.getElementById("random_word");
  var answerElement = document.getElementById("answer");
  var heartElement = document.getElementById("hearts");

  if (!randomWordElement || !answerElement || !heartElement) {
      console.error("Missing HTML elements");
      return;
  }

  var word = randomWordElement.textContent.split(":")[1].trim();
  var answer = answerElement.value.trim();
  var heartMatch = heartElement.textContent.split(":")[1].trim().match(/❤️/g);
  let heartsCount = heartMatch ? heartMatch.length : 0;

  if ( word.toLowerCase() == answer.toLowerCase() ) {
      alert("You guessed the word! Congratulations!");
      getRandomWord();
  } else {
    if (heartsCount <= 0) {
      alert("You lost the game 😂");
      window.location.href = "play.html";
      
    } else {
      heartsCount -= 1;
      heartElement.textContent = "hearts: " + "❤️".repeat(heartsCount);
      alert("You lost ❤️ heart! Better luck next time!");
      getRandomWord();
    }
  }
}






