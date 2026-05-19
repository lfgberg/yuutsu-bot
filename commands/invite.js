//  Code to be run
module.exports.run = async (client, message, args, txt) => {

message.channel.send(`Invite me to your server: https://discordapp.com/oauth2/authorize?client_id=${client.config.clientID}&scope=bot&permissions=8`);
return;

};

//  Exports relevant info
module.exports.info = {
    name: "invite",
    description: "Sends an invite link for the bot",
    usage: "invite",
    dev: false,
}
