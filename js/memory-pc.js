(() => {
  const config = window.BirthdayConfig || {};
  const allMemories = Array.isArray(config.memories) ? config.memories : [];
  const frame = document.getElementById("memoryFrame");
  const caption = document.getElementById("memoryCaption");
  const date = document.getElementById("memoryDate");
  const counter = document.getElementById("memoryCounter");
  const progress = document.getElementById("memoryProgress");
  const thumbs = document.getElementById("thumbnailStrip");
  const folderNote = document.getElementById("memoryFolderNote");
  let activeFilter = "photos";
  let memoryList = [];
  let current = 0;
  let startX = 0, startY = 0, trackingPointer = false;

  const filterLabels = {
    photos: "Photos folder · swipe or use arrows to browse",
    videos: "Videos folder · all your edits and video messages",
    cute: "Cute Msg folder · sweet pictures and little messages",
    audio: "Audio folder · press play to listen"
  };
  const escapeText = value => String(value ?? "");

  function showEmpty(container, title, message) {
    container.replaceChildren();
    const empty = document.createElement("div");
    empty.className = "empty-media";
    const heart = document.createElement("span");
    heart.textContent = "♡";
    const strong = document.createElement("strong");
    strong.textContent = title;
    const p = document.createElement("p");
    p.textContent = message;
    empty.append(heart, strong, p);
    container.appendChild(empty);
  }

  function renderMemory(index) {
    if (!memoryList.length) {
      showEmpty(frame, "This folder is empty", "Add matching files to the assets folder and list them in js/config.js.");
      caption.textContent = "Nothing in this folder yet";
      date.textContent = "";
      counter.textContent = "0 / 0";
      progress.style.width = "0%";
      thumbs.replaceChildren();
      return;
    }
    current = (index + memoryList.length) % memoryList.length;
    const item = memoryList[current];
    frame.replaceChildren();
    let media;
    if (item.type === "video") {
      media = document.createElement("video");
      media.controls = true;
      media.playsInline = true;
      media.preload = "metadata";
      media.src = item.src;
      media.setAttribute("aria-label", item.caption || "Memory video");
    } else if (item.type === "audio") {
      media = document.createElement("div");
      media.className = "audio-memory";
      const icon = document.createElement("div");
      icon.className = "audio-memory-icon";
      icon.textContent = "♫";
      const title = document.createElement("strong");
      title.textContent = item.caption || "A little audio message";
      const player = document.createElement("audio");
      player.controls = true;
      player.preload = "metadata";
      player.src = item.src;
      player.setAttribute("aria-label", item.caption || "Audio memory");
      media.append(icon, title, player);
    } else {
      media = document.createElement("img");
      media.src = item.src;
      media.alt = item.caption || `Memory ${current + 1}`;
      media.loading = "eager";
      media.decoding = "async";
    }
    media.addEventListener("error", () => {
      showEmpty(frame, "This memory could not load", `Could not load ${item.src}. Check the filename and extension.`);
    }, { once: true });
    frame.appendChild(media);
    caption.textContent = escapeText(item.caption || "A little memory");
    date.textContent = escapeText(item.date || "");
    counter.textContent = `${current + 1} / ${memoryList.length}`;
    progress.style.width = `${((current + 1) / memoryList.length) * 100}%`;
    [...thumbs.children].forEach(thumb => thumb.classList.toggle("active", Number(thumb.dataset.memoryIndex) === current));
  }

  function buildThumbnails() {
    thumbs.replaceChildren();
    memoryList.forEach((item, i) => {
      if (item.type !== "image") return;
      const button = document.createElement("button");
      button.dataset.memoryIndex = String(i);
      button.className = "thumb";
      button.type = "button";
      button.setAttribute("aria-label", `Show ${item.caption || `memory ${i + 1}`}`);
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = "";
      img.loading = "lazy";
      button.appendChild(img);
      button.addEventListener("click", () => renderMemory(i));
      thumbs.appendChild(button);
    });
  }

  function setFilter(filter) {
    activeFilter = filter;
    memoryList = allMemories.filter(item => (item.category || (item.type === "video" ? "videos" : item.type === "audio" ? "audio" : "photos")) === filter);
    current = 0;
    if (folderNote) folderNote.textContent = filterLabels[filter] || "Memory folder";
    document.querySelectorAll("[data-memory-filter]").forEach(button => {
      button.classList.toggle("active", button.dataset.memoryFilter === filter);
      button.setAttribute("aria-pressed", String(button.dataset.memoryFilter === filter));
    });
    buildThumbnails();
    renderMemory(0);
  }

  function move(delta) {
    if (!memoryList.length) return;
    const oldVideo = frame.querySelector("video");
    if (oldVideo) { oldVideo.pause(); oldVideo.removeAttribute("src"); oldVideo.load(); }
    const oldAudio = frame.querySelector("audio");
    if (oldAudio) { oldAudio.pause(); oldAudio.removeAttribute("src"); oldAudio.load(); }
    renderMemory(current + delta);
  }

  document.getElementById("prevMemory").addEventListener("click", () => move(-1));
  document.getElementById("nextMemory").addEventListener("click", () => move(1));
  document.querySelectorAll("[data-memory-filter]").forEach(button => {
    button.addEventListener("click", () => setFilter(button.dataset.memoryFilter));
  });
  setFilter(activeFilter);

  frame.addEventListener("pointerdown", event => {
    if (event.target.closest("video, audio, button, a, input")) return;
    startX = event.clientX; startY = event.clientY; trackingPointer = true;
  });
  frame.addEventListener("pointerup", event => {
    if (!trackingPointer) return;
    trackingPointer = false;
    const dx = event.clientX - startX, dy = event.clientY - startY;
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.25) move(dx < 0 ? 1 : -1);
  });
  frame.addEventListener("pointercancel", () => { trackingPointer = false; });

  const windowIds = ["viewerWindow", "galleryWindow", "noteWindow"];
  function closeWindow(id) {
    const win = document.getElementById(id);
    win.classList.add("hidden");
    win.classList.remove("maximized");
    if (id === "viewerWindow") {
      const video = frame.querySelector("video");
      if (video) video.pause();
      const audio = frame.querySelector("audio");
      if (audio) audio.pause();
    }
  }
  document.querySelectorAll("[data-open-window]").forEach(button => {
    button.addEventListener("click", () => {
      windowIds.forEach(id => { if (id !== button.dataset.openWindow) closeWindow(id); });
      const win = document.getElementById(button.dataset.openWindow);
      if (!win) return;
      win.classList.remove("hidden");
      if (button.dataset.openWindow === "viewerWindow") renderMemory(current);
      if (button.dataset.openWindow === "galleryWindow") window.GallerySlideshow?.refreshMini();
    });
  });
  document.querySelectorAll("[data-close-window]").forEach(button => button.addEventListener("click", () => closeWindow(button.dataset.closeWindow)));
  document.querySelectorAll("[data-minimize]").forEach(button => button.addEventListener("click", () => closeWindow(button.dataset.minimize)));
  document.querySelectorAll("[data-maximize]").forEach(button => button.addEventListener("click", () => {
    document.getElementById(button.dataset.maximize).classList.toggle("maximized");
  }));
  document.getElementById("desktopMusic").addEventListener("click", () => document.getElementById("musicToggle").click());

  document.getElementById("pcNoteTitle").textContent = config.pcNoteTitle || "A tiny birthday note";
  document.getElementById("pcNoteText").textContent = config.pcNoteText || "A little note, just for you.";
  const updateClock = () => {
    const now = new Date();
    document.getElementById("desktopClock").textContent = now.toLocaleDateString(undefined, { month: "short", day: "numeric" });
    document.getElementById("taskbarTime").textContent = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };
  updateClock();
  window.setInterval(updateClock, 30000);
})();
