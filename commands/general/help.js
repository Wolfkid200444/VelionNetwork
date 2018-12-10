//HELP COMMAND HANDLER
const Discord = require(`discord.js`);

exports.run = async (client, message, args) => {
    if (`${args[0]}` === `fun`) {
        try {
            let helpfunembed = new Discord.RichEmbed()
                .setTitle('Fun Commands | prefix f; | Fun list')
                .setDescription('There is 12 Available Commands ')
                .addField('📕 GENERAL', '``avatar, gayrate, 8ball, poll, coinflip``')
                .addField(':joy: JOKES', '``joke, yomama``')
                .addField(':hearts LOVE', '``bond, kiss, spank, hug``')
                .setColor('RANDOM')
                .setFooter(`Requested by ${message.author.tag} | Help fun`)
            return message.channel.send(helpfunembed);
        } catch (err) {
            console.log(err);
        }
    } else if (`${args[0]}` === `image`) {
        try {
            let embed = new Discord.RichEmbed()
                .setTitle('Image Commands | prefix f; | Image list')
                .setDescription('There is 6 Available Commands ')
                .addField('📕 GENERAL', '``achievement, ``')
                .setColor('RANDOM')
                .setFooter(`Requested by ${message.author.tag} | Help Image`, `${message.author.avatarURL}`)
            return message.channel.send(embed);
        } catch (err) {
            console.log(err);
        }
    } else if (`${args[0]}` === `info`) {
        try {
            let helpeinfombed = new Discord.RichEmbed()
                .setTitle('Info commands | prefix f; | Info page ')
                .setDescription('There 8 Available Commands')
                .addField(':information_source:', '``botinfo, report, userinfo, serverinfo, changelog, hastebin, short, report, binary ``')
                .setColor('RANDOM')
                .setFooter(`Requested by ${message.author.tag} | Help info`)
            return message.channel.send(helpeinfombed);
        } catch (err) {
            console.log(err);
        }
    } else if (`${args[0]}` === `mod`) {
        try {
            let helpmodembed = new Discord.RichEmbed()
                .setTitle('Mod Commands | prefix f; | Mod list')
                .setDescription('There are 6 mod Commands Avalible!')
                .addField(':homes: GUILD', '``addrole, removerole``')
                .addField('📕 GENERAL', '``kick, ban, purge, tempmute``')
                .setColor('RANDOM')
                .setFooter(`Requested by ${message.author.tag} | Help mod`)
            return message.channel.send(helpmodembed);

        } catch (err) {
            console.log(err);
        }
    } else if (`${args[0]}` === `owner`) {
        try {
            let helpownerembed = new Discord.RichEmbed()
                .setTitle('Owner Commands | prefix f; | Owner list')
                .setDescription('There 3 Available Commands')
                .addField('📕 GENERA', '``leave, shutdown, eval``')
                .setColor('RANDOM')
                .setFooter(`Requested by ${message.author.tag} | Help Owner`)
            return message.channel.send(helpownerembed);
        } catch (err) {
            console.log(err);
        }
    } else if (`${args[0]}` === `help`) {
        try {
            let helpembed = new Discord.RichEmbed()
                .setTitle('List of Commands | prefix f; | Help List ')
                .setDescription('There is available commands for this bot on list!')
                .addField(':newspaper: INFO', 'Information \n``help_info``')
                .addField(':tools: MODERATION', 'Mod Commans \n``help_mod``')
                .addField(':tada: FUN', 'Fun Commands \n``help_fun``')
                .addField(':camera: IMAGE', 'Img Commands \n``help_img``')
                .addField(':hammer: OWNER', 'Bot Owner Commands \n``help_owner``')
                .setColor('RANDOM')
                .setTimestamp()
                .setFooter(`Requested by ${message.author.tag} | Help list`, `${message.author.avatarURL}`)
            return message.channel.send(helpembed);
        } catch (err) {
            console.log(err);
        }
    }
}