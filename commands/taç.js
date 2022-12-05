module.exports = {
    name: "taç",
    category: "Eğlence",
    description: "Sunucu Sahibinin Kim Oldugunu Söyler.",
    cooldown: 5,
    guildOnly: true,
    execute(message, args, Embed, Discord, Tags, tag, emojis) {
        let ownerid = message.guild.owner.id
        let owner = message.client.users.cache.get(ownerid).tag
        message.channel.send(`:crown: Bu sunucunun sahibi ${owner} :crown: `);
    }
}