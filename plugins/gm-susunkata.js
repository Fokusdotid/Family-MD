const fs = require('fs')
const fetch = require('node-fetch')
const timeout = 120000
const poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.susunkata = conn.susunkata ? conn.susunkata : {}
    let id = m.chat
    if (id in conn.susunkata) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', wm, 'Bantuan', usedPrefix + 'suka', conn.susunkata[id][0])
        throw false
    }
    let res = JSON.parse(fs.readFileSync('./api/susunkata.json'))
    let random = Math.floor(Math.random() * res.length)
    let json = res[random]
    let caption = `
${json.soal}

Yang Berkaitan Dengan *${json.tipe}*

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik *${usedPrefix}suka* untuk bantuan
Poin: *${poin} XP*
    `.trim()
    conn.susunkata[id] = [
    await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Susun Kata')).buffer(), caption, wm, 'Bantuan', usedPrefix + 'suka', m),
    json,
    poin,
    setTimeout(() => {
        if (conn.susunkata[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, wm, 'Susun Kata', usedPrefix + 'susunkata', conn.susunkata[id][0])
            delete conn.susunkata[id]
    }, timeout)
    ]
}
handler.help = ['susunkata']
handler.tags = ['game']
handler.command = /^susunkata/i

module.exports = handler