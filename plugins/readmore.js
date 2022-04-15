let handler = async (m, { conn, text }) => {
  let [l, r] = text.split`|`
  if (!l) l = ''
  if (!r) r = ''
  conn.reply(m.chat, l + readMore + r, m)
}
handler.help = ['readmore'].map(v => v + ' <teks>|<teks>')
handler.tags = ['tools']
handler.command = /^(spoiler|hidetext|(read)?more|rm|selengkapnya)$/i

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
