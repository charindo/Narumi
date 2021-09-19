const { Discord, MessageEmbed } = require("discord.js");

module.exports = class {
    constructor (client) {
        this.client = client;
    }

    async run (message) {
        if (message.author.id == this.client.user.id || message.author.bot){
            return;
        }
        if (message.content === '!ping') {
            message.channel.send('Pong!');
        }else if(message.content === '!test'){
            const exampleEmbed = new MessageEmbed()
                .setColor('#EBB0FC')
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
    }
};