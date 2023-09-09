const { Client, IntentsBitField } = require("discord.js");
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.login(
  "MTE0OTc5MTI2ODE2ODI2OTgzNA.G_WKLn.6lPcaFCyXdleB3iYxh6YtS__xIwxCFL__cjt8c"
);
