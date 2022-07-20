let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
moment.tz.setDefault('Asia/Jakarta'); // Change this to your local timezone
moment.locale('id'); // Change this to your locale
let handler = async (m, { conn, usedPrefix }) => {
  let pp = 'https://i.ibb.co/gS0XrNc/avatar-contact.png'
  let prefix = usedPrefix
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.profilePictureUrl(who, 'image')
  } catch (e) {

  } finally {
    let { name, premium, premiumTime, atm, limit, warning, pasangan, money, exp, lastclaim, registered, regTime, age, level, role } = global.db.data.users[who] 
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let jodoh = `Berhubungan dengan @${pasangan.split('@')[0]}`
    let str = `
╭───ꕥ *PROFILE* ꕥ───✾
│•> Name: ${username} | ${name}
│•> Status: ${pasangan ? jodoh : 'Jomblo' }
│•> Premium: ${premium ? `${conn.msToDate(premiumTime - new Date() * 1)}` : 'Gratisan'}
│•> Number: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
│•> Umur: *${age == '-1' ? 'Belum Daftar' : age}*
│•> Link: wa.me/${m.sender.split`@`[0]}
│•> Level: *${level}*
│•> Rank : *${role}*
│•> Limit: *${limit}*
│•> Registered: ${registered ? 'Yes (' +  moment(new Date(regTime)).format('dddd, Do MMMM YYYY, hh:mm')+ ')': 'No'}
│•> Atm: *${atm}*
│•> Money: *${money}*
│•> Exp  : *${exp}*
│•> Warning : *${warning}*
╰─────────────────────
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: {
      mentionedJid: [global.db.data.users[who].pasangan]
    }})
    if(level > 150) {
      conn.sendFile(m.chat, pp, 'pp.jpg', `Selamat @${who.split('@')[0]} Telah Mencapai Mythical Glory`, m, false, { contextInfo: {
        mentionedJid: mentionedJid
      }})
    }
    //conn.sendTemplateButtonFakeImg(m.chat, await (await fetch(pp)).buffer(), str, wm, 'Menu', `${prefix}menu`, { mentions: [m.sender] })
    //conn.send2ButtonLoc(m.chat, await (await fetch(pp)).buffer(), str, wm, `Menu`, `${prefix}menu`, 'Claim', `${prefix}claim`)
  }
}
handler.help = ['dompet', 'atm']
handler.tags = ['rpg']
handler.command = /^(dompet|atm|pp|profile|profil|propil)$/i
handler.register = false
module.exports = handler

