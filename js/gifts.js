(() => {
  const grid = document.getElementById("giftGrid");
  const config = window.BirthdayConfig;
  if (!grid || !config) return;

  config.gifts.forEach((gift, index) => {
    const card = document.createElement("article");
    card.className = "gift-card";
    card.style.setProperty("--card-tint", gift.tint || "#fce4ec");
    card.innerHTML = `
      <span class="gift-number">GIFT ${String(index + 1).padStart(2, "0")}</span>
      <div class="gift-illustration" aria-hidden="true">${gift.icon || "♡"}</div>
      <h3></h3><p></p>
      <a class="gift-open" target="_blank" rel="noopener noreferrer">Unwrap this gift <span aria-hidden="true">↗</span></a>
    `;
    card.querySelector("h3").textContent = gift.title;
    card.querySelector("p").textContent = gift.description;
    const link = card.querySelector("a");
    link.href = gift.url;
    link.addEventListener("click", () => {
      card.classList.remove("revealed");
      void card.offsetWidth;
      card.classList.add("revealed");
    });
    grid.appendChild(card);
  });
})();
