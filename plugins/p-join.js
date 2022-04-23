let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link Salah'
    let res = await conn.groupAcceptInvite(code)
    conn.reply(m.chat, `Berhasil join ke grup ${await conn.getName(res)}`, m).then(() => {
        var jumlahHari = 86400000 * 0.5
        var now = new Date() * 1
        if (now < global.db.data.chats[m.chat].expired) global.db.data.chats[m.chat].expired += jumlahHari
        else global.db.data.chats[m.chat].expired = now + jumlahHari
        conn.reply(res, `*${conn.user.name}* adalah bot whatsapp, diundang oleh @${m.sender.split`@`[0]}\n${conn.user.name} akan keluar otomatis setelah: ${await conn.msToDate(global.db.data.chats[res].expired - now)}`.trim(), null, { mentions: [m.sender], contextInfo: { mentionedJid: [m.sender] } })
    })
}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['premium']

handler.command = /^join$/i

handler.premium = true
handler.limit = true
module.exports = handler
