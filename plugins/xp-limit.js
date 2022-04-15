let handler = async (m, { conn }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
    conn.reply(m.chat, `Limit @${who.split(`@`)[0]} *${user.limit}*`, m, { mentions: [who] })
}
handler.help = ['limit <@user>']
handler.tags = ['xp']
handler.command = /^(my|limit)$/i

module.exports = handler
