const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let changelogembed = new Discord.RichEmbed()
    .setTitle(':information_source:  Update [12/8/2018]')
    .addField(':white_check_mark:  Additions:', '\n\n | Fix Avatar Message')
    .setColor('#808000')
    .setFooter(`Requested by ${message.author.tag} | © 2018 `)
    return message.channel.send(changelogembed);
    
}

module.exports.help = {
  name:"changelog"
}
