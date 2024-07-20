function redirectToPlay() {
  window.location.href = "play.html";
}


if (document.URL.indexOf("play.html") !== -1) {
  document.addEventListener("DOMContentLoaded", function() {
    getRandomWord();
  });
}

function getRandomWord() {
  fetch('words.json')
   .then(response => response.json())
   .then(words => {
      let randomWord = words[Math.floor(Math.random() * words.length)];
      return randomWord;
    })
   .then(randomWord => {
         let wordElement = document.getElementById("random_word");
         wordElement.textContent = `Guess: ${randomWord.word}`; // Access the 'word' property
    })
   .catch(error => console.error("Error:", error));
}


function wordcheck() {
  let randomWordElement = document.getElementById("random_word");
  let answerElement = document.getElementById("answer");
  let heartElement = document.getElementById("hearts");

  if (!randomWordElement || !answerElement || !heartElement) {
      console.error("Missing HTML elements");
      return;
  }

  let word = randomWordElement.textContent.split(":")[1].trim();
  let answer = answerElement.value.trim();
  let heartMatch = heartElement.textContent.split(":")[1].trim().match(/❤️/g);
  let heartsCount = heartMatch ? heartMatch.length : 0;

  if ( word.toLowerCase() == answer.toLowerCase() ) {
      alert("You guessed the word! Congratulations!");
      answerElement.value = ""; // for clear input()
      getRandomWord();
  } else {
    if (heartsCount <= 0) {
      alert("You lost the game 😂");
      window.location.href = "play.html";
      
      
    } else {
      heartsCount -= 1;
      heartElement.textContent = "hearts: " + "❤️".repeat(heartsCount);
      alert("You lost ❤️ heart! Better luck next time!");
      answerElement.value = "";
      getRandomWord();
    }
  }
}






