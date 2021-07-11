/*
                      Prisma — Discord.js
                            v1.0.0
                  @zenepity 2021 | MIT License

              📕 Read the docs! docs.useprisma.tk
      🛠️ Contribute on Github! github.com/zenepity/prisma
*/

require('dotenv').config();
const { Client, Collection } = require('discord.js');
const { delay } = require('./utils/functions/delay.js');

const client = new Client({
    intents: [
        'GUILDS',
        'GUILD_MEMBERS',
        'GUILD_BANS',
        'GUILD_EMOJIS',
        'GUILD_MESSAGE_REACTIONS',
        'GUILD_MESSAGES',
    ],
});

client.commands = new Collection();
client.aliases = new Collection();
client.env = process.env;
client.prefix = client.env.PREFIX;
client.invite = 'https://discord.com/api/oauth2/authorize?client_id=862825016315609100&permissions=2889215191&scope=bot%20applications.commands'; // prettier-ignore

['commands', 'events'].forEach((handler) => {
    require(`./handlers/${handler}.js`)(client);
});

module.exports = { client };
client.login(client.env.TOKEN).catch((e) => console.log(e));
