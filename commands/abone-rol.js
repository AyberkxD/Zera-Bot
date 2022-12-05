const { Database } = require('nukleon');
const database = new Database("./database.json");

module.exports = {
    name: "abone-rol",
    cooldown: 5,
    guildOnly: true,
    permission: "MANAGE_ROLES",
    execute(message, args, Embed, Discord, Tags, tag, emojis) {

        if (!message.member.permissions.has('MANAGE_ROLES')) return message.reply('Bu komutu kullanmak için yetkin yetersiz')

        let rol = message.mentions.roles.first()
        if (!rol) return message.channel.send(`Rol etiketlemen gerekmekte örnek: ${tag.get("prefix")}abone-rol @rol`)


        database.set(`abonerol.${message.guild.id}`, rol.id)
        message.channel.send(`Abone rolü başarıyla ${rol} olarak ayarlandı.`)
    }

}