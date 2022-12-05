module.exports = {
    name: "ban",
    description: "Etiketlediğiniz Kişiyi Sunucudan Banlar.",
    category: "Yetkili",
    cooldown: 5,
    guildOnly: true,
    permission: "BAN_MEMBERS",
    execute(message, args, Embed, emojis){
        const mentionedPlayer = message.mentions.members.first();
        if(!mentionedPlayer) return message.channel.send(Embed("", "Lütfen Bir Kullanıcıyı Etiketleyin!", "#ff0015"));

        message.guild.members.ban(mentionedPlayer)
        .then(() => {
            message.channel.send(Embed("", `${mentionedPlayer.displayName} Sunucudan Yasaklandı!`, "#00ff2f"))  
        })
        .catch(() => {
            message.channel.send(Embed("", `${mentionedPlayer.displayName} Adlı Kişinin Yetkisi Benden Yüksek!`, "#ff0015")) 
        })
    }
}