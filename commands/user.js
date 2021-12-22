module.exports = {
    name: 'user',
    description: 'this is the user command',
    execute : function (message, args) {
        message.channel.send(`User info: ${message.author.tag}\nUser ID: ${message.author.id}`);
    }
}
