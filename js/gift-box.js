(() => {
  const bigGift = document.getElementById("bigGift");
  const stage = document.getElementById("openingStage");
  const hint = document.getElementById("openingHint");
  const reopen = document.getElementById("reopenGifts");
  let opened = false;

  function openGift() {
    if (opened) {
      document.getElementById("gifts").scrollIntoView({ behavior: "smooth" });
      return;
    }
    opened = true;
    bigGift.classList.add("opened");
    stage.classList.add("is-open");
    hint.textContent = "surprise! your little treasures are ready ♡";
    reopen.classList.remove("hidden");
    window.BirthdayEffects?.confetti(42);
    window.setTimeout(() => document.getElementById("gifts").scrollIntoView({ behavior: "smooth" }), 950);
  }

  bigGift.addEventListener("click", openGift);
  bigGift.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openGift();
    }
  });
  document.getElementById("startSurprise").addEventListener("click", () => {
    document.getElementById("gift-opening").scrollIntoView({ behavior: "smooth" });
    window.setTimeout(openGift, 400);
  });
  document.getElementById("heroGift").addEventListener("click", () => {
    document.getElementById("gift-opening").scrollIntoView({ behavior: "smooth" });
    window.setTimeout(openGift, 400);
  });
  document.getElementById("heroGift").addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      document.getElementById("gift-opening").scrollIntoView({ behavior: "smooth" });
      window.setTimeout(openGift, 400);
    }
  });
  reopen.addEventListener("click", () => {
    document.getElementById("gifts").scrollIntoView({ behavior: "smooth" });
  });
})();
