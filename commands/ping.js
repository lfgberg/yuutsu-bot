//  Code to be run
module.exports.run = async (client, message, args, txt, user) => {

var ping = new Date().getTime() - message.createdTimestamp + " ms"

message.channel.send(ping);

};

//  Exports relevant info
module.exports.info = {
    name: "ping",
    description: "sends a message indicating bot ping time",
    usage: "ping",
    dev: false,
}
