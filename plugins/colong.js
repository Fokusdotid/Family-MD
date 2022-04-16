let { webp2png } = require('../lib/webp2mp4')
let handler = async (m, { conn, isOwner, usedPrefix, command, text }) => {
  if (!isOwner) throw false
  try {
    var q = m.quoted ? m.quoted : m
    var ras = await q.download()
    var sel = await webp2png(ras)
  } finally {
    if (sel) await conn.sendStimg(m.chat, sel, m, { packname: colong1, author: colong2 })
    else throw false //return conn.reply(m.chat, `Balas stikernya boss 🔥`, m) 
  }
}
handler.help = ['colong <reply sticker>']
handler.tags = ['owner']
handler.command = /^(co?lo?n?g)$/i

module.exports = handler
