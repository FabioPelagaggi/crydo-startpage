let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  baseCurrency: "BRL",
  temperature: {
    location: 'Rio de Janeiro,BR',
    scale: "C",
  },
  clock: {
    format: "I:i p", // This is overridden by the visual settings UI (24-hour vs 12-hour toggle)
    iconColor: "#f4a261",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://chat.openai.com/",
  openLastVisitedTab: true,
  userName: "crydo",
  wallpaper: "src/img/backgrounds/kamehouse.jpg",

  customQuotes: [
  ],

  bookmarks: [
    { name: "GitHub", url: "https://github.com", icon: "brand-github" },
    { name: "Twitter", url: "https://twitter.com", icon: "brand-twitter" },
    { name: "YouTube", url: "https://youtube.com", icon: "brand-youtube" },
    { name: "Reddit", url: "https://reddit.com", icon: "brand-reddit" },
    { name: "Discord", url: "https://discord.com", icon: "brand-discord" },
  ],
  tabs: [
    {
      name: "chill",
      background_url: "src/img/banners/cbg-13.gif",
      accent: "#a9b665", // Olive Green
      containerColor: "#2a2b26", // Dark Olive
      categories: [{
        name: "Social Media",
        links: [
	{
            name: "reddit",
            url: "https://www.reddit.com/",
            icon: "brand-reddit",
            icon_color: "#d8a657", // Muted orange
          },
          {
            name: "whatsapp",
            url: "https://web.whatsapp.com/",
            icon: "brand-whatsapp",
            icon_color: "#8bab68", // Muted green
          },
          {
            name: "linkedin",
            url: "https://www.linkedin.com/",
            icon: "brand-linkedin",
            icon_color: "#7daea3", // Sage teal
          },
        ],
      }, {
        name: "AI Tools",
        links: [
          {
            name: "gemini",
            url: "https://gemini.google.com/",
            icon: "sparkles",
            icon_color: "#b4a4c9", // Soft lavender
          },
          {
            name: "chatgpt",
            url: "https://chat.openai.com/",
            icon: "brand-openai",
            icon_color: "#89b482", // Sage green
          },
          {
            name: "claude",
            url: "https://claude.ai/",
            icon: "message-chatbot",
            icon_color: "#e78a4e", // Soft terracotta
          },
          {
            name: "copilot",
            url: "https://copilot.microsoft.com/",
            icon: "robot",
            icon_color: "#7daea3", // Sage teal
          }
        ],
      }, {
        name: "Shopping",
        links: [
          {
            name: "mercado livre",
            url: "https://www.mercadolivre.com.br/",
            icon: "heart-handshake",
            icon_color: "#d8a657", // Warm gold
          },
          {
            name: "amazon",
            url: "https://www.amazon.com.br/",
            icon: "brand-amazon",
            icon_color: "#c5b4a1", // Warm taupe
          },
          {
            name: "shopee",
            url: "https://shopee.com.br/",
            icon: "brand-shopee",
            icon_color: "#ea6962", // Muted red
          },
          {
            name: "aliexpress",
            url: "https://aliexpress.com/",
            icon: "shopping-bag",
            icon_color: "#e78a4e", // Soft terracotta
          },
        ],
      }, {
        name: "Streaming",
        links: [
          {
            name: "youtube",
            url: "https://www.youtube.com/",
            icon: "brand-youtube-filled",
            icon_color: "#ea6962", // Muted red
          },
          {
            name: "netflix",
            url: "https://www.netflix.com/",
            icon: "brand-netflix",
            icon_color: "#ea6962",
          },
          {
            name: "prime video",
            url: "https://www.primevideo.com/",
            icon: "player-play-filled",
            icon_color: "#7daea3",
          },
          {
            name: "hbo max",
            url: "https://auth.max.com/",
            icon: "brand-hbo",
            icon_color: "#928374", // Muted warm grey / charcoal
          },
          {
            name: "disney+",
            url: "https://www.disneyplus.com/",
            icon: "brand-disney",
            icon_color: "#8899cc", // Muted periwinkle blue
          },
          {
            name: "crunchyroll",
            url: "https://www.crunchyroll.com/",
            icon: "movie",
            icon_color: "#e78a4e", // Soft terracotta
          },
        ],
      }],
    },
    {
      name: "gaming",
      background_url: "src/img/banners/cbg-14.gif",
      accent: "#d4be98", // Warm Beige
      containerColor: "#2a2b26", // Same Dark Olive
      categories: [
        {
          name: "Stores & Platforms",
          links: [
            {
              name: "steam",
              url: "https://store.steampowered.com/",
              icon: "brand-steam",
              icon_color: "#c5b4a1", // Warm taupe
            },
            {
              name: "epic games",
              url: "https://www.epicgames.com/",
              icon: "device-gamepad",
              icon_color: "#7daea3", // Sage teal
            },
            {
              name: "gog",
              url: "http://www.gog.com/",
              icon: "device-gamepad-2",
              icon_color: "#e78a4e", // Soft terracotta
            },
            {
              name: "nuuvem",
              url: "https://www.nuuvem.com/br-en",
              icon: "package",
              icon_color: "#89b482", // Sage green
            },
          ],
        },
        {
          name: "Deals & Bundles",
          links: [
            {
              name: "humble bundle",
              url: "https://www.humblebundle.com/",
              icon: "gift",
              icon_color: "#ea6962", // Muted red
            },
            {
              name: "isthereanydeal",
              url: "https://isthereanydeal.com/",
              icon: "discount-2",
              icon_color: "#b4a4c9", // Soft lavender
            },
            {
              name: "amazon games",
              url: "https://gaming.amazon.com/home",
              icon: "brand-amazon",
              icon_color: "#d8a657", // Warm gold
            }
          ],
        },
        {
          name: "Tools & Community",
          links: [
            {
              name: "backloggd",
              url: "https://www.backloggd.com/",
              icon: "books",
              icon_color: "#d4be98", // Warm beige
            },
            {
              name: "nexusmods",
              url: "https://www.nexusmods.com/",
              icon: "puzzle",
              icon_color: "#a9b665", // Olive green
            },
            {
              name: "gamepad tester",
              url: "https://hardwaretester.com/gamepad",
              icon: "tool",
              icon_color: "#d3869b", // Dusty rose
            },
          ],
        },
        {
          name: "Magic The Gathering",
          links: [
            {
              name: "moxfield",
              url: "https://moxfield.com/decks/personal",
              icon: "cards",
              icon_color: "#c5b4a1", // Warm taupe
            },
            {
              name: "scryfall",
              url: "https://scryfall.com/",
              icon: "search",
              icon_color: "#b4a4c9", // Soft lavender
            },
            {
              name: "edhrec",
              url: "https://edhrec.com/",
              icon: "crown",
              icon_color: "#d8a657", // Warm gold
            },
            {
              name: "ligamagic",
              url: "https://www.ligamagic.com.br/",
              icon: "building-store",
              icon_color: "#89b482", // Sage green
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-16.gif",
      accent: "#e78a4e", // Soft Orange
      containerColor: "#2a2b26", // Same Dark Olive
      categories: [
        {
          name: "Vibe Coding",
          links: [
            {
              name: "replit",
              url: "https://replit.com/",
              icon: "brand-redhat",
              icon_color: "#e78a4e", // Terracotta
            },
            {
              name: "lovable",
              url: "https://lovable.dev/",
              icon: "heart-code",
              icon_color: "#d3869b", // Dusty rose
            },
            {
              name: "vercel",
              url: "https://vercel.com/",
              icon: "brand-vercel",
              icon_color: "#d4be98", // Cream
            },
            {
              name: "bolt",
              url: "https://bolt.new/",
              icon: "bolt",
              icon_color: "#d8a657", // Gold
            },
          ],
        },
        {
          name: "Repositories",
          links: [
            {
              name: "github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: "#c5b4a1", // Warm taupe
            },
            {
              name: "gitlab",
              url: "https://gitlab.com/",
              icon: "brand-gitlab",
              icon_color: "#e78a4e", // Terracotta
            },
            {
              name: "vscode",
              url: "https://vscode.dev/",
              icon: "brand-vscode",
              icon_color: "#7daea3", // Sage
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com/",
              icon: "brand-stackoverflow",
              icon_color: "#d8a657", // Gold
            },
          ],
        },
        {
          name: "Hackathons",
          links: [
            {
              name: "devfolio",
              url: "https://devfolio.co/hackathons",
              icon: "code",
              icon_color: "#7daea3", // Sage
            },
            {
              name: "unstop",
              url: "https://unstop.com/hackathons",
              icon: "trophy",
              icon_color: "#89b482", // Muted green
            },
            {
              name: "hackerearth",
              url: "https://www.hackerearth.com/challenges/",
              icon: "planet",
              icon_color: "#928374", // Warm grey
            },
            {
              name: "kaggle",
              url: "https://www.kaggle.com/competitions",
              icon: "brain",
              icon_color: "#7daea3", // Sage teal
            },
            {
              name: "mlh",
              url: "https://mlh.io/seasons/2025/events",
              icon: "calendar-event",
              icon_color: "#ea6962", // Muted coral
            },
          ],
        },
      ],
    },
    {
      name: "myself",
      background_url: "src/img/banners/cbg-18.gif",
      accent: "#7daea3", // Sage
      containerColor: "#2a2b26", // Same Dark Olive
      categories: [
        {
          name: "Mails",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: "#ea6962", // Muted coral
            },
            {
              name: "outlook",
              url: "https://outlook.live.com/mail/",
              icon: "mail",
              icon_color: "#7daea3", // Sage
            },
          ],
        },
        {
          name: "Storage",
          links: [
            {
              name: "drive",
              url: "https://drive.google.com/drive/u/0/my-drive",
              icon: "brand-google-drive",
              icon_color: "#7daea3", // Sage
            },
            {
              name: "photos",
              url: "https://photos.google.com/",
              icon: "photo-filled",
              icon_color: "#ea6962", // Coral
            },
            {
              name: "youtube music",
              url: "https://music.youtube.com/",
              icon: "brand-youtube",
              icon_color: "#ea6962", // Muted red
            },
          ],
        },
        {
          name: "Productivity",
          links: [
            {
              name: "google keep",
              url: "https://keep.google.com/",
              icon: "notebook",
              icon_color: "#d8a657", // Warm gold
            },
            {
              name: "google calendar",
              url: "https://calendar.google.com/",
              icon: "calendar",
              icon_color: "#7daea3", // Sage
            },
            {
              name: "google maps",
              url: "https://maps.google.com/",
              icon: "brand-google-maps",
              icon_color: "#a9b665", // Olive green
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);

const savedSearchEngines = localStorage.getItem('savedSearchEngines');
const deletedEngines = JSON.parse(localStorage.getItem('deletedSearchEngines') || '[]');

if (savedSearchEngines) {
  try {
    const engines = JSON.parse(savedSearchEngines);
    if (!CONFIG.search) CONFIG.search = { engines: {} };
    const merged = { ...default_config.search.engines, ...engines };
    deletedEngines.forEach(key => delete merged[key]);
    CONFIG.search.engines = merged;
  } catch (e) { }
} else {
  const filtered = { ...default_config.search.engines };
  deletedEngines.forEach(key => delete filtered[key]);
  if (CONFIG.search) CONFIG.search.engines = filtered;
}

(function () {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();

// Sync userName from config if it was still the default or previous
(function() {
  let userSettings = JSON.parse(localStorage.getItem('userSettings') || '{}');
  if (userSettings.userName === 'User' || userSettings.userName === 'Ravi') {
    userSettings.userName = CONFIG.config.userName;
    localStorage.setItem('userSettings', JSON.stringify(userSettings));
  }
})();

// Apply wallpaper from config (localStorage override takes priority)
(function() {
  var wallpaper = localStorage.getItem('customWallpaper') || default_config.wallpaper;
  if (wallpaper) {
    var style = document.createElement('style');
    style.id = 'custom-wallpaper-style';
    style.textContent = 'body::before { background-image: url(' + wallpaper + ') !important; }';
    document.head.appendChild(style);
  }
})();
