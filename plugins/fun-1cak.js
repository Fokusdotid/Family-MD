const onecak = require("1cak");
const fetch = require('node-fetch')
const axios = require('axios')
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let ar = ['recent', 'lol', 'legendary', 'trend']
    let er = `
┌「 *Pilihan* 」
${ar.map(v => '├ ' + v).join`\n`}
└────

Contoh:
${usedPrefix}${command} recent
`.trim()
    if (!text) throw er
    if (!ar.includes(text)) throw er
    const get = await onecak.GetSectionPosts(text)
    let json = JSON.parse(get)
    let Array = json.post
    let post = Array[Math.floor(Math.random() * Array.length)]
    if(!post.img) throw `ERROR\nGagal Mengambil Image`
    if(!isUrl(post.img)) imgs = `https://1cak.com`+post.img
    else imgs = post.img
    const defaultHeaders = {
        'User-Agent':'1cak',
        'Referer': 'https://1cak.com/'
    }
    let result = await axios.get(imgs, {
        responseType: 'arraybuffer',
        headers: defaultHeaders
      })
    if (!result) throw `error`
    await conn.sendFile(m.chat, result.data, '1cak.png', `${post.title}\n\nURL :\n${post.url}`, m)
}
handler.help = ['1cak <option>']
handler.tags = ['image','update']
handler.command = /^(1cak|onecak)$/i
  
module.exports = handler

const isUrl = (text) => {
    return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/, 'gi'))
}
