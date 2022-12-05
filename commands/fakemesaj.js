module.exports = {
    name: "fakemesaj",
    category: "Eğlence",
    description: "Etiketlediğinz Kişi Üstünden Fake Mesaj Gönderir",
    cooldown: 5,
    guildOnly: true,
    async execute(message, args, Embed, Discord, Tags, tag, emojis){


        await message.delete();
        const csu = message.mentions.users.first();
        const msg = args.slice(1).join(" ");
        if (!csu) return message.reply("Birisini Etiketle!").then(m => m.delete({ timeout: 5000 }));
        if (!msg) return message.reply("Bir Mesaj Yaz!").then(m => m.delete({ timeout: 5000 }));
      
        const hook = await message.channel
          .createWebhook(csu.username, {
            avatar: csu.avatarURL()
          })
          .then(async a => {
            await a.send(msg);
            a.delete({ timeout: 100 });
          });
}
}