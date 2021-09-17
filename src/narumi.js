const { Client, Intents } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();
if (process.env.TOKEN == 'undefined') {
  console.error('Error: TOKENが見つかりませんでした');
  process.exit(1);
}

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`${client.user.tag} でログインしています。`)
})

client.on('messageCreate', async msg => {
  if (msg.content === '!ping') {
    msg.channel.send('Pong!')
  }
}) 

client.login(process.env.TOKEN)