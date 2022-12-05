const db = require("inflames.db").sqlite();

module.exports = {
    name: "prever",
    cooldown: 5,
    guildOnly: true,

    execute(message, args, Embed, Discord, Tags, tag, emojis){
    if (message.author.id !== "968066838305067049") message.channel.send("Bu komutu kullanamassın!")
  let sw = args[0]
      if(!sw) message.channel.send("Lütfen bir sunucu idsi giriniz.")
    db.add(`swpremium_${sw}`, 1)
    const embed = new Discord.MessageEmbed()
    .setTitle("Premium verildi!")
    .setDescription(`${sw} idli sunucuya premium verildi.`)
    .setColor("YELLOW")
    message.channel.send(embed)
    }
  }