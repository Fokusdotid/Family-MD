let fetch = require('node-fetch')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {
  let who = m.sender
  let name = conn.getName(m.sender)
  let discriminator = who.substring(9, 13)
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {
  } finally {
    let user = global.db.data.users[m.sender]
    let users = Object.entries(global.db.data.users).map(([key, value]) => {
      return { ...value, jid: key }
    })
    let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
    let usersLevel = sortedLevel.map(enumGetKey)
    let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
    if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
      let rank = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=birdy-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=DIKIT%20LAGI%20NAIK'
        {
          await conn.sendButtonImg(m.chat, await (await fetch(rank)).buffer(), `Level ${name} ${user.level} (${user.exp - min}/${xp})\nKurang ${max - user.exp} EXP lagi!`.trim(), wm, 'Enable autolevelup', `${usedPrefix}on autolevelup`, m)
        }
    }
    let before = user.level * 1
    while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
      let rank = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=birdy-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=LEVEL%20UP!'
        {
          await conn.sendButtonImg(m.chat, await (await fetch(rank)).buffer(), `${name} Level Up!\n_${before}_ -> ${user.level}`.trim(), wm, 'AUTO LEVEL UP', `${usedPrefix}on autolevelup`)
          if(user.level > 150) {
            let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
            let pp = await conn.profilePictureUrl(who, 'image')
            let mentionedJid = [who]
            conn.sendFile(m.chat, pp, 'pp.jpg', `Selamat @${who.split('@')[0]} Telah Mencapai Mythical Glory\nKehebatanmu akan tersebar ke seluruh penjuru grup!`, m, false, { contextInfo: {
              mentionedJid: mentionedJid
            }})
            let getGroups = await conn.groupFetchAllParticipating()
            let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
            let listgc = groups.map(v => v.id)
            for (let id of listgc) {
              await conn.delay(1500)
              await conn.sendFile(id, pp, 'pp.jpg', `Selamat @${who.split('@')[0]} Telah Mencapai Mythical Glory`, null, false, { contextInfo: {
                mentionedJid: mentionedJid
              }})
            }
          }
        }
    }
  }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^levelup$/i

module.exports = handler

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}
