//  Code to be run
module.exports.run = async (client, message, args, txt, user) => {

  //  Import Discord
  const Discord = module.require("discord.js");

  if (!args[0]) {
    var user = message.author
  } else if (!user){
    message.channel.send("You didn't mention a valid user");
    message.channel.send(`Proper usage: ${client.config.prefix}av (@USER|USERID)`);
    return;
  }

  let previewImage = user.displayAvatarURL({
    size: 2048,
    format: "png",
    dyanmic: true
  });
  let pngImage = user.displayAvatarURL({
    size: 2048,
    format: "png"
  });
  let jpgImage = user.displayAvatarURL({
    size: 2048,
    format: "jpg"
  });
  let jpegImage = user.displayAvatarURL({
    size: 2048,
    format: "jpeg"
  });
  let webpImage = user.displayAvatarURL({
    size: 2048,
    format: "webp"
  });
  let gifImage = user.displayAvatarURL({
    size: 2048,
    format: "gif"
  });

  let embed = new Discord.MessageEmbed()
    .setAuthor(`${user.tag}'s Avatar`)
    .setColor(3447003)
    .setFooter(`${client.user.username}, By ${client.lfgberg.tag}`)
    .setImage(previewImage)
    .addField("Download Links", `[png](${pngImage}) • [jpg](${jpgImage}) • [jpeg](${jpegImage}) • [webp](${webpImage}) • [gif (If animated)](${gifImage})`)
    .setTimestamp(new Date());
  message.channel.send(embed);

};

//  Exports relevant info
module.exports.info = {
  name: "av",
  description: "Displays the author's profile picture, or that of a mentioned user",
  usage: "av (@USER|USERID)",
  dev: false,
}
