//  Code to be run
module.exports.run = async (client, message, args, txt, user) => {

//  Import Discord
const Discord = module.require("discord.js");

if (!args[0]) {
  var user = message.author
} else if (!user){
  message.channel.send("You didn't mention a valid user");
  message.channel.send(`Proper usage: ${client.config.prefix}profile (@USER|USERID)`);
  return;
}

var fetched = client.getData.get(user.id);
if (!fetched) {
  if (user.bot === true) return;
  data = {
    id: user.id,
    karma: 0,
    cooldown: Date.now(),
  };
  client.setData.run(data);
  var fetched = data;
}

var elapsedTime = client.round(Math.floor((Date.now() - fetched.cooldown) / 1000 / 60), 1);
var remainingTime = client.round((Math.floor(60 - elapsedTime)), 1);
if (remainingTime < 0){
  var remainingTime = 0
}

let embed = new Discord.MessageEmbed()
  .setAuthor(`${user.username}'s Profile`)
  .setColor(3447003)
  .setThumbnail(user.avatarURL())
  .addField(`Karma Information`, `Karma: ${fetched.karma}\nCooldown: ${remainingTime} Minutes`)
  .setFooter(`${client.user.username}, By ${client.lfgberg.tag}`)
  .setTimestamp(new Date());
message.channel.send(embed);

};

//  Exports relevant info
module.exports.info = {
    name: "profile",
    description: "displays the amount of karma and the cooldown for a given user, defaults to the user of the command",
    usage: "profile (@USER|USERID)",
    dev: false,
}
