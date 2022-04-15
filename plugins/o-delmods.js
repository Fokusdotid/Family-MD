let fs = require('fs')
let handler = async (m, { conn, args }) => {

    const json = JSON.parse(fs.readFileSync('./src/moderator.json'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    else who = args[0] ? args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    if (json.includes(who)) throw `${await conn.getName(who)} belum jadi moderator!`
    let index = json.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
    json.splice(index, 1)
    fs.writeFileSync('./src/moderator.json', JSON.stringify(json))
    m.reply(`${await conn.getName(who)} sekarang bukan moderator!`)

    delete require.cache[require.resolve('../config')]
    require('../config')

}
handler.help = ['delmods [@user]']
handler.tags = ['owner']
handler.command = /^(remove|hapus|-|del)mo(ds)?$/i

handler.rowner = true

module.exports = handler