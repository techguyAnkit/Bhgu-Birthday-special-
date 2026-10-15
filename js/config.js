/*
 * Birthday Gift Universe configuration.
 * All media paths below match the files packaged in assets/.
 */
const BirthdayConfig = {
  recipientName: "Bhguu",
  birthdayTitle: "Happy Birthday, Bhguu! 🎂",
  welcomeSubtitle: "A little universe made of memories, music, letters, and love.",
  finalMessage: "I made this little universe just for you — filled with memories, music, letters, and tiny surprises. I hope it makes you smile. 💗",
  pcNoteTitle: "A tiny birthday note",
  pcNoteText: "Some people make ordinary days feel a little more magical. This tiny corner of the internet is a reminder of how special you are. Happy Birthday, Bhguu! ♡",
  slideshowInterval: 4000,
  autoStartSlideshow: true,
  backgroundMusic: "assets/audio/i like it better when i am with u.mp3",
  gifts: [
    { id: "playlist", title: "The Playlist", description: "A playlist made for a special person.", url: "https://techguyankit.github.io/spotifyplaylist/", icon: "♫", tint: "#fce0ec" },
    { id: "mixtape", title: "The Mixtape", description: "Press play and let the memories speak.", url: "https://mewtru.com/mixtape/playback?v=AGsn2ycFRqI%2C5S7Wy1Gt-Jc%2CisytKyPaM8M%2CLUgpPmj6nR8%2CcStOvI74hQo&to=bhguu%2520special", icon: "▣", tint: "#fbe9b8" },
    { id: "letters", title: "Open When Letters", description: "Little letters for different moments.", url: "https://openwhenletters.app/c/7684b098-7afc-4610-bd54-1dfdcc9033fd/v/d7a89eee2232a6df1dd82234ef9a03aa3cab1e1346a5ebbe5da8f664eb7ca7f4", icon: "✉", tint: "#dcd6f7" },
    { id: "bouquet", title: "Digital Bouquet", description: "A little bouquet that never loses its charm.", url: "https://digibouquet.vercel.app/bouquet/240fdb97-535b-495a-a522-97cb7e59dcea", icon: "🌷", tint: "#d9efdf" },
    { id: "audio", title: "Audio Surprise", description: "A little something to listen to.", url: "https://techguyankit.github.io/bhgu-audio/", icon: "♫", tint: "#d9eaf9" },
    { id: "letter-three", title: "Letter Three", description: "Another page from the heart.", url: "https://techguyankit.github.io/letter3/", icon: "♡", tint: "#fce0ec" },
    { id: "letter-two", title: "Letter Two", description: "Some things deserve to be written down.", url: "https://techguyankit.github.io/letter2/", icon: "✎", tint: "#fbe9b8" },
    { id: "letter-one", title: "Letter One", description: "The first little letter in this collection.", url: "https://techguyankit.github.io/letter1/", icon: "💌", tint: "#e4def9" }
  ],
  memories: [
    { id: "photo-01", type: "image", category: "photos", src: "assets/images/1.jpeg", caption: "A little memory ♡" },
    { id: "photo-02", type: "image", category: "photos", src: "assets/images/2.jpeg", caption: "One for the scrapbook" },
    { id: "photo-03", type: "image", category: "photos", src: "assets/images/3.jpeg", caption: "A moment worth keeping" },
    { id: "photo-04", type: "image", category: "photos", src: "assets/images/4.jpeg", caption: "A little piece of happiness" },
    { id: "photo-05", type: "image", category: "photos", src: "assets/images/5.jpeg", caption: "Another favorite memory" },
    { id: "photo-06", type: "image", category: "photos", src: "assets/images/6.jpeg", caption: "The little things matter" },
    { id: "photo-07", type: "image", category: "photos", src: "assets/images/7.jpeg", caption: "A memory to keep close" },
    { id: "photo-08", type: "image", category: "photos", src: "assets/images/8.jpeg", caption: "Made with love" },
    { id: "photo-09", type: "image", category: "photos", src: "assets/images/9.jpeg", caption: "A tiny happy moment" },

    { id: "cute-msg-01", type: "image", category: "cute", src: "assets/images/cute-msg/cutemsg1.jpg", caption: "A little message for you" },
    { id: "cute-msg-02", type: "image", category: "cute", src: "assets/images/cute-msg/cutemsg2.jpg", caption: "Something sweet" },
    { id: "cute-msg-03", type: "image", category: "cute", src: "assets/images/cute-msg/cutemsg3.jpg", caption: "One more little message" },
    { id: "cute-msg-photo-01", type: "image", category: "cute", src: "assets/images/cute-msg/1.jpg", caption: "A cute snapshot" },
    { id: "cute-msg-photo-02", type: "image", category: "cute", src: "assets/images/cute-msg/2.jpg", caption: "Another cute snapshot" },
    { id: "cute-msg-photo-03", type: "image", category: "cute", src: "assets/images/cute-msg/3.jpg", caption: "One more cute moment" },
    { id: "special-photo", type: "image", category: "photos", src: "assets/images/me bhgu gnesh pic.jpeg", caption: "A special picture ♡" },

    { id: "video-bhgu-1", type: "video", category: "videos", src: "assets/videos/bhgu edit 1.mp4", caption: "A little edit for you" },
    { id: "video-bhgu-2", type: "video", category: "videos", src: "assets/videos/bhgu edit 2.mp4", caption: "Another edit to remember" },
    { id: "video-message-1", type: "video", category: "videos", src: "assets/videos/message.mp4", caption: "A little message" },
    { id: "video-message-2", type: "video", category: "videos", src: "assets/videos/message2.mp4", caption: "A message for you" },
    { id: "video-message-3", type: "video", category: "videos", src: "assets/videos/message3.mp4", caption: "Another little message" },
    { id: "video-message-4", type: "video", category: "videos", src: "assets/videos/message4.mp4", caption: "A memory in motion" },
    { id: "video-message-5", type: "video", category: "videos", src: "assets/videos/message5.mp4", caption: "A little moment to replay" },
    { id: "video-message-6", type: "video", category: "videos", src: "assets/videos/message6.mp4", caption: "One last video surprise" },

    { id: "audio-bade", type: "audio", category: "audio", src: "assets/audio/bade ache lgte h.mp3", caption: "Bade Ache Lgte H" },
    { id: "audio-like-better", type: "audio", category: "audio", src: "assets/audio/i like it better when i am with u.mp3", caption: "I Like It Better When I Am With You" },
    { id: "audio-talks", type: "audio", category: "audio", src: "assets/audio/u talks moment.mp3", caption: "U Talks Moment" },
    { id: "audio-yaban", type: "audio", category: "audio", src: "assets/audio/Yabanhttpofshhthksttttish.mp3", caption: "A Little Audio Surprise" }
  ],
  galleryImages: [
    { src: "assets/images/1.jpeg", caption: "A little memory ♡" },
    { src: "assets/images/2.jpeg", caption: "One for the scrapbook" },
    { src: "assets/images/3.jpeg", caption: "A moment worth keeping" },
    { src: "assets/images/4.jpeg", caption: "A little piece of happiness" },
    { src: "assets/images/5.jpeg", caption: "Another favorite memory" },
    { src: "assets/images/6.jpeg", caption: "The little things matter" },
    { src: "assets/images/7.jpeg", caption: "A memory to keep close" },
    { src: "assets/images/8.jpeg", caption: "Made with love" },
    { src: "assets/images/9.jpeg", caption: "A tiny happy moment" },
    { src: "assets/images/cute-msg/cutemsg1.jpg", caption: "A little message for you" },
    { src: "assets/images/cute-msg/cutemsg2.jpg", caption: "Something sweet" },
    { src: "assets/images/cute-msg/cutemsg3.jpg", caption: "One more little message" },
    { src: "assets/images/me bhgu gnesh pic.jpeg", caption: "A special picture ♡" },
    { src: "assets/images/cute-msg/1.jpg", caption: "A bonus snapshot" },
    { src: "assets/images/cute-msg/2.jpg", caption: "Another bonus snapshot" },
    { src: "assets/images/cute-msg/3.jpg", caption: "A bonus moment" }
  ]
};
window.BirthdayConfig = BirthdayConfig;
