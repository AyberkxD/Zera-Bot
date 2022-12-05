const cooldown = require("./cooldown")

module.exports = (message, commandName, tag) => {

    const isCooldown = cooldown(message, commandName, 5);
    if(isCooldown) return;

    const data = tag.get("auto_reply");
    if(data[commandName]){
        return message.channel.send(data[commandName])
    }

}