const Discord = require("discord.js");
const cooldowns = new Discord.Collection();
const Embed = require("./embed")
const emojis = require("./emojis")

module.exports = (message, commandName, cooldown) => {

    if (!cooldowns.has(commandName)) {
        cooldowns.set(commandName, new Discord.Collection());
    }

    var isCooldown;

    const timestamps = cooldowns.get(commandName);
    const now = Date.now();
    const cooldownAmount = (cooldown || 5) * 1000;

    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

        if (expirationTime > now) {
            const timeLeft = (expirationTime - now) / 1000;
            message.channel.send(Embed("", `${emojis(message, "hayir")} Bu Komutu Tekrar Kullanabilmek İçin Lütfen ${parseInt(timeLeft)} Saniye Bekleyiniz!`));
            isCooldown = true;
        } else {
            isCooldown = false
        }
    } else{
        isCooldown = false
    }
    
    timestamps.set(message.author.id, now);
    setTimeout(() => {
        timestamps.delete(message.author.id);
    }, cooldownAmount);
    return isCooldown;
}