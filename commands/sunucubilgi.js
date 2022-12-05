module.exports = {
    name: "sunucubilgi",
    cooldown: 5,
    guildOnly: true,
    execute(message, args, Embed, Discord, Tags, tag, emojis){

      const emoji = message.client.emojis.cache.get("1041296665442779177");

        const { MessageEmbed } = require(`discord.js`)
        var guild = message.guild
        var kanallar = guild.channels.cache
        var üyeler = guild.members.cache
        var emojiler = guild.emojis.cache
        var roller = guild.roles.cache
        var embed = new MessageEmbed()
        .setTitle(`${guild.name} adlı sunucunun bilgileri`)
        .setThumbnail(guild.iconURL({dynamic: true}))
        .addField(`**İSTATİSTİKLER**`, [
          `:crown: **Sunucu Sahipi:** <@${guild.owner.id}>`,
          `${emojis(message, "member")} **Üye Sayısı:** ${guild.memberCount}`,
          `${emojis(message, "bot")} **Bot Sayısı:** ${üyeler.filter(üye => üye.user.bot).size}`,
          `${emoji} **Emoji Sayısı:** ${emojiler.size}`,
          `${emojis(message, "rol")} **Rol Sayısı:** ${roller.size}`,
          `:scroll: **Kanal Sayısı:** ${kanallar.size}
          ${kanallar.filter(kanal => kanal.type === `text`).size} yazı | ${kanallar.filter(kanal => kanal.type === `voice`).size} ses |  ${kanallar.filter(kanal => kanal.type === `category`).size} kategori`,
        ])
        .addField(`**DURUMLAR**`, [
          `${emojis(message, "online")} **Çevrimiçi:** ${üyeler.filter(üye => üye.presence.status === `online`).size}`,
          `${emojis(message, "idle")} **Boşta:** ${üyeler.filter(üye => üye.presence.status === `idle`).size}`,
          `${emojis(message, "dnd")} **Rahatsız Etmeyin:** ${üyeler.filter(üye => üye.presence.status === `dnd`).size}`,
          `${emojis(message, "offline")} **Çevrimdışı:** ${üyeler.filter(üye => üye.presence.status === `offline`).size}`,
        ])
        .setTimestamp(guild.createdTimestamp)
        message.channel.send(embed)
    } 
}