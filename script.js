const jokes = [
  "Why did the golfer bring two pairs of pants? - In case he got a hole in one.",
  "Why don’t scientists trust atoms? - Because they make up everything!",
  "I told my computer I needed a break, and it said 'No problem, I'll go to sleep.' 😴",
  "Why did the math book look sad? - Because it had too many problems.",
  "Parallel lines have so much in common… it’s a shame they’ll never meet!"
];

function getJoke() {
  const jokeElement = document.getElementById("joke");
  const randomIndex = Math.floor(Math.random() * jokes.length);
  jokeElement.textContent = jokes[randomIndex];
}
