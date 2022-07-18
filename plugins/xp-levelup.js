let levelling = require('../lib/levelling')
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
  //let _pp = './src/avatar_contact.png'
  let _pp = 'https://telegra.ph/file/4acb59eadbcad0093defd.png'
  let who = m.sender
  let prefix = usedPrefix
  let _discriminator = who.substring(9, 13)
  try {
    _pp = await conn.profilePictureUrl(who)
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
      let rank = (await fetch(API('males', '/rank', {
        profile: _pp,
        name: conn.getName(who),
        bg: 'https://i.ibb.co/1dJT0FG/240-F-292007743-h413-LUf-Bpsy-Xi8uvu-BTo-QW0bw9b3x05-U.jpg',
        needxp: xp,
        curxp: user.exp - min,
        level: user.level,
        logorank: 'https://i.ibb.co/Wn9cvnv/FABLED.png'
      }),
      )).buffer()
      .then(async tes => {
      	conn.sendTemplateButtonFakeImg(m.chat, tes, `Level *${user.level} (${user.exp - min}/${xp})*\nKurang *${max - user.exp}* lagi!`.trim(), wm, 'Auto Level Up', `${prefix}on autolevelup`)
          //await conn.sendButtonImg(m.chat, tes, `Level *${user.level} (${user.exp - min}/${xp})*\nKurang *${max - user.exp}* lagi!`.trim(), wm, 'AUTO LEVEL UP', ',on autolevelup', m)
          //await conn.sendTemplateButtonLoc(m.chat, `Level *${user.level} (${user.exp - min}/${xp})*\nKurang *${max - user.exp}* lagi!`.trim(), wm, tes, 'Auto Level Up', `${prefix}on autolevelup`)
        })
    }
    let before = user.level * 1
    while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
      let rank = (await fetch(API('males', '/levelup', {
        profile: _pp
      }),
      )).buffer()
      .then(async data => {
      	conn.sendTemplateButtonFakeImg(m.chat, data, `_*Level Up!*_\n_${before}_ -> _${user.level}_`.trim(), wm, 'Auto Level Up', `${prefix}on autolevelup`)
          //await conn.sendTemplateButtonLoc(m.chat, `_*Level Up!*_\n_${before}_ -> _${user.level}_`.trim(), wm, data, 'Auto Level Up', `${prefix}on autolevelup`, m)
        })
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