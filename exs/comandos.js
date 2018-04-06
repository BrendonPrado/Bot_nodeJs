const env = require('../.env')
const telegraf = require('telegraf')
const bot = new telegraf(env.token) 

bot.start(c=>{
    c.reply(`Bem vindo ${c.update.message.from.first_name}!\nAvise se precisar de /ajuda`)
})
bot.command('ajuda',async c =>c.reply('ajuda:vou mostrar as opções:'+
    '\n/ajuda2:testar hears'+
    '\n/op2:opção generica'+
    '\n/op3:outra opção'))
bot.hears('/ajuda2',c=>c.reply("Eu também consigo capturar comandos"+
", mas utilize a /ajuda mesmo"))
bot.hears(/\/op(2|3)/i, c=>c.reply("Resposta padrão"))
bot.startPolling()