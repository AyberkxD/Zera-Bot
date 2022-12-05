const { Database } = require('nukleon');
const database = new Database("./database.json");

module.exports = {
    name: "abone-kanal",
    cooldown: 5,
    guildOnly: true,
    permission: "MANAGE_MESSAGES",
    execute(message, args, Embed, Discord, Tags, tag, emojis) {

        if (!message.member.permissions.has('MANAGE_MESSAGES')) return message.reply('Bu komutu kullanmak için yetkin yetersiz')

        let mesaj = message.mentions.channels.first()
        if (!mesaj) return message.channel.send(`Kanal etiketlemen gerekmekte örnek: ${tag.get("prefix")}abone-kanal #kanal`)

        database.set(`abonemesaj.${message.guild.id}`, mesaj.id)
        message.channel.send(`Abone kanalı başarıyla ${mesaj} olarak ayarlandı.`)
    }

}