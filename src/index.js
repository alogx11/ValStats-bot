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
  "MTE0OTc5MTI2ODE2ODI2OTgzNA.GlywtN.FIE70O8zFaI-ciUUsFOjXSP2x3fqdiNatChSOM"
);
