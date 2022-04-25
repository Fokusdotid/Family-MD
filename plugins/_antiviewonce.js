let handler = m => m

handler.before = async function (m) {
    let chat = db.data.chats[m.chat]
    if (/^[.~#/\$,](read)?viewonce/.test(m.text)) return
    if (!chat.viewonce || chat.isBanned) return
    let q = m.quoted ? m.quoted : m
    if (q.mtype == 'viewOnceMessage') {
        await this.copyNForward(m.chat, await this.loadMessage(m.chat, q.id), false, { readViewOnce: true })
    }
}

module.exports = handler