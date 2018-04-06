const env = require('../.env')
const telegraf = require('telegraf')
const Markup = require('telegraf/markup')
const bot = new telegraf(env.token)

const teclado = Markup.keyboard([
    ["🐷porco","🙉macaco","🐶cão"],
    ["🐔frango","🐟fish"],
    ["🐳baleia"]
]).resize().extra()
bot.start(async c=>{
    c.reply(`Bem vindo ${c.update.message.from.first_name}`)
    c.reply(`Qual vc prefere?`,
        Markup.keyboard(['Coca','Pepsi']).resize().oneTime().extra())
})
bot.hears(['Coca','Pepsi'],async c=>{
    await c.reply(`I like ${c.match}`)
    await c.reply("O que vai comer?",teclado)
})
bot.hears("🐷porco",async c=>c.reply("bacon"))
bot.hears("🐳baleia",async c=>c.reply("Traz duas🐳"))
bot.on('text', async c=>c.reply(`Legal`))
bot.startPolling()