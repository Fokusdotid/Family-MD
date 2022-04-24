let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    let _md = `${Math.floor(Math.random() * 3500)}`.trim()
    let md = (_md * 1)
    let __timers = (new Date - user.lastmining)
    let _timers = (60000 - __timers)
    let timers = clockString(_timers) 
    if (new Date - user.lastmining > 60000) {
        conn.reply(m.chat, `Anda mendapatkan *Rp.${md}* Money`, m)
        global.db.data.users[m.sender].money += md * 1
        global.db.data.users[m.sender].lastmining = new Date * 1
    } else {
        let buttons = button(`silahkan tunggu *${timers}* lagi untuk bisa mengclaim lagi`, user)
        conn.sendMessage(m.chat, buttons, { quoted: m })
    }
}
handler.help = ['mining']
handler.tags = ['rpg']
handler.command = /^(mining)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
function clockString(ms) {
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,m,s})
  return [m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

function button(teks, user) {
    const buttons = []
    
    let mining = new Date - user.lastmining > 60000
    let claim = new Date - user.lastclaim > 86400000
    let claim2 = new Date - user.lastclaim2 > 86400000
    console.log({mining, claim, claim2})
    
    if (mining) buttons.push({buttonId: `.mining`, buttonText: {displayText: 'MINING'}, type: 1})
    if (claim) buttons.push({buttonId: `.claim`, buttonText: {displayText: 'CLAIM'}, type: 1})
    if (claim2) buttons.push({buttonId: `.claim2`, buttonText: {displayText: 'CLAIM2'}, type: 1})
    if (buttons.length == 0) throw teks
    
    const buttonMessage = {
            text: teks,
            footer: wm,
            buttons: buttons,
            headerType: 1
    }
    
    return buttonMessage
}