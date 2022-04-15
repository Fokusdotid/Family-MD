let { addExif } = require('../lib/sticker.js')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!m.quoted) throw `Balas stiker dengan perintah *${usedPrefix + command}*`
  let stiker = false
  try {
    let [packname, ...author] = text.split('|')
    author = (author || []).join('|')
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) throw 'Balas stikernya cokk!'
    let img = await m.quoted.download()
    if (!img) throw 'Balas Stiker!'
    stiker = await addExif(img, packname || '', author || '')
  } catch (e) {
    console.error(e)
    if (Buffer.isBuffer(e)) stiker = e
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
    else throw 'Gagal ngasih wm cokk!\nusahakan kirim terus balas stikernya ya cokk!'
  }
}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^wm$/i

module.exports = handler
