module.exports = {
    name: 'server',
    description: 'this is the server command',
    execute : function (message, args) {
        message.channel.send(`Server info: ${message.guild.name}\nTotal Members: ${message.guild.memberCount}`);
    }
}