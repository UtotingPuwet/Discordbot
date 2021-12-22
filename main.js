const Discord = require('discord.js');
const { token } = require('./config.json');
const client = new Discord.Client({ intents : ["GUILDS", 'GUILD_MESSAGES'] }, {partials : ['MESSAGE', 'CHANNEL']});

const fs = require('fs');
const prefix = 'c!';

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    //new item in collection
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
    console.log("Getting the files :)")
}




client.once('ready', () => {
    console.log('XI JINPING IS ACTIVATING');
});





client.on('messageCreate', message => {
    console.log("Bot has read a message");
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split();
    const word = args.shift().toLowerCase();
    const command2 = client.commands.get(word.name);

    try {
        client.commands.get(word).execute(message,args);
    }catch (error) {
        console.error(error);
    }



});



client.login(token);
