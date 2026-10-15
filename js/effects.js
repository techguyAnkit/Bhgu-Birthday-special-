(() => {
  const layer = document.getElementById("sparkleLayer");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (layer && !reducedMotion) {
    const symbols = ["✦", "✧", "♡", "·"];
    for (let i = 0; i < 24; i++) {
      const el = document.createElement("span");
      el.className = "sparkle";
      el.textContent = symbols[i % symbols.length];
      el.style.left = `${Math.random() * 100}%`;
      el.style.top = `${Math.random() * 100}%`;
      el.style.fontSize = `${8 + Math.random() * 13}px`;
      el.style.animationDelay = `${Math.random() * 4}s`;
      el.style.animationDuration = `${2.5 + Math.random() * 3}s`;
      layer.appendChild(el);
    }
  }

  window.BirthdayEffects = {
    confetti(count = 65) {
      if (reducedMotion) return;
      const pieces = ["✦", "♡", "✧", "●", "♥"];
      const colors = ["#f2a9c5", "#d9d0f5", "#ffe39a", "#c4e8f5", "#d6efdc"];
      for (let i = 0; i < count; i++) {
        const el = document.createElement("span");
        el.className = "confetti-piece";
        el.textContent = pieces[Math.floor(Math.random() * pieces.length)];
        el.style.left = `${Math.random() * 100}vw`;
        el.style.color = colors[Math.floor(Math.random() * colors.length)];
        el.style.fontSize = `${10 + Math.random() * 14}px`;
        el.style.setProperty("--duration", `${1.7 + Math.random() * 2.1}s`);
        el.style.setProperty("--drift", `${Math.random() * 160 - 80}px`);
        document.body.appendChild(el);
        window.setTimeout(() => el.remove(), 4200);
      }
    },
    toast(message) {
      const toast = document.getElementById("toast");
      if (!toast) return;
      toast.textContent = message;
      toast.classList.add("visible");
      window.clearTimeout(this.toastTimer);
      this.toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2800);
    }
  };
})();
