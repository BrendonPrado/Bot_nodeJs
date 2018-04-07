const env = require('../../.env')
const telegraf = require('telegraf')
const extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const bot = new telegraf(env.token)

let lista = []
const botoes = () => extra.markup(Markup.inlineKeyboard(
    lista.map(item=> Markup.callbackButton(item,`delete ${item}`)),
    {columns:3}
))
bot.start(async c=>{
    c.reply(`Seja Bem vindo ${c.update.message.from.first_name}`)
    c.reply("Entre com itens a adicionar...")
})
bot.on('text',c =>{
    lista.push(c.update.message.text)
    c.reply(` ${c.update.message.text} adiconado`,botoes())
})
bot.action(/delete (.+)/,c =>{
    lista = lista.filter(item=>item!==c.match[1])
    c.reply(`${c.match[1]} deletado!`,botoes())
})
bot.startPolling()