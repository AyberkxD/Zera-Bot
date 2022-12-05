const { Database } = require('nukleon');
const database = new Database("./database.json");

module.exports = {
    name: "abone-yetkili",
    cooldown: 5,
    guildOnly: true,
    permission: "MANAGE_ROLES",
    execute(message, args, Embed, Discord, Tags, tag, emojis) {

        if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply('Bu komutu kullanmak için yetkin yetersiz')

        let rol = message.mentions.roles.first()
        if (!rol) return message.channel.send(`Aboneleri Verecek Rolü Etiketlemen Lazım`)

        database.set(`abonesorumlusu.${message.guild.id}`, rol.id)
        message.channel.send(`Abone Yetkilisini ${rol} Olarak Ayarladım!`)
    }

}