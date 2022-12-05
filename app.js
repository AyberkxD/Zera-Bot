const Discord = require(`discord.js`);
const client = new Discord.Client({ partials: ["MESSAGE", "REACTION"] });
const fs = require(`fs`);
const { Database } =  require('nukleon');
const db = new Database("../database.json");
const moment = require('moment')
const { token, developer_id } = require(`./config.json`)
require(`discord-buttons`)(client)
const { MessageEmbed } = require(`discord.js`)

// Utils
const Embed = require(`./utils/embed.js`);
const database = require(`./utils/database.js`);
const emojis = require(`./utils/emojis.js`);
const bot_join_leave = require(`./utils/bot-join-leave`)
const player_join_leave = require(`./utils/player-join-leave`)
const autorole = require(`./utils/autorole`)
const linkprotect = require(`./utils/linkprotect`)
const statistics = require(`./utils/statistics`)
const tagExecute = require(`./utils/tagExecute`);
const command_guesses = require('./utils/command_guesses');
const auto_reply = require("./utils/auto_reply");
const cooldown = require("./utils/cooldown");

// Database
const Tags = database();

// Collections
client.commands = new Discord.Collection();

// Commands
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

commandFiles.forEach(file => {
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)
})

// Event Handlers
client.once(`ready`, async () => {
    console.log("Bot Çalıştırıldı!");
        client.user.setActivity("!yardım İle Komutlara Erişebilirsiniz!")


    // Database
    await Tags.sync();

    // Utils 2
    bot_join_leave(client, Tags, Embed, emojis)
    player_join_leave(client, Tags, Embed, emojis)
    autorole(client, Tags, Embed, emojis)
    statistics(client, Tags, Embed, emojis)
    tagExecute(client, Tags, Embed, emojis)



    // Database Check
    // Ekleme
    const servers = [];
    client.guilds.cache.forEach(async guild => {
        servers.push(guild.id);
        const tag = await Tags.findOne({ where: { guild_id: guild.id } })
        if (tag == null) {
            await Tags.create({ guild_id: guild.id })
        }
    })

    // Çıkarma
    await Tags.findAll().then(g_list => {
        g_list.forEach(async guild_db => {
            const db_id = guild_db.dataValues.guild_id;
            if (!servers.includes(db_id))
                await Tags.destroy({ where: { guild_id: db_id } })
        })
    })

})

// Hata Kapatıcı
// process.on("unhandledRejection", (err) => {
//     if (err.code === 50013) {
//         return
//     }
// })

client.on("message", async (ender) => {
    const developer = ender.client.emojis.cache.get("1041331186716393562");
    if (ender.content === `<@968066838305067049>`)
      return ender.channel.send(`${developer}`);
  });

client.on("clickButton", async (button) => {
    if (button.id === "click_to_function") {
        button.channel.send(`${button.clicker.user.tag} clicked button!`)
    }
})

client.on(`message`, async (message) => {

    let karaliste = await db.fetch(`karaliste_${message.author.id}`);
     if(karaliste === "eklendi") { return message.channel.send("Karalisteye alınmışsın beni kullanamassın!"); } 

    if (message.author.bot || message.webhookID) return;

    if (!message.guild) return

    const tag = await Tags.findOne({ where: { guild_id: message.guild.id } })

    const prefix = tag.get("prefix");

    const args = message.content.slice(prefix.length).trim().split(/ +/)
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) ||
        client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!message.content.startsWith(prefix)) {
        linkprotect(message, Tags, Embed, emojis);
        return
    }
    if(!command) {
        auto_reply(message, commandName, tag)
        return;
    }

    if (!command) {
        command_guesses(client, commandName, prefix, message.channel)
        return
    }

    // Guild Control
    if (command.guildOnly && message.channel.type == "dm") return message.channel.send(`${emojis(message, "hayir")} Bu Komut Sadece Sunucularda Kullanılabilir!`)

    // Permission Control
    if (command.permission && !message.member.hasPermission(command.permission)) return message.channel.send(Embed("", "Komutu Kullanabilmek İçin Yeterli Yetkin Yok!", "#ff002b"))

    // Developer Only Comamnds
    if (command.developerOnly && message.author.id != developer_id) return;

    // CoolDown
    const isCooldown = cooldown(message, commandName, command.cooldown);
    if(isCooldown) return;

    try {
        command.execute(message, args, Embed, Discord, Tags, tag, emojis);
    } catch (e) {
        console.error(e);
        message.channel.send(Embed("", "Bir Hata Oluştu!", "#ff0015"));
    }

})

client.login(token)