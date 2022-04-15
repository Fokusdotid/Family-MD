let handler = async (m, { conn, args, usedPrefix }) => {
    if (!args || !args[0]) throw 'Siapa yang mau di Unwarn pak?'
    let mention = m.mentionedJid[0] || m.quoted.sender || conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || ''
    if (!mention) throw 'Tag salah satu sayang'
    if (!(mention in global.db.data.users)) throw 'User tidak terdaftar dalam DATABASE!!'
    let user = global.db.data.users[mention]
    if (user.banned) throw 'User telah terbanned!!'
    if ((user.warning * 1) < 1) throw 'User tidak mempunyai warn'
    let count = (args[1] || args.length > 0 ? !isNaN(parseInt(args[1])) ? parseInt(args[1]) : 1 : 1) || 1
    if ((user.warning * 1) < count * 1) throw `User hanya memiliki *${user.warning * 1}* WARN!!`
    user.warning -= count * 1
    m.reply('Berhasil Unwarn user!!')
    conn.sendButton(mention, 'Kamu telah di Unwarn OWNER Atau MODERATOR, sekarang kamu memiliki *' + (global.db.data.users[mention].warning * 1) + '* WARN', wm, 'Owner', usedPrefix + 'owner', null)
}

handler.help = ['unwarn @mention']
handler.tags = ['owner']
handler.command = /^unwarn(user)?$/i
handler.owner = true
handler.fail = null

module.exports = handler
