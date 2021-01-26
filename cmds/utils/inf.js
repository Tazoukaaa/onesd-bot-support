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
            .setTitle("__**Informations du bot**__:")
            .setColor("000000")
            .addField("En ligne depuis ⏲", (Math.round(bot.uptime / (1000 * 60 * 60 * 24)) % 30) + " Jours, " + (Math.round(bot.uptime / (1000 * 60 * 60))) + " h, " + (Math.round(bot.uptime / (1000 * 60)) % 60) + " min, est " + (Math.round(bot.uptime / 1000) % 60) + " sec", true)
            .addField("Nombre de collaborateurs Utilisateurs", `${bot.users.cache.size}`)
            .addField("Nombres de logements Serveurs   ", `${bot.guilds.cache.size}`)
            .addField("Version de Discord.js ", `V12`)
            .addField("Language de developpement du bot :", "Javascript")
            .setTimestamp(message.createdAt)
            .setFooter(`Royli | Bot Discord`)
 
        message.channel.send(botinfo)
    })
 
 
 
}
 
module.exports.config = {
    name: "inf"
}