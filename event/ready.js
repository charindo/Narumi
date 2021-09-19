const Discord = require("discord.js");

module.exports = class {
    constructor (client) {
        this.client = client;
    }

    async run () {
        console.log(`${this.client.user.tag} でログインしています。`);
    }
};