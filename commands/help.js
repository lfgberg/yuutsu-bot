//  Code to be run
module.exports.run = async (client, message, args, txt) => {

  //  Import Discord
  const Discord = module.require("discord.js");

  //  Generic message in case they don't know the command names
  if (!args[0]) {
    //  Creates the generic message
    let content = [];
    content.push("Here's a list of all my commands: \n \`\`\`");
    content.push(client.commands.filter(command => {
      if (command.info.dev === false) {
        return true;
      } else {
        return false;
      }
    }).map(command => command.info.name).join('\n'));
    content.push('\`\`\`');
    content.push("In order to get more information do " + client.config.prefix + "help (COMMAND NAME)");
    message.channel.send(content, {
      split: true
    });
  } else {
    let command = client.commands.get(args[0].toLowerCase());
    if (!command) {
      message.channel.send("I'm sorry, but you didn't enter a valid command name. Please try again");
      let content = [];
      content.push("Here's a list of all my commands: \n \`\`\`");
      content.push(client.commands.filter(command => {
        if (command.info.dev === false) {
          return true;
        } else {
          return false;
        }
      }).map(command => command.info.name).join('\n'));
      content.push('\`\`\`');
      content.push("In order to get more information do " + client.config.prefix + "help (COMMAND NAME)");
      message.channel.send(content, {
        split: true
      });
      return;
    }
    let embed = new Discord.MessageEmbed()
      .setAuthor(command.info.name)
      .setColor(3447003)
      .addField("Description", command.info.description)
      .addField("Usage", (client.config.prefix + command.info.usage))
      .setFooter(`${client.user.username}, By ${client.lfgberg.tag}`)
      .setTimestamp(new Date());
    message.channel.send(embed);
  }
};

//  Exports relevant info
module.exports.info = {
  name: "help",
  description: "displays commands and their usage",
  usage: "help COMMAND (optional)",
  dev: false,
}
