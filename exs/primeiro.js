const env = require('../.env')
const telegraf = require('telegraf')
const bot = new telegraf(env.token)

bot.start(c =>{
    const f = c.update.message.from
    console.log(f)
    c.reply(`Seja Bem Vindo, ${f.first_name}!`)
})

bot.on('text',async (c,next) => {
    await c.reply('Não entendi')
    next()
})

bot.on('text',async (c,next) => {
    await c.reply('seu lindo')
    next()
})
bot.on('text', async(c,next) => {
    await c.reply('lindo')
})

bot.startPolling();