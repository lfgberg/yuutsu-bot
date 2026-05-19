//  Code to be run
module.exports.run = async (client, message, args, txt) => {

  //  Import Discord
  const Discord = module.require("discord.js");

  const attachment = new Discord.MessageAttachment('./assets/images/mountingtypes.jpg', 'mountingtypes.jpg');
  message.channel.send(attachment);

};

//  Exports relevant info
module.exports.info = {
  name: "mountingstyles",
  description: "Shows a diagram of different keyboard mounting styles",
  usage: "mountingstyles",
  dev: false,
}
