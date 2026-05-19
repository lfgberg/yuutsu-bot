//  Code to be run
module.exports.run = async (client, message, args, txt) => {

  //  Import Discord
  const Discord = module.require("discord.js");

  const attachment = new Discord.MessageAttachment('./assets/images/switchdiagram.png', 'switchdiagram.png');
  message.channel.send(attachment);

};

//  Exports relevant info
module.exports.info = {
  name: "switchdiagram",
  description: "Shows a diagram of how an mx style switch actuates",
  usage: "switchdiagram",
  dev: false,
}
