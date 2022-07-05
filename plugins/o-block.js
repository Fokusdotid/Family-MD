let handler = async (m, { text, conn, usedPrefix, command, isOwner, isMods }) => {
	if (!(isOwner || isMods)) {
		global.dfail('mods', m, conn)
		throw false
    }
    if (!text) throw `*Contoh:*\n${usedPrefix + command} @${m.sender.split("@")[0]}`
	let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
	let res = [];
	switch (command) {
		case "block":
		  await conn.updateBlockStatus(who, "block").then(() => {
			  res.push(who);
		  })
		break
        case "unblock":
        case "unblok":
          await conn.updateBlockStatus(who, "unblock").then(() => {
        	  res.push(who);
          })
        break
	}
	m.reply(`\n    Sukses ${command} ${res ? `${res.map(v => '@' + v.split("@")[0])}\n` : ''}`)
}
handler.help = ["block", "unblock"]
handler.tags = ["owner"]
handler.command = /^(block|blok|unblock|unblok)$/i

module.exports = handler
