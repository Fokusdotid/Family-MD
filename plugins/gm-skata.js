/**
 *
 *  WELCOME TO INDONESIAN 
 *
 * where scripts are traded, 
 * and acknowledges as if the script is his
 * 
 * 
 * Credits:
 *  Syahrularranger (maker)
 *  FokusDotId (Remake)
 *
 */

const axios = require('axios')
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
const game = `┌「 *Kata Bersambung* 」
├ Sambung Kata adalah
│ permainan yang dimana setiap
│ pemainnya diharuskan membuat
│ kata dari akhir kata yang
│ berasal dari kata sebelumnya.
└────`.trim()
const rules = `
┌「 *PERATURAN* 」
├ Jawaban merupakan kata dasar
│ yaitu tidak mengandung 
│ spasi dan imbuhan (me-, -an, dll).
├ Pemain yang bertahan akan
│ menang dan mendapatkan
│ 500XP × Jumlah Pemain.
├ ketik *.skata*
│ untuk memulai
├ ketik *nyerah*
│ untuk menyerah
└────`.trim()
let poin = 500
let handler = async (m, { conn, usedPrefix, command, text, isPrems, isROwner }) => {
	let ikut = conn.pickRandom(['ikut', 'ikutan ah', 'ngikut cuy', 'melu cuk', 'melu ah', 'gabung dong', 'ikut dong gabut nih'])
	let isDebug = /debug/i.test(command) && isROwner
	conn.skata = conn.skata ? conn.skata : {}
	let id = m.chat
	let kata = await genKata()
	let room_all = Object.values(conn.skata).find(room => room.id !== id && room.player.includes(m.sender))
	if (room_all) throw 'kamu sedang bermain sambung kata di chat lain, silahkan selesaikan game kamu terlebih dahulu.';
	
	if (id in conn.skata) {
		let room = conn.skata[id]
		let member = room.player;
		if (room.status == 'play') {
			if (!room.waktu._destroyed && !room.diam) return conn.sendButton(m.chat, `hii @${m.sender.split('@')[0]}, masih ada game berlangsung di chat ini.\nsilahkan menunggu sampai game berakhir dan ikut bergabung untuk bermain game sambung kata.`, wm, 'menu', usedPrefix + 'menu', room.chat).catch(e => { return !1 }) // ketika baileys error;
			delete conn.skata[id]
		}
		if (text == 'start' && room.status == 'wait') {
			if (!member.includes(m.sender)) return conn.sendButton(m.chat, `\n kamu belum ikut\n`, wm, ikut, usedPrefix + command, m)
			if (member.length < 2) throw 'mininal 2 orang untuk bermain game kata bersambung!'
			room.curr = member[0]
			room.status = 'play'
			room.chat = await conn.reply(m.chat, `saatnya @${member[0].split('@')[0]}\nMulai: *${(room.kata).toUpperCase()}*\n*${room.filter(room.kata).toUpperCase()}...?*\n\n*balas pesan ini untuk menjawab!*\nketik *nyerah* untuk menyerah\nTotal Pemain: ${member.length} Player`, m)
			room.win_point = 100
			for (let i of room.player) {
				let user = db.data.users[i]
				if(!('skata' in user)) user.skata = 0
			}
			clearTimeout(room.waktu_list)
			room.waktu = setTimeout(() => {
				conn.reply(m.chat, `\n   *waktu untuk menjawab telah habis!*\n@${room.cur.split('@')[0]} telah tereleminasi`, room.chat).then(_ => {
					room.eliminated.push(room.curr)
					let index = member.indexOf(room.curr)
					member.splice(index, 1)
					room.curr = member[0]
					if (room.player.length == 1 && room.status == 'play') {
						db.data.users[member[0]].exp += room.win_point
						conn.sendButton(m.chat, `\n  @${member[0].split('@')[0]} Menang!\n *+${room.win_point} XP*`, wm, 'mulai lagi', usedPrefix + 'skata', room.chat).then(_ => {
							delete conn.skata[id]
							return !0
						});
					}
					room.diam = true;
					room.new = true;
					let who = room.curr
					conn.preSudo('nextkata', who, m).then(async _ => {
						conn.ev.emit('message.upsert', _)
					})
				})
			}, 45000)
		} else if (room.status == 'wait') {
			if (member.includes(m.sender)) throw 'kamu sudah ikut di list';
			member.push(m.sender)
			clearTimeout(room.waktu_list)
			room.waktu_list = setTimeout(() => {
				conn.reply(m.chat, `\n waktu telah berakhir dan sambung kata tidak dimulai atau dibatalkan!`, room.chat).then(() => { delete conn.skata[id] })
			}, 120000)
			let caption = `
┌「 *Daftar Player* 」
${member.map((v, i) => `├ ${i + 1}. @${v.split('@')[0]}`).join('\n')}
└────

*Note:*
Sambung kata akan dimainkan sesuai urutan Player *(bergiliran)*, dan hanya bisa dimainkan oleh Player yang terdaftar.

Ketik *${usedPrefix + command}* untuk bergabung
*${usedPrefix + command} start* untuk memulai permainan.
`.trim()
			room.chat = await conn.send2Button(m.chat, caption, wm, ikut, usedPrefix + 'skata', 'mulai', '.skata start', m)
		}
	} else {
		conn.skata[id] = {
			id,
			player: isDebug ? owner.map(v => v + '@s.whatsapp.net') : [],
			status: 'wait',
			eliminated: [],
			basi: [],
			diam: false,
			win_point: 0,
			curr: ' ',
			kata,
			filter,
			genKata,
			chat: conn.reply(m.chat, game + "\n" + readMore + rules, m),
			waktu: false
		}
	}
}
handler.help = ['sambungkata']
handler.tags = ['game']
handler.command = /^s(ambung)?kata(debug)?$/i
handler.group = true

