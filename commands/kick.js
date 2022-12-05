module.exports = {
    name: "kick",
    description: "Etiketlediğiniz Kişiyi Sunucudan Atar.",
    category: "Yetkili",
    cooldown: 5,
    guildOnly: true,
    permission: "KICK_MEMBERS",
    execute(message, args, Embed){
        const mentionedPlayer = message.mentions.members.first();
        if(!mentionedPlayer) return message.channel.send(Embed("", "Lütfen Bir Kullanıcıyı Etiketleyin!", "#ff0015"));

        mentionedPlayer.kick()
        .then(() => {
            message.channel.send(Embed("", `${mentionedPlayer.displayName} Sunucudan Atıldı`, "#00ff2f"))
        })
        .catch(() => {
            message.channel.send(Embed("", `${mentionedPlayer.displayName} Adlı Kişinin Yetkisi Benden Yüksek!`, "#ff0015"))
        })
    }
}