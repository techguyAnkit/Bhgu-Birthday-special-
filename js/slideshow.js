(() => {
  const config = window.BirthdayConfig || {};
  const images = Array.isArray(config.galleryImages) ? config.galleryImages : [];
  const photo = document.getElementById("galleryPhoto");
  const caption = document.getElementById("galleryCaption");
  const counter = document.getElementById("galleryCounter");
  const progress = document.getElementById("galleryProgress");
  const polaroid = document.getElementById("mainPolaroid");
  const miniFrame = document.getElementById("miniGalleryFrame");
  const miniCaption = document.getElementById("miniGalleryCaption");
  const miniPlay = document.getElementById("miniGalleryPlay");
  const interval = Math.max(1500, Number(config.slideshowInterval) || 4000);
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let index = 0, timer = null, startedAt = 0, paused = false, raf = null;

  function emptyState(container, title, message) {
    container.replaceChildren();
    const box = document.createElement("div");
    box.className = "empty-gallery";
    const icon = document.createElement("span"); icon.textContent = "✿";
    const strong = document.createElement("strong"); strong.textContent = title;
    const small = document.createElement("small"); small.textContent = message;
    box.append(icon, strong, small); container.appendChild(box);
  }
  function addImage(container, item, alt) {
    container.replaceChildren();
    const img = document.createElement("img");
    img.src = item.src; img.alt = item.alt || alt; img.loading = "lazy";
    img.addEventListener("error", () => emptyState(container, "Photo could not load", `Check this path: ${item.src}`), { once: true });
    container.appendChild(img);
  }
  function render() {
    if (!images.length) {
      emptyState(photo, "Your photos belong here", "Add images to the galleryImages list in js/config.js.");
      caption.textContent = "the best moments are the little ones";
      counter.textContent = "0 / 0"; progress.style.width = "0%";
      emptyState(miniFrame, "Your gallery is waiting", "Add photos to js/config.js.");
      miniCaption.textContent = "A little gallery of lovely things.";
      return;
    }
    index = (index + images.length) % images.length;
    const item = images[index];
    addImage(photo, item, `Gallery photo ${index + 1}`);
    caption.textContent = item.caption || "a little moment to keep";
    counter.textContent = `${index + 1} / ${images.length}`;
    progress.style.width = `${((index + 1) / images.length) * 100}%`;
    addImage(miniFrame, item, `Gallery photo ${index + 1}`);
    miniCaption.textContent = item.caption || "A little moment to keep.";
  }
  function stopTimer() {
    if (timer) window.clearTimeout(timer);
    timer = null;
    if (raf) window.cancelAnimationFrame(raf);
    raf = null;
  }
  function schedule() {
    stopTimer();
    if (paused || images.length < 2 || document.hidden) return;
    startedAt = Date.now();
    timer = window.setTimeout(() => { index = (index + 1) % images.length; render(); schedule(); }, interval);
    animateProgress();
  }
  function animateProgress() {
    if (reducedMotion || paused || !timer) return;
    const tick = () => {
      if (paused || !timer) return;
      const elapsed = Date.now() - startedAt;
      const partial = Math.min(100, (elapsed / interval) * 100);
      progress.style.width = `${Math.max(partial, ((index + 1) / images.length) * 100)}%`;
      raf = window.requestAnimationFrame(tick);
    };
    raf = window.requestAnimationFrame(tick);
  }
  function move(delta) {
    if (!images.length) { window.BirthdayEffects?.toast("Add photos to js/config.js to start your gallery ♡"); return; }
    index = (index + delta + images.length) % images.length;
    render(); schedule();
  }
  function toggle() {
    paused = !paused;
    miniPlay.textContent = paused ? "▶ Play" : "Ⅱ Pause";
    document.getElementById("galleryPlay").textContent = paused ? "▶ Play slideshow" : "Ⅱ Pause slideshow";
    schedule();
  }
  document.getElementById("galleryPrev").addEventListener("click", () => move(-1));
  document.getElementById("galleryNext").addEventListener("click", () => move(1));
  document.getElementById("galleryPlay").addEventListener("click", toggle);
  document.getElementById("miniGalleryPrev").addEventListener("click", () => move(-1));
  document.getElementById("miniGalleryNext").addEventListener("click", () => move(1));
  miniPlay.addEventListener("click", toggle);
  document.addEventListener("visibilitychange", () => { if (document.hidden) stopTimer(); else schedule(); });
  document.getElementById("gallery").addEventListener("mouseenter", () => { if (!paused) stopTimer(); });
  document.getElementById("gallery").addEventListener("mouseleave", () => { if (!paused) schedule(); });
  window.GallerySlideshow = { refreshMini: render, next: () => move(1) };
  render();
  if (config.autoStartSlideshow === false) { paused = true; toggleLabels(); } else schedule();
  function toggleLabels() {
    miniPlay.textContent = "▶ Play";
    document.getElementById("galleryPlay").textContent = "▶ Play slideshow";
  }
})();
