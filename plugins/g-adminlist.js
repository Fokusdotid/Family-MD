let handler = async (m, { conn, args, participants }) => {
    let grup = await conn.getName(m.key.remoteJid)
    let mimin = m.isGroup ? NgeriAtmin(participants) : ''
    let txt = `List Admin Group *${grup}*\n*Total:* ${mimin.length}\n\n┌─「 List Admin 」\n`
    for (let min of mimin) {
    txt += `├ @${min.split('@')[0]}\n`
    }
    txt += `└────\n`
conn.reply(m.chat, txt, m, { contextInfo: { mentionedJid: mimin }})
}
handler.help = ['listadmin']
handler.tags = ['group']
handler.command = /^(adminlist|listadmin|tagadmin)$/i
handler.group = true
handler.register = false
module.exports = handler

const NgeriAtmin = (participants) => {
        atminn = []
	for (let b of participants) {
		b.admin === "admin" ? atminn.push(b.id) : ''
		b.admin === "superadmin" ? atminn.push(b.id) : ''
	}
	return atminn
}
/*

let handler = async(m, { isOwner, isAdmin, conn, text, participants }) => {
  if (!(isAdmin || isOwner)) {
                global.dfail('admin', m, conn)
                throw false
                }
  let teks = `${text ? text : ''}\n\n┌─「 Tag All 」\n`
  for (let mem of participants) {
  teks += `├ @${mem.id.split('@')[0]}\n`}
  teks += `└────\n`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <message>']
handler.tags = ['group']
handler.command = /^(t(agall)?)$/i

handler.group = true

module.exports = handler


*/
