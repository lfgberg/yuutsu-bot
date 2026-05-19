module.exports = (client, messageReaction, user) => {
  const reactionEmote = messageReaction.emoji;
  const message = messageReaction.message;
  if (reactionEmote.name !== "yuutsu") return;
  var giver = client.getData.get(user.id);
  var reciever = client.getData.get(messageReaction.message.author.id);
  if (!giver) {
    if (user.bot === true) return;
    data = {
      id: (user.id),
      karma: 0,
      cooldown: Date.now(),
    };
    client.setData.run(data);
    var giver = data;
  }
  if (!reciever) {
    if (messageReaction.message.author.bot === true) return;
    data = {
      id: (messageReaction.message.author.id),
      karma: 0,
      cooldown: Date.now(),
    };
    client.setData.run(data);
    var reciever = data;
  }
  var elapsedTime = client.round(Math.floor((Date.now() - giver.cooldown) / 1000 / 60), 1);
  if (elapsedTime < 60) {
    var remainingTime = client.round((Math.floor(60 - elapsedTime)), 1);
    message.channel.send(`You must wait ${remainingTime} minutes before using this feature`).then(msg => {
      msg.delete({
        timeout: 5000
      });
    }).catch(console.error);
  } else if (giver.id === reciever.id) {
    message.channel.send(`You can't give yourself Karma`).then(msg => {
      msg.delete({
        timeout: 5000
      });
    }).catch(console.error);
  } else {
    data = {
      id: reciever.id,
      karma: (reciever.karma + 1),
      cooldown: reciever.cooldown,
    }
    client.setData.run(data);
    data2 = {
      id: giver.id,
      karma: giver.karma,
      cooldown: Date.now(),
    }
    client.setData.run(data2);
    message.channel.send(`<@!${giver.id}> has given rep to <@!${reciever.id}>`).then(msg => {
      msg.delete({
        timeout: 5000
      });
    }).catch(console.error);
  }
}
