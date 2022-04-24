let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    let _timers = (2592000000 - (new Date - user.lastmonthly))
    let timers = clockString(_timers)
    if (new Date - user.lastmonthly > 2592000000) {
        conn.reply(m.chat, `Anda sudah mengklaim dan mendapatkan 100000 💵money, 5 🗳️Legendary crate dan 3 📤Pet crate`, m)
        user.money += 100000
        user.legendary += 5
        user.pet += 3
        user.lastmonthly = new Date * 1
    } else {
        let buttons = button(`silahkan tunggu *🕒${timers}* lagi untuk bisa mengclaim lagi`, user)
        conn.sendMessage(m.chat, buttons, { quoted: m })
    }
}
handler.help = ['monthly']
handler.tags = ['rpg']
handler.command = /^(monthly|bulanan)$/i
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
    if (weekly) buttons.push({buttonId: `.weekly`, buttonText: {displayText: 'MINGGUAN'}, type: 1})
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
