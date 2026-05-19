//  Requires libraries
const Discord = require("discord.js");
const fs = require("fs");

const client = new Discord.Client();

//  Import config + attach to client
const config = require("./config.json");
client.config = config;

// Rounding function, attach to client
function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
client.round = round

//  Import switch data + attach to client
const switchData = require("./assets/data.json");
client.switchData = switchData;

//  Create list of switch names
var content = [];
client.switchData.forEach(function(item) {
  content.push(item.name);
});
var content = content.join('\n');

//reads for events
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    // Ignore non javascript files
    if (!file.endsWith(".js")) return;
    // Loads the files
    const event = require(`./events/${file}`);
    // Lift the name
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
});

//  Creates a collection of the commands
client.commands = new Discord.Collection();

//  Reads for commands
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    //  Ignore non javascript files
    if (!file.endsWith(".js")) return;
    // Loads the files
    let props = require(`./commands/${file}`);
    // Lift the name
    let commandName = file.split(".")[0];
    // Stores in the client.commands collection
    client.commands.set(commandName, props);
  });
});

client.login(client.config.token);
