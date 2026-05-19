//  Code to be run
module.exports.run = async (client, message, args, txt, user) => {

//  Import Discord
const Discord = module.require("discord.js");

var guilds = client.guilds.cache.size;

let embed = new Discord.MessageEmbed()
  .setColor(3447003)
  .addField(`${client.user.username}'s Stats`, `Guilds: ${guilds}`)
  .setFooter(`${client.user.username}, By ${client.lfgberg.tag}`)
  .setTimestamp(new Date());
message.channel.send(embed);

};

//  Exports relevant info
module.exports.info = {
    name: "stats",
    description: "displays various bot statistics",
    usage: "stats",
    dev: true,
}
