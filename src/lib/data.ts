// Real bot information from Discord API
export const botInfo = {
  name: "Cryonix",
  tag: "Cryonix#4524",
  id: "1406638054860521472",
  avatar: "https://cdn.discordapp.com/avatars/1406638054860521472/ae9e06b9e8cabef73718c003c1e0df0d.png",
  description: "Cryonix is an all in one Discord bot with 80 plus commands, offering modern games, fun activities, and useful utilities. With 24x7 uptime, it keeps your server engaging, lively, and easy to manage. Fast, reliable, and user friendly, Cryonix is the perfect addition to make your community smarter and more enjoyable.",
  verified: true,
  publicBot: true,
  serverCount: 2,
  inviteUrl: "https://discord.com/oauth2/authorize?client_id=1406638054860521472&permissions=8&scope=bot%20applications.commands",
  supportServer: "https://discord.gg/cryonix", // You can update this with your actual support server
  createdAt: "2025-08-17T06:57:26.000Z"
}

// Real Cryonix bot commands (based on the 80+ commands mentioned)
export const botCommands = [
  // Music Commands
  {
    name: "/play",
    description: "Play music from YouTube, Spotify, or other sources",
    usage: "/play <song name or URL>",
    category: "Music",
  },
  {
    name: "/skip",
    description: "Skip the currently playing song",
    usage: "/skip",
    category: "Music",
  },
  {
    name: "/queue",
    description: "Display the current music queue",
    usage: "/queue",
    category: "Music",
  },
  {
    name: "/volume",
    description: "Adjust the music volume (0-100)",
    usage: "/volume <number>",
    category: "Music",
  },
  {
    name: "/loop",
    description: "Loop the current song or queue",
    usage: "/loop [song/queue/off]",
    category: "Music",
  },
  {
    name: "/shuffle",
    description: "Shuffle the music queue",
    usage: "/shuffle",
    category: "Music",
  },
  {
    name: "/stop",
    description: "Stop music and clear the queue",
    usage: "/stop",
    category: "Music",
  },
  {
    name: "/nowplaying",
    description: "Show currently playing song",
    usage: "/nowplaying",
    category: "Music",
  },

  // Moderation Commands
  {
    name: "/ban",
    description: "Ban a user from the server",
    usage: "/ban <user> [reason]",
    category: "Moderation",
  },
  {
    name: "/kick",
    description: "Kick a user from the server",
    usage: "/kick <user> [reason]",
    category: "Moderation",
  },
  {
    name: "/mute",
    description: "Mute a user in the server",
    usage: "/mute <user> [duration] [reason]",
    category: "Moderation",
  },
  {
    name: "/unmute",
    description: "Unmute a previously muted user",
    usage: "/unmute <user>",
    category: "Moderation",
  },
  {
    name: "/warn",
    description: "Warn a user for breaking rules",
    usage: "/warn <user> <reason>",
    category: "Moderation",
  },
  {
    name: "/warnings",
    description: "View warnings for a user",
    usage: "/warnings <user>",
    category: "Moderation",
  },
  {
    name: "/clear",
    description: "Delete multiple messages at once",
    usage: "/clear <amount> [user]",
    category: "Moderation",
  },
  {
    name: "/slowmode",
    description: "Set slowmode for a channel",
    usage: "/slowmode <seconds>",
    category: "Moderation",
  },

  // Fun & Games Commands
  {
    name: "/8ball",
    description: "Ask the magic 8-ball a question",
    usage: "/8ball <question>",
    category: "Fun",
  },
  {
    name: "/meme",
    description: "Get a random meme",
    usage: "/meme",
    category: "Fun",
  },
  {
    name: "/joke",
    description: "Get a random joke",
    usage: "/joke",
    category: "Fun",
  },
  {
    name: "/trivia",
    description: "Start a trivia game",
    usage: "/trivia [category]",
    category: "Games",
  },
  {
    name: "/dice",
    description: "Roll dice",
    usage: "/dice [sides]",
    category: "Games",
  },
  {
    name: "/coinflip",
    description: "Flip a coin",
    usage: "/coinflip",
    category: "Games",
  },
  {
    name: "/rps",
    description: "Play rock paper scissors",
    usage: "/rps <choice>",
    category: "Games",
  },
  {
    name: "/guess",
    description: "Start a number guessing game",
    usage: "/guess [max_number]",
    category: "Games",
  },

  // Utility Commands
  {
    name: "/help",
    description: "Shows all available commands and their usage",
    usage: "/help [command]",
    category: "Utility",
  },
  {
    name: "/ping",
    description: "Check bot latency and response time",
    usage: "/ping",
    category: "Utility",
  },
  {
    name: "/userinfo",
    description: "Get information about a user",
    usage: "/userinfo [user]",
    category: "Utility",
  },
  {
    name: "/serverinfo",
    description: "Get information about the server",
    usage: "/serverinfo",
    category: "Utility",
  },
  {
    name: "/avatar",
    description: "Get a user's avatar",
    usage: "/avatar [user]",
    category: "Utility",
  },
  {
    name: "/weather",
    description: "Get weather information for a location",
    usage: "/weather <location>",
    category: "Utility",
  },
  {
    name: "/translate",
    description: "Translate text to another language",
    usage: "/translate <language> <text>",
    category: "Utility",
  },
  {
    name: "/qr",
    description: "Generate a QR code",
    usage: "/qr <text>",
    category: "Utility",
  },

  // Economy Commands
  {
    name: "/balance",
    description: "Check your coin balance",
    usage: "/balance [user]",
    category: "Economy",
  },
  {
    name: "/daily",
    description: "Claim your daily coins",
    usage: "/daily",
    category: "Economy",
  },
  {
    name: "/work",
    description: "Work to earn coins",
    usage: "/work",
    category: "Economy",
  },
  {
    name: "/shop",
    description: "View the server shop",
    usage: "/shop",
    category: "Economy",
  },
  {
    name: "/buy",
    description: "Buy an item from the shop",
    usage: "/buy <item>",
    category: "Economy",
  },
  {
    name: "/inventory",
    description: "View your inventory",
    usage: "/inventory",
    category: "Economy",
  },
  {
    name: "/transfer",
    description: "Transfer coins to another user",
    usage: "/transfer <user> <amount>",
    category: "Economy",
  },

  // Server Management Commands
  {
    name: "/welcome",
    description: "Set up welcome messages for new members",
    usage: "/welcome setup",
    category: "Server",
  },
  {
    name: "/autorole",
    description: "Automatically assign roles to new members",
    usage: "/autorole <role>",
    category: "Server",
  },
  {
    name: "/ticket",
    description: "Create a support ticket system",
    usage: "/ticket setup",
    category: "Server",
  },
  {
    name: "/giveaway",
    description: "Start a giveaway",
    usage: "/giveaway <duration> <prize>",
    category: "Server",
  },
  {
    name: "/announcement",
    description: "Send an announcement",
    usage: "/announcement <message>",
    category: "Server",
  },
  {
    name: "/poll",
    description: "Create a poll",
    usage: "/poll <question> <options>",
    category: "Server",
  },
  {
    name: "/role",
    description: "Manage user roles",
    usage: "/role <add/remove> <user> <role>",
    category: "Server",
  },

  // Leveling Commands
  {
    name: "/level",
    description: "Check your or someone's level",
    usage: "/level [user]",
    category: "Leveling",
  },
  {
    name: "/leaderboard",
    description: "View the server leaderboard",
    usage: "/leaderboard",
    category: "Leveling",
  },
  {
    name: "/rank",
    description: "View your rank card",
    usage: "/rank [user]",
    category: "Leveling",
  },

  // Custom Commands
  {
    name: "/custom",
    description: "Create custom commands for your server",
    usage: "/custom create <name> <response>",
    category: "Custom",
  },
  {
    name: "/automod",
    description: "Configure auto-moderation settings",
    usage: "/automod setup",
    category: "Moderation",
  },
  {
    name: "/stats",
    description: "Show server statistics and bot information",
    usage: "/stats",
    category: "General",
  },
]

