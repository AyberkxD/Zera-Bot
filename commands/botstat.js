const { MessageEmbed } = require(`discord.js`)
const moment = require("moment");
const os = require("os");
require("moment-duration-format");

module.exports = {
    name: "botstat",
    cooldown: 5,
    guildOnly: true,
    async execute(message, args, Embed, Discord, Tags, tag, emojis) {

        const developer = message.client.emojis.cache.get("1041331186716393562")
        const uptime2 = message.client.emojis.cache.get("1042031996542648362")
        const system = message.client.emojis.cache.get("1042033057156317225")

        const uptime = moment.duration(message.client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]")
        const istatistikler = new MessageEmbed()
            .setColor("RANDOM")
            .addField(`${developer} Bot Sahibi`, "<@968066838305067049>")
            .addField(`${emojis(message, "server")} Sunucu Sayısı`, message.client.guilds.cache.size)
            .addField(`${emojis(message, "kullanicilar")} Kullanıcı Sayısı`, message.client.users.cache.size)
            .addField(`${emojis(message, "CPU")} CPU`,`\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,true)
            .addField(`${emojis(message, "nodejs")} Node.JS Sürüm`, process.version )
            .addField(`${system} İşletim Sistemi`, os.platform)
            .addField(`${emojis(message, "bot")} Bit`, `\`${os.arch()}\``, true)
            .addField(`${uptime2} Uptime Süresi`, uptime)
        return message.channel.send(istatistikler);
    }
}