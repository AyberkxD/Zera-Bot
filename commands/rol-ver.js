module.exports = {
    name: "rol-ver",
    category: "Yetkili",
    description: "Etiketlediğiniz Kişiye İstediğiniz Rolü Verir.",
    cooldown: 5,
    guildOnly: true,
    permission: "MANAGE_ROLES",
    execute(message, args, Embed, Discord, Tags, tag, emojis){

        if(!message.member.hasPermission("MANAGE_ROLES")){
            return message.channel.send(Embed("", `${emojis(message, "hayir")} Üzgünüm Bunu Yapmanız İçin Yetkiniz Yok!`))
        }

        var rolid = message.mentions.roles.first()
        var kisi = message.mentions.members.first()

        if(!rolid) return message.channel.send(Embed("", `${emojis(message, "hayir")} Lütfen Bir Rol Etiketleyiniz!`))
        if(!kisi) return message.channel.send(Embed("", `${emojis(message, "hayir")} Lütfen Bir Üye Etiketleyiniz!`))

        kisi.roles.add(rolid)
        return message.channel.send(Embed("", `${emojis(message, "basarl")} ${rolid} Adlı Rol Başarıyla Verildi!`))

    }
}