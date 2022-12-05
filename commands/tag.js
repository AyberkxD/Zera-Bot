module.exports = {
    name: "tag",
    aliases: ["ideğiş"],
    description: "Etiketlediğiniz Kişinin İsmini Değiştirir!",
    category: "Yetkili",
    guildOnly: true,
    permission: "MANAGE_NICKNAMES",
    execute(message, args, Embed, Discord){

        const mentionedPlayer = message.mentions.members.first()

        if(!mentionedPlayer) return message.channel.send(Embed("", "Lütfen Bir Kullanıcıyı Etiketleyiniz!", "#ff0015"))

        const newNickname = args.splice(1, args.length-1).join(" ")

        mentionedPlayer.setNickname(newNickname).then(() => {
            return message.channel.send(Embed("", `${mentionedPlayer.user.username} Adlı Kişinin Etiketi Başarıyla ${newNickname} Olarak Değiştirildi!`, "#00ffff"))
        }).catch(() => {
            return message.channel.send(Embed("", `${mentionedPlayer.displayName} Adlı Kişinin Yetkisi Benden Yüksek!`, "#ff001e"))
        })

    }
}