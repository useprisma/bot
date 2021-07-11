const fs = require('fs');

module.exports = {
    name: 'help',
    run: async (client, message, args) => {
        const categories = fs.readdirSync('commands/');

        console.log(categories);
    },
};
