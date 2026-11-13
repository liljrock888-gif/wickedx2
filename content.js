/* =====================================================================
   WICKEDX2 SITE CONTENT: edit this file to update the website.
   You never need to touch index.html.

   HOW TO ADD A VIDEO
     1. Copy the video's link from YouTube (Share > Copy link).
     2. Paste a new line at the TOP of the VIDEOS list below, like:
          { link: "https://youtube.com/shorts/AbCdEfGhIjK", title: "My new video" },
        (the title is optional; a plain "link", works too)
     3. Save. The newest video goes first.

   HOW TO ADD MERCH
     Copy one { ... } block in MERCH, change the name/price,
     and paste the product link from your Fourthwall store into "link".
     "look" picks the drawing: "tee", "hoodie", "beanie" or "stickers".
   ===================================================================== */

const CHANNEL = {
  name: "Wickedx2",
  handle: "@Wickedx2",                 // your YouTube @handle
  layout: "shorts",                    // "shorts" = tall vertical cards, "videos" = wide cards
  tagline: "Roblox, Block Blast and gaming Shorts. Help me hit 10K subs!",
  about: "I make the content I think you want, and maybe need. Roblox battlegrounds, anime games, Block Blast high scores and whatever drops next. Thank you all for 5K, you're amazing. Now help me reach 10K!",
  // Optional: your channel ID (starts with UC...). When it's filled in, the
  // "Latest upload" player shows your newest video automatically.
  // Find it at youtube.com/account_advanced
  channelId: "UCBzfOjbr3nU9Nw4ZwaY4ZaA",
  store: "",                           // your Fourthwall store link, e.g. "https://wickedx2-shop.fourthwall.com"
  discord: "",                         // optional Discord invite link
  email: "wickedxbusiness1@gmail.com", // business email (shown as text)
  socials: {                           // leave "" to hide one
    youtube: "https://www.youtube.com/@Wickedx2",
    tiktok: "",
    instagram: "",
    twitch: "",
    x: ""
  }
};

// Newest first. Paste YouTube links here.
const VIDEOS = [
  { link: "https://youtube.com/shorts/Ux1gSUdyH7Y", title: "I OPENED 225 VILLAIN CHESTS AND... 🔥(Anime Expeditions)" },
  { link: "https://youtube.com/shorts/p6NUBR1-RGs", title: "1000 iq move ⭐" },
  { link: "https://youtube.com/shorts/qPOuboazFnE", title: "i said i’d stop after one game of block blast 😂" },
  { link: "https://youtube.com/shorts/Kb_YytIoo2E", title: "Why My Block Blast Score Looks Like THIS 😳" },
  { link: "https://youtube.com/shorts/hai4WlGHbXE", title: "They Dropped a NEW Character…🔥⚡" },
  { link: "https://youtube.com/shorts/wm7yzVNZ2FQ", title: "PICCOLO WOKE ME UP JUST TO AURA FARM (DRAGON BALL FINAL STAND REMASTERED)" },
  { link: "https://youtube.com/shorts/ByQ4c_0fy0k", title: "THIS NEW MODE IN FISTBORN IS🔥" },
  { link: "https://youtube.com/shorts/z8QiKZNqqN8", title: "They're Added Goku… and He’s INSANE 💥" },
  { link: "https://youtube.com/shorts/K-_YvZVC-JQ", title: "This Brute is TOO Overpowered 💥" },
  { link: "https://youtube.com/shorts/BAH_VNYoIGE", title: "THIS MECH TRANSFORMATION IN COMBATANTS IS FIRE 🔥" },
  { link: "https://youtube.com/shorts/ehR01gjUX2Y", title: "⚡🔥 FIRE & LIGHTNING BREATHING IN THIS NEW DEMON SLAYER GAME" },
  { link: "https://youtube.com/shorts/a11VSJIXFDU", title: "Bored of Roblox Battlegrounds? Try Combatants 👀" },
];

// Leave empty to show "Merch coming soon". Example product:
//   { name: "Skull Hoodie", price: "$52", look: "hoodie", link: "https://...fourthwall.com/products/..." },
// "look" picks the drawing: "tee", "hoodie", "beanie" or "stickers".
const MERCH = [
];
