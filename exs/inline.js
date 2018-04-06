const env = require('../.env')
const telegraf = require('telegraf')
const extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const bot = new telegraf(env.token)

let cont = 0
const botoes = extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('+1', 'add 1'),
    Markup.callbackButton('+10', 'add 10'),
    Markup.callbackButton('+100', 'add 100'),
    Markup.callbackButton('-1','sub 1'),
    Markup.callbackButton('-10','sub 10'),
    Markup.callbackButton('-100','sub 100'),
    Markup.callbackButton('zerar','reset'),
    Markup.callbackButton('resultado','result')
],{columns: 3 }))
bot.start(async c=>{
    await c.reply(`Seja Bem vindo ${c.update.message.from.first_name}`)
    await c.reply(`Sua contagem = ${cont}`,botoes)
})
bot.action(/add (\d+)/gi,c=>{
    cont +=parseInt(c.match[1])
    c.reply(`A contagem atua está em ${cont}`,botoes)
} )
bot.action(/sub (\d+)/gi,c=>{
    cont -=parseInt(c.match[1])
    c.reply(`A contagem atua está em ${cont}`,botoes)
} )
bot.action('reset',c=>{
    cont =0
    c.reply(`A contagem atua está em ${cont}`,botoes)
} )
bot.action('result',c=>{
    c.reply(`A contagem atua está em ${cont}`,botoes)
} )
bot.startPolling()