//  Code to be run
module.exports.run = async (client, message, args, txt) => {

  //  Import Discord
  const Discord = module.require("discord.js");

  let embed = new Discord.MessageEmbed()
    .setAuthor("PCB Types")
    .setColor(3447003)
    .addField("Soldered PCBs", "Soldered PCBs require the user to use a soldering iron to solder switches into the PCB.")
    .addField("Hotswap PCBs", "Benefits:\n\n- Easy to swap out your switches, plates, and stabs to try new things.\n- Easy to fix a bad lube job and other mistakes.\n- No need to desolder and put your PCB at risk.\n- You can’t make an oopsie with the iron and melt something you didn’t mean to.\n- If you can solder, easy to replace sockets and extend the lifespan of your PCB if sockets go bad.\n\nDownsides:\n\n- It can ruin your switch legs/pins.\n- It can ruin your switch tops if you are forceful with a switch puller.\n- It can push the switch leaf into the switch housing, causing problems or bad keyfeel.\n- It isn't as secure as a soldered board.\n- You’re confined to whatever layout it supports.")
    .addField("Millmaxed PCBs", "Millmax sockets are a DIY option that allow you to make a soldered PCB hotswap.")
    .setFooter(`${client.user.username}, By ${client.lfgberg.tag}`)
    .setTimestamp(new Date());
  message.channel.send(embed);

};

//  Exports relevant info
module.exports.info = {
  name: "pcbtypes",
  description: "Explains the different types of PCBs",
  usage: "pcbtypes",
  dev: false,
}
