const Discord = require("discord.js");
const db = require('quick.db')
module.exports = {
    name: "öner",
    description: "Bot Hakkında Öneri veya Hata Gönderirsiniz.",
    cooldown: 5,
    guildOnly: true,
    execute(message, args, Embed, Discord, Tags, tag, emojis){
  let hata = args.slice(0).join(" ")
  let kanal = message.client.channels.cache.get('1037680715602604085')
    if (!hata) {
    return message.channel.send(
      "Hatanı Yazarmısın ?"
    ); }
    message.reply('Önerin Yapımcıya Gönderildi.')
const embed = new Discord.MessageEmbed()
  .setColor("BLURPLE")
  .addField("Bir Hata Bildirildi!", `**Bildiren:** ${message.author.tag} **Bildirdiği Hata:** ${hata}`)
kanal.send(embed)
}
}