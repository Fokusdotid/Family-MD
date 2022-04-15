const { webp2png } = require('../lib/webp2mp4')
const fetch = require("node-fetch");
const { sticker } = require('../lib/sticker')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `uhm.. url nya mana?\n\ncontoh:\n${usedPrefix + command} https://t.me/addstickers/namapack`
    if (!args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) throw `url salah`
    try {
        let packName = args[0].replace("https://t.me/addstickers/", "")
        let gas = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, { method: "GET", headers: { "User-Agent": "GoogleBot" } })
        if (!gas.ok) throw m.reply(eror)
        let json = await gas.json()
        m.reply(`*Total stiker:* ${json.result.stickers.length}
*Estimasi selesai:* ${json.result.stickers.length * 1} detik`.trim())
        for (let i = 0; i < json.result.stickers.length; i++) {
            let fileId = json.result.stickers[i].thumb.file_id
            let gasIn = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            let jisin = await gasIn.json()
            let stiker = await sticker(false, "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + jisin.result.file_path)
            let sel = await webp2png(stiker)
            await conn.sendStimg(m.chat, sel, null, { packname: global.packname, author: global.author })
            await delay(500)
        }
        m.reply('_*Selesai*_')
    } catch {
        m.reply(eror)
    }
}
handler.help = ['stickertele <url>']
handler.tags = ['sticker']
handler.command = /^(s(tic?k(er)?)?tele(gram)?|tele(gram)?s(tic?k(er)?)?)$/i
handler.private = true
//handler.limit = true

module.exports = handler

const delay = time => new Promise(res => setTimeout(res, time))
