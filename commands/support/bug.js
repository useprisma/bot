module.exports = {
    name: 'bug',
    run: async (client, message, args) => {
        const sentEmbed = {
            description:
                'Your bug has been successfully sent to the Prisma Support Server and will be reviewed shortly.',
            color: 5293702,
            author: {
                name: `${message.author.tag} | [sent]`,
                icon_url: 'https://i.imgur.com/tOSQNCh.jpg',
            },
        };
        const issueEmbed = {};

        message.channel.send(null, { embeds: [sentEmbed] });
    },
};
