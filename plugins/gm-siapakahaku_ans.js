const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*who/i.test(m.quoted.contentText)) return !0
  this.siapakahaku = this.siapakahaku ? this.siapakahaku : {}
  if (!(id in this.siapakahaku)) return this.sendButton(m.chat, 'Soal itu telah berakhir', wm, 'Siapakah Aku', '.siapakahaku', m)
  if (m.quoted.id == this.siapakahaku[id][0].id) { // undefined T_T
  let json = JSON.parse(JSON.stringify(this.siapakahaku[id][1]))
  if (['.who', 'Bantuan', ''].includes(m.text)) return !0
  if (m.text.toLowerCase() == json.jawaban.toLowerCase()) {
    global.db.data.users[m.sender].exp += this.siapakahaku[id][2]
    this.sendButton(m.chat, benar + ` +${this.siapakahaku[id][2]} XP`, wm, 'Lagi', '.siapakahaku', m)
    clearTimeout(this.siapakahaku[id][3])
    delete this.siapakahaku[id]
  } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) this.sendButton(m.chat, dikit, wm, 'Bantuan', '.who', m)
  else this.sendButton(m.chat, salah, wm, 'Bantuan', '.who', m)
  }
  return !0
}
handler.exp = 0

module.exports = handler
