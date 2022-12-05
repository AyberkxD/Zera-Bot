const ms = require("ms");

module.exports = {
    name: "sürelikilit",
    cooldown: 5,
    guildOnly: true,
    permission: "MANAGE_CHANNELS",
    execute(message, args, Embed, Discord, Tags, tag, emojis){
const mb = new Discord.MessageEmbed()
.setAuthor(message.client.user.username, message.client.user.avatarURL())
.setFooter(`Zera Bot`)
.setTimestamp()

const emb = new Discord.MessageEmbed()
.setAuthor(message.client.user.username, message.client.user.avatarURL())
.setFooter(`Zera Bot`)
.setTimestamp()

if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(mb.setDescripton(`Bu komutu kullanabilmek için yetkiniz yetersiz.`))
let zera = message.mentions.channels.first()
if(!args[0]) return message.channel.send(mb.setDescription(`Bir kanalı etiketlemelisin.`))
if(!zera) return message.channel.send(mb.setDescription(`#**${args[0]}**, kanalını sunucuda bulamıyorum.`))
  
if(!args[1]) return message.channel.send(mb.setDescription(`Ne kadar süre kilitli kalacağını belirtmelisin.`))
let süre = args[1];
  
let kanal = message.guild.channels.cache.get(zera.id);
let role = message.guild.roles.cache.find(c => c.name === '@everyone');

kanal.createOverwrite(role, { 'SEND_MESSAGES': false })
kanal.send(emb.setDescription(`Bu kanal ${message.author} tarafından ${süre.replace(/d/, ' gün').replace(/s/, ' saniye').replace(/m/, ' dakika').replace(/h/, ' saat')} boyunca kilitlendi.`)).then(m => {
setTimeout(async () =>{  
kanal.createOverwrite(role, { 'SEND_MESSAGES': null })
m.edit(emb.setDescription(`Kanal kilidi açıldı.`))
}, ms(süre))
})
}
}