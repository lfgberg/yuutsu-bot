//  Code to be run
module.exports.run = async (client, message, args, txt) => {

  //  Import Discord
  const Discord = module.require("discord.js");

  const attachment = new Discord.MessageAttachment('./assets/images/keycapprofiles.png', 'keycapprofiles.png');
  message.channel.send(attachment);

};

//  Exports relevant info
module.exports.info = {
  name: "keycapprofiles",
  description: "Shows a diagram of different keycap profiles",
  usage: "keycapprofiles",
  dev: false,
}
