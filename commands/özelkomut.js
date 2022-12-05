module.exports = {
    name: "özelkomut",
    cooldown: 5,
    guildOnly: true,
    permission: "MANAGE_MESSAGES",
    async execute(message, args, Embed, Discord, Tags, tag, emojis) {

        const data = tag.get("auto_reply");
        const prefix = tag.get("prefix")

        if (args[0] == "ekle") {

            const commandName = args[1];
            if (!commandName) return message.channel.send(Embed("", `${emojis(message, "hayir")} Lütfen Bir Komut Adı Giriniz.`));

            const isCommandExist = message.client.commands.get(commandName) ||
                message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
            if (isCommandExist) return message.channel.send(Embed("", `${emojis(message, "hayir")} Bu Komut Zaten Botta Bulunuyor!`))

            const text = args.splice(2, args.length - 1).join(" ");
            if (!text) return message.channel.send(Embed("", `${emojis(message, "hayir")} Lütfen Bir Cevap Giriniz.`))

            if (Object.keys(data).length >= 5) return message.channel.send(Embed("", `${emojis(message, "hayir")} En Fazla 5 Komut Oluşturabilirsiniz.`));

            if(data[commandName]) return message.channel.send(Embed("", `${emojis(message, "hayir")} Bu Komut Zaten Oluşturulmuş.`))

            data[commandName] = text;
            await Tags.update({ auto_reply: data }, { where: { guild_id: message.guild.id } })
            return message.channel.send(Embed("", `${emojis(message, "basarl")} ${commandName} Adlı Komut Başarıyla Eklendi! `))

        }
        else if (args[0] == "kaldır") {

            const commandName = args[1]
            if (!commandName) return message.channel.send(Embed("", `${emojis(message, "hayir")} Lütfen Bir Komut Adı Giriniz.`));

            if(!data[commandName]) return message.channel.send(Embed("", `${emojis(message, "hayir")} Böyle Bir Komut Bulunamadı!`))

            delete data[commandName];
            await Tags.update({ auto_reply: data }, { where: { guild_id: message.guild.id } })
            return message.channel.send(Embed("", `${emojis(message, "basarl")} ${commandName} Adlı Komut Başarıyla Kaldırıldı.`))

        }
        else if (args[0] == "komutlar") {

            const response = Object.keys(data).map(item => `${item} → ${data[item]}`).join("\n");
            if(!response) return message.channel.send(Embed("", `${emojis(message, "hayir")} Herhangi Bir Komut Oluşturulmamış!`))

            return message.channel.send(Embed(`${message.guild.name} Adlı Sunucudaki Komutlar`, response));
        }
        else {
            const infoEmbed = new Discord.MessageEmbed()
                .setTitle("Ayrılma Mesajı Sistemi")
                .setColor(`#e9ffa`)
                .setDescription(`Bu Komutu Kullanarak Ayrılma Mesajları Oluşturabilirsiniz.\n\u200b`)
                .addFields(
                    { name: `${emojis(message, "yetkili")} Gereken Yetki`, value: "Mesajları Düzenleme", inline: true },
                    { name: `${prefix}özelkomut ekle <yazı> <cevap>`, value: "Özel Komut Eklersiniz." },
                    { name: `${prefix}özelkomut kaldır <komut>`, value: "Özel Komutu Kaldırırsınız." },
                    { name: `${prefix}özelkomut komutlar`, value: "Özel Komuta Eklediğiniz Komutları Gösterir." },
                )
                    .setImage(`https://i.hizliresim.com/8e9l0uc.png`)
                message.channel.send(infoEmbed)
        }
    }
}