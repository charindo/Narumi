const { Client, Intents, MessageEmbed } = require('discord.js');

const dotenv = require('dotenv');
dotenv.config();
if (process.env.TOKEN == 'undefined') {
  console.error('Error: TOKENが見つかりませんでした');
  process.exit(1);
}

// ================================================================ //
const prefix = "nr!";
// ================================================================ //

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`${client.user.tag} でログインしています。`)
})

client.on('messageCreate', async message => {
  if (message.content === '!ping') {
    message.channel.send('Pong!')
  }else if(message.content === '!test'){
    const exampleEmbed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Some title')
      .setURL('https://discord.js.org/')
      .setAuthor('Some name', 'https://i.imgur.com/AfFp7pu.png', 'https://discord.js.org')
      .setDescription('Some description here')
      .setThumbnail('https://i.imgur.com/AfFp7pu.png')
      .addFields(
        { name: 'Regular field title', value: 'Some value here' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Inline field title', value: 'Some value here', inline: true },
        { name: 'Inline field title', value: 'Some value here', inline: true },
      )
      .addField('Inline field title', 'Some value here', true)
      .setImage('https://i.imgur.com/AfFp7pu.png')
      .setTimestamp()
      .setFooter('Some footer text here', 'https://i.imgur.com/AfFp7pu.png');

    message.channel.send({ embeds: [exampleEmbed] });
  }
}) 

client.login(process.env.TOKEN)