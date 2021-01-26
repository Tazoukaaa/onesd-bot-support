const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

  if(!message.member.hasPermission(["MANAGE_MESSAGES"])) return message.channel.send("**You can not use this command!**")
  
        try {
          const embed = new Discord.MessageEmbed()
            .setDescription(args.join(" "))
            .setColor("000000")
            .setTimestamp(message.createdAt + 'Royli Bêta by Tazoukaa')
            message.delete()
            message.channel.send({ embed });
          
        } catch (error) {
          console.log(`Bonjour voici l'erreur : ${error}`);
        }
    };

 module.exports.config = {
     name: "sayemb"
 }