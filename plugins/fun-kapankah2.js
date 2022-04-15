let handler = async (m, { conn, command, text }) => {
  if (!text) throw false
  conn.reply(m.chat, `
*Pertanyaan:* ${command} ${text}?
*Jawaban:* ${Math.floor(Math.random() * 10)} ${pickRandom(['detik', 'menit', 'jam', 'hari', 'minggu', 'bulan', 'tahun', 'dekade', 'abad'])} lagi ...
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['kapankah <text>']
handler.tags = ['kerang']
handler.command = /^kapan(kah)?$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

