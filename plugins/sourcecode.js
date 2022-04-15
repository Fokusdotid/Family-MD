let handler = async (m, { conn }) => {
     conn.reply(m.chat, `Bot ini menggunakan script github\n\nhttps://github.com/fokusdotid/family-md\n\npliss follow pluss kasih ✨ ya pak!`, m)
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sc(ript(bot)?)?|sourcecode)$/i

module.exports = handler


