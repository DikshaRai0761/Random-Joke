const jokes = [
  "Why did the golfer bring two pairs of pants? - In case he got a hole in one.",
  "Why don’t scientists trust atoms? - Because they make up everything!",
  "I told my computer I needed a break, and it said 'No problem, I'll go to sleep.' 😴",
  "Why did the math book look sad? - Because it had too many problems.",
  "Parallel lines have so much in common… it’s a shame they’ll never meet!",
  "I would tell you a construction joke, but I’m still working on it. 😄"
];

// 🔊 Funny pop sound setup
const popSound = new Audio('pop.mp3'); // Ensure 'pop.mp3' is in the same folder

function getJoke() {
  const jokeElement = document.getElementById("joke");
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const jokeText = jokes[randomIndex];

  // Reset text for typewriter effect
  jokeElement.textContent = "";
  let i = 0;
  const speed = 40;

  function typeWriter() {
    if (i < jokeText.length) {
      jokeElement.textContent += jokeText.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();

  // 🎵 Play sound
  popSound.currentTime = 0;
  popSound.play();

  // 🎉 Start emoji rain
  startEmojiRain();
}

// 🎊 Emoji Rain Function
function startEmojiRain() {
  const emojis = ["😂", "🤣", "😆", "😹", "😜", "😄", "😁"];
  const emojiCount = 40; // Number of emojis each time

  for (let i = 0; i < emojiCount; i++) {
    const emoji = document.createElement("div");
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.position = "fixed";
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.top = "-2em";
    emoji.style.fontSize = `${1 + Math.random() * 2}rem`; // Random font size
    emoji.style.zIndex = 9999;
    emoji.style.animation = "emojiFall 2s linear";
    emoji.style.pointerEvents = "none"; // Don't block UI clicks

    document.body.appendChild(emoji);

    setTimeout(() => {
      emoji.remove();
    }, 2000);
  }
}
