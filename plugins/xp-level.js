let handler = async (m, { conn }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
    conn.reply(m.chat, `Level @${who.split(`@`)[0]} *${user.level}*`, m, { mentions: [who] })
}
handler.help = ['level <@user>']
handler.tags = ['xp']
handler.command = /^(level)$/i

module.exports = handler
