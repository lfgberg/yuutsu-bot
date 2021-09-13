module.exports = (client, message) => {

  // Ignore all bots
  if (message.author.bot) return;

  //  Cumzone image only channel setup
  if (message.channel.id === "836432672079085589"){
    if (message.attachments.size === 0){
      message.delete().catch(console.error);
      return;
    }
  }

  // Ignore messages not starting with the prefix
  if (message.content.indexOf(client.config.prefix) !== 0) return;

  //  Cooldown
  const cooldown = new Set();
  if (cooldown.has(message.author.id)) {
    message.reply("There's a 2 second cooldown. Wait a bit.");
    return;
  }
  cooldown.add(message.author.id);
  setTimeout(() => {
    cooldown.delete(message.author.id);
  }, 2000);

  // Lifts args + command
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  var user = null
  const command = args.shift().toLowerCase();
  const txt = message.content.slice(client.config.prefix.length + command.length).trim();
  var condition = new RegExp("[0-9]{15}");

  if (message.mentions.users.first()){
  var user = message.mentions.users.first();
  }
  else if (args[0] && condition.test(args[0]) === true && args[0] >= 9223372036854775807){
    var testArgs = client.users.fetch(args[0]).catch(err => {console.error(err)});
    if (testArgs){var user = testArgs}
  }
  else var user = null

  // Lift the command being used
  const cmd = client.commands.get(command);

  // If that command doesn't exist, exit
  if (!cmd) {
//      message.channel.send(`I'm sorry but that isn't a valid command, please do ${client.config.prefix}help`);
    return;
  }

  // Run the command
  cmd.run(client, message, args, txt, user);
};
