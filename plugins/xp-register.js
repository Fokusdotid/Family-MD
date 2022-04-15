const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Kamu sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SERIAL NUMBER>`
  if (!Reg.test(text)) throw `contoh:\n*${usedPrefix + command} manusia.16*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 50) throw 'Umur terlalu tua'
  if (age < 5) throw 'Bayi bisa ngetik sesuai format bjir ._., tapi gatau juga bocil skrg epic² pasti anak ngen ngep:v'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let prefix = usedPrefix
  let sn = createHash('md5').update(m.sender).digest('hex')
  conn.sendButton(m.chat, `
┌─「 *daftar berhasil* 」
├ nama: ${name}
├ umur: ${age}
└────  

*SN* (Serial Number) di kirim di chat pribadi dan digunakan untuk daftar ulang, jika lupa *SN* silahkan ketik *${usedPrefix}sn* untuk mengecek *SN* kamu! 
`.trim(), wm, `Profile`,`${prefix}pp`, m) 
conn.sendMessage(m.sender, {text: `*SN:* ${sn}`}, m)
}
handler.help = ['daftar', 'register'].map(v => v + ' <name>.<age>')
handler.tags = ['xp']

handler.command = /^(daftar|reg(is(ter))?)$/i

module.exports = handler