 const nameInputCard = document.getElementById("nameInputCard");
const birthdayPage = document.getElementById("birthdayPage");
const surpriseCard = document.getElementById("surpriseCard");
const finalCard = document.getElementById("finalCard");
const heartsContainer = document.getElementById("heartsContainer");

const submitName = document.getElementById("submitName");
const nameInput = document.getElementById("nameInput");

const typingText = document.getElementById("typingText");
const messageBox = document.getElementById("messageBox");
const nextMessage = document.getElementById("nextMessage");
const celebrateText = document.getElementById("celebrateText");
const finalText = document.getElementById("finalText");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const okBtn = document.getElementById("okBtn");
const bgMusic = document.getElementById("bgMusic");
const confettiCanvas = document.getElementById("confetti");
const ctx = confettiCanvas.getContext("2d");

let userName = "";

// Typing effect
function typeText(element, text, speed = 50) {
  return new Promise((resolve) => {
    let i = 0;
    element.textContent = "";
    const typing = setInterval(() => {
      element.textContent += text.charAt(i);
      i++;
      if (i === text.length) {
        clearInterval(typing);
        resolve();
      }
    }, speed);
  });
}

// Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 4 + "s";
  heart.style.fontSize = 16 + Math.random() * 20 + "px";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}
setInterval(createHeart, 400);

// Handle name input
submitName.addEventListener("click", () => {
  userName = nameInput.value.trim();
  if (!userName) return alert("Please enter a name!");
  nameInputCard.classList.add("hidden");
  birthdayPage.classList.remove("hidden");
  startTypingSequence();
});

// Typing sequence
async function startTypingSequence() {
  await typeText(typingText, `🎂 HAPPY BIRTHDAY, ${userName}! 🎉`);
  await new Promise(r => setTimeout(r, 1000));
  await typeText(messageBox, "❤️ Wishing you joy, laughter, and endless love today!");
  await new Promise(r => setTimeout(r, 1500));
  await typeText(nextMessage, "✨ Tap here for your birthday surprise ✨");
  nextMessage.addEventListener("click", showSurprise);
}

// Surprise screen
function showSurprise() {
  birthdayPage.classList.add("hidden");
  surpriseCard.classList.remove("hidden");
  celebrateText.textContent = `${userName}, how about we celebrate your birthday in style? 🎈`;
  bgMusic.play();
}

// Celebration
yesBtn.addEventListener("click", () => {
  surpriseCard.classList.add("hidden");
  finalCard.classList.remove("hidden");
  finalText.textContent = `🎉 Happy Birthday ${userName}! 🎉`;
  launchConfetti();
});

noBtn.addEventListener("click", () => {
  surpriseCard.classList.add("hidden");
  nameInputCard.classList.remove("hidden");
  nameInput.value = "";
});

okBtn.addEventListener("click", () => {
  alert("Let's make this birthday unforgettable! 💕");
});

// 🎇 Confetti Burst
function launchConfetti() {
  const confetti = [];
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  for (let i = 0; i < 150; i++) {
    confetti.push({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * confettiCanvas.height - confettiCanvas.height,
      r: Math.random() * 6 + 2,
      d: Math.random() * 6 + 2,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confetti.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });
    update();
    requestAnimationFrame(draw);
  }

  function update() {
    confetti.forEach((p) => {
      p.y += Math.cos(p.d) + 1 + p.r / 2;
      if (p.y > confettiCanvas.height) {
        p.y = -10;
        p.x = Math.random() * confettiCanvas.width;
      }
    });
  }
  draw();
}
