module.exports = {
    name: "ping",
    description: "Botun Pingini Gösterir.",
    category: "Genel",
    cooldown: 5,
    execute(message, args, Embed, Discord, Tags, tag, emojis){
        const discord = message.client.emojis.cache.get("1041341626984976466");
        const discordPing = message.client.ws.ping;

        message.channel.send(Embed("", "Ping Hesaplanıyor...")).then(msg => {
            const ping = msg.createdTimestamp - message.createdTimestamp
            msg.edit(Embed("Ping", `${discord} Discord Gecikmesi: ${discordPing} ms\n${emojis(message, "bot")} Bot Gecikmesi: ${ping} ms`, "#07e312"))
        })
    }
}