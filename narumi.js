const { Client, Intents, MessageEmbed } = require('discord.js');

const Sentry = require("@sentry/node"),
	util = require("util"),
	fs = require("fs"),
	readdir = util.promisify(fs.readdir);
	//mongoose = require("mongoose"),
	//chalk = require("chalk");

const dotenv = require('dotenv');
dotenv.config();
if (process.env.TOKEN == 'undefined') {
    console.error('Error: TOKENが見つかりませんでした');
    process.exit(1);
}

// ================================================================ //
const prefix = "nr!";
// ================================================================ //

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });

console.log('Loading events...');
const eventDir = readdir('./event/');
eventDir.then(files => {
    files.forEach((file) => {
        const eventName = file.split(".")[0];
        console.log(`Loading Event: ${eventName}`);
        const event = new (require(`./event/${file}`))(client);
        client.on(eventName, (...args) => event.run(...args));
        delete require.cache[require.resolve(`./event/${file}`)];
    });
    console.log('Successful loading of the event.');
}).catch(err => {
    console.error('Error: イベントの読み込みに失敗しました');
    process.exit(1);
});

client.login(process.env.TOKEN);