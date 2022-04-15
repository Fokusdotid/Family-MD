const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)

let handler  = async (m, { conn, usedPrefix, command, args, text }) => {
  if (!text) return m.reply('Cari apa?\njangan nyari bok3p yaa, dosa 😖')
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) return m.reply('Maaf image tidak ditemukan!')
  let sell = `
*───「 GOOGLE IMAGE 」───*

➤ *search :* ${text}
➢ *width :* ${width}
➢ *height :* ${height}
`
  let message = await prepareWAMessageMedia({ image: await(await fetch(url)).buffer()}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
      templateMessage: {
            hydratedTemplate: {
                imageMessage: message.imageMessage,
                hydratedContentText: sell,
                hydratedFooterText: wm,
                hydratedButtons: [{
                  index: 0,
                   urlButton: {
                        displayText: `🖼 Url Image`,
                        url: `${url}`
                    }
                }, {
                   quickReplyButton: {
                        displayText: `Image ${text}`,
                        id: `${usedPrefix}${command} ${text}`
                    },
                    selectedIndex: 1
                }]
            }
        }
    }), { userJid: m.participant || m.key.remoteJid, quoted: m });
    return await conn.relayMessage(
        m.key.remoteJid,
        template.message,
        { messageId: template.key.id }
    )
  }
handler.help = ['image <query>']
handler.tags = ['internet']
handler.command = /^((g)?ima?ge?)$/i

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
