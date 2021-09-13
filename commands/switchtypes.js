//  Code to be run
module.exports.run = async (client, message, args, txt) => {

  //  Import Discord
  const Discord = module.require("discord.js");

  let embed = new Discord.MessageEmbed()
    .setAuthor("Mechanical Switch Types")
    .setColor(3447003)
    .addField("Linears", `Switches that have no additional characteristics aside from going up and down smoothly, they rely on their smoothness and springs to be distinguished from one another.
Notable switches *in my opinion*: Gateron Ink Blacks, Alpaca V2s, JWICK Yellows, C3 Tangerines, Gateron Yellow`)
    .addField("Tactiles", `Switches that have a noticeable bump during the travel of the stem. Generally compared by the characteristic of the stem bump and leaf that determine their tactility.
Notable switches *in my opinion*: C3 Kiwis, Durock T1s, Holy Panda variants, Zealios, SP Star Purples, Gazzew Boba U4T`)
    .addField("Clickies", `Switches that have an audible click aside from their bottom out and upstroke sounds. People generally compare these by their tactility and the sound of the clicks.
Notable switches *in my opinion*: Kailh BOX Jades, Kailh BOX Navies, Outemu Phoenix`)
    .addField("Manufacturers", `JWK (JingWeiKe) makes Alpacas, JWICKs, Durocks, Everglides, C3s, etc. They are often bashed for only making recolours, though they actually use different moulds for certain switches.
Gateron makes the Inks, as well as the famous milky topped budget switches.
Cherry is considered to be the OG, with their patent expiration leading to these other manufacturers making MX style switches.
Outemu is one of the manufacturers regarded to make cheap switches, but they also make Gazzew Boba switches.
Kailh makes BOX switches, as well as the infamous Cream switches.`)
    .addField("Switch Materials", `Different switch materials make different switch pitches, as well as different qualities of smoothness.
You can refer to this for more explanations: https://www.theremingoat.com/blog/switch-plastics`)
    .setFooter(`${client.user.username}, By ${client.lfgberg.tag}`)
    .setTimestamp(new Date());
  message.channel.send(embed);

};

//  Exports relevant info
module.exports.info = {
  name: "switchtypes",
  description: "Explains some of the different types of mechanical switches",
  usage: "switchtypes",
  dev: false,
}
