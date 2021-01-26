const Discord = require("discord.js")
const os = require('os')
const cpuStat = require("cpu-stat");
const moment = require("moment")
 
 
module.exports.run = async (bot, message, args) => {
 
    let { version } = require("discord.js");
 
    cpuStat.usagePercent(function (err, percent, seconds) {
        if (err) {
            return console.log("erreur");
        }
        message.delete()
 
 
        let botinfo= new Discord.MessageEmbed()
            .setTitle("__**Informations Commandes**__:")
            .setColor("000000")
            .addField("Commandes Publique :", "ascii - inf - help -report '@votre nom' raison")
            .addField("Commandes Privé :", "sondage - dm - kick - ban")
            .addField("Commandes d'Administration :", "blacklist - say - sayemb")
            .addField("Commandes Ticket :", "attref")
            .setFooter(`Royli | Bot Discord`)
 
        message.channel.send(botinfo)
    })
 
 
 
}
 
module.exports.config = {
    name: "help"
}