const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*ao/i.test(m.quoted.contentText)) return !0
    this.asahotak = this.asahotak ? this.asahotak : {}
    if (!(id in this.asahotak)) return this.sendButton(m.chat, 'Soal itu telah berakhir', wm, 'Lagi?', '.asahotak', m)
    if (m.quoted.id == this.asahotak[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.asahotak[id][1]))
        if (['.ao', 'Bantuan', ''].includes(m.text)) return !0
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.asahotak[id][2]
            await this.sendButton(m.chat, benar + ` +${this.asahotak[id][2]} XP`, wm, 'Lagi?', '.asahotak', m)
            clearTimeout(this.asahotak[id][3])
            delete this.asahotak[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) this.sendButton(m.chat, dikit, wm, 'Bantuan', '.ao', m)
        else this.sendButton(m.chat, salah, wm, 'Bantuan', '.ao', m)
    }
    return !0
}
handler.exp = 0

module.exports = handler
