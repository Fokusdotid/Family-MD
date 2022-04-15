let handler = async (m, { conn, usedPrefix, participants, groupMetadata, text }) => {
    const getGroupAdmins = (participants) => {
    var admins = []
    for (let i of participants) {
        i.admin === "admin" ? admins.push(i.id) : ''
        i.admin === "superadmin" ? admins.push(i.id) : ''
    }
    return admins
    }
    let pp = './src/avatar_contact.png'
    try {
        pp = await conn.profilePictureUrl(m.chat, 'image')
    } catch (e) {
    } finally {
        let { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, expired, descUpdate, stiker, antispam, antitroli, antivirtex, antiBadword, simi, closeGroup } = global.db.data.chats[m.chat]
        const groupAdmins = getGroupAdmins(participants)
        let listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.split`@`[0]}`).join('\n')

        if (text) return m.reply(msToDate(expired - new Date() * 1))

        let grup = await conn.groupMetadata(m.chat)
        let caption = `*Informasi Grup*\n
*ID:* 
${await groupMetadata.id}

*Nama:* 
${await groupMetadata.subject}

*Deskripsi:* 
${await groupMetadata.desc}

*Total Anggota:*
${participants.length} Anggota

*Pembuat Grup:* 
@${m.chat.split`-`[0]}

*Admin Grup:*
${listAdmin}

*Pengaturan Bot:*
${antiLink ? '✅' : '❌'} Anti Link
${global.db.data.chats[m.chat].delete ? '❌' : '✅'} Anti Delete
${isBanned ? '✅' : '❌'} Banned
${descUpdate ? '✅' : '❌'} Deskprisi
${detect ? '✅' : '❌'} Detect
${stiker ? '✅' : '❌'} Stiker
${welcome ? '✅' : '❌'} Welcome
${antispam ? '✅' : '❌'} Anti Spam
${antiBadword ? '❌' : '✅'} Anti Badword
${antitroli ? '✅' : '❌'} Anti Troli
${antivirtex ? '✅' : '❌'} Anti Virtex
${closeGroup ? '✅' : '❌'} Auto Tutup Grup
*Pengaturan Pesan Bot:*
Welcome: ${sWelcome}
Bye: ${sBye}
Promote: ${sPromote}
Demote: ${sDemote}

*Tersisa:*
${msToDate(expired - new Date() * 1)}
`.trim()
        let mentionedJid = groupAdmins.concat([`${m.chat.split`-`[0]}@s.whatsapp.net`])
        conn.sendButtonImg(m.key.remoteJid, pp, caption, wm, 'Menu', usedPrefix + 'menu', m, { thumbnail: pp , mentions: mentionedJid })
    }
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(gro?upinfo|info(gro?up|gc))$/i

handler.group = true

module.exports = handler

function msToDate(ms) {
    temp = ms
    days = Math.floor(ms / (24 * 60 * 60 * 1000));
    daysms = ms % (24 * 60 * 60 * 1000);
    hours = Math.floor((daysms) / (60 * 60 * 1000));
    hoursms = ms % (60 * 60 * 1000);
    minutes = Math.floor((hoursms) / (60 * 1000));
    minutesms = ms % (60 * 1000);
    sec = Math.floor((minutesms) / (1000));
    return days + " hari " + hours + " jam " + minutes + " menit";
    // +minutes+":"+sec;
}