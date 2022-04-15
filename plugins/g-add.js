const timeout = 60000
let handler = async (m, { conn, text, participants, usedPrefix, command }) => {
	if (!text) throw 'Masukin nomornya bgsd!'
	let chat = db.data.chats[m.chat]
	let time = chat.add + timeout
	if (new Date - chat.add < timeout) throw `_Command ini masih cooldown!_\nsilahkan tunggu selama *${conn.msToDate(time - new Date())}* lagi!`
    let _participants = participants.map(user => user.id)
    let users = (await Promise.all(
        text.split(',')
            .map(v => v.replace(/[^0-9]/g, ''))
            .filter(v => v.length > 4 && v.length < 20 && !_participants.includes(v + '@s.whatsapp.net'))
            .map(async v => [
                v,
                await conn.onWhatsApp(v + '@s.whatsapp.net')
            ])
    )).filter(v => v[1][0]?.exists).map(v => v[0] + '@c.us')
    const response = await conn.groupParticipantsUpdate(m.chat, users, 'add')

    let kode = await conn.groupInviteCode(m.chat)
    let linknya = `https://chat.whatsapp.com/${kode}`
    for (let jid of response) {
        console.log(jid)
        let __user = participants.find(v => v.id === jid)
        if (__user) {
            conn.sendButton(m.chat, `_Berhasil menambahkan @${jid.split`@`[0]}_`, wm, 'menu', usedPrefix + 'menu', m)
        }
        if (!__user) {
            conn.sendButton(m.chat, `_Gagal menambahkan @${jid.split`@`[0]}!_\nMungkin user tersebut baru keluar dari group ini jadi harus masuk melalui *${usedPrefix}link*`, wm, 'link', usedPrefix + 'link', m)
            /*
            let pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => false)
            let jpegThumbnail = pp ? await (await fetch(pp)).buffer() : false
            for (let user of response) {
                let [[jid, {
                    invite_code,
                    invite_code_exp
                }]] = Object.entries(user)
                let teks = `Mengundang @${jid.split('@')[0]} ke group ini dengan kode *${invite_code}*\n\n*Link* : ${linknya}\n\n*Kode* : ${invite_code}\n\n*Expired* : ${conn.msToDate(invite_code_exp - new Date())}`
                m.reply(teks, null, {
                    mentions: await conn.parseMention(teks)
                })
                await conn.sendGroupV4Invite(m.chat, jid, invite_code, invite_code_exp, false, "Invitation to join my WhatsApp group", jpegThumbnail ? {
                    jpegThumbnail
                } : {})
                let logs = `*Console Logs:*\nJid: ${jid}\nInvite Code: ${invite_code}\nExpired: ${invite_code_exp}`
                m.reply(logs, null, {
                    mentions: await conn.parseMention(logs)
                })
            }
            */
        }
    }
    //m.reply('_*Duarrr...' + response.success + '*_\n' + response.fail)
    //m.reply(`Succes add ${response.map(v => '@' + v.split('@')[0])}\n*Log:*\n${response}`, null, { mentions: response })
    let pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => false)
    let jpegThumbnail = pp ? await (await fetch(pp)).buffer() : false
    /*
    for (let user of response.filter(user => Object.values(user)[0].code == undefined)) {
        console.log('ini user\n\n' + user)
         let [[jid, {
             invite_code,
             invite_code_exp
         }]] = Object.entries(user)
         console.log('ini jid nya\n' + jid)
         let teks = `Mengundang @${jid.split('@')[0]} menggunakan invite...`
         m.reply(teks, null, {
         	mentions: await conn.parseMention(text),
             contextInfo: {
                 mentionedJid: await conn.parseMention(teks)
             }
         })
         await conn.sendGroupV4Invite(m.chat, jid, invite_code, invite_code_exp, false, 'Invitation to join my WhatsApp group', jpegThumbnail ? {
             jpegThumbnail
         } : {})
     }
     */
     chat.add = new Date * 1
}

handler.help = ['add', '+'].map(v => v + ' nomor,nomor')
handler.tags = ['group']
handler.command = /^(add|\+|sendlink)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.limit = true

module.exports = handler

