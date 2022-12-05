module.exports = {
    name: "oto-isim",
    aliases: ["otoisim", "oisim"],
    category: "Sistem",
    description: "Sunucuya Girenlerin İsimlerini Düzenler.",
    cooldown: 5,
    guildOnly: true,
    permission: "ADMINISTRATOR",
    async execute(message, args, Embed, Discord, Tags, tag, emojis){

        const data = tag.get("tag")
        const prefix = tag.get("prefix")

        if(args[0] == "aç"){

            if(!data.tag_name) return message.channel.send(Embed("", "Lütfen Etiket Sistemini Açmadan Önce Etiket Ayarlayın.", "error"))

            data.enabled = true;
            await Tags.update({ tag: data }, { where: { guild_id: message.guild.id } })
            return message.channel.send(Embed("", `${emojis(message, "basarl")} Etiket Sistemi Başarıyla Açıldı!`))

        }
        else if(args[0] == "kapat"){

            data.enabled = false;
            await Tags.update({ tag: data }, { where: { guild_id: message.guild.id } })
            return message.channel.send(Embed("", `${emojis(message, "basarl")} Etiket Sistemi Başarıyla Kapatıldı!`))

        }
        else if(args[0]){

            const text = args.join(" ")

            data.tag_name = args.join(" ")
            await Tags.update({ tag: data }, { where: { guild_id: message.guild.id } })
            return message.channel.send(Embed("", `${emojis(message, "basarl")} Etiket Sistemi Başarıyla **${text.replace("%kullanıcı%", message.member.displayName)}** Olacak Şekilde Ayarlandı!`))


        }
        else{
            let isEnabled = data.enabled;
            if(isEnabled) isEnabled = "Açık"
            else isEnabled = "Kapalı";
            
            const infoEmbed = new Discord.MessageEmbed()
            .setTitle(`${emojis(message, "tag")} Oto İsim Sistemi`)
            .setColor(`#e9ffa`)
            .setDescription(`Bu Komutu Kullanarak Sunucuya Yeni Gelenlere Otomatik İsim Vermenisi Sağlayabilirsiniz.\n\u200b`)
            .addFields(
                {name: `${emojis(message, "yetkili")} Gereken Yetki`, value: "Yönetici", inline: true},
                {name: `${emojis(message, "online")} Aktiflik durumu:`, value: `${isEnabled}\n\u200b`, inline: true},
                {name: `${emojis(message, "tag")} ${prefix}oto-isim aç`, value: "Oto İsmi Açar!"},
                {name: `${emojis(message, "tag")} ${prefix}oto-isim kapat`, value: "Oto İsmi Kapatır!"},
                {name: `${emojis(message, "tag")} ${prefix}oto-isim <etiket>`, value: "Oto İsmi Belirler!(%kullanıcı% İsmi Belirler örn Zera Deneme"},
            )

                message.channel.send(infoEmbed);
        
        }

    }
}