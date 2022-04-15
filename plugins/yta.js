let { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys')
let limit = 50
const { servers, yta } = require('../lib/y2mate')
let handler = async(m, { conn, args, isPrems, isOwner }) => {
    if (!args || !args[0]) return conn.reply(m.chat, 'Uhm... urlnya mana?', m)
    let chat = global.db.data.chats[m.chat]
    let server = (args[1] || servers[0]).toLowerCase()
    let { dl_link, thumb, title, filesize, filesizeF } = await yta(args[0], servers.includes(server) ? server : servers[0])
    let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
    m.reply(wait)
    if (!isLimit) await conn.sendMessage(m.chat, { document: { url: dl_link}, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, {quoted: m})
}
handler.help = ['ytmp3 <query>']
handler.tags = ['downloader']
handler.command = /^yt(a(udio)?|mp3|musik|lagu)$/i
handler.limit = true
module.exports = handler
