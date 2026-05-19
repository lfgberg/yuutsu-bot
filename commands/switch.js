//  Code to be run
module.exports.run = async (client, message, args, txt, user) => {

  //  Import Libs
  const Discord = module.require("discord.js");
  const Canvas = require('canvas');

  var result = client.switchData.filter(function(entry) {
    var condition = new RegExp(entry.regex);
    return condition.test(txt.toLowerCase());
  });

  var result = result[0];

  if (!result) {
    message.channel.send("No results found");
    message.channel.send(`Here's a list of available switches: <https://docs.google.com/spreadsheets/d/1hGgMsplLzMIr_7P5Z39QUb2A_0ALO7uYY6CDUTUVUb4/edit?usp=sharing>`);
    return;
  } else {

    //  Create a canvas
    const canvas = Canvas.createCanvas(1200, 675);
    const ctx = canvas.getContext('2d');

    //  import font
    Canvas.registerFont('./assets/HelveticaNeueLight.ttf', {
      family: 'Helvetica-Neue-Light'
    });

    //  Load image + size
    const background = await Canvas.loadImage('./assets/images/background.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    function scaleText(canvas, text, size, width) {
      const ctx = canvas.getContext('2d');
      let fontSize = size;
      do {
        ctx.font = `${fontSize -=10}px Helvetica-Neue-Light`;
      } while (ctx.measureText(text).width > width);
      return ctx.font;
    }

    function fragmentText(text, size, maxWidth) {
      ctx.font = `${size}px Helvetica-Neue-Light`;
      var words = text.split(' '),
        lines = [],
        line = "";
      if (ctx.measureText(text).width < maxWidth) {
        return [text];
      }
      while (words.length > 0) {
        while (ctx.measureText(words[0]).width >= maxWidth) {
          var tmp = words[0];
          words[0] = tmp.slice(0, -1);
          if (words.length > 1) {
            words[1] = tmp.slice(-1) + words[1];
          } else {
            words.push(tmp.slice(-1));
          }
        }
        if (ctx.measureText(line + words[0]).width < maxWidth) {
          line += words.shift() + " ";
        } else {
          lines.push(line);
          line = "";
        }
        if (words.length === 0) {
          lines.push(line);
        }
      }
      return lines;
    }

    //  Draw the switch name
    ctx.font = scaleText(canvas, result.name, 80, 750);
    ctx.fillStyle = '#ffffff';
    ctx.fillText(result.name, 40, 100);
    //  Draw the brand name
    ctx.font = scaleText(canvas, result.creator, 80, 750);
    ctx.fillText(result.creator, 40, 200);
    //  Draw Table Headers
    ctx.font = '60px Helvetica-Neue-Light';
    ctx.fillText("Feel:", 40, 400);
    ctx.fillText("Weight:", 40, 470);
    ctx.fillText("Travel:", 40, 540);
    // Draw Table info
    ctx.font = scaleText(canvas, result.type, 40, 890);
    ctx.fillText(result.type, 183, 397);
    // Draw Table info
    ctx.font = scaleText(canvas, `Actuation - ${result.aForce}g Bottom Out - ${result.bForce}g`, 40, 890);
    ctx.fillText(`Actuation - ${result.aForce}g Bottom Out - ${result.bForce}g`, 256, 467);
    // Draw Table info
    ctx.font = scaleText(canvas, `Actuation - ${result.aDist}mm Bottom Out - ${result.bDist}mm`, 40, 890);
    ctx.fillText(`Actuation - ${result.aDist}mm Bottom Out - ${result.bDist}mm`, 256, 537);
    //  Draw our shill tag
    ctx.font = '20px Helvetica-Neue-Light';
    ctx.fillStyle = '#D3D3D3';
    ctx.fillText(`${client.user.username}, by ${client.lfgberg.tag}. Data By ${client.hali.tag}, ${client.apm.tag} and ${client.tet.tag}`, 40, 635)

    if (result.opinions && result.mods) {
      ctx.font = '40px Helvetica-Neue-Light';
      ctx.fillText("Necessary Mods", 860, 400);
      ctx.font = scaleText(canvas, result.mods, 40, 300);
      ctx.fillText(result.mods, 860, 440);
      ctx.font = '40px Helvetica-Neue-Light';
      ctx.fillText("Opinions", 860, 490);
      var fragmentedOpinions = fragmentText(result.opinions, 30, 300);
      ctx.font = '30px Helvetica-Neue-Light';
      var startY = 530;
      for (var line of fragmentedOpinions){
        ctx.fillText(line, 860, startY);
        startY = (startY + 40);
      }
    } else if (result.opinions && !result.mods) {
      ctx.font = '40px Helvetica-Neue-Light';
      ctx.fillText("Opinions", 860, 400);
      var fragmentedOpinions = fragmentText(result.opinions, 30, 300);
      ctx.font = '30px Helvetica-Neue-Light';
      var startY = 450;
      for (var line of fragmentedOpinions){
        ctx.fillText(line, 860, startY);
        startY = (startY + 40);
      }
    } else if (result.mods && !result.opinions) {
      ctx.font = '40px Helvetica-Neue-Light';
      ctx.fillText("Necessary Mods", 860, 400);
      ctx.font = scaleText(canvas, result.mods, 40, 300);
      ctx.fillText(result.mods, 860, 440);
    }

    //  Draw the image in a circle
    ctx.beginPath();
    ctx.arc(1000, 190, 150, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    if (!result.image) {
      result.image = client.user.displayAvatarURL({
        size: 2048,
        format: "png",
      });
    };

    const thumbnail = await Canvas.loadImage(result.image);
    ctx.drawImage(thumbnail, 850, 40, 300, 300);

    //  make the canvas a message attachment and send it
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), `${result.creator}-${result.name}.png`);
    message.channel.send(attachment);

  }
};

//  Exports relevant info
module.exports.info = {
  name: "switch",
  description: "Fetches information about a specific switch",
  usage: "switch (switchname)",
  dev: false,
}
