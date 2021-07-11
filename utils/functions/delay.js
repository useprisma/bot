module.exports = {
    delay: async function (ms) {
        return new Promise((r) => setTimeout(r, ms));
    },
};
