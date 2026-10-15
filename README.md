# Birthday Gift Universe 🎁

A static birthday surprise website built with HTML, CSS, and vanilla JavaScript. No framework, backend, or build step required.

## Run locally

Open `index.html` in a browser. For the most reliable local media behavior, use a static server such as VS Code Live Server or Python's built-in server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Personalize it

Edit `js/config.js`:
- `recipientName`: recipient's display name
- `birthdayTitle`, `welcomeSubtitle`, `finalMessage`: birthday copy
- `gifts`: the eight linked experiences
- `memories`: photos and videos in the retro PC viewer
- `galleryImages`: photos used by the automatic gallery
- `slideshowInterval`: slideshow delay in milliseconds
- `backgroundMusic`: optional audio file path

## Add photos

1. Copy images into `assets/images/`.
2. Add them to `memories` for the PC viewer and/or `galleryImages` for the slideshow.
3. Use paths relative to `index.html`, e.g. `assets/images/photo-01.jpg`.
4. Supported common formats include JPG, PNG, WebP, GIF, and AVIF.

Example:

```js
memories: [
  {
    id: "memory-01",
    type: "image",
    src: "assets/images/photo-01.jpg",
    caption: "A favorite memory",
    date: "October 2026"
  }
],
galleryImages: [
  {
    src: "assets/images/photo-01.jpg",
    caption: "The little moments matter most."
  }
]
```

## Add videos

Copy MP4/WebM clips into `assets/videos/` and add them to `memories`:

```js
{
  id: "memory-video-01",
  type: "video",
  src: "assets/videos/video-01.mp4",
  caption: "A little moment to remember",
  date: ""
}
```

Videos use native controls and are paused when you move to another memory.

## Change the gifts

The eight existing links are defined in `js/config.js`. Edit the title, description, icon, or URL there. The mixtape URL is kept with its original query parameters.

## Deploy to GitHub Pages

1. Commit the project files to the root of your existing repository.
2. In GitHub, open **Settings → Pages**.
3. Choose **Deploy from a branch**, select your branch (commonly `main`) and the `/ (root)` folder.
4. Save and wait for GitHub Pages to publish.
5. Test the published site and verify the media paths.

All local CSS, JavaScript, and media paths are relative for project-site deployment. No repository-specific URL is hardcoded.

## Notes

- The supplied personal photos, videos, and audio tracks are included and configured in `js/config.js`.
- Paths use the exact extensions and filenames found in the supplied ZIP (`.jpeg`, `.jpg`, `.mp4`, and `.mp3`).
- Three still images (`1.jpg`, `2.jpg`, `3.jpg`) that were found in `assets/videos/` have been moved into `assets/images/` in this final package.
- Background music is opt-in because browsers restrict autoplay with sound.
- External gifts open in a new tab.
- Reduced-motion preferences are respected.


### Memory PC folders
- Photos, Videos, Cute Msg, and Audio are separate filters inside the PC memory viewer.
- `assets/images/cute-msg/` contains `cutemsg1.jpg`, `cutemsg2.jpg`, `cutemsg3.jpg`, plus the three still images `1.jpg`, `2.jpg`, and `3.jpg` previously found among the video assets.
- Gift links open directly in a new tab; no confirmation dialog is used.
- Photo and video media use `object-fit: contain` so the complete image/video remains visible without cropping.
