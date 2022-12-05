const disbut = require("discord-buttons")
const Discord = require("discord.js")

module.exports = {
    name: "yardım",
    aliases: ["help"],
    cooldown: 5,
    guildOnly: true,
    async execute(message, args, Embed, Discord, Tags, tag, emojis) {

        const emoji1 = message.client.emojis.cache.get("1041296665442779177");
        const emoji2 = message.client.emojis.cache.get("1041296611491459102");
        const flip = message.client.emojis.cache.get("1041302799973089311");
        const para = message.client.emojis.cache.get("1041301296935878728");
        const hosgeldin = message.client.emojis.cache.get("1041324720630546492");
        const gorusuruz = message.client.emojis.cache.get("1041324675826978866");
        const yetkili = message.client.emojis.cache.get("1036346875286139010");
        const developer = message.client.emojis.cache.get("1041331186716393562");
        const prefix = tag.get("prefix")

        if (message.author.bot) return;
        const btn1 = new disbut.MessageMenuOption()
            .setLabel('Bot Hakkında')
            .setDescription("Bot Hakkındaki Kısım")
            .setValue('1').setEmoji("1041297977635000381")
        const btn4 = new disbut.MessageMenuOption()
            .setLabel('Genel Komutlar')
            .setDescription(`Genel Komutları Gösterir.`)
            .setValue('2').setEmoji(`${emojis(message, "balong")}`)
        const btn2 = new disbut.MessageMenuOption()
            .setLabel('Moderasyon Komutları')
            .setDescription(`Moderasyon Komutlarını Gösterir.`)
            .setValue('3').setEmoji(`1034901220269232178`)
        const btn = new disbut.MessageMenuOption()
            .setLabel('Eğlence Komutları')
            .setDescription(`Eğlence Komutlarını Gösterir.`)
            .setValue('4').setEmoji(`${emojis(message, "roket")}`)
        const btn3 = new disbut.MessageMenuOption()
            .setLabel('Sistemler')
            .setDescription(`Sistemleri Gösterir.`)
            .setValue('5').setEmoji("1036346875286139010")
        const abone = new disbut.MessageMenuOption()
            .setLabel('Abone')
            .setDescription(`Sistemleri Gösterir.`)
            .setValue('6').setEmoji(`${emojis(message, "youtube")}`)

        const menu = new disbut.MessageMenu()
            .addOptions(btn1, btn4, btn2, btn, btn3, abone)
            .setMaxValues(1)
            .setMinValues(1)
            .setID("menu")

        const hakkında = new Discord.MessageEmbed()
            .setTitle('Bot Hakkında')
            .setDescription(`>>> Merhaba, Aşağıdaki Menüden Komutlara Erişebilirsin.
            Prefixim: **${prefix}**
            ${developer} Kullanıldığım Sunucu Sayısı: ${message.client.guilds.cache.size}`)
            .addFields(
                { name: `\u200B`, value: `[🔻Sunucuna Ekle](https://discord.com/api/oauth2/authorize?client_id=1027168895854981181&permissions=8&scope=bot)`, inline: true },
                { name: `\u200B`, value: `[${emojis(message, "destek")} Destek Sunucusu](https://discord.gg/WbdKU2RETG)`, inline: true },
                { name: `\u200B`, value: `[${emojis(message, "vote")}Oy Ver](https://www.google.com)`, inline: true },
            )
            .setImage(`https://media.giphy.com/media/ZxSpwrzFPVqiWBxKMn/giphy.gif`)
        const embed3 = new Discord.MessageEmbed()
            .setTitle(`${emojis(message, "balong")} Genel Komutlar`)
            .setDescription("Aşağıda Genel Komutların Listesi Bulunmaktadır.")
            .addFields(
                { name: `${emojis(message, "kullanicilar")} ${prefix}bilgi`, value: `Kullanıcı Hakkında Bilgi Edinirsiniz!` },
                { name: `:link: ${prefix}davet`, value: `Botu Sunucunuza Davet Eder!` },
                { name: `${emojis(message, "bot")} ${prefix}ping`, value: `Botun Pingini Gösterir.` },
                { name: `${emojis(message, "rol")} ${prefix}rolbilgi`, value: `Rol Hakkında Bilgi Edinirsiniz.` },
                { name: `:envelope_with_arrow: ${prefix}öner`, value: `Bot Hakkında Öneri veya Hata Gönderirsiniz.` },
                { name: `${emojis(message, "bot")} ${prefix}botstat`, value: `Botun İstatistiklerini Öğrenirsiniz.` },
                { name: `${emojis(message, "server")} ${prefix}sunucubilgi`, value: `Sunucunun Bilgilerini Öğrenirsiniz.` },
            )
            .setTimestamp()
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({ dynamic: true }))
        const embed1 = new Discord.MessageEmbed()
            .setTitle(`${emojis(message, "Moderasyon")} Moderasyon Komutlar`)
            .setDescription("Aşağıda Moderasyon Komutlarının Listesi Bulunmaktadır.")
            .addFields(
                { name: `${emojis(message, "ban_cekic")} ${prefix}ban`, value: `Etiketlediğiniz Kişiyi Sunucudan Banlar.` },
                { name: `${emoji2} ${prefix}kick`, value: `Etiketlediğiniz Kişiyi Sunucudan Atar.` },
                { name: `${emojis(message, "bot")} ${prefix}prefix-ayarla`, value: `Sunucunuza İstediğiniz Prefixi Ayarlayabilirsiniz.` },
                { name: `${emojis(message, "rol")} ${prefix}rol-ver`, value: `Etiketlediğiniz Kişiye İstediğiniz Rolü Verir.` },
                { name: `${emojis(message, "delete")} ${prefix}sil`, value: `2-100 Arasında Mesaj Siler.` },
                { name: `${emojis(message, "tag")} ${prefix}tag`, value: `Etiketlediğiniz Kişinin İsmini Değiştirir!` },
                { name: `${emojis(message, "unban_cekic")} ${prefix}unban`, value: `Yazdığınız İdnin Banını Kaldırır!` },
                { name: `${emoji1} ${prefix}emojiçal`, value: `Başka Sunuculardaki Emojileri Çalmanıza Yarar.` },
                { name: `${developer} ${prefix}özelkomut`, value: `Sunucunuza Özel Komut Eklemenize Yarar.` },
                { name: `:lock: ${prefix}sürelikilit`, value: `Belirlediğiniz Kanalı İstediğiniz Süre Kadar Kilitleyebilirsiniz.` },
            )
            .setTimestamp()
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({ dynamic: true }))
        const embed = new Discord.MessageEmbed()
            .setTitle(`${emojis(message, "roket")} Eğlence Komutları`)
            .setDescription("Aşağıda Eğlence Komutlarının Listesi Bulunmaktadır.")
            .addFields(
                { name: `${emojis(message, "member")} ${prefix}avatar`, value: `Kişinin Avatarını Gösterir` },
                { name: `${para} ${prefix}döviz`, value: `Doviz Kurlarını Görüntülersiniz!` },
                { name: `${emojis(message, "mesajkutusu")} ${prefix}fakemesaj`, value: `Etiketlediğinz Kişi Üstünden Fake Mesaj Gönderir` },
                { name: `:newspaper: ${prefix}haberler`, value: `Son Dakika Haberleri Gönderir.` },
                { name: `${flip} ${prefix}yazı-tura`, value: `Arkadaşlarınızla İddaya Girip Oynayabilirsiniz!` },
                { name: `${emojis(message, "tac")} ${prefix}taç`, value: `Sunucu Sahibinin Kim Oldugunu Söyler.` },
            )
            .setTimestamp()
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({ dynamic: true }))
        const embed2 = new Discord.MessageEmbed()
            .setTitle(`${yetkili} Sistemler`)
            .setDescription("Aşağıda Sistemlerin Listesi Bulunmaktadır.")
            .addFields(
                { name: `${gorusuruz} ${prefix}ayrılma-mesaj`, value: `Ayrılma Mesajını Ayarlarsınız` },
                { name: `${hosgeldin} ${prefix}hoşgeldin-mesaj`, value: `Sunucuya Katılanlar İçin Hoşgeldin Mesajı Gönderir.` },
                { name: `${emojis(message, "istatistik")} ${prefix}istatistik`, value: `İstatistik Kanallarını Kurar.` },
                { name: `:link: ${prefix}linkengel`, value: `Üyelerin Link Göndermesini Engeller!` },
                { name: `${emojis(message, "tag")} ${prefix}oto-isim`, value: `Sunucuya Girenlerin İsimlerini Düzenler.` },
                { name: `${emojis(message, "rol")} ${prefix}otorol`, value: `Sunucuya Katılan Kişilere Belirlediğiniz Rolü Otomatik Verir.` },
            )
            .setTimestamp()
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({ dynamic: true }))
            const abone1 = new Discord.MessageEmbed()
            .setTitle(`${emojis(message, "youtube")} Abone Komutları`)
            .setDescription("Aşağıda Abone Komutlarının Listesi Bulunmaktadır.")
            .addFields(
                { name: `${emojis(message, "youtube")} ${prefix}abone <üye>`, value: `Etiketlediğiniz Kişiye Abone Rolü Verir` },
                { name: `${emojis(message, "youtube")}${prefix}abone-rol <rol>`, value: `Abone Rolünü Ayarlarsınız.` },
                { name: `${emojis(message, "youtube")} ${prefix}abone-yetkili <rol>`, value: `Abone Yetkilisinin Rolünü Ayarlarsınız.` },
                { name: `${emojis(message, "youtube")} ${prefix}abone-kanal <kanal>`, value: `Abone Kanalını Ayarlarsınız.` },
            )
            .setTimestamp()
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({ dynamic: true }))

        let msg = await message.channel.send({ embed: hakkında, component: menu })

        message.client.on("clickMenu", menu => {
            if (menu.clicker.id !== message.author.id) return;
            menu.reply.defer();
            if (menu.values[0] === '1') {
                //kod ekleyebilirsiniz
                msg.edit({
                    embed: hakkında,
                })
            }
            if (menu.values[0] === '2') {
                //kod ekleyebilirsiniz
                msg.edit({
                    embed: embed3,
                })
            }
            if (menu.values[0] === '3') {
                //kod ekleyebilirsiniz
                msg.edit({
                    embed: embed1,
                })
            }
            if (menu.values[0] === '4') {
                //kod ekleyebilirsiniz
                msg.edit({
                    embed: embed,
                })
            }
            if (menu.values[0] === '5') {
                //kod ekleyebilirsiniz
                msg.edit({
                    embed: embed2,
                })
            }
            if (menu.values[0] === '6') {
                //kod ekleyebilirsiniz
                msg.edit({
                    embed: abone1,
                })
            }
        })
    }
}
