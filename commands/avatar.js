module.exports = {
    name: "avatar",
    description: "Kişinin Avatarını Gösterir",
    category: "Eğlence",
    guildonly: true,
    execute(message, args, Embed, Discord, Tags, tag, emojis) {
        let user;

        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else {
            user = message.author;
        }

        const avatar = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor("» Buyur Avatarın,")
            .setImage(user.avatarURL({ dynamic: true }))
        message.channel.send(avatar)

    }
}