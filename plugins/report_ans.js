let handler = m => m
handler.before = async function (m, { conn, isOwner }) {
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/(REPORT|REQUEST|KONFIR|KONFIRM)!/i.test(m.quoted.text)) return !0
    if (!isOwner) throw false
    conn.reply(m.quoted.mentionedJid[0], '*Owner:* ' + m.text, null)
    conn.reply(m.key.remoteJid, '*Pesan dari owner:* ' + m.text, null)
    //conn.reply(m.quoted.mentionedJid[0], '*Owner:* ' + m.text + m.quoted.mentionedJid[0] + `${m.quoted.text.split`Pesan :`[1]}`, null)

}
module.exports = handler
