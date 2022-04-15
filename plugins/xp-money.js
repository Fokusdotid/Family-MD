let handler = async (m, { conn }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
    conn.reply(m.chat, `Money @${who.split(`@`)[0]} *${user.money}*`, m, { mentions: [who] })
}
handler.help = ['money <@user>']
handler.tags = ['xp']
handler.command = /^(money?)$/i

module.exports = handler
