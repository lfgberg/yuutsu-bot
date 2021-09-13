//  Code to be run
module.exports.run = async (client, message, args, txt) => {
  if (message.author.id === client.config.ownerID) {
    message.channel.send(txt);
  } else {
    message.delete();
    message.reply("Insufficient permissions.").then(msg => {
      msg.delete({
        timeout: 2500
      });
    }).catch(console.error);
  }
}

//  Exports relevant info
module.exports.info = {
  name: "say",
  description: "repeats message",
  usage: "say (text)",
  dev: true,
}
