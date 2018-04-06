const env = require('../.env')
const telegraf = require('telegraf')
const bot = new telegraf(env.token)

bot.start(async c =>{
    await c.reply(`Seja bem vindo, ${c.update.message.from.first_name}  😆!`)
    await c.replyWithHTML(`Destacando mensagens<b> HTML</b>
    <i> de várias </i> <code>formas</code> <pre> possíveis </pre>
    <a href="http://google.com">Google</a>`)
    await c.replyWithMarkdown('Destacando a mensagem *Markdown*'+
    ' _de varias_ ` formas` ```possíveis``` '+
    '[Google](http://google.com)')
    await c.replyWithPhoto({source: `${__dirname}/fausto.png`})
    await c.replyWithPhoto('http://themodernape.com/wp-content/uploads/2014/09/internet-troll.jpg',{caption: 'Top'})
    await c.replyWithLocation(48.5112,2.2055)
})
bot.startPolling()