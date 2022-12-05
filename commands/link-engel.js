module.exports = {
    name: "linkengel",
    category: "Sistem",
    description: "Üyelerin Link Göndermesini Engeller!",
    cooldown: 5,
    guildOnly: true,
    permission: "ADMINISTRATOR",
    async execute(message, args, Embed, Discord, Tags, tag, emojis){

        const data = tag.get("link_protect_enabled")
        const prefix = tag.get("prefix")

        if (args[0] == "aç"){

            await Tags.update({ link_protect_enabled: true }, { where: { guild_id: message.guild.id } })
            return message.channel.send(Embed("", "Link Engelleme Sistemi Başarıyla Açıldı."))

        }
        else if(args[0] == "kapat"){

            await Tags.update({ link_protect_enabled: false }, { where: { guild_id: message.guild.id } })
            return message.channel.send(Embed("", "Link Engelleme Sistemi Başarıyla Kapatıldı."))

        }
        else{
            let isEnabled = data.enabled;
            if(isEnabled) isEnabled = "Açık"
            else isEnabled = "Kapalı";

            const infoEmbed = new Discord.MessageEmbed()
                .setTitle(":link: Link Engel Sistemi")
                .setColor("#06ffc2")
                .setDescription("Bu Komutu Kullanarak Üyelerin Link Atmasını Engelleyebilirsiniz!")
                .addFields(
                    {name: `Gereken Yetki`, value: "Yönetici", inline: true},
                    {name: `Aktiflik durumu:`, value: `${isEnabled}\n\u200b`, inline: true},
                    {name: `${prefix}linkengel aç`, value: ":link: Link Engeli Açar!"},
                    {name: `${prefix}linkengel kapat`, value: ":link: Link Engeli Kapatır!"},
                )
    
                    message.channel.send(infoEmbed);




        }

    }
}
