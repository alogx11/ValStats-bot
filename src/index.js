require("dotenv").config();

const { Client, IntentsBitField } = require("discord.js");
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`${c.user.tag} is online`);
});

client.on("messageCreate", (msg) => {
  if (msg.author.bot == false) {
    if (msg.content == "hello") {
      msg.reply("hello");
    }
  }
});

client.login(process.env.TOKEN);
