let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
let handler = async (m, { conn, isOwner, command, text }) => {
  if (global.conn.user.jid != conn.user.jid) return
m.reply('Please wait...')
  let o
  try {
    o = await exec(command.trimStart()  + ' ' + text.trimEnd())
  } catch (e) {
    o = e
  } finally {
    let { stdout, stderr } = o
    if (stdout.trim()) {
let a = stdout.replace(/C:/gi, '').replace(/Users/gi, 'home').replace(/rdp/gi, 'usr').replace(/Desktop/gi, 'root')
m.reply(a)
}
    if (stderr.trim()) {
let serr = stderr.replace(/C:/gi, '').replace(/Users/gi, 'home').replace(/rdp/gi, 'usr').replace(/Desktop/gi, 'root')
m.reply(serr)
}
  }
}

handler.help = ['$']
handler.tags = ['advanced']
handler.customPrefix = /^[$]/
handler.command = new RegExp
handler.rowner = true
module.exports = handler
