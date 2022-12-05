const Parser = require("rss-parser");
const parser = new Parser()

module.exports = {
    name: "haberler",
    category: "Eğlence",
    description: "Son Dakika Haberleri Gönderir.",
    cooldown: 5,
    guildOnly: true,
    async execute(message, args, Embed, Discord, Tags, tag, emojis){

        const feed = await parser.parseURL("https://www.cnnturk.com/feed/rss/all/news")

        const haberler = feed.items;
        const random = Math.floor(Math.random() * haberler.length)

        const haber = haberler[random]
        
        const infoEmbed = new Discord.MessageEmbed()
            .setTitle(haber.title)
            .setDescription(haber.content)
            .setColor("RANDOM")

            return message.channel.send(infoEmbed)
    }
}