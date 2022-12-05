const db = require("inflames.db").sqlite();

module.exports = {
  name: "preal",
  cooldown: 5,
  guildOnly: true,
  execute(message, args, Embed, Discord, Tags, tag, emojis) {

    if (message.author.id !== "968066838305067049") message.channel.send("Bu komutu kullanamassın!")
    let sw = args[0]
    if (!sw) message.channel.send("Lütfen bir sunucu idsi giriniz.")
    if (!db.has(`swpremium_${sw}`)) message.channel.send(`${sw} idli sunucuda zaten premıum yok`)
    db.delete(`swpremium_${sw}`)
    const embed = new Discord.MessageEmbed()
      .setTitle("Premium alındı!")
      .setDescription(`${sw} idli sunucudan premium alındı.`)
      .setColor("YELLOW")
    message.channel.send(embed)
  }
}
