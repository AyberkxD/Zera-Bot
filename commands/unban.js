module.exports = {
    name: "unban",
    description: "Yazdığınız İdnin Banını Kaldırır!",
    category: "Yetkili",
    cooldown: 5,
    guildOnly: true,
    permission: "BAN_MEMBERS",
    execute(message, args, Embed){
        const bannedPlayerID = args[0];

        if(!bannedPlayerID.length) return message.channel.send(Embed("", "Lütfen Bir İd Giriniz!", "#ff0015"))

        message.guild.members.unban(bannedPlayerID)
        .then(() => {
            return message.channel.send(Embed("", `Kişinin Banı Kaldırıldı!`, "#04ff00"))
        })
        .catch(() => {
            return message.channel.send(Embed("", `Bu ID\`ye Sahip Bir Kullanıcı Bulunamadı Veya Bu Kullanıcı Yasaklı Değil!`, "#ff0015"))
        })
    }
}