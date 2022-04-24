const limit = 2000
const potion = 500
const Spotion = 150 
const Bdiamond = 900
const Sdiamond = 750
const Bcommon = 200
const Scommon = 20
const Suncommon = 100
const Buncommon = 600
const Bmythic = 2000 
const Smythic = 500
const Blegendary = 7500 
const Slegendary = 3000
const Bsampah = 10
const Ssampah = 2
const Bkayu = 500
const Skayu = 200
const Bbatu = 500
const Sbatu = 200
const Bstring = 500
const Sstring = 200
const Biron = 800
const Siron = 500

let handler  = async (m, { conn, command, args, usedPrefix }) => {
    const _armor = global.db.data.users[m.sender].armor
    const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kchat = `
${usedPrefix}shop <Buy|sell> <item> <jumlah>\n
Contoh penggunaan: *${usedPrefix}shop buy potion 1*\n\n
List Barang:\n\n
*♻️Barang                       |💲Harga beli*\n` +
'```' + `
${rpg.emoticon('limit')}Limit          :  ${limit}
${rpg.emoticon('potion')}Potion         :  ${potion}
${rpg.emoticon('diamond')}Diamond        :  ${Bdiamond}
${rpg.emoticon('common')}Common         :  ${Bcommon}
${rpg.emoticon('uncommon')}Uncommon       :  ${Buncommon}
${rpg.emoticon('mythic')}Mythic         :  ${Bmythic}
${rpg.emoticon('legendary')}Legendary      :  ${Blegendary}
${rpg.emoticon('sampah')}Sampah         :  ${Bsampah}
${rpg.emoticon('armor')}Armor          :  ${armor}
${rpg.emoticon('kayu')}Kayu           :  ${Bkayu}
${rpg.emoticon('batu')}Batu           :  ${Bbatu}
${rpg.emoticon('string')}String         :  ${Bstring}
${rpg.emoticon('iron')}Iron           :  ${Biron}`.trim() +
'```'
+ '\n\n*♻️Barang                       | 💲Harga Jual*\n' +
'```' + `
${rpg.emoticon('potion')}Potion         :  ${Spotion}
${rpg.emoticon('diamond')}Diamond        :  ${Sdiamond}
${rpg.emoticon('common')}Common         :  ${Scommon}
${rpg.emoticon('uncommon')}Uncommon       :  ${Suncommon}
${rpg.emoticon('mythic')}Mythic         :  ${Smythic}
${rpg.emoticon('legendary')}Legendary      :  ${Slegendary}
${rpg.emoticon('sampah')}Sampah         :  ${Ssampah}
${rpg.emoticon('kayu')}Kayu           :  ${Skayu}
${rpg.emoticon('batu')}Batu           :  ${Sbatu}
${rpg.emoticon('string')}String         :  ${Sstring}
${rpg.emoticon('iron')}Iron           :  ${Siron}\n\n
`.trim() + '```'
    try {
        if (/shop|toko/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            const sampah = global.db.data.users[m.sender].sampah
            switch (jualbeli) {
            case 'buy':
                switch (_type) {
                    case 'limit':
                            if (global.db.data.users[m.sender].money >= limit * count) {
                                global.db.data.users[m.sender].money -= limit * count
                                global.db.data.users[m.sender].limit += count * 1
                                conn.sendButton(m.chat, `Succes membeli ${count} ${rpg.emoticon('limit')}Limit dengan harga ${limit * count} ${rpg.emoticon('money')}money`, wm, 'inventory', usedPrefix + 'inv', m)
                            } else conn.send2Button(m.chat, `Uang anda tidak cukup untuk membeli ${count} ${rpg.emoticon('limit')}Limit dengan harga ${limit * count} ${rpg.emoticon('money')}money`, wm, 'inventory', usedPrefix + 'inv', 'claim', usedPrefix + 'claim', m)
                        break
                    case 'potion':
                            if (global.db.data.users[m.sender].money >= potion * count) {
                                global.db.data.users[m.sender].money -= potion * count
                                global.db.data.users[m.sender].potion += count * 1
                                conn.sendButton(m.chat, `Succes membeli ${count} ${rpg.emoticon('potion')}Potion dengan harga ${potion * count} ${rpg.emoticon('money')}money\n\nGunakan ${rpg.emoticon('potion')}Potion dengan ketik: *${usedPrefix}use potion <jumlah>*`, wm, `Gunakan ${rpg.emoticon('potion')}Potion`, usedPrefix + 'heal', m)
                            } else conn.send2Button(m.chat, `Uang anda tidak cukup untuk membeli ${count} ${rpg.emoticon('potion')}Potion dengan harga ${potion * count} ${rpg.emoticon('money')}money`, wm, 'inventory', usedPrefix + 'inv', 'claim', usedPrefix + 'claim', m)
                        break
                    case 'kayu':
                            if (global.db.data.users[m.sender].money >= Bkayu * count) {
                                global.db.data.users[m.sender].kayu += count * 1
                                global.db.data.users[m.sender].money -= Bkayu * count
                                conn.sendButton(m.chat, `Succes membeli ${count} ${rpg.emoticon('kayu')}Kayu dengan harga ${Bkayu * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', m)
                            } else conn.send2Button(m.chat, `Uang anda tidak cukup untuk membeli ${count} ${rpg.emoticon('kayu')}Kayu dengan harga ${Bkayu * count} ${rpg.emoticon('money')}money`, wm, 'inventory', usedPrefix + 'inv', 'claim', usedPrefix + 'claim', m)
                        break
                    case 'batu':
                            if (global.db.data.users[m.sender].money >= Bbatu * count) {
                                global.db.data.users[m.sender].batu += count * 1
                                global.db.data.users[m.sender].money -= Bbatu * count
                                conn.sendButton(m.chat, `Succes membeli ${count} ${rpg.emoticon('batu')}Batu dengan harga ${Bbatu * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', m)
                            } else conn.send2Button(m.chat, `Uang anda tidak cukup untuk membeli ${count} ${rpg.emoticon('batu')}Batu dengan harga ${Bbatu * count} ${rpg.emoticon('money')}money`, wm, 'inventory', usedPrefix + 'inv', 'claim', usedPrefix + 'claim', m)
                        break    
                    case 'string':
                            if (global.db.data.users[m.sender].money >= Bstring * count) {
                                global.db.data.users[m.sender].string += count * 1
                                global.db.data.users[m.sender].money -= Bstring * count
                                conn.sendButton(m.chat, `Succes membeli ${count} ${rpg.emoticon('string')}String dengan harga ${Bstring * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', m)
                            } else conn.send2Button(m.chat, `Uang anda tidak cukup untuk membeli ${count} ${rpg.emoticon('string')}String dengan harga ${Bstring * count} ${rpg.emoticon('money')}money`, wm, 'inventory', usedPrefix + 'inv', 'claim', usedPrefix + 'claim', m)
                        break
                    case 'iron':
                            if (global.db.data.users[m.sender].money >= Biron * count) {
                                global.db.data.users[m.sender].iron += count * 1
                                global.db.data.users[m.sender].money -= Biron * count
                                conn.sendButton(m.chat, `Succes membeli ${count} ${rpg.emoticon('iron')}Iron dengan harga ${Biron * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', m)
                            } else conn.send2Button(m.chat, `Uang anda tidak cukup untuk membeli ${count} ${rpg.emoticon('iron')}Iron dengan harga ${Biron * count} ${rpg.emoticon('money')}money`, wm, 'inventory', usedPrefix + 'inv', 'claim', usedPrefix + 'claim', m)
                        break
                    case 'diamond':
                            if (global.db.data.users[m.sender].money >= Bdiamond * count) {
                                global.db.data.users[m.sender].diamond += count * 1
                                global.db.data.users[m.sender].money -= Bdiamond * count
                                conn.sendButton(m.chat, `Succes membeli ${count} ${rpg.emoticon('diamond')}Diamond dengan harga ${Bdiamond * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', m)
                            } else conn.send2Button(m.chat, `Uang anda tidak cukup untuk membeli ${count} ${rpg.emoticon('diamond')}Diamond dengan harga ${Bdiamond * count} ${rpg.emoticon('money')}money`, wm, 'inventory', usedPrefix + 'inv', 'claim', usedPrefix + 'claim', m)
                        break
                    case 'common':
                            if (global.db.data.users[m.sender].money >= Bcommon * count) {
                                global.db.data.users[m.sender].common += count * 1
                                global.db.data.users[m.sender].money -= Bcommon * count
                                conn.send2Button(m.chat, `Succes membeli ${count} ${rpg.emoticon('common')}Common dengan harga ${Bbatu * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', 'buka common crate', usedPrefix + 'open common', m)
                            } else conn.send2Button(m.chat, `Uang anda tidak cukup untuk membeli ${count} ${rpg.emoticon('common')}Common Crate dengan harga ${Bcommon * count} ${rpg.emoticon('money')}money\n\nBuka crate dengan ketik: *${usedPrefix}open common*`, wm, 'inventory', usedPrefix + 'inv', 'buka common crate', usedPrefix + 'open common', m)
                        break
                    case 'uncommon':
                            if (global.db.data.users[m.sender].money >= Buncommon * count) {
                                global.db.data.users[m.sender].uncommon += count * 1
                                global.db.data.users[m.sender].money -= Buncommon * count
                                conn.send2Button(m.chat, `Succes membeli ${count} ${rpg.emoticon('uncommon')}Uncommon dengan harga ${Buncommon * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', 'buka uncommon crate', usedPrefix + 'open uncommon', m)
                            } else conn.send2Button(m.chat, `Uang anda tidak cukup untuk membeli ${count} ${rpg.emoticon('uncommon')}Uncommon crate dengan harga ${Buncommon * count} ${rpg.emoticon('money')}money\n\nBuka crate dengan ketik: *${usedPrefix}open uncommon*`, wm, 'inventory', usedPrefix + 'inv', 'buka uncommon crate', usedPrefix + 'open uncommon', m)
                        break
                    case 'mythic':
                            if (global.db.data.users[m.sender].money >= Bmythic * count) {
                                    global.db.data.users[m.sender].mythic += count * 1
                                global.db.data.users[m.sender].money -= Bmythic * count
                                conn.send2Button(m.chat, `Succes membeli ${count} ${rpg.emoticon('mythic')}Mythic dengan harga ${Bmythic * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', 'buka mythic crate', usedPrefix + 'open mythic', m)
                            } else conn.send2Button(m.chat, `Uang anda tidak cukup untuk membeli ${count} ${rpg.emoticon('mythic')}Mythic crate dengan harga ${Bmythic * count} ${rpg.emoticon('money')}money\n\nBuka crate dengan ketik: *${usedPrefix}open mythic*`, wm, 'inventory', usedPrefix + 'inv', 'buka mythic crate', usedPrefix + 'open mythic', m)
                        break
                    case 'legendary':
                            if (global.db.data.users[m.sender].money >= Blegendary * count) {
                                global.db.data.users[m.sender].legendary += count * 1
                                global.db.data.users[m.sender].money -= Blegendary * count
                                conn.send2Button(m.chat, `Succes membeli ${count} ${rpg.emoticon('legendary')}Legendary dengan harga ${Blegendary * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', 'buka legendary crate', usedPrefix + 'open legendary', m)
                            } else conn.send2Button(m.chat, `Uang anda tidak cukup untuk membeli ${count} ${rpg.emoticon('legendary')}Legendary crate dengan harga ${Blegendary * count} ${rpg.emoticon('money')}money\n\nBuka crate dengan ketik: *${usedPrefix}open legendary*`, wm, 'inventory', usedPrefix + 'inv', 'buka legendary crate', usedPrefix + 'open legendary', m)                        
                        break
                    case 'sampah':
                            if (global.db.data.users[m.sender].money >= Bsampah * count) {
                                global.db.data.users[m.sender].sampah += count * 1
                                global.db.data.users[m.sender].money -= Bsampah * count
                                conn.sendButton(m.chat, `Succes membeli ${count} ${rpg.emoticon('sampah')}Sampah dengan harga ${Bsampah * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', m)
                            } else conn.send2Button(m.chat, `Uang anda tidak cukup untuk membeli ${count} ${rpg.emoticon('sampah')}Sampah dengan harga ${Bsampah * count} money`.trim(), wm, 'inventory', usedPrefix + 'inv', 'claim', usedPrefix + 'claim', m)
                        
                        break
                    case 'armor':
                            if (global.db.data.users[m.sender].armor == 5) return conn.sendButton(m.chat, `${rpg.emoticon('armor')}Armormu sudah *Level Max*`.trim(), wm, 'inventory', usedPrefix + 'inv', m)
                            if (global.db.data.users[m.sender].money > armor) {
                                global.db.data.users[m.sender].armor += 1
                                global.db.data.users[m.sender].money -= armor * 1
                                conn.sendButton(m.chat, `Succes membeli ${count} ${rpg.emoticon('armor')}Armor dengan harga ${armor} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', m)
                            } else conn.send2Button(m.chat, `uang mu tidak cukup untuk membeli ${rpg.emoticon('armor')}armor seharga ${armor} ${rpg.emoticon('money')}money`, 'inventory', usedPrefix + 'inv', 'claim', usedPrefix + 'claim', m)
                        
                        break
                    default:
                        return conn.send3Button(m.chat, Kchat, wm, `beli ${rpg.emoticon('potion')}potion`, usedPrefix + 'shop buy potion', `beli ${rpg.emoticon('limit')}limit`, usedPrefix + 'shop buy limit', `beli ${rpg.emoticon('armor')}armor`, usedPrefix + 'shop buy armor', m)
                }
                break
            case 'sell': 
                switch (_type) {
                    case 'potion':
                        if (global.db.data.users[m.sender].potion >= count * 1) {
                            global.db.data.users[m.sender].money += Spotion * count
                            global.db.data.users[m.sender].potion -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Potion dengan harga ${Spotion * count} money`.trim(), m)
                        } else conn.reply(m.chat, `Potion kamu tidak cukup`.trim(), m)
                        break
                    case 'kayu':
                        if (global.db.data.users[m.sender].kayu >= count * 1) {
                            global.db.data.users[m.sender].money += Skayu * count
                            global.db.data.users[m.sender].kayu -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Kayu dengan harga ${Skayu * count} money`.trim(), m)
                        } else conn.reply(m.chat, `Kayu kamu tidak cukup`.trim(), m)
                        break    
                    case 'batu':
                        if (global.db.data.users[m.sender].batu >= count * 1) {
                            global.db.data.users[m.sender].money += Sbatu * count
                            global.db.data.users[m.sender].batu -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Batu dengan harga ${Sbatu * count} money`.trim(), m)
                        } else conn.reply(m.chat, `Batu kamu tidak cukup`.trim(), m)
                        break
                    case 'string':
                        if (global.db.data.users[m.sender].string >= count * 1) {
                            global.db.data.users[m.sender].money += Sstring * count
                            global.db.data.users[m.sender].string -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} String dengan harga ${Sstring * count} money`.trim(), m)
                        } else conn.reply(m.chat, `String kamu tidak cukup`.trim(), m)
                        break
                    case 'iron':
                        if (global.db.data.users[m.sender].iron >= count * 1) {
                            global.db.data.users[m.sender].money += Siron * count
                            global.db.data.users[m.sender].iron -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Iron dengan harga ${Siron * count} money`.trim(), m)
                        } else conn.reply(m.chat, `Iron kamu tidak cukup`.trim(), m)
                        break
                    case 'common':
                        if (global.db.data.users[m.sender].common >= count * 1) {
                            global.db.data.users[m.sender].money += Scommon * count
                            global.db.data.users[m.sender].common -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Common Crate dengan harga ${Scommon * count} money`.trim(), m)
                        } else conn.reply(m.chat, `Common Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'uncommon':
                        if (global.db.data.users[m.sender].uncommon >= count * 1) {
                            global.db.data.users[m.sender].money += Suncommon * count
                            global.db.data.users[m.sender].uncommon -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Uncommon Crate dengan harga ${Suncommon * count} money`.trim(), m)
                        } else conn.reply(m.chat, `Uncommon Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'mythic':
                        if (global.db.data.users[m.sender].mythic >= count * 1) {
                            global.db.data.users[m.sender].money += Smythic * count
                            global.db.data.users[m.sender].mythic -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Mythic Crate dengan harga ${Smythic * count} money`.trim(), m)
                        } else conn.reply(m.chat, `Mythic Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'legendary':
                        if (global.db.data.users[m.sender].legendary >= count * 1) {
                            global.db.data.users[m.sender].money += Slegendary * count
                            global.db.data.users[m.sender].legendary -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Legendary Crate dengan harga ${Slegendary * count} money`.trim(), m)
                        } else conn.reply(m.chat, `Legendary Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'sampah':
                        if (global.db.data.users[m.sender].sampah >= count * 1) {
                            global.db.data.users[m.sender].sampah -= count * 1
                            global.db.data.users[m.sender].money += Ssampah * count
                            conn.reply(m.chat, `Succes menjual ${count} sampah, dan anda mendapatkan ${Ssampah * count} money`, m)
                        } else conn.reply(m.chat, `Sampah anda tidak cukup`, m)
                        break
                    case 'diamond':
                        if (global.db.data.users[m.sender].diamond >= count * 1) {
                            global.db.data.users[m.sender].diamond -= count * 1
                            global.db.data.users[m.sender].money += Sdiamond * count
                            conn.reply(m.chat, `Succes menjual ${count} Diamond, dan anda mendapatkan ${Sdiamond * count} money`, m)
                        } else conn.reply(m.chat, `Diamond anda tidak cukup`, m)
                        break
                    default:
                        return conn.send3Button(m.chat, Kchat, wm, `beli ${rpg.emoticon('potion')}potion`, usedPrefix + 'shop buy potion', `beli ${rpg.emoticon('limit')}limit`, usedPrefix + 'shop buy limit', `beli ${rpg.emoticon('armor')}armor`, usedPrefix + 'shop buy armor', m)
                }
                break
            default:
                return conn.send3Button(m.chat, Kchat, wm, `beli ${rpg.emoticon('potion')}potion`, usedPrefix + 'shop buy potion', `beli ${rpg.emoticon('limit')}limit`, usedPrefix + 'shop buy limit', `beli ${rpg.emoticon('armor')}armor`, usedPrefix + 'shop buy armor', m)
            }
        } else if (/beli|buy/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'limit':
                        if (global.db.data.users[m.sender].limit >= limit * count) {
                            global.db.data.users[m.sender].kayu += count * 1
                            global.db.data.users[m.sender].limit -= limit * count
                            conn.sendButton(m.chat, `Succes membeli ${count} ${rpg.emoticon('limit')}Limit dengan harga ${limit * count} ${rpg.emoticon('money')}money`, wm, 'inventory', usedPrefix + 'inv', m)
                        } else conn.send2Button(m.chat, `Uang anda tidak cukup untuk membeli ${count} ${rpg.emoticon('limit')}Limit dengan harga ${limit * count} ${rpg.emoticon('money')}money`, wm, 'inventory', usedPrefix + 'inv', 'claim', usedPrefix + 'claim', m)
                    break
                case 'potion':
                        if (global.db.data.users[m.sender].money >= potion * count) {
                            global.db.data.users[m.sender].money -= potion * count
                            global.db.data.users[m.sender].potion += count * 1
                            conn.sendButton(m.chat, `Succes membeli ${count} ${rpg.emoticon('potion')}Potion dengan harga ${potion * count} ${rpg.emoticon('money')}money\n\nGunakan ${rpg.emoticon('potion')}Potion dengan ketik: *${usedPrefix}use potion <jumlah>*`, wm, `Gunakan ${rpg.emoticon('potion')}Potion`, usedPrefix + 'heal', m)
                        } else conn.send2Button(m.chat, `Uang anda tidak cukup untuk membeli ${count} ${rpg.emoticon('potion')}Potion dengan harga ${potion * count} ${rpg.emoticon('money')}money`, wm, 'inventory', usedPrefix + 'inv', 'claim', usedPrefix + 'claim', m)
                    break
                case 'kayu':
                        if (global.db.data.users[m.sender].money >= Bkayu * count) {
                            global.db.data.users[m.sender].kayu += count * 1
                            global.db.data.users[m.sender].money -= Bkayu * count
                            conn.sendButton(m.chat, `Succes membeli ${count} ${rpg.emoticon('kayu')}Kayu dengan harga ${Bkayu * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', m)
                        } else conn.send2Button(m.chat, `Uang anda tidak cukup untuk membeli ${count} ${rpg.emoticon('kayu')}Kayu dengan harga ${Bkayu * count} ${rpg.emoticon('money')}money`, wm, 'inventory', usedPrefix + 'inv', 'claim', usedPrefix + 'claim', m)
                    break
                case 'batu':
                        if (global.db.data.users[m.sender].money >= Bbatu * count) {
                            global.db.data.users[m.sender].batu += count * 1
                            global.db.data.users[m.sender].money -= Bbatu * count
                            conn.sendButton(m.chat, `Succes membeli ${count} ${rpg.emoticon('batu')}Batu dengan harga ${Bbatu * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', m)
                        } else conn.send2Button(m.chat, `Uang anda tidak cukup untuk membeli ${count} ${rpg.emoticon('batu')}Batu dengan harga ${Bbatu * count} ${rpg.emoticon('money')}money`, wm, 'inventory', usedPrefix + 'inv', 'claim', usedPrefix + 'claim', m)
                    break    
                case 'string':
                        if (global.db.data.users[m.sender].money >= Bstring * count) {
                            global.db.data.users[m.sender].string += count * 1
                            global.db.data.users[m.sender].money -= Bstring * count
                            conn.sendButton(m.chat, `Succes membeli ${count} ${rpg.emoticon('string')}String dengan harga ${Bstring * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', m)
                        } else conn.send2Button(m.chat, `Uang anda tidak cukup untuk membeli ${count} ${rpg.emoticon('string')}String dengan harga ${Bstring * count} ${rpg.emoticon('money')}money`, wm, 'inventory', usedPrefix + 'inv', 'claim', usedPrefix + 'claim', m)
                    break
                case 'iron':
                        if (global.db.data.users[m.sender].money >= Biron * count) {
                            global.db.data.users[m.sender].iron += count * 1
                            global.db.data.users[m.sender].money -= Biron * count
                            conn.sendButton(m.chat, `Succes membeli ${count} ${rpg.emoticon('iron')}Iron dengan harga ${Biron * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', m)
                        } else conn.send2Button(m.chat, `Uang anda tidak cukup untuk membeli ${count} ${rpg.emoticon('iron')}Iron dengan harga ${Biron * count} ${rpg.emoticon('money')}money`, wm, 'inventory', usedPrefix + 'inv', 'claim', usedPrefix + 'claim', m)
                    break                
                case 'diamond':
                        if (global.db.data.users[m.sender].money >= Bdiamond * count) {
                            global.db.data.users[m.sender].diamond += count * 1
                            global.db.data.users[m.sender].money -= Bdiamond * count
                            conn.sendButton(m.chat, `Succes membeli ${count} ${rpg.emoticon('diamond')}Diamond dengan harga ${Bdiamond * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', m)
                        } else conn.send2Button(m.chat, `Uang anda tidak cukup untuk membeli ${count} ${rpg.emoticon('diamond')}Diamond dengan harga ${Bdiamond * count} ${rpg.emoticon('money')}money`, wm, 'inventory', usedPrefix + 'inv', 'claim', usedPrefix + 'claim', m)
                    
                    break
                case 'common':
                        if (global.db.data.users[m.sender].money >= Bcommon * count) {
                            global.db.data.users[m.sender].common += count * 1
                            global.db.data.users[m.sender].money -= Bcommon * count
                            conn.send2Button(m.chat, `Succes membeli ${count} ${rpg.emoticon('common')}Common dengan harga ${Bcommon * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', 'buka common crate', usedPrefix + 'open common', m)
                        } else conn.send2Button(m.chat, `Uang anda tidak cukup untuk membeli ${count} ${rpg.emoticon('common')}Common Crate dengan harga ${Bcommon * count} ${rpg.emoticon('money')}money\n\nBuka crate dengan ketik: *${usedPrefix}open common*`, wm, 'inventory', usedPrefix + 'inv', 'buka common crate', usedPrefix + 'open common', m)
                    
                    break
                case 'uncommon':
                        if (global.db.data.users[m.sender].money >= Buncommon * count) {
                            global.db.data.users[m.sender].uncommon += count * 1
                            global.db.data.users[m.sender].money -= Buncommon * count
                            conn.send2Button(m.chat, `Succes membeli ${count} ${rpg.emoticon('uncommon')}Uncommon dengan harga ${Buncommon * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', 'buka uncommon crate', usedPrefix + 'open uncommon', m)
                        } else conn.send2Button(m.chat, `Uang anda tidak cukup untuk membeli ${count} ${rpg.emoticon('uncommon')}Uncommon crate dengan harga ${Buncommon * count} ${rpg.emoticon('money')}money\n\nBuka crate dengan ketik: *${usedPrefix}open uncommon*`, wm, 'inventory', usedPrefix + 'inv', 'buka uncommon crate', usedPrefix + 'open uncommon', m)
                   
                    break
                case 'mythic':
                        if (global.db.data.users[m.sender].money >= Bmythic * count) {
                            global.db.data.users[m.sender].mythic += count * 1
                            global.db.data.users[m.sender].money -= Bmythic * count
                            conn.send2Button(m.chat, `Succes membeli ${count} ${rpg.emoticon('mythic')}Mythic dengan harga ${Bmythic * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', 'buka mythic crate', usedPrefix + 'open mythic', m)
                        } else conn.send2Button(m.chat, `Uang anda tidak cukup untuk membeli ${count} ${rpg.emoticon('mythic')}Mythic crate dengan harga ${Bmythic * count} ${rpg.emoticon('money')}money\n\nBuka crate dengan ketik: *${usedPrefix}open mythic*`, wm, 'inventory', usedPrefix + 'inv', 'buka mythic crate', usedPrefix + 'open mythic', m)
                    
                    break
                case 'legendary':
                        if (global.db.data.users[m.sender].money >= Blegendary * count) {
                            global.db.data.users[m.sender].legendary += count * 1
                            global.db.data.users[m.sender].money -= Blegendary * count
                            conn.send2Button(m.chat, `Succes membeli ${count} ${rpg.emoticon('legendary')}Legendary dengan harga ${Blegendary * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', 'buka legendary crate', usedPrefix + 'open legendary', m)
                        } else conn.send2Button(m.chat, `Uang anda tidak cukup untuk membeli ${count} ${rpg.emoticon('legendary')}Legendary crate dengan harga ${Blegendary * count} ${rpg.emoticon('money')}money\n\nBuka crate dengan ketik: *${usedPrefix}open legendary*`, wm, 'inventory', usedPrefix + 'inv', 'buka legendary crate', usedPrefix + 'open legendary', m)
                    break
                case 'sampah':
                        if (global.db.data.users[m.sender].money >= Bsampah * count) {
                            global.db.data.users[m.sender].sampah += count * 1
                            global.db.data.users[m.sender].money -= Bsampah * count
                            conn.sendButton(m.chat, `Succes membeli ${count} ${rpg.emoticon('sampah')}Sampah dengan harga ${Bsampah * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', m)
                        } else conn.send2Button(m.chat, `Uang anda tidak cukup untuk membeli ${count} ${rpg.emoticon('sampah')}Sampah dengan harga ${Bsampah * count} money`.trim(), wm, 'inventory', usedPrefix + 'inv', 'claim', usedPrefix + 'claim', m)
                    
                    break
                case 'armor':
                        if (global.db.data.users[m.sender].armor == 5) return conn.sendButton(m.chat, `${rpg.emoticon('armor')}Armormu sudah *Level Max*`.trim(), wm, 'inventory', usedPrefix + 'inv', m)
                        if (global.db.data.users[m.sender].money > armor * 1) {
                            global.db.data.users[m.sender].armor += 1
                            global.db.data.users[m.sender].money -= armor * 1
                            conn.sendButton(m.chat, `Succes membeli ${count} ${rpg.emoticon('armor')}Armor dengan harga ${armor} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', m)                          
                        } else conn.send2Button(m.chat, `uang mu tidak cukup untuk membeli ${rpg.emoticon('armor')}armor seharga ${armor} ${rpg.emoticon('money')}money`, 'inventory', usedPrefix + 'inv', 'claim', usedPrefix + 'claim', m)

                    break
                default:
                    return conn.send3Button(m.chat, Kchat, wm, `beli ${rpg.emoticon('potion')}potion`, usedPrefix + 'shop buy potion', `beli ${rpg.emoticon('limit')}limit`, usedPrefix + 'shop buy limit', `beli ${rpg.emoticon('armor')}armor`, usedPrefix + 'shop buy armor', m)
            }
        } else if (/sell|jual|/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                    if (global.db.data.users[m.sender].potion >= count * 1) {
                        global.db.data.users[m.sender].money += Spotion * count
                        global.db.data.users[m.sender].potion -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Potion dengan harga ${Spotion * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Potion kamu tidak cukup`.trim(), m)
                    break
                case 'kayu':
                    if (global.db.data.users[m.sender].kayu >= count * 1) {
                        global.db.data.users[m.sender].money += Skayu * count
                        global.db.data.users[m.sender].kayu -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Kayu dengan harga ${Skayu * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Kayu kamu tidak cukup`.trim(), m)
                    break    
                case 'batu':
                    if (global.db.data.users[m.sender].batu >= count * 1) {
                        global.db.data.users[m.sender].money += Sbatu * count
                        global.db.data.users[m.sender].batu -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Batu dengan harga ${Sbatu * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Batu kamu tidak cukup`.trim(), m)
                    break
                case 'string':
                    if (global.db.data.users[m.sender].string >= count * 1) {
                        global.db.data.users[m.sender].money += Sstring * count
                        global.db.data.users[m.sender].string -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} String dengan harga ${Sstring * count} money`.trim(), m)
                    } else conn.reply(m.chat, `String kamu tidak cukup`.trim(), m)
                    break
                case 'iron':
                    if (global.db.data.users[m.sender].iron >= count * 1) {
                        global.db.data.users[m.sender].money += Siron * count
                        global.db.data.users[m.sender].iron -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Iron dengan harga ${Siron * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Iron kamu tidak cukup`.trim(), m)
                    break                
                case 'common':
                    if (global.db.data.users[m.sender].common >= count * 1) {
                        global.db.data.users[m.sender].money += Scommon * count
                        global.db.data.users[m.sender].common -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Common Crate dengan harga ${Scommon * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Common Crate kamu tidak cukup`.trim(), m)
                    break
                case 'uncommon':
                    if (global.db.data.users[m.sender].uncommon >= count * 1) {
                        global.db.data.users[m.sender].money += Suncommon * count
                        global.db.data.users[m.sender].uncommon -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Uncommon Crate dengan harga ${Suncommon * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Uncommon Crate kamu tidak cukup`.trim(), m)
                    break
                case 'mythic':
                    if (global.db.data.users[m.sender].mythic >= count * 1) {
                        global.db.data.users[m.sender].money += Smythic * count
                        global.db.data.users[m.sender].mythic -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Mythic Crate dengan harga ${Smythic * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Mythic Crate kamu tidak cukup`.trim(), m)
                    break
                case 'legendary':
                    if (global.db.data.users[m.sender].legendary >= count * 1) {
                        global.db.data.users[m.sender].money += Slegendary * count
                        global.db.data.users[m.sender].legendary -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Legendary Crate dengan harga ${Slegendary * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Legendary Crate kamu tidak cukup`.trim(), m)
                    break
                case 'sampah':
                    if (global.db.data.users[m.sender].sampah >= count * 1) {
                        global.db.data.users[m.sender].sampah -= count * 1
                        global.db.data.users[m.sender].money += Ssampah * count
                        conn.reply(m.chat, `Succes menjual ${count} sampah, dan anda mendapatkan ${Ssampah * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Sampah anda tidak cukup`.trim(), m)
                    break
                case 'diamond':
                    if (global.db.data.users[m.sender].diamond >= count * 1) {
                        global.db.data.users[m.sender].diamond -= count * 1
                        global.db.data.users[m.sender].money += Sdiamond * count
                        conn.reply(m.chat, `Succes menjual ${count} Diamond, dan anda mendapatkan ${Sdiamond * count} money`, m)
                    } else conn.reply(m.chat, `Diamond anda tidak cukup`, m)
                    break
                default:
                    return conn.send3Button(m.chat, Kchat, wm, `beli ${rpg.emoticon('potion')}potion`, usedPrefix + 'shop buy potion', `beli ${rpg.emoticon('limit')}limit`, usedPrefix + 'shop buy limit', `beli ${rpg.emoticon('armor')}armor`, usedPrefix + 'shop buy armor', m)
            }
        }
    } catch (e) {
        conn.send3Button(m.chat, Kchat, wm, `beli ${rpg.emoticon('potion')}potion`, usedPrefix + 'shop buy potion', `beli ${rpg.emoticon('limit')}limit`, usedPrefix + 'shop buy limit', `beli ${rpg.emoticon('armor')}armor`, usedPrefix + 'shop buy armor', m)
        console.log(e)
    }
}

handler.help = ['shop <jual|beli> <args>', 'toko <jual|beli> <args>']
handler.tags = ['rpg']
    
handler.command = /^(shop|toko|beli|sell|jual)$/i
handler.register = false

module.exports = handler