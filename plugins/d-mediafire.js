let axios = require('axios');

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `uhm.. urlnya mana?\n\npenggunaan:\n${usedPrefix + command} url\ncontoh:\n${usedPrefix + command} http://www.mediafire.com/file/js0gr2nozcmk9yg/example.txt/file`
	
	let res = await (await axios.get(API('males', '/mediafire', { url: text }))).data;
	if (res.status != 200) throw res.message;
	let txt = `
*Nama File:* ${res.result.filename}
*Ukuran:* ${res.result.filesize}
*Tipe File:* ${res.result.filetype}
*Di Upload:* ${res.result.uploadAt}
*Link:* ${res.result.link}


_harap bersabar, file sedang dikirim :'v_
`.trim()
conn.sendButton(m.chat, txt, wm, 'menu', usedPrefix + 'menu', m)
conn.sendMessage(m.chat, { document: { url: res.result.link }, mimetype: res.result.mimetype, fileName: res.result.filename }, { quoted: m })
}

handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((media|md)?fire)$/i

module.exports = handler