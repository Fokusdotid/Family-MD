let handler = async (m, { conn, usedPrefix }) => {
    let member = global.db.data.users[m.sender]
    let healt = member.healt
    let pickaxe = member.pickaxe
    let sword = member.sword
    let armor = member.armor
    let fishingrod = member.fishingrod

    let warn = member.warn

    let pet = member.pet
    let kucing = member.kucing
    let _kucing = member.anakkucing
    let rubah = member.rubah
    let _rubah = member.anakrubah
    let kuda = member.kuda
    let _kuda = member.anakkuda
    let anjing = member.anjing
    let _anjing = member.anakanjing

    let diamond = member.diamond
    let potion = member.potion
    let common = member.common
    let makananpet = member.makananpet
    let iron = member.iron
    let batu = member.batu
    let kayu = member.kayu
    let string = member.string

    let uncommon = member.uncommon
    let mythic = member.mythic
    let legendary = member.legendary
    let level = member.level
    let money = member.money
    let exp = member.exp
    let sampah = member.sampah


    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

    let sortedmoney = Object.entries(global.db.data.users).sort((a, b) => b[1].money - a[1].money)
    let sortedlevel = Object.entries(global.db.data.users).sort((a, b) => b[1].level - a[1].level)
    let sorteddiamond = Object.entries(global.db.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
    let sortedpotion = Object.entries(global.db.data.users).sort((a, b) => b[1].potion - a[1].potion)
    let sortedsampah = Object.entries(global.db.data.users).sort((a, b) => b[1].sampah - a[1].sampah)
    let sortedmakananpet = Object.entries(global.db.data.users).sort((a, b) => b[1].makananpet - a[1].makananpet)
    let sortedbatu = Object.entries(global.db.data.users).sort((a, b) => b[1].batu - a[1].batu)
    let sortediron = Object.entries(global.db.data.users).sort((a, b) => b[1].iron - a[1].iron)
    let sortedkayu = Object.entries(global.db.data.users).sort((a, b) => b[1].kayu - a[1].kayu)
    let sortedstring = Object.entries(global.db.data.users).sort((a, b) => b[1].string - a[1].string)
    let sortedcommon = Object.entries(global.db.data.users).sort((a, b) => b[1].common - a[1].common)
    let sorteduncommon = Object.entries(global.db.data.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
    let sortedmythic = Object.entries(global.db.data.users).sort((a, b) => b[1].mythic - a[1].mythic)
    let sortedlegendary = Object.entries(global.db.data.users).sort((a, b) => b[1].legendary - a[1].legendary)
    let sortedpet = Object.entries(global.db.data.users).sort((a, b) => b[1].pet - a[1].pet)
    let usersmoney = sortedmoney.map(v => v[0])
    let userslevel = sortedlevel.map(v => v[0])
    let usersdiamond = sorteddiamond.map(v => v[0])
    let userspotion = sortedpotion.map(v => v[0])
    let userssampah = sortedsampah.map(v => v[0])
    let usersmakananpet = sortedmakananpet.map(v => v[0])
    let usersbatu = sortedbatu.map(v => v[0])
    let usersiron = sortediron.map(v => v[0])
    let userskayu = sortedkayu.map(v => v[0])
    let usersstring = sortedstring.map(v => v[0])
    let userscommon = sortedcommon.map(v => v[0])
    let usersuncommon = sorteduncommon.map(v => v[0])
    let usersmythic = sortedmythic.map(v => v[0])
    let userslegendary = sortedlegendary.map(v => v[0])
    let userspet = sortedpet.map(v => v[0])

    let str = `
Inventory *${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}*\n
❤️Nyawa: *${healt}*
⛏️Pickaxe: *${pickaxe == 0 ? 'Tidak Punya' : '' || pickaxe == 1 ? 'Level 1' : '' || pickaxe == 2 ? 'Level 2' : '' || pickaxe == 3 ? 'Level 3' : '' || pickaxe == 4 ? 'Level 4' : '' || pickaxe == 5 ? 'Level 5 (MAX)' : ''}*
⚔️Sword: *${sword == 0 ? 'Tidak Punya' : '' || sword == 1 ? 'Leather Sword' : '' || sword == 2 ? 'Iron Sword' : '' || sword == 3 ? 'Gold Sword' : '' || sword == 4 ? 'Diamond Sword' : '' || sword == 5 ? 'Netherite Sword (MAX)' : ''}*
👚Armor: *${armor == 0 ? 'Tidak Punya' : '' || armor == 1 ? 'Leather Armor' : '' || armor == 2 ? 'Iron Armor' : '' || armor == 3 ? 'Gold Armor' : '' || armor == 4 ? 'Diamond Armor' : '' || armor == 5 ? 'Netherite Armor (MAX)' : ''}*
🎣FishingRod: ${fishingrod}

💵Uang: *${money}*
🔱Level: *${level}*
✉️Exp: *${exp}*

*Inventory*
💎Diamond: *${diamond}*
🥤Potion: *${potion}*
🗑️Sampah: *${sampah}*
🍖Makanan Pet: *${makananpet}*
⛓️Iron: *${iron}*
🪨Batu: *${batu}*
🪵Kayu: *${kayu}*
🕸️String: *${string}*
Total inv: *${diamond + potion + sampah + makananpet}* item\n
*Crate*
📦Common: *${common}*
📦Uncommon: *${uncommon}*
📦Mythic: *${mythic}*
🎁Legendary: *${legendary}*
📦Pet: *${pet}*\n
*Pet*
🐎Kuda: *${kuda == 0 ? 'Tidak Punya' : '' || kuda == 1 ? 'Level 1' : '' || kuda == 2 ? 'Level 2' : '' || kuda == 3 ? 'Level 3' : '' || kuda == 4 ? 'Level 4' : '' || kuda == 5 ? 'Level MAX' : ''}*
🦊Rubah: *${rubah == 0 ? 'Tidak Punya' : '' || rubah == 1 ? 'Level 1' : '' || rubah == 2 ? 'Level 2' : '' || rubah == 3 ? 'Level 3' : '' || rubah == 4 ? 'Level 4' : '' || rubah == 5 ? 'Level MAX' : ''}*
🐈Kucing: *${kucing == 0 ? 'Tidak Punya' : '' || kucing == 1 ? 'Level 1' : '' || kucing == 2 ? 'Level 2' : '' || kucing == 3 ? 'Level 3' : '' || kucing == 4 ? 'Level 4' : '' || kucing == 5 ? 'Level MAX' : ''}*
🐶Anjing: *${anjing == 0 ? 'Tidak Punya' : '' || anjing == 1 ? 'Level 1' : '' || anjing == 2 ? 'Level 2' : '' || anjing == 3 ? 'Level 3' : '' || anjing == 4 ? 'Level 4' : '' || anjing == 5 ? 'Level MAX' : ''}*\n\n
*Proges*\n
╭────────────────
│🔱Level *${level}* To Level *${level}*
│⚜️Exp *${exp}* -> *${level * 100}*
╰────────────────
╭────────────────
│🦊Rubah ${rubah == 0 ? 'Tidak Punya' : '' || rubah > 0 && rubah < 5 ? `Level *${rubah}* To level *${rubah + 1}*\n│Exp *${_rubah}* -> *${rubah *100}*` : '' || rubah == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│🐈Kucing ${kucing == 0 ? 'Tidak Punya' : '' || kucing > 0 && kucing < 5 ? `Level *${kucing}* To level *${kucing + 1}*\n│Exp *${_kucing}* -> *${kucing *100}*` : '' || kucing == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│🐎Kuda ${kuda == 0 ? 'Tidak Punya' : '' || kuda > 0 && kuda < 5 ? `Level *${kuda}* To level *${kuda + 1}*\n│Exp *${_kuda}* -> *${kuda *100}*` : '' || kuda == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│🐶Anjing ${anjing == 0 ? 'Tidak Punya' : '' || anjing > 0 && anjing < 5 ? `Level *${anjing}* To level *${anjing + 1}*\n│Exp *${_anjing}* -> *${anjing *100}*` : '' || anjing == 5 ? '*Max Level*' : ''}
╰────────────────\n\n
*achievement*
1.Top level *${userslevel.indexOf(m.sender) + 1}* dari *${userslevel.length}*
2.Top Money *${usersmoney.indexOf(m.sender) + 1}* dari *${usersmoney.length}*
3.Top Diamond *${usersdiamond.indexOf(m.sender) + 1}* dari *${usersdiamond.length}*
4.Top Potion *${userspotion.indexOf(m.sender) + 1}* dari *${userspotion.length}*
5.Top Sampah *${userssampah.indexOf(m.sender) + 1}* dari *${userssampah.length}*
6.Top Makanan Pet *${usersmakananpet.indexOf(m.sender) + 1}* dari *${usersmakananpet.length}*
7.Top Batu *${usersbatu.indexOf(m.sender) + 1}* dari *${usersbatu.length}*
8.Top Iron *${usersiron.indexOf(m.sender) + 1}* dari *${usersiron.length}*
9.Top Kayu *${userskayu.indexOf(m.sender) + 1}* dari *${userskayu.length}*
10.Top String *${usersstring.indexOf(m.sender) + 1}* dari *${usersstring.length}*
11.Top Common *${userscommon.indexOf(m.sender) + 1}* dari *${userscommon.length}*
13.Top Uncommon *${usersuncommon.indexOf(m.sender) + 1}* dari *${usersuncommon.length}*
14.Top Mythic *${usersmythic.indexOf(m.sender) + 1}* dari *${usersmythic.length}*
15.Top Legendary *${userslegendary.indexOf(m.sender) + 1}* dari *${userslegendary.length}*
16.Top Pet Crate *${userspet.indexOf(m.sender) + 1}* dari *${userspet.length}*
\n${readMore}\n
Warn: *${warn}*
Banned: *No*
`.trim()
    conn.reply(m.chat, str, m)
}
handler.help = ['inventory', 'inv']
handler.tags = ['rpg']
handler.command = /^(inv(entory)?|bal|level(ing)?|money|e?xp)$/i
handler.register = false
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
