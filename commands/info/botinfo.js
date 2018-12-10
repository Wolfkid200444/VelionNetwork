const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle('VenomNetwork Info')
    .setDescription("VenomNetwork is a Private Bot only for VenomNetwork")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt)
    .addField("Developers", "Wolfkid")
    .addField("More", "[Youtube](https://www.youtube.com/c/Wolfkid) | [Twitter](https://twitter.com/TheRealWolfkid) ");
    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}
