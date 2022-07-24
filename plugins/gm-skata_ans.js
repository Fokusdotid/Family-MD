const axios = require('axios')
const delay = ms => new Promise(res => setTimeout(res, ms))
const { newMessagesDB } = require("@adiwajshing/baileys")
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let handler = m => m

handler.before = async function (m) {
	this.skata = this.skata ? this.skata : {}
	let id = m.chat
	if (!(id in this.skata)) return !0
	let room = this.skata[id]
	let users = db.data.users
	let _kata = await genKata()
	let member = room.player
	let bonus = rwd(500, 600)
	let lose_skata
	let win_skata
	function mmr(apa = '', jid = '') {

		let user = db.data.users[jid]
		if (apa == 'win') {
			if (user.skata > 5000) win_skata = rwd(5, 9)
			else if (user.skata > 3000) win_skata = rwd(5, 10)
			else if (user.skata > 1500) win_skata = rwd(10, 15)
			else if (user.skata > 1000) win_skata = rwd(15, 20)
			else if (user.skata > 500) win_skata = rwd(20, 30)
			else win_skata = rwd(30, 50)
		} else {
			if (user.skata > 8000) lose_skata = rwd(35, 50)
			else if (user.skata > 5000) lose_skata = rwd(25, 30)
			else if (user.skata > 3000) lose_skata = rwd(20, 25)
			else if (user.skata > 1500) lose_skata = rwd(15, 19)
			else if (user.skata > 1000) lose_skata = rwd(10, 14)
			else if (user.skata > 500) lose_skata = rwd(5, 9)
			else lose_skata = rwd(1, 5)
		}
		if (apa == 'win') return win_skata
		else return lose_skata
	}
	let who
	if (room.new) {
		if (!/nextkata/i.test(m.text)) return !0
		room.new = false
		room.killer = false
		room.kata = _kata
		room.chat = await this.reply(m.chat, `giliran @${room.curr.split(`@`)[0]} untuk menjawab.\nMulai : *${(_kata).toUpperCase()}*\n*${room.filter(_kata).toUpperCase()}... ?*\n\n*balas pesan ini untuk menjawab!*\nXP terkumpul: ${room.win_point}\nTersisa: \n${readaMore + room.player.map((v, i) => i + 1 + '. ' + users[v].name).join('\n')}`, m)
	}
	if (room.diam) {
		if (!/nextkata/i.test(m.text)) return !0
		room.diam = false
		room.waktu = setTimeout(() => {
			lose_skata = mmr('lose', room.curr)
			win_skata = (room.killer ? mmr('win', room.killer) : null)
			this.reply(m.chat, `\n *waktu untuk menjawab soal telah habis*\n@${room.curr.split`@`[0]} telah tereliminasi -${lose_skata} MMR${room.killer ? `\n@${room.killer.split`@`[0]} +${win_skata} MMR` : ''}`, room.chat)
			room.eliminated.push(room.curr)
			if (room.killer) {
				users[room.killer].skata += win_skata
				users[room.curr].skata -= lose_skata
			}
			let index = member.indexOf(room.curr)
			member.splice(index, 1)
			if (index == member.length) room.curr = member[0]
			else room.curr = member[index]
			if (member.length == 1 && room.status == 'play') {
				this.sendButton(m.chat, `selamat buat @${member[0].split`@`[0]} karena berhasil bertahan!\n\n *+${room.win_point}XP*`, wm, 'sambung kata', '.skata', room.chat)
				users[member[0]].exp += room.win_point
				delete this.skata[id]
				return !0
			} else {
				room.diam = true
				room.new = true
				who = room.curr
				this.emit('chat-update', {
					jid: who,
					hasNewMessage: true,
					messages: newMessagesDB([this.cMod(m.chat, m, 'nextkata', who)])
				})
			}
		}, 30000)
	}
	if (room.curr == m.sender) {
		if (/nyerah/i.test(m.text)) {
			lose_skata = mmr('lose', room.curr)
			win_skata = (room.killer ? mmr('win', room.killer) : null)
			clearTimeout(room.waktu)
			this.reply(m.chat, `@${room.curr.split`@`[0]} telah tereliminasi -${lose_skata} MMR${room.killer ? `\n@${room.killer.split`@`[0]} +${win_skata} MMR` : ''}`, room.chat)
			room.eliminated.push(room.curr)
			if (room.killer) {
				users[room.killer].skata += win_skata
				users[room.curr].skata -= lose_skata
			}
			let index = member.indexOf(room.curr)
			member.splice(index, 1)
			if (index == (member.length)) room.curr = member[0]
			else room.curr = member[index]
			if (member.length == 1 && room.status == 'play') {
				this.sendButton(m.chat, `selamat buat @${member[0].split`@`[0]} karena berhasil bertahan!\n\n *+${room.win_point}XP*\n*+${win_skata} MMR*`, wm, 'sambung kata', '.skata', room.chat)
				users[member[0]].skata += win_skata
				users[member[0]].exp += room.win_point
				delete this.skata[id]
				return !0
			}
			room.new = true
			room.diam = true
			who = room.curr
			this.emit('chat-update', {
				jid: who,
				hasNewMessage: true,
				messages: newMessagesDB([this.cMod(m.chat, m, 'nextkata', who)])
			})
		}
		if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/(Mulai|Tersisa) ?:/i.test(m.quoted.text)) return !0
		if (m.quoted.id == room.chat.id) {
			let answerF = (m.text.toLowerCase().split` `[0]).trim().replace(/[^a-z]/gi, '')
			let res = await axios.get(API('males', '/ceksambungkata', { kata: m.text.toLowerCase().split(` `)[0] })).catch(err => { return !0 })
			// if (!res.ok) throw `Error: ` + res.statusText;
			let checkF = await res.data
			if (!answerF.startsWith(room.filter(room.kata))) {
				return m.reply(`👎🏻 *Salah!*\nJawaban harus dimulai dari kata *${room.filter(room.kata)}*`)
			} else if (!checkF.status) {
				return m.reply(`👎🏻 *Salah!*\nKata *${m.text.toUpperCase()}* tidak valid!`)
			} else if ((room.filter(room.kata)) == answerF) {
				return m.reply(`👎🏻 *Salah!*\nJawabanmu sama dengan soal, silahkan cari kata lain!`)
			} else if (room.basi.includes(answerF)) {
				return m.reply(`👎🏻 *Salah!*\nKata *${m.text.toUpperCase()}* sudah pernah digunakan!`)
			}
			clearTimeout(room.waktu)
			room.killer = room.curr
			users[m.sender].exp += bonus
			let waktunya = member.indexOf(room.curr)
			room.curr = member[waktunya + 1]
			if (waktunya + 1 >= member.length) room.curr = member[0]
			room.basi.push(answerF)
			room.win_point += 200
			room.chat = await this.reply(m.chat, `*👍 +${bonus}XP*\nGiliran @${room.curr.split`@`[0]}\n*${room.filter(answerF).toUpperCase()}... ?*\n*balas pesan ini untuk menjawab!*\nketik *nyerah* untuk menyerah\nXP terkumpul: ${room.win_point}\nTersisa: \n${readMore + room.player.map((v, i) => i + 1 + '. ' + users[v].name).join('\n')}`, m)
			room.diam = true
			room.kata = answerF
			who = room.curr
			this.emit('chat-update', {
				jid: who,
				hasNewMessage: true,
				messages: newMessagesDB([this.cMod(m.chat, m, 'nextkata', who)])
			})
			return !0
		}
	} else if (room.curr !== m.sender) {
		if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/(Mulai|Tersisa) ?:/i.test(m.quoted.text)) return !0
		if (m.quoted.id == room.chat.id) {
			if (room.eliminated.includes(m.sender)) m.reply(`\n   _Hei, kamu sudah tereliminasi, tunggu hingga game ini selesai_\n   *Nice Try, next game*`)
			else if (room.player.includes(m.sender)) {
				m.reply(`\n   _Bukan giliranmu.._\n`)
			} else m.reply(`\n   _*Kamu tidak dapat menjawab soal itu*_\n   Karena kamu tidak bergabung dalam game ini\n\n   Tunggu hingga game ini berakhir, kemudian ikutlah bermain!`)
		} else m.reply(`\n   Soal itu sudah lewat\n`)
	}
	return !0
}

module.exports = handler

async function genKata() {
	let res = await axios.get(global.API('males', '/sambungkata')).catch(err => { return !0 })
	let result = res.data.kata
	while (result.length < 3) {
		res = await axios.get(global.API('males', '/sambungkata')).catch(err => { return !0 })
		result = res.data.kata
	}
	return result
}

function rwd(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1)) + min
}