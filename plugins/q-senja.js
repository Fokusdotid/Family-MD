let handler = async (m, { conn, usedPrefix, command }) => {
  let res = await fetch('https://raw.githubusercontent.com/irwanx/db/master/kata-kata/senja.txt')
  let txt = await res.text()

  let arr = txt.split('\n')
  let cita = arr[Math.floor(Math.random() * arr.length)]
  conn.sendButton(m.chat, cita, wm, `Senja`, `${usedPrefix + command}`, m)
}
handler.help = ['senja']
handler.tags = ['quotes']
handler.command = /^(senja)$/i

handler.limit = true

module.exports = handler
