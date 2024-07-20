



function redirectToPlay() {
   window.location.href = "play.html";
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
      wordElement.textContent = `Random word: ${randomWord}`;
    })
   .catch(error => console.error('Error:', error));
}

