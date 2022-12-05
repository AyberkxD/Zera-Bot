module.exports = {
    name: "sil",
    description: "2-100 Arasında Mesaj Siler.",
    category: "Yetkili",
    cooldown: 5,
    guildOnly: true,
    permission: "MANAGE_MESSAGES",
    execute(message, args, Embed, Discord){

        const sayi = parseInt(args[0]);
        if(isNaN(sayi)) return message.channel.send(Embed("", `Lütfen 2-100 Arası Bir Sayı Giriniz`, "info"))

        if(sayi <2 || sayi > 100) return message.channel.send(Embed("", "Lütfen 2--100 Arası Bir Sayı Yazınız!", "#ff001e"))

        message.channel.bulkDelete(sayi, false).then(() => {
            return message.channel.send(Embed("", `${sayi} Adet Mesaj Başarıyla Silindi!`))
        })
        .catch(() => {
            return message.channel.send(Embed("", "14 Günden Eski Mesajlar Silinemez!"))
        })

    }
}
