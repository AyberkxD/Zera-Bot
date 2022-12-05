module.exports = {
    name: "balıktut",
    cooldown: 5,
    guildOnly: true,
    async execute(message, args, Embed, Discord, Tags, tag, emojis){

        const msg = await message.channel.send(Embed("", "Oltayı Attın Balığı Çekiyorsun."))

        setTimeout(() => {
            msg.delete();


            const randomNumber = Math.floor(Math.random() * 100) + 1;
            if(randomNumber >= 90){
                message.channel.send("Timsah Tuttun :crocodile:")
            }
            else if(randomNumber <= 40){
                message.channel.send("**Boş** Çıktı.")
            }
            else if(randomNumber >= 60){
                message.channel.send("Somon Balığı Çıktı. :fish:")
            }
            else if(randomNumber >= 20){
                message.channel.send("Battaniyeci Turan Çıktı.")
            }

            console.log(randomNumber)

            
        }, 3000)

    }
}