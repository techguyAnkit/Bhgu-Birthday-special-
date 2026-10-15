(() => {
  const config = window.BirthdayConfig || {};
  document.getElementById("recipientName").textContent = config.recipientName || "Your Special Person";
  document.getElementById("welcomeSubtitle").textContent = config.welcomeSubtitle || "A little universe made just for you.";
  document.getElementById("finalTitle").textContent = config.birthdayTitle || "Happy Birthday!";
  document.getElementById("finalMessage").textContent = config.finalMessage || "A little birthday surprise, made just for you.";

  const music = document.getElementById("backgroundMusic");
  const musicButton = document.getElementById("musicToggle");
  if (config.backgroundMusic) music.src = config.backgroundMusic;
  else {
    musicButton.title = "Add a music file path in js/config.js to enable music";
  }
  async function toggleMusic() {
    if (!config.backgroundMusic) {
      window.BirthdayEffects?.toast("Add a music file path in js/config.js to enable background music ♫");
      return;
    }
    if (music.paused) {
      try {
        await music.play();
        musicButton.classList.add("active");
        musicButton.innerHTML = "♫ <span>Playing</span>";
      } catch {
        window.BirthdayEffects?.toast("Your browser could not start the music. Try again.");
      }
    } else {
      music.pause();
      musicButton.classList.remove("active");
      musicButton.innerHTML = "♫ <span>Music</span>";
    }
  }
  musicButton.addEventListener("click", toggleMusic);
  music.addEventListener("ended", () => {
    musicButton.classList.remove("active");
    musicButton.innerHTML = "♫ <span>Music</span>";
  });

  document.getElementById("celebrateAgain").addEventListener("click", () => {
    window.BirthdayEffects?.confetti(90);
    window.BirthdayEffects?.toast("A little more birthday magic! ✨");
  });
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
})();
