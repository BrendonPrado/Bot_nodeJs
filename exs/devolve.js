const env = require('../.env')
const telegraf = require('telegraf')
const axios = require('axios')
const bot = new telegraf(env.token)

bot.on('voice',async c=>{
    const id = c.update.message.voice.file_id
    const res = await axios.get(`${env.apiUrl}/getFile?file_id=${id}`)
    c.replyWithVoice({url: `${env.apiFileUrl}/${res.data.result.file_path}`})
})
bot.on('photo', async c=>{
    const id = c.update.message.photo[0].file_id
    const res = await axios.get(`${env.apiUrl}/getFile?file_id=${id}`)
    c.replyWithPhoto({url: `${env.apiFileUrl}/${res.data.result.file_path}`})
})
bot.startPolling()