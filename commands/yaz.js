module.exports = {
    name: "yaz",
    description: "Bot İstediğiniz Kanala Mesaj Yazar!",
    category: "Genel",
    cooldown: 5,
    guildOnly: true,
    permission: "MANAGE_MESSAGES",
    execute(message, args, Embed, Discord){

        const channel = message.mentions.channels.first();
        if(!channel) return message.channel.send(Embed("", "Lütfen Bir Kanal Etiketleyiniz!", "#00ff40"))
        
        const text = args.splice(1, args.length-1).join(" ");
        if(!text) return message.channel.send(Embed("", "Lütfen Bir Mesaj Giriniz!", "#00ff40"))

        const infoEmbed = new Discord.MessageEmbed()
        .setColor(`#00d9ff`)
        .setDescription(text)
        .setFooter(`${message.member.user.username}#${message.member.user.discriminator}`, message.member.user.avatarURL({ dynamic: true, format: `png`, size: 256 }))

        channel.send(infoEmbed).then(msg => {
            message.delete();
        })
    }
}