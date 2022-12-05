module.exports = {
    name: "bilgi",
    category: "Genel",
    description: "Kullanıcı Hakkında Bilgi Edinirsiniz!",
    cooldown: 5,
    guildOnly: true,
    execute(message, args, Embed, Discord, Tags, tag, emojis){

        const member = message.mentions.members.first();
        if(!member) return message.channel.send(Embed("", "Lütfen Bir Kullanıcı Etiketleyiniz."))

        const time = new Date(member.joinedTimestamp)
        const joinedDate = time.toLocaleDateString("tr-TR", {year: "numeric", month: "long", day: "numeric"})

        let lastMessage = "";
        if(lastMessage != null){
            const messageLink = `https://discord.com/channels/${message.guild.id}/${member.lastMessageChannelID}/${member.lastMessageID}`
            lastMessage = `[:link: Tıkla](${messageLink})`
        }
        else{
            lastMessage = "Bulunamadı.";
        }

        const infoEmbed = new Discord.MessageEmbed()
            .setColor(`#c5ffa6`)
            .setThumbnail(member.user.avatarURL())
            .addFields(
                {name: `${emojis(message, "tag")} Kullanıcı:`, value: `${member.user.username}`, inline: true},
                {name: `${emojis(message, "member")} Takma Ad:`, value: `${member.displayName}`, inline: true},
                {name: `:date: Sunucuya Katılma Tarihi:`, value: `${joinedDate}\n\u200b`, inline: true},
                {name: `:scroll: Son Mesajı`, value: `${lastMessage}`, inline: true},
                {name: `${emojis(message, "rol")} Rol Sayısı`, value: `${member.roles.cache.size - 1}`, inline: true},
                {name: `:id: ID`, value: `${member.id}`, inline: true},
            )
            
        message.channel.send(infoEmbed)

    }
}