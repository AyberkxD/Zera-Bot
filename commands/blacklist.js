const Discord = require('discord.js');
const { Database } =  require('nukleon');
const db = new Database("./database.json");

module.exports = {
  name: "karaliste",
  cooldown: 5,
  guildOnly: true,
  execute(message, args, Embed, Discord, Tags, tag, emojis){
if(message.author.id !== "968066838305067049") { return message.channel.send("Sen bu komutu kullanamassın!") } else {
    if(args[0] == "ekle") {
    let us = message.guild.members.cache.find(u =>
      args
        .slice(0)
        .join(" ")
        .includes(u.username)
    );
       let muser = message.mentions.users.first();
    let userid;
    if (isNaN(args[1])) {
      if (!muser) {
       return message.reply("Kullanıcı belirt!");
      } else {
        userid = muser.id;
      }
    } else {
      userid = args[1];
        }
            let covid = userid
 db.set(`karaliste_${covid}`, 'eklendi') ;
let kl = message.client.users.cache.get(covid).tag
message.channel.send(`${kl} kullanıcısı başarıyla karalisteye eklendi çıkarmak için **!karaliste çıkar @üye**`)
}

    if(args[0] == "çıkar") {
    let us = message.guild.members.cache.find(u =>
      args
        .slice(0)
        .join(" ")
        .includes(u.username)
    );
       let muser = message.mentions.users.first();
    let userid;
    if (isNaN(args[1])) {
      if (!muser) {
       return message.reply("Kullanıcı belirt!");
      } else {
        userid = muser.id;
      }
    } else {
      userid = args[1];
        }
            let covid = userid
  db.remove(`karaliste_${covid}`);
let kl = message.client.users.cache.get(covid).tag
message.channel.send(`${kl} kullanıcısı başarıyla karalisteden çıkarıldı tekrar eklemek için **!karaliste ekle @üye**`)
}
}
}
}