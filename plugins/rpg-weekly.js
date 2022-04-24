let handler = async (m, { conn, usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    let _md = `${Math.floor(Math.random() * 20000)}`.trim()
    let md = (_md * 1)
    let _lg = `${Math.floor(Math.random() * 4)}`.trim()
    let lg = (_lg * 1)
    let _timers = (604800000 - (new Date - user.lastweekly))
    let timers = clockString(_timers) 
    if (new Date - user.lastweekly > 604800000) {
        conn.send2Button(m.chat, `selamat anda mendapatkan *Rp.${md} ${rpg.emoticon('money')}money dan ${lg} ${rpg.emoticon('legendary')}Legendary crate*`, wm, 'menu', usedPrefix + 'menu', 'bulanan', usedPrefix + 'monthly', m)
        user.money += md * 1
        user.legendary += lg * 1
        user.lastweekly= new Date * 1
    } else {
        let buttons = button(`silahkan tunggu *🕒${timers}* lagi untuk bisa mengclaim lagi`, user)
        conn.sendMessage(m.chat, buttons, { quoted: m })
    }
}
handler.help = ['weekly']
handler.tags = ['rpg']
handler.command = /^(weekly|mingguan)$/i
handler.level = 5
handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

function button(teks, user) {
    const buttons = []
    
    let claim = new Date - user.lastclaimm > 86400000
    let monthly = new Date - user.lastmonthly > 2592000000
    let weekly = new Date - user.lastweekly > 604800000
    console.log({claim, monthly, weekly})
    
    if (monthly) buttons.push({buttonId: `.monthly`, buttonText: {displayText: 'BULANAN'}, type: 1})
    if (weekly) buttons.push({buttonId: `.weekly`, buttonText: {displayText: 'MINGUUAN'}, type: 1})
    if (claim) buttons.push({buttonId: `.claim2`, buttonText: {displayText: 'HARIAN2'}, type: 1})
    if (buttons.length == 0) throw teks
    
    const buttonMessage = {
        text: teks,
        footer: wm,
        buttons: buttons,
        headerType: 1
    }
    
    return buttonMessage
}
