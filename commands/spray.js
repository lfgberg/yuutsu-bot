//  Code to be run
module.exports.run = async (client, message, args, txt) => {

message.channel.send(`**SPRAY LUBE AT YOUR OWN RISK!** Spray lubing looks like a faster way to lube your switches, but it can take **longer**, yield **worse** results, and **damage your keyboard**.  The drying time can take days and it is extremely easy to damage your keyboard and switches, especially if you try to use it before it has completely dried. The amount sprayed is also inconsistent and can make for a different amount of lube on each switch. Take the time and care to lube your switches properly with a recommended lube and a paintbrush. Your keyboard is worth it.`);

};

//  Exports relevant info
module.exports.info = {
    name: "spray",
    description: "explains the perils of spray lubing",
    usage: "spray",
    dev: false,
}
