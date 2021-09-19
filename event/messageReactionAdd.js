const Discord = require("discord.js");

module.exports = class {
    constructor (client) {
        this.client = client;
    }

    async run (reaction, user) {
        const message = reaction.message;
        console.log(user.id)
    }
};