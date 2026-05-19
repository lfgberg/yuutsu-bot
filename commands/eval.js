//  Code to be run
module.exports.run = async (client, message, args, txt) => {

  //  Perms Check
  if (message.author.id !== client.config.ownerID){
    message.reply("Insufficient permissions.").then(msg => {
      msg.delete({
        timeout: 2500
      });
    }).catch(console.error);
    return;
}
    const clean = text => {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
      }

      try {
        const code = txt
        let evaled = eval(code);

        if (typeof evaled !== "string");
          evaled = require("util").inspect(evaled);

        message.channel.send(clean(evaled), {code:"xl"});
      }
      catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      }};

      //  Exports relevant info
module.exports.info = {
    name: "eval",
    description: "Runs given javascript",
    usage: "eval (js)",
    dev: true,
}
