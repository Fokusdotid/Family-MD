let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
let fetch = require('node-fetch')

let handler = async (m, { conn, args, usedPrefix, command, isPrems, isOwner, isROwner}) => {
    if (!args[0]) throw `Link nya mana?`
    let [_, code] = args[0].match(linkRegex) || []
    if (!code) throw 'Link Salah'
    let user = db.data.users[m.sender]

    if (!(isPrems || isOwner || isROwner)) {
        if (user.joincount === 0 ) throw `Kamu sudah melebihi token/limit memasukkan bot ke dalam grup!\nsilahkan membeli premium agar bisa memasukan bot kedalam grup lagi!`
        user.joincount -= 1
        let res = await conn.groupAcceptInvite(code)
        conn.reply(m.chat, 'Joining group...', m).then(async() => {
            var jumlahHari = 86400000 * 0.1
            var now = new Date() * 1
            if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
            else global.db.data.chats[res].expired = now + jumlahHari
                conn.reply(m.chat, `Berhasil join grup ${await conn.getName(res)}\nBot akan keluar secara otomatis setelah: ${msToDate(global.db.data.chats[res].expired - now)}.\nToken joincount mu: ${user.joincount}/1`, m)
                await conn.send2ButtonImg(res, await(await fetch(img)).buffer(), `${conn.user.name} adalah bot whatsapp yang dibangun dengan Nodejs, ${conn.user.name} diundang oleh @${m.sender.split(`@`)[0]}\n\nKetik ${usedPrefix}menu untuk melihat daftar perintah\nBot akan keluar secara otomatis setelah *${msToDate(global.db.data.chats[res].expired - now)}*`.trim(), wm, 'Menu', usedPrefix + `menu`, 'Owner', usedPrefix + `owner`, ftroli, { mentions: [m.sender] })
                for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                    let data = (await conn.onWhatsApp(jid))[0] || {}
                    if (data.exists)
                    m.reply(`@${m.sender.split`@`[0]} telah menambahkan ${conn.user.name} ke ${await conn.getName(res)}\njid: ${res}, bot akan keluar dalam waktu: ${msToDate(global.db.data.chats[res].expired - now)}`.trim(), data.jid, { mentions: [m.sender] })
                }
        })
    } else if ((isOwner || !isPrems || isROwner)) {
        if (!args[1]) throw `Masukkan format yang benar! format: ${usedPrefix}join <link> <jumlah hari>`
        let res = await conn.groupAcceptInvite(code)
        conn.reply(m.chat, 'Oteeeweehhh...', m).then(async() => { 
            var jumlahHari = 86400000 * args[1]
            var now = new Date() * 1
            let b = namabot
            if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
            else global.db.data.chats[res].expired = now + jumlahHari
            let teks = `${namabot} adalah bot whatsapp yang dibangun dengan Nodejs dan menggunakan server yg lumayan kenceng tapi gak kenceng-kenceng banget :'v.\n\n${namabot} diundang oleh @${m.sender.split(`@`)[0]}\n\nKetik ${usedPrefix}menu untuk melihat daftar perintah\nBot akan keluar secara otomatis setelah *${msToDate(global.db.data.chats[res].expired - now)}*`.trim()
            await conn.reply(m.chat, `Berhasil join grup *${await conn.getName(res)}*\nBot akan keluar secara otomatis setelah: ${msToDate(global.db.data.chats[res].expired - now)}`, m)
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != m.sender)) {
                let data = (await conn.onWhatsApp(jid))[0] || {}
                if (data.exists)
                m.reply(`@${m.sender.split`@`[0]} telah menambahkan ${conn.user.name} ke ${await conn.getName(res)} jid: ${res}, bot akan keluar dalam waktu: ${msToDate(global.db.data.chats[res].expired - now)}`.trim(), data.jid, { mentions: [m.sender] })
            }
            await conn.send2ButtonImg(res, await (await fetch(img)).buffer(), teks, wm, 'Menu', usedPrefix + `menu`, 'Owner', usedPrefix + `owner`, ftroli)
        })
    } else if ((isPrems || !isOwner || !isROwner)) {
        if (user.joincount === 0) throw `Kamu sudah melebihi token/limit memasukkan bot ke dalam group!`
        user.joincount -= 1
        let res = await conn.groupAcceptInvite(code)
        conn.reply(m.chat, 'Joining group...', m).then(async() => {
            var jumlahHari = 86400000 * 30
            var now = new Date() * 1
            if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
            else global.db.data.chats[res].expired = now + jumlahHari
                conn.reply(m.chat, `Berhasil join grup ${await conn.getName(res)}\nBot akan keluar secara otomatis setelah: ${msToDate(global.db.data.chats[res].expired - now)}.\nToken joincount mu: ${user.joincount}/1`, m)
                for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                    let data = (await conn.onWhatsApp(jid))[0] || {}
                    if (data.exists)
                    m.reply(`@${m.sender.split`@`[0]} telah menambahkan ${conn.user.name} ke ${await conn.getName(res)} jid: ${res}, bot akan keluar dalam waktu: ${msToDate(global.db.data.chats[res].expired - now)}`.trim(), data.jid, { mentions: [m.sender] })
                }
            await conn.send2ButtonImg(res, await(await fetch(img)).buffer(), `${conn.user.name} adalah bot whatsapp yang dibangun dengan Nodejs, ${conn.user.name} diundang oleh @${m.sender.split(`@`)[0]}\n\nKetik ${usedPrefix}menu untuk melihat daftar perintah\nBot akan keluar secara otomatis setelah *${msToDate(global.db.data.chats[res].expired - now)}*`.trim(), wm, 'Menu', usedPrefix + `menu`, 'Owner', usedPrefix + `owner`, ftroli, { mentions: [m.sender] })
        })
    }
}
handler.help = ['join <link> <time>']
handler.tags = ['owner']
handler.limit = true
handler.command = /^(join)$/i

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
    return days + " Hari " + hours + " Jam " + minutes + " Menit";
    // +minutes+":"+sec;
}
