let handler = async (m, { conn, text, isROwner, isOwner, isAdmin, usedPrefix, command }) => {
  if (text) {
    if (isROwner) global.conn.bye = text
    else if ((isOwner || isAdmin)) conn.bye = text
    global.db.data.chats[m.chat].sBye = text
    m.reply('Bye berhasil diatur\n@user (Mention)')
  } else throw 'Teksnya mana?\n\ncontoh:\n' + `${usedPrefix + command} selamat tinggal @user!`
}
handler.help = ['setbye <teks>']
handler.tags = ['owner', 'group']
handler.command = /^(setbye|sbye)$/i
handler.group = true

module.exports = handler
