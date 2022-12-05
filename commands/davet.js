module.exports = {
    name: "davet",
    category: "Genel",
    description: "Botu Sunucunuza Davet Eder!",
    cooldown: 5,
    guildOnly: true,
    execute(message, args, Embed, Discord, Tags, tag, emojis){

        const infoEmbed = new Discord.MessageEmbed()
            .setTitle("Botu Kullandığın İçin Teşekkürler!")
            .addFields(
                {name: `Davet`, value: `[Davet et](https://discord.com/api/oauth2/authorize?client_id=1027168895854981181&permissions=8&scope=bot)`, inline: true},
                {name: `Destek`, value: `[Sunucu](https://discord.gg/uhaCVVrsvM)`, inline: true},
                {name: `Sahibim`, value: `<@968066838305067049>`, inline: true},
            )

            message.channel.send(infoEmbed)

    }
}