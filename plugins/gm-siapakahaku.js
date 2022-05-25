const fs = require('fs')
const fetch = require('node-fetch')
const timeout = 120000
const poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
    let id = m.chat
    if (id in conn.siapakahaku) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', wm, 'Bantuan', usedPrefix + 'who', conn.siapakahaku[id][0])
        throw false
    }
    let res = JSON.parse(fs.readFileSync('./api/siapakahaku.json'))
    let random = Math.floor(Math.random() * res.length)
    let json = res[random]
    let caption = `
    ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}who untuk bantuan
Bonus: ${poin} XP
    `.trim()
    conn.siapakahaku[id] = [
    await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Siapakah Aku?')).buffer(), caption, wm, 'Bantuan', usedPrefix + 'who', m),
    json,
    poin,
    setTimeout(() => {
        if (conn.siapakahaku[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, wm, 'Siapakah Aku', usedPrefix + 'siapakahaku', conn.siapakahaku[id][0])
            delete conn.siapakahaku[id]
    }, timeout)
    ]
}
handler.help = ['siapakahaku']
handler.tags = ['game']
handler.command = /^siapa(kah)?aku/i

module.exports = handler