module.exports = handler

async function genKata() {
	let res = await axios.get(global.API('males', '/sambungkata')).catch(err => { return !0 })
	let result = res.data.kata
	while (result.length < 3 || result.length > 7) {
		res = await axios.get(global.API('males', '/sambungkata')).catch(err => { return !0 })
		result = res.data.kata
	}
	return result
}

function filter(text) {
	let mati = ["q", "w", "r", "t", "y", "p", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
	let misah
	if (text.length < 3) return text
	// alarm
	if (/([qwrtypsdfghjklzxcvbnm][qwrtypsdfhjklzxcvbnm])$/.test(text)) {
		let mid = /([qwrtypsdfhjklzxcvbnm])$/.exec(text)[0]
		return mid
	}

	// mati + voc + ng {kijang, pisang, dalang, dll}

	if (/([qwrtypsdfghjklzxcvbnm][aiueo]ng)$/.test(text)) {
		let mid = /([qwrtypsdfghjklzxcvbnm][aiueo]ng)$/.exec(text)[0]
		return mid
	}
	// voc2x + mati(optional) {portofolio, manusia, tiup, dll}
	else if (/([aiueo][aiueo]([qwrtypsdfghjklzxcvbnm]|ng)?)$/i.test(text)) {
		if (/(ng)$/i.test(text)) return text.substring(text.length - 3) // ex tiang, riang, siang
		else if (/([qwrtypsdfghjklzxcvbnm])$/i.test(text)) return text.substring(text.length - 2)
		else return text.substring(text.length - 1)
	}
	// ng/ny + voc + mati { sinyal, langit, banyak, dll}
	else if (/n[gy]([aiueo]([qwrtypsdfghjklzxcvbnm])?)$/.test(text)) {
		let nyenye = /n[gy]/i.exec(text)[0]
		misah = text.split(nyenye)
		return nyenye + misah[misah.length - 1]
	}
	// mati { kuku, batu, kamu, aku, saya, dll}
	else {
		let res = Array.from(text).filter(v => mati.includes(v))
		let resu = res[res.length - 1]
		for (let huruf of mati) {
			if (text.endsWith(huruf)) {
				resu = res[res.length - 2]
			}
		}
		misah = text.split(resu)
		if (text.endsWith(resu)) {
			return resu + misah[misah.length - 2] + resu
		}
		return resu + misah[misah.length - 1]
	}
}