const fs = require('fs');
// require discord.js module
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
// create a new discord client
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./src/commands/${file}`);
  client.commands.set(command.name, command);
}

// when client is ready, start running code
client.on('ready', () => {
  console.log('Wanna play a game?')
  client.user.setActivity('with itself');
});

// login to discord with apps token
client.login(token);

// overall this is for when someone @shkeebie
client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  // commands
  switch (command) {
    case 'woll':
      client.commands.get('wolldatshit').execute(message, args, client);
      break
    case 'rock':
      client.commands.get('rps').execute(message, 'Rock', client);
      break
    case 'paper':
      client.commands.get('rps').execute(message, 'Paper', client)
      break
    case 'scissors':
      client.commands.get('rps').execute(message, 'Scissors', client)
      break
    case "clean":
      client.commands.get('clean').execute(message, args, client)
      break;
  }
});