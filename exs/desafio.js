const env = require('../.env')
const telegraf = require('telegraf')
const bot = new telegraf(env.token)
bot.start(c=>{
    const f = c.update.message.from
    console.log(f)
    if(f.id==54){
        c.reply('Ao seu dispor, meste')
    }else{
        c.reply('Eu so falo com o mestre')
    }
})
bot.startPolling()

