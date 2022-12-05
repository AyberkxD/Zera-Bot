module.exports = async (message, Tags, Embed, emojis) => {

        const tag = await Tags.findOne({where: {guild_id: message.guild.id}})
        if(tag.get("link_protect_enabled")){

            const possibleLinks = [".com", ".tv", ".net", ".xyz", ".io", ".me", ".gg", "www.", "http.", ".org", ".biz", ".party", ".rf.gd", ".az"]
            possibleLinks.some(word => {
                if(message.content.toLowerCase().includes(word)){

                    message.delete();
                    return message.channel.send(Embed(`${emojis(message, "polis")} Link Engel`, `${emojis(message, "hayir")}  **${message.author}** Gönderdiğin Mesaj **Link** Olduğu İçin Silindi. `))

                }
            })
        }

}