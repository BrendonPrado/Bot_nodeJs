const env = require('../.env')
const telegraf = require('telegraf')
const bot = new telegraf(env.token)

bot.start(c=>{
    console.log(c.update.message.from)
    c.reply(`Seja bem vindo, ${c.update.message.from.first_name}  😆!`)
})
bot.on('text',c=>{
    if(c.update.message.from.text=="color"){
    }
    c.reply(`Texto: ${c.update.message.text} . Recebido com sucesso`)
})
bot.on('location',c=>{
  c.reply('Você está em :')
  c.reply(`Latitude: ${c.update.message.location.latitude}`)
  c.reply(`Latitude: ${c.update.message.location.longitude}`)  
})
bot.on('contact',c=>{
    c.reply(`Vou lembrar do ${c.update.message.contact.first_name} que tem o n°: ${c.update.message.contact.phone_number} ele é faustop!!`)
    bot.startPolling();
})
bot.on('voice',c=>{
    console.log(c.update.message.voice)
    c.reply(`Audio recebido, ele tem ${c.update.message.voice.duration} segundos!`)
})
bot.on('photo',c=>{
    console.log(c.update.message.photo)
    c.update.message.photo.forEach((ph,i) => {
        c.reply(`Essa foto ${i} tem resolução de ${ph.width} X ${ph.height} `)    
    });    
})

bot.on(`sticker`,c=>{
    c.reply(`EStou vendo que vc mandou o ${c.update.message.sticker.emoji} do conjunto ${c.update.message.sticker.set_name}`)

})
bot.startPolling()
