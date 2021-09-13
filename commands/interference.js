//  Code to be run
module.exports.run = async (client, message, args, txt) => {

  //  Import Discord
  const Discord = module.require("discord.js");

  const attachment = new Discord.MessageAttachment('./assets/images/interference.png', 'interference.png');
  message.channel.send(attachment);

};

//  Exports relevant info
module.exports.info = {
  name: "interference",
  description: "Shows a diagram detailed cherry profile keycap interference",
  usage: "interference",
  dev: false,
}
