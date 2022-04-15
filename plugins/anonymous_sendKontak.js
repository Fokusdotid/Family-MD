let { Presence } = require('@adiwajshing/baileys')
async function handler(m, { command, usedPrefix, text }) {
	await this.sendPresenceUpdate('composing', m.chat)
	this.anonymous = this.anonymous ? this.anonymous : {}
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
	let room = Object.values(this.anonymous).find(room => room.check(who))
	if (!room) await this.sendButton(m.chat, 'kamu tidak berada di anonymous chat!', 'Mulai Anonymous', usedPrefix + 'start', m)
	let other = room.other(who)
	var name
	if (text) name = text
	else name = this.getName(m.sender)
	var number = who.split('@')[0]
	if (other) this.reply(other, 'Partner mengirimkan kontak kepadamu', m)
	if (other) this.sendContact(other, number, name, m)
}
handler.help = ['sendkontak']
handler.tags = 'anonymous'
handler.command = /^(sendkontak|kirimkontak)$/i
handler.private = true
handler.fail = null

module.exports = handler