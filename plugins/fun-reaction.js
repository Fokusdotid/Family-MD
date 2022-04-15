let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw 'contoh: ' + usedPrefix + command + ' 😅'
	if (!m.quoted) throw 'balas pesan dengan perintah ' + usedPrefix + command + ' 😅'
	if (text) {
		await conn.relayMessage(m.chat, {
			reactionMessage: {
				key: {
					id: m.quoted.id,
					remoteJid: m.chat,
					fromMe: true
				},
				text: text
			}
		}, {
			messageId: m.quoted.id
		})
	}
	
}
handler.help = ['reaction 😅', 'react 😅']
handler.tags = ['tools']
handler.command = /^(r(eact(ion(s)?)?)?)$/i

module.exports = handler