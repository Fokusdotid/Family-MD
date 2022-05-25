const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*suka/i.test(m.quoted.contentText)) return !0
  this.susunkata = this.susunkata ? this.susunkata : {}
  if (!(id in this.susunkata)) return this.sendButton(m.chat, 'Soal itu telah berakhir', wm, 'Susun Kata', '.susunkata', m)
  if (m.quoted.id == this.susunkata[id][0].id) { // undefined T_T
  let json = JSON.parse(JSON.stringify(this.susunkata[id][1]))
  if (['.suka', 'Bantuan', ''].includes(m.text)) return !0
  if (m.text.toLowerCase() == json.jawaban.toLowerCase()) {
    global.db.data.users[m.sender].exp += this.susunkata[id][2]
    this.sendButton(m.chat, benar + ` +${this.susunkata[id][2]} XP`, wm, 'Lagi?', '.susunkata', m)
    clearTimeout(this.susunkata[id][3])
    delete this.susunkata[id]
  } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) this.sendButton(m.chat, dikit, wm, 'Bantuan', '.suka', m)
  else this.sendButton(m.chat, salah, wm, 'Bantuan', '.suka', m)
  }
  return !0
}
handler.exp = 0

module.exports = handler
