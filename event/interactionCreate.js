const Discord = require("discord.js");

module.exports = class {
    constructor (client) {
        this.client = client;
    }

    async run (interaction) {
        console.log(interaction)
    }
};