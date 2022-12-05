module.exports = {
    name: "reload",
    developerOnly: true,
    aliases: ["r"],
    guildOnly: true,
    execute(message, args, Embed) {
        if (!args.length) return message.channel.send(Embed("", "Lütfen Bir Komut Adı Giriniz"))

        const commandName = args[0];
        const command = message.client.commands.get(commandName) ||
            message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

            if(!command) return message.channel.send(Embed("", `${commandName} Adında Bir Komut Bulunamadı!`, "#e31224"));

            delete require.cache[require.resolve(`./${commandName}.js`)];

            try {
                const newCommand = require(`./${command.name}`)
            message.client.commands.set(command.name, newCommand)
            message.channel.send(Embed("", `\`${command.name} Adlı Komut Başarıyla Yenilendi!\``))
            } catch (e) {
                message.channel.send(Embed("", `\`${command.name}\` Adlı Komut Yenilenirken Bir Hata Oluştu!`, "#ff0015"));
                console.error(e);
            }
    }
}