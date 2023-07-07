const Discord = require('discord.js')
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MEMBERS"],
})
const TOKEN = "<insert your bot TOKEN here!>"

client.on("guildMemberAdd", async member => {
  const guild = member.guild;
  const channel =  client.channels.cache.get("<insert your VC ID here!>");

channel.setName(`🆕・${member.user.username}`)
});

client.on('ready', () => {
console.log('Guild Count: ' + client.guilds.cache.size)
  console.log('Ping: ' + (client.ws.ping))
  console.log('Online! Add A New Member To Update the channel!')
  console.log('IMPORTANT: THIS BOT ONLY WORKS IN A SINGLE SERVER!')

  client.user.setActivity({ type: "WATCHING", name: `Last Joined` })
  
  require('http').createServer((req, res) => res.end('Bot is alive!')).listen(3000)
  
})
client.login(TOKEN);

// ----------------------------
// Bot Coded By: @Ek2100
// https://github.com/Ek2100
