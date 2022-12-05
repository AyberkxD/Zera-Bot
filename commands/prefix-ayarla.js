module.exports = {
    name: "prefix-ayarla",
    aliases: ["prefixayarla", "payarla"],
    category: "Yetkili",
    description: "Sunucunuza İstediğiniz Prefixi Ayarlayabilirsiniz.",
    cooldown: 5,
    guildOnly: true,
    permission: "ADMINISTRATOR",
    async execute(message, args, Embed, Discord, Tags, tag, emojis){

        if(!args[0]) return message.channel.send(Embed("", `${emojis(message, "hayir")} Lütfen Bir Prefix Giriniz.`))
        if(args[0].length > 10) return message.channel.send(Embed("", `${emojis(message, "hayir")} Prefix Uzunluğu En Fazla 10 Olabilir!`))

        await Tags.update({ prefix: args[0] }, { where: { guild_id: message.guild.id} })
        return message.channel.send(Embed("", `${emojis(message, "basarl")} Prefix Başarıyla \`${args[0]}\` Olarak Ayarlandı!`))

    }
}