module.exports = {
    name: "hoşgeldin-mesaj",
    category: "Sistem",
    description: "Sunucuya Katılanlar İçin Hoşgeldin Mesajı Gönderir.",
    cooldown: 5,
    aliases: [`hm`],
    guildOnly: true,
    permission: "ADMINISTRATOR",
    async execute(message, args, Embed, Discord, Tags, tag, emojis){

        const data = tag.get("welcome_message");
        const prefix = tag.get("prefix")
        
        if(args[0] == "kanal"){
            const mentionedChannel = message.mentions.channels.first();
            if(!mentionedChannel) return message.channel.send(Embed("", "Lütfen Bir Kanal Etiketleyiniz.", "info"))

            data.channel_id = mentionedChannel.id;

            await Tags.update({welcome_message: data}, {where: {guild_id: message.guild.id}})
            return message.channel.send(Embed("", `Hoş Geldiniz Sistemi Kanalı Başarıyla Belirlendi!`))
        }
        else if(args[0] == "mesaj"){
            const text = args.splice(1, args.length-1).join(" "); 
            if(!text) return message.channel.send(Embed("", "Lütfen Bir Mesaj Giriniz.", "info"))

            data.message = text;

            await Tags.update({welcome_message: data}, {where: {guild_id: message.guild.id}})
            return message.channel.send(Embed("", `Hoş Geldiniz Sistemi Mesajı Başarıyla Belirlendi!`))
        }
        else if(args[0] == "aç"){
            data.enabled = true;
            await Tags.update({welcome_message: data}, {where: {guild_id: message.guild.id}})
            
            return message.channel.send(Embed("", `Hoş Geldiniz Sistemi Başarıyla Açıldı.`))
        }
        else if(args[0] == "kapat"){
            data.enabled = false;
            await Tags.update({welcome_message: data}, {where: {guild_id: message.guild.id}})
            
            return message.channel.send(Embed("", `Hoş Geldiniz Sistemi Başarıyla Kapatıldı.`))
        }
        else if(args[0] == "test"){
            message.client.emit("guildMemberAdd", message.member);
        }

        else{
            let isEnabled = data.enabled;
            if(isEnabled) isEnabled = "Açık"
            else isEnabled = "Kapalı"

            const infoEmbed = new Discord.MessageEmbed()
                .setTitle("Hoş Geldiniz Sistemi")
                .setColor(`#e9ffa`)
                .setDescription(`Bu Komutu Kullanarak Hoş Geldiniz Mesajları Oluşturabilirsiniz.\n\u200b`)
                .addFields(
                    {name: `Gereken Yetki`, value: "Yönetici", inline: true},
                    {name: `Aktiflik durumu:`, value: `${isEnabled}\n\u200b`, inline: true},
                    {name: `${prefix}hoşgeldin-mesaj aç`, value: "Hoş Geldiniz Mesajını Açar!"},
                    {name: `${prefix}hoşgeldin-mesaj kapat`, value: "Hoş Geldiniz Mesajını Kapatır!"},
                    {name: `${prefix}hoşgeldin-mesaj mesaj <mesaj>`, value: "Hoş Geldiniz Mesajını Belirler!"},
                    {name: `${prefix}hoşgeldin-mesaj kanal #kanal`, value: "Hoş Geldiniz Mesajı Kanalını Belirler!"},
                )
                .addFields(
                    {name: `%toplamüye%`, value: "Hoşgeldin Mesajın Yanına Koyarak Toplam Üyeyide Gösterebilirsiniz"},
                    {name: `%kullanıcı%`, value: "Hoşgeldin Mesajın Yanına Koyarak Kullanıcı İsmini Gösterebilirsiniz"},
                    {name: `%etiketkullanıcı%`, value: "Hoşgeldin Mesajın Yanına Koyarak Kullanıcıyı Etiketleyerek İsmini Gösterebilirsiniz"},
                )

            message.channel.send(infoEmbed)
        }
    }
  }
