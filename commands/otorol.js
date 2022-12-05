module.exports = {
    name: "otorol",
    category: "Sistem",
    description: "Sunucuya Katılan Kişilere Belirlediğiniz Rolü Otomatik Verir.",
    cooldown: 5,
    guildOnly: true,
    permission: "ADMINISTRATOR",
    async execute(message, args, Embed, Discord, Tags, tag, emojis){

        const data = tag.get("auto_role")
        const bot = message.guild.members.cache.get(message.client.user.id)
        const prefix = tag.get("prefix")

        if(args[0] == "aç"){
            const role = message.guild.roles.cache.get(data.role_id)
            if(!role) return message.channel.send(Embed("", `${emojis(message, "hayir")} Oto Rolü Açmadan Önce \`${prefix}otorol rol @rol\` Komutunu Kullanarak Rolü Belirleyiniz!`, "error"))

            bot.roles.add(role)
                .then(async () => {
                    bot.roles.remove(role)

                    data.enabled = true;
                    await Tags.update({ auto_role: data }, { where: { guild_id: message.guild.id } })
                    return message.channel.send(Embed("", `${emojis(message, "basarl")} Otomatik Rol Başarıyla Açıldı!`))
                })
                .catch(() => {
                    return message.channel.send(Embed("", `${emojis(message, "hayir")} Belirtilen Rol Yetkimin Üzerinde Olduğu İçin Otomatik Rol Olarak Kaydedilemiyor.`,))
                })

        }
        else if(args[0] == "kapat"){

            data.enabled = false;
            await Tags.update({ auto_role: data }, { where: { guild_id: message.guild.id } })
            return message.channel.send(Embed("", `${emojis(message, "basarl")} Otomatik Rol Başarıyla Kapatıldı!`))

        }
        else if(args[0] == "rol"){

            const mentionedRole = message.mentions.roles.first();
            if(!mentionedRole) return message.channel.send(Embed("", `${emojis(message, "hayir")} Lütfen Bir Rol Etiketleyiniz.`, "info"))

            bot.roles.add(mentionedRole)
                .then(async () => {
                    bot.roles.remove(mentionedRole);
                    data.role_id = mentionedRole.id;

                    await Tags.update({ auto_role: data }, { where: { guild_id: message.guild.id } })
                    return message.channel.send(Embed("", `${emojis(message, "basarl")} Otomatik Verilecek Rol ${mentionedRole.name} Olarak Ayarlandı!`))
                })
                .catch(() => {
                    return message.channel.send(Embed("", `${emojis(message, "hayir")} Belirtilen Rol Yetkimin Üzerinde Olduğu İçin Otomatik Rol Olarak Kaydedilemiyor.`, "error"))
                })
            
        }
        else {
            let isEnabled = data.enabled;
            if(isEnabled) isEnabled = "Açık"
            else isEnabled = "Kapalı"

            const infoEmbed = new Discord.MessageEmbed()
                .setTitle("Hoş Geldiniz Sistemi")
                .setColor(`#e9ffa`)
                .setDescription(`Bu Komutu Kullanarak Hoş Geldiniz Mesajları Oluşturabilirsiniz.\n\u200b`)
                .addFields(
                    {name: `${emojis(message, "yetkili")} Gereken Yetki`, value: "Yönetici", inline: true},
                    {name: `${emojis(message, "online")} Aktiflik durumu:`, value: `${isEnabled}\n\u200b`, inline: true},
                    {name: `${prefix}otorol aç`, value: "Otorolü Açar!"},
                    {name: `${prefix}otorol kapat`, value: "Otorolü Kapatır!"},
                    {name: `${prefix}otorol rol <@rol>`, value: "Otomatik Verilecek Rolü Ayarlar"},
                )

            message.channel.send(infoEmbed)

        }

    }
}
