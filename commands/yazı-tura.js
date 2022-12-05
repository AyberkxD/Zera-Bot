module.exports = {
    name: "yazı-tura",
    aliases: ["yazıtura"],
    category: "Eğlence",
    description: "Arkadaşlarınızla İddaya Girip Oynayabilirsiniz!",
    cooldown: 3,
    guildOnly: true,
    async execute(message, args, Embed, Discord, Tags, tag, emojis){

        const msg = await message.channel.send(Embed("", "Yazı Tura Atılıyor..."))

        setTimeout(() => {
            msg.delete();


            const randomNumber = Math.floor(Math.random() * 100) + 1;
            let path = "";
            if(randomNumber <= 50){
                path = "images/yazı.png"
            }
            else{
                path = "images/tura.png"
            }

            const attachment = new Discord.MessageAttachment(path)
            message.channel.send(attachment)

            
        }, 3000)

    }
}