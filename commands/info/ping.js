const { Message, Client } = require('discord.js');

module.exports = {
    name: 'ping',
    run: async (client, message, args) => {
        const embed = {
            description: `Ping: \`${client.ws.ping}ms\``,
            color: 3900150,
        };

        message.channel.send({ embed: embed });
    },
};
