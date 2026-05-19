//  Code to be run
module.exports.run = async (client, message, args, txt) => {
  return;
  function randomInt(min, max) {
    return Math.floor(Math.random() * (max.parseInt() - min.parseInt() + 1) + min.parseInt());
  }

if (!args[0] && !args[1]){
  message.channel.send(`Improper usage, correct usage: ${client.config.prefix}rng (min) (max)`);
  return;
} else if (!args[1]){
  if ((isNaN(args[0])) === true){
    message.channel.send(`You didn't input valid numbers, correct usage: ${client.config.prefix}rng (min) (max)`);
    return;
  }
  var result = randomInt("1", args[1]);
  message.reply(result.toString());
}
else {
  if ((isNaN(args[0])) === true || (isNaN(args[1])) === true){
    message.channel.send(`You didn't input valid numbers, correct usage: ${client.config.prefix}rng (min) (max)`);
    return;
  }
  var result = randomInt(args[0], args[1]);
  message.reply(result.toString());
}

}

//  Exports relevant info
module.exports.info = {
  name: "rng",
  description: "Generates a random number between (min) and (max), min defaults to 1",
  usage: "rng (min) (max)",
  dev: true,
}
