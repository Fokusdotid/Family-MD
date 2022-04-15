let fetch = require('node-fetch')
let handler = m => m

handler.before = async (m) => {
    let chat = global.db.data.chats[m.chat]
    if (chat.simi && !chat.isBanned && !m.fromMe) {
        if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
        if (!m.text) return
        let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(m.text), lc: "id" }, ''))
        if (!res.ok) throw 'maaf simi lagi sibuk'
        let json = await res.json()
        if (json.success == 'lu ngomong apa sih') await m.reply("gapaham cok :'v")
        await m.reply(`${json.success}`)
   // m.reply(`${json.success}`)
        return !0
    }
    return true
}
module.exports = handler