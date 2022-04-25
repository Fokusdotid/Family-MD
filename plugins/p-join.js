let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix }) => {
    if (!args[0]) throw 'uhm.. linknya mana?'
    let [_, code] = args[0].match(linkRegex) || []
    if (!code) throw 'Link Salah'
    let user = global.db.data.users[m.sender]
    let res = await conn.groupAcceptInvite(code)
    if (!isPrems) {
        if (user.joincount === 0) throw `Kamu sudah melebihi token/limit memasukkan bot ke dalam group!`
        user.joincount -= 1
        let res = await conn.groupAcceptInvite(code)
        conn.reply(m.chat, 'Joining group...', m).then(async() => {
            var jumlahHari = 86400000 * 0.1
            var now = new Date() * 1
            if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
            else global.db.data.chats[res].expired = now + jumlahHari
                conn.reply(m.chat, `Berhasil join grup ${await conn.getName(res)}\nBot akan keluar secara otomatis setelah: ${conn.msToDate(global.db.data.chats[res].expired - now)}.\nToken joincount mu: ${user.joincount}/1`, m)
                conn.reply(global.owner[0] + '@s.whatsapp.net', `@${m.sender.split`@`[0]} telah menambahkan ${conn.user.name} ke grub ${conn.getName(res)}, bot akan keluar dalam waktu: ${conn.msToDate(global.db.data.chats[res].expired - now)}`, ftroli, { mentions: [m.sender] })
                await conn.send2ButtonImg(res, await(await fetch(img)).buffer(), `${conn.user.name} adalah bot whatsapp yang dibangun dengan Nodejs, ${conn.user.name} diundang oleh @${m.sender.split(`@`)[0]}\n\nKetik ${usedPrefix}menu untuk melihat daftar perintah\nBot akan keluar secara otomatis setelah ${conn.msToDate(global.db.data.chats[res].expired - now)}`.trim(), wm, 'Menu', `.menu`, 'Owner', `.owner`, m, { mentions: [m.sender] })
        })
    } else if (isPrems) {
        if (user.joincount === 0) throw `Kamu sudah melebihi token/limit memasukkan bot ke dalam group!`
        user.joincount -= 1
        let res = await conn.groupAcceptInvite(code)
        conn.reply(m.chat, 'Joining group...', m).then(async() => {
            var jumlahHari = 86400000 * 30
            var now = new Date() * 1
            if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
            else global.db.data.chats[res].expired = now + jumlahHari
                conn.reply(m.chat, `Berhasil join grup ${await conn.getName(res)}\nBot akan keluar secara otomatis setelah: ${conn.msToDate(global.db.data.chats[res].expired - now)}.\nToken joincount mu: ${user.joincount}/1`, m)
                conn.reply(global.owner[0] + '@s.whatsapp.net', `@${m.sender.split`@`[0]} telah menambahkan ${conn.user.name} ke grub ${conn.getName(res)}, bot akan keluar dalam waktu: ${conn.msToDate(global.db.data.chats[res].expired - now)}`, ftroli, { mentions: [m.sender] })
                await conn.send2ButtonImg(res, await(await fetch(img)).buffer(), `${conn.user.name} adalah bot whatsapp yang dibangun dengan Nodejs, ${conn.user.name} diundang oleh @${m.sender.split(`@`)[0]}\n\nKetik ${usedPrefix}menu untuk melihat daftar perintah\nBot akan keluar secara otomatis setelah *${conn.msToDate(global.db.data.chats[res].expired - now)}*`.trim(), wm, 'Menu', `.menu`, 'Owner', `.owner`, m, { mentions: [m.sender] })
        })
    } else if (isOwner) {
        if (!args[1]) throw `Masukkan format yang benar! format: ${usedPrefix}join <link> <jumlah hari>`
        let res = await conn.groupAcceptInvite(code)
        conn.reply(m.chat, 'Oteeeweehhh join bang Owner ganteng...', m).then(async() => { 
            var jumlahHari = 86400000 * args[1]
            var now = new Date() * 1
            let b = namabot
            if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
            else global.db.data.chats[res].expired = now + jumlahHari
            let teks = `${b} adalah bot whatsapp yang dibangun dengan Nodejs dan menggunakan server yg lumayan kenceng tapi gak kenceng-kenceng banget :'v.\n\n${b} diundang oleh ${await conn.getName(m.sender)}\n\nKetik ${usedPrefix}menu untuk melihat daftar perintah\nBot akan keluar secara otomatis setelah *${conn.msToDate(global.db.data.chats[res].expired - now)}*`.trim()
            await conn.reply(m.chat, `Berhasil join grup ${await conn.getName(res)}\nBot akan keluar secara otomatis setelah: *${conn.msToDate(global.db.data.chats[res].expired - now)}*`, m)
            await conn.send2TemplateButtonFakeImg(res, await (await fetch(img)).buffer(), teks, wm, 'Menu', `.menu`, 'Owner', `.owner`, m)
        })
    }
}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['premium']

handler.command = /^join$/i

handler.premium = false
handler.limit = true
module.exports = handler