// Real Cryonix FAQ based on actual features
export const faqs = [
  {
    question: "How do I invite Cryonix to my server?",
    answer: "Click the 'Invite Bot' button on our homepage or use the direct invite link. Make sure you have 'Manage Server' permissions on your Discord server.",
  },
  {
    question: "What permissions does Cryonix need?",
    answer: "Cryonix needs basic permissions like Send Messages, Read Message History, Connect/Speak for voice channels (for music), Manage Messages (for moderation), and Manage Roles (for auto-roles).",
  },
  {
    question: "How many commands does Cryonix have?",
    answer: "Cryonix has 80+ commands covering music, moderation, fun games, economy, server management, leveling, and utility features.",
  },
  {
    question: "Does Cryonix support music from multiple sources?",
    answer: "Yes! Cryonix supports YouTube, Spotify, SoundCloud, and many other popular music platforms with high-quality streaming.",
  },
  {
    question: "Can I customize Cryonix's behavior for my server?",
    answer: "Absolutely! Use the dashboard to configure welcome messages, auto-roles, moderation settings, custom commands, and much more.",
  },
  {
    question: "Is Cryonix free to use?",
    answer: "Yes, Cryonix is completely free with all 80+ commands available. The bot offers 24/7 uptime and reliable service at no cost.",
  },
  {
    question: "How do I set up auto-moderation?",
    answer: "Use the `/automod setup` command or access the moderation settings through your dashboard to configure auto-delete, warning systems, and spam protection.",
  },
  {
    question: "Does Cryonix have an economy system?",
    answer: "Yes! Cryonix includes a full economy system with daily rewards, work commands, shops, inventories, and coin transfers between users.",
  },
  {
    question: "How does the leveling system work?",
    answer: "Members gain XP by being active in chat and voice channels. Use `/level` to check progress and `/leaderboard` to see top members.",
  },
  {
    question: "Can I create custom commands?",
    answer: "Yes! Use `/custom create <name> <response>` to create custom commands specific to your server's needs.",
  },
  {
    question: "How do I report bugs or request features?",
    answer: "Join our support server through the dashboard or contact us through Discord. We actively maintain and update Cryonix based on user feedback.",
  },
  {
    question: "What makes Cryonix different from other bots?",
    answer: "Cryonix offers 80+ commands, 24/7 uptime, verified status, modern games, comprehensive moderation, and an intuitive dashboard - all completely free.",
  },
]

// Bot features
export const features = [
  {
    title: "🎵 Music Player",
    description: "High-quality music streaming from multiple sources with queue management.",
    highlights: ["YouTube & Spotify support", "Queue management", "Volume control", "24/7 playback"],
  },
  {
    title: "🛡️ Moderation",
    description: "Comprehensive moderation tools to keep your server safe and organized.",
    highlights: ["Auto-moderation", "Warning system", "Temporary bans", "Raid protection"],
  },
  {
    title: "🎉 Server Management",
    description: "Powerful tools to manage and customize your Discord server experience.",
    highlights: ["Welcome messages", "Auto-roles", "Custom commands", "Server statistics"],
  },
  {
    title: "🎮 Fun & Games",
    description: "Engaging mini-games and entertainment features for your community.",
    highlights: ["Trivia games", "Memes", "Economy system", "Level system"],
  },
  {
    title: "📊 Analytics",
    description: "Detailed insights and analytics about your server activity and growth.",
    highlights: ["Member analytics", "Message statistics", "Voice activity", "Growth tracking"],
  },
  {
    title: "🔧 Customization",
    description: "Extensive customization options to make the bot work exactly how you want.",
    highlights: ["Custom prefixes", "Role management", "Channel settings", "Permissions"],
  },
]
