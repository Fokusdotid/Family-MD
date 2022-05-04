let handler = async (m, { conn, usedPrefix, command }) => {
    let _uptime = process.uptime() * 1000
    let uptimex = clockString(_uptime)
    conn.send3Button(m.chat, `Aktif selama: *${uptimex}*`.trim(), wm, 'bot stats', usedPrefix + 'stat', 'pinger', usedPrefix + 'ping', 'kembali ke menu', usedPrefix + 'menu', m)
}
handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^(uptime|runtime)$/i

module.exports = handler

function clockString(ms) {
    let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [d + ' Hari', + h + ' Jam ', + m + ' Menit ', s + ' Detik'].map(v => v.toString().padStart(2, 0)).join(' ')
}
