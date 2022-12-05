module.exports = {
    name: "ayrılma-mesaj",
    aliases: ["ayrılmesaj", "amesaj"],
    category: "Sistem",
    description: "Ayrılma Mesajını Ayarlarsınız",
    cooldown: 5,
    guildOnly: true,
    permission: "ADMINISTRATOR",
    async execute(message, args, Embed, Discord, Tags, tag){

        const data = tag.get("leave_message")
        const prefix = tag.get("prefix")

        if(args[0] == "kanal"){

            const channel = message.mentions.channels.first();
            if(!channel) return message.channel.send(Embed("", "Lütfen Bir Kanal Etiketleyiniz!", "info"))

            data.channel_id = channel.id;

            await Tags.update({ leave_message: data}, { where: { guild_id: message.guild.id } })
            return message.channel.send(Embed("", `${channel} Adlı Kanal Başarıyla Ayarlandı.`))
            
        }
        else if(args[0] == "mesaj"){

            const text = args.splice(1, args.length-1).join(" ")
            if(!text) return message.channel.send(Embed("", "Lütfen Bir Mesaj Giriniz", "info"))

            data.message = text;

            await Tags.update({ leave_message: data }, { where: { guild_id: message.guild.id} })
            return message.channel.send(Embed("", `Mesaj Başarıyla Ayarlandı.`))

        }
        else if(args[0] == "aç"){
            data.enabled = true;
            await Tags.update({ leave_message: data }, { where: { guild_id: message.guild.id}})
            return message.channel.send(Embed("", "Ayrılma Mesajı Başarıyla Açıldı!"))

        }
        else if(args[0] == "kapat"){
            data.enabled = false;
            await Tags.update({ leave_message: data }, { where: { guild_id: message.guild.id}})
            return message.channel.send(Embed("", "Ayrılma Mesajı Başarıyla Kapatıldı!!"))

        }
        else if(args[0] == "test"){
            message.client.emit("guildMemberRemove", message.member);
        }

        else{
            let isEnabled = data.enabled;
            if(isEnabled) isEnabled = "Açık"
            else isEnabled = "Kapalı";
            
            const infoEmbed = new Discord.MessageEmbed()
            .setTitle("Ayrılma Mesajı Sistemi")
            .setColor(`#e9ffa`)
            .setDescription(`Bu Komutu Kullanarak Ayrılma Mesajları Oluşturabilirsiniz.\n\u200b`)
            .addFields(
                {name: `Gereken Yetki`, value: "Yönetici", inline: true},
                {name: `Aktiflik durumu:`, value: `${isEnabled}\n\u200b`, inline: true},
                {name: `${prefix}ayrılma-mesaj aç`, value: "Ayrılma Mesajını Açar!"},
                {name: `${prefix}ayrılma-mesaj kapat`, value: "Ayrılma Mesajını Kapatır!"},
                {name: `${prefix}ayrılma-mesaj mesaj <mesaj>`, value: "Ayrılma Mesajını Belirler!(%kullanıcı% İsmi Belirler örn Görüşürüz Deneme"},
                {name: `${prefix}ayrılma-mesaj kanal #kanal`, value: "Ayrılma Mesajı Kanalını Belirler!"}
            )
            .addFields(
                {name: `%toplamüye%`, value: "Ayrılma Mesajın Yanına Koyarak Toplam Üyeyide Gösterebilirsiniz"},
                {name: `%kullanıcı%`, value: "Ayrılma Mesajın Yanına Koyarak Kullanıcı İsmini Gösterebilirsiniz"},
                {name: `%etiketkullanıcı%`, value: "Ayrılma Mesajın Yanına Koyarak Kullanıcıyı Etiketleyerek İsmini Gösterebilirsiniz"},
            )

        message.channel.send(infoEmbed)

        }

    }
}