const { downloadContentFromMessage } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
	let type = Object.keys(m.quoted.message)[0]
    let q = m.quoted.message[type]
    let media = await downloadContentFromMessage(q, type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return conn.sendFile(m.chat, buffer, 'media.mp4', q.caption || '', m)
    } else if (/image/.test(type)) {
        return conn.sendFile(m.chat, buffer, 'media.jpg', q.caption || '', m)
    }
}
handler.help = ['readviewonce']
handler.tags = ['tools']
handler.command = /^((read)?viewonce)$/i

module.exports = handler
