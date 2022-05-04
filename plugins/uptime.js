let handler = async (m, { conn, usedPrefix, command }) => {
    let _uptime = process.uptime() * 1000
    let uptimex = clockString(_uptime)
    conn.send3Button(m.chat, `Aktif selama:\n*${uptimex}*`.trim(), wm, 'bot stats', usedPrefix + 'stat', 'pinger', usedPrefix + 'ping', 'kembali ke menu', usedPrefix + 'menu', m)
}
handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^(uptime|runtime)$/i

module.exports = handler

function clockString(ms) {
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    return days + " Hari " + hours + " Jam " + minutes + " Menit " + sec + " Detik";
}
