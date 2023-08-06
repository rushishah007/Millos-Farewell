const screens = document.querySelectorAll('.screen');
const messageContainer = document.querySelector('.message-container');
const typingIndicator = document.querySelector('.typing-indicator');
let currentIndex = 0;

const screenDelays = [
  0,   // Screen 0 (immediate display)
  4000, // Screen 1 (3 seconds delay)
  3500, // Screen 2 (3 seconds delay)
  3500, // Screen 3 (3 seconds delay)
  3500, // Screen 4 (3 seconds delay)
  3500, // Screen 5 (3 seconds delay)
  3500, // Screen 6 (3 seconds delay)
  0,    // Screen 7 (immediate display)
];

function showNextScreen() {
  screens[currentIndex].style.display = 'none';

  // Skip screen7 and stop incrementing currentIndex
  if (currentIndex < screens.length - 1) {
    currentIndex++;
  }

  if (currentIndex < screens.length) {
    screens[currentIndex].style.display = 'block';
  }

  if (currentIndex === 1) {
    typeMessage("Happy Journey Millooooooo");
  }

  if (currentIndex < screens.length - 1) {
    setTimeout(showNextScreen, screenDelays[currentIndex]);
  }
}

function typeMessage(message) {
  const messageElement = document.getElementById('message1');
  let index = 0;
  const typingInterval = setInterval(() => {
    messageElement.textContent += message.charAt(index);
    index++;
    if (index === message.length) {
      clearInterval(typingInterval);
      typingIndicator.style.display = 'none';
      if (currentIndex === 1) {
        setTimeout(showNextScreen, 4000); // Delay before showing screen 7 (3 seconds)
      }
    }
  }, 100);
}

function sendMessage() {
  const messageElement = document.getElementById('message1');
  messageElement.textContent = "Happy Journey Millooooooo ➤";
}

function flipCard(cardIndex) {
  const card = document.querySelector(`.card:nth-child(${cardIndex})`);
  card.classList.toggle('flipped');
}

showNextScreen();
