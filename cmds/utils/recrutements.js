const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    const embed = new Discord.MessageEmbed()
    message.delete()
    .setDescription("**Bonjour, pour les recrutements, rendez vous dans le salon spécifique à cela !**")
    .setColor("0000FF")
    message.channel.send(embed)
};

module.exports.config = {
     name: "rc"
}
