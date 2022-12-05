const { Database } = require('nukleon');
const database = new Database("./database.json");

module.exports = {
    name: "abone",
    cooldown: 5,
    guildOnly: true,
    permission: "MANAGE_ROLES",
    async execute(message, args, Embed, Discord, Tags, tag, emojis) {

        let abonesorumlusu = await database.fetch(`abonesorumlusu.${message.guild.id}`)
        let abonemesaj = await database.fetch(`abonemesaj.${message.guild.id}`)//Bu Bot Zego Share Tarafından Kodlanmıştır zekiarda.xyz 
        let abonerol = await database.fetch(`abonerol.${message.guild.id}`)
        let abonekisi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        if (!abonerol) return message.channel.send(`${message.author} Verilecek Abone Rolü Ayarlı Değil!`).then(msg => msg.delete(100))
        if (!abonemesaj) return message.channel.send(`${message.author} Abone Mesaj Kanalı Ayarlı Değil!`).then(msg => msg.delete(100))
        if (!abonesorumlusu) return message.channel.send(`${message.author} Abone sorumlusu rolü ayarlanmamış!`).then(msg => msg.delete(100))
        message.delete()
        let user = message.mentions.users.first()
        if (!message.member.roles.cache.has(abonesorumlusu)) return message.channel.send(`${message.author} Bu komutu kullanabilmek için ${abonesorumlusu} Rolünün Olması Gerek.`).then(msg => msg.delete(100))

        if (!message.mentions.users.first()) return message.channel.send(`${message.author} Bir Üye Etiketle!`)
        await(abonekisi.roles.add(abonerol))
        message.channel.send(`${message.author} Başarıyla Abone Rolü Verildi!`)


        const embed = new Discord.MessageEmbed()
            .setTitle(`Başarıyla Abone Rolü Verildi!`)
            .addField(`・Veren Yetkili:`, `${message.author}`, true)
            .addField(`・Abone:`, `${user}`, true)
            .addField(`・Mesaj:`, `[Tıkla](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`, true)
            .setColor(`#9b00ff`)
            .setFooter(`${message.client.user.username}`)
            .setImage("https://media.giphy.com/media/ZxSpwrzFPVqiWBxKMn/giphy.gif")
        message.guild.channels.cache.get(abonemesaj).send(embed).then(msg => msg.delete(100))


    }

}