let { Presence } = require('@adiwajshing/baileys')
let { performance } = require('perf_hooks')
const simple = require('./lib/simple')
const util = require('util')

const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(resolve, ms))

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

module.exports = {
    async handler(chatUpdate) {
        if (global.db.data == null) await loadDatabase()
        this.msgqueque = this.msgqueque || []
        // console.log(chatUpdate)//
        if (!chatUpdate) return
        if (chatUpdate.messages.length > 1) console.log(chatUpdate.messages)
        let m = chatUpdate.messages[chatUpdate.messages.length - 1]
        if (!m) return
        const Tnow = (new Date()/1000).toFixed(0)
        const seli = Tnow - m.messageTimestamp
        if (seli > global.Intervalmsg) return console.log(new ReferenceError(`Pesan ${Intervalmsg} detik yang lalu diabaikan agar tidak nyepam`))
        
        global.namabot = await this.user.name
        global.wm = namabot + ' ву ƒσкυѕ ι∂'
        //console.log(JSON.stringify(m, null, 4))
        try {
            m = simple.smsg(this, m) || m
            if (!m) return
            // console.log(m)
            m.exp = 0
            m.limit = false
            try {
                let user = global.db.data.users[m.sender]
                if (typeof user !== 'object') global.db.data.users[m.sender] = {}
                if (user) {
                    if (!isNumber(user.joincount)) user.joincount = 1
                    if (!isNumber(user.healt)) user.healt = 0
                    if (!isNumber(user.level)) user.level = 1
                    if (!isNumber(user.exp)) user.exp = 0
                    if (!isNumber(user.limit)) user.limit = 10
                    if (!isNumber(user.lastseen)) user.lastseen = 0
                    if (!isNumber(user.usebot)) user.usebot = 0
                    if (!isNumber(user.lastclaim)) user.lastclaim = 0
                    if (!isNumber(user.lastclaim2)) user.lastclaim2 = 0  
                    if (!isNumber(user.lastngojek)) user.lastngojek = 0
                    if (!isNumber(user.lastnebang)) user.lastnebang = 0
                    if (!isNumber(user.lastnyampah)) user.lastnyampah = 0
                    if (!isNumber(user.lastowner)) user.lastowner = 0
                    if (!isNumber(user.money)) user.money = 0
                    if (!isNumber(user.diamond)) user.diamond = 0
                    if (!isNumber(user.iron)) user.iron = 0
                    if (!isNumber(user.batu)) user.batu = 0
                    if (!isNumber(user.kayu)) user.kayu = 0
                    if (!isNumber(user.string)) user.string = 0  
                    if (!isNumber(user.common)) user.common = 0
                    if (!isNumber(user.uncommon)) user.uncommon = 0
                    if (!isNumber(user.mythic)) user.mythic = 0
                    if (!isNumber(user.legendary)) user.legendary = 0
                    if (!isNumber(user.pet)) user.pet = 0
                    if (!isNumber(user.potion)) user.potion = 0
                    if (!isNumber(user.sampah)) user.sampah = 0
                    if (!isNumber(user.armor)) user.armor = 0
                    if (!isNumber(user.kucing)) user.kucing = 0
                    if (!isNumber(user.kucinglastclaim)) user.kucinglastclaim = 0
                    if (!isNumber(user.kuda)) user.kuda = 0
                    if (!isNumber(user.kudalastclaim)) user.kudalastclaim = 0
                    if (!isNumber(user.rubah)) user.rubah = 0
                    if (!isNumber(user.rubahlastclaim)) user.rubahlastclaim = 0
                    if (!isNumber(user.anjing)) user.anjing = 0
                    if (!isNumber(user.anjinglastclaim)) user.anjinglastclaim = 0
                    if (!isNumber(user.area)) user.area = 0
                    if (!('banned' in user)) user.banned = false
                    if (!isNumber(user.warn)) user.warn = 0
                    if (!isNumber(user.warning)) user.warning = 0
                    if (!isNumber(user.lastIstigfar)) user.lastIstigfar = 0
                    if (!isNumber(user.call)) user.call = 0  

                    if (!isNumber(user.afk)) user.afk = -1
                    if (!('afkReason' in user)) user.afkReason = ''
                    if (!('pasangan' in user)) user.pasangan = ''
                    // RPG
                    if (!isNumber(user.anakkucing)) user.anakkucing = 0
                    if (!isNumber(user.anakkuda)) user.anakkuda = 0
                    if (!isNumber(user.anakrubah)) user.anakrubah = 0
                    if (!isNumber(user.anakanjing)) user.anakanjing = 0
                    if (!isNumber(user.makananpet)) user.makananpet = 0
                    if (!isNumber(user.antispam)) user.antispam = 0
                    if (!isNumber(user.antispamlastclaim)) user.antispamlastclaim = 0
                    if (!isNumber(user.sword)) user.sword = 0
                    if (!isNumber(user.sworddurability)) user.sworddurability = 0
                    if (!isNumber(user.pickaxe)) user.pickaxe = 0
                    if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
                    if (!isNumber(user.fishingrod)) user.fishingrod = 0
                    if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0
                    if (!isNumber(user.lastadventure)) user.lastadventure = 0
                    if (!isNumber(user.lastfishing)) user.lastfishing = 0
                    if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
                    if (!isNumber(user.lastduel)) user.lastduel = 0
                    if (!isNumber(user.lastmining)) user.lastmining = 0
                    if (!isNumber(user.lasthunt)) user.lasthunt = 0
                    if (!isNumber(user.lastweekly)) user.lastweekly = 0
                    if (!isNumber(user.lastmonthly)) user.lastmontly = 0  
                    if (!('registered' in user)) user.registered = false
                    if (!user.registered) {
                    if (!('name' in user)) user.name = this.getName(m.sender)
                    if (!('email' in user)) user.email = ''
                    if (!('label' in user)) user.label = ''
                    if (!isNumber(user.age)) user.age = -1
                    if (!isNumber(user.regTime)) user.regTime = -1
                    }
                    if (!('premium' in user)) user.premium = false
                    if (!isNumber(user.premiumTime)) user.premiumTime = 0
                    if (!user.role) user.role = ''
                    if (!('autolevelup' in user)) user.autolevelup = false
                    if (!isNumber(user.pc)) user.pc = 0
                    //mancing
                    if (!isNumber(user.as)) user.as = 0
                    if (!isNumber(user.paus)) user.paus = 0
                    if (!isNumber(user.kepiting)) user.kepiting = 0
                    if (!isNumber(user.gurita)) user.gurita = 0
                    if (!isNumber(user.cumi)) user.cumi= 0
                    if (!isNumber(user.buntal)) user.buntal = 0
                    if (!isNumber(user.dory)) user.dory = 0
                    if (!isNumber(user.lumba)) user.lumba = 0
                    if (!isNumber(user.lobster)) user.lobster = 0
                    if (!isNumber(user.hiu)) user.hiu = 0
                    if (!isNumber(user.udang)) user.udang = 0
                    if (!isNumber(user.ikan)) user.ikan = 0
                    if (!isNumber(user.orca)) user.orca = 0
                    // kerja
                    if (!isNumber(user.atm)) user.atm = 0
                    if (!('job' in user)) user.job = 'Pengangguran'
                    if (!isNumber(user.lastjob)) user.lastjob = 0
                    if (!isNumber(user.lastkerja)) user.lastkerja = 0
                    if (!('ojek' in user)) user.ojek = false
                    if (!('pedagang' in user)) user.pedagang = false
                    if (!('dokter' in user)) user.dokter = false
                    if (!('petani' in user)) user.petani = false
                    if (!('montir' in user)) user.montir = false
                    if (!('kuli' in user)) user.kuli = false
                    if (!('polisi' in user)) user.polisi = false
                } else global.db.data.users[m.sender] = {
                    joincount: 1,
                    healt: 100,
                    level: 1,
                    exp: 0,
                    limit: 10,
                    lastseen: 0,
                    usebot: 0,
                    lastclaim: 0,
                    lastclaim2: 0,
                    lastngojek: 0,
                    lastnebang: 0,
                    lastnyampah: 0,
                    lastowner: 0,
                    money: 0,
                    diamond: 0,
                    iron: 0,
                    common: 0,
                    uncommon: 0,
                    mythic: 0,
                    legendary: 0,
                    pet: 0,
                    potion: 0,
                    sampah: 0,
                    armor: 0,
                    kucing: 0,
                    kucinglastclaim: 0,
                    kuda: 0,
                    kudalastclaim: 0,
                    rubah: 0,
                    rubahlastclaim: 0,
                    anjing: 0,
                    anjinglastclaim: 0,
                    area: 0,
                    banned: false,
                    warn: 0,
                    warning: 0,
                    lastIstigfar: 0,
                    call: 0,
                    afk: -1,
                    afkReason: '',
                    pasangan: '',
                    anakkucing: 0,
                    anakkuda: 0,
                    anakrubah: 0,
                    anakanjing: 0,
                    makananpet: 0,
                    antispam: 0,
                    antispamlastclaim: 0,
                    kayu: 0,
                    batu: 0,
                    string: 0,
                    sword: 0,
                    sworddurability: 0,
                    pickaxe: 0,
                    pickaxedurability: 0,
                    fishingrod: 0,
                    fishingroddurability: 0,
                    lastadventure: 0,
                    lastfishing: 0,
                    lastdungeon: 0,
                    lastduel: 0,
                    lastmining: 0,
                    lasthunt: 0,
                    lastweekly: 0,
                    lastmonthly: 0,
                    registered: false,
                    name: this.getName(m.sender),
                    email: '',
                    label: '',
                    age: -1,
                    regTime: -1,
                    premium: false,
                    premiumTime: 0,
                    role: '',
                    autolevelup: false,
                    pc: 0,
                    // Mancing cuk
                    as: 0,
                    paus: 0,
                    kepiting: 0,
                    gurita: 0,
                    cumi: 0,
                    buntal: 0,
                    dory: 0,
                    lumba: 0,
                    lobster: 0,
                    hiu: 0,
                    udang: 0,
                    ikan: 0,
                    orca: 0,
                    // Kerja Woy
                    atm: 0,
                    job: 'Pengangguran',
                    lastjob: 0,
                    lastkerja: 0,
                    ojek: false,
                    pedagang: false,
                    dokter: false,
                    petani: false,
                    montir: false,
                    kuli: false,
                    polisi: false,
                }
                let chat = global.db.data.chats[m.chat]
                if (typeof chat !== 'object') global.db.data.chats[m.chat] = {}
                if (chat) {
                    if (!('name' in chat)) chat.name = this.getName(m.chat)
                    if (!('closeGroup' in chat)) chat.closeGroup = false
                    if (!isNumber(chat.add)) chat.add = 0
                    if (!('isBanned' in chat)) chat.isBanned = false
                    if (!('welcome' in chat)) chat.welcome = true
                    if (!('detect' in chat)) chat.detect = true
                    if (!('sWelcome' in chat)) chat.sWelcome = ''
                    if (!('sBye' in chat)) chat.sBye = ''
                    if (!('sPromote' in chat)) chat.sPromote = ''
                    if (!('sDemote' in chat)) chat.sDemote = ''
                    if (!('desc' in chat)) chat.desc = true
                    if (!('descUpdate' in chat)) chat.descUpdate = true
                    if (!('stiker' in chat)) chat.stiker = false
                    if (!('delete' in chat)) chat.delete = false
                    if (!('antiLink' in chat)) chat.antiLink = true
                    if (!isNumber(chat.expired)) chat.expired = 0
                    if (!('antiBadword' in chat)) chat.antiBadword = true
                    if (!('antispam' in chat)) chat.antispam = true
                    if (!('antitroli' in chat)) chat.antitroli = false
                    if (!('antivirtex' in chat)) chat.antivirtex = false
                    if (!('viewonce' in chat)) chat.viewonce = true
                    if (!('nsfw' in chat)) chat.nsfw = false
                    if (!('simi' in chat)) chat.simi = false
                    if (!('clear' in chat)) chat.clear = false
                    if (!isNumber(chat.cleartime)) chat.clearTime = 0 
                } else global.db.data.chats[m.chat] = {
                    name: this.getName(m.chat),
                    closeGroup: false,
                    add: 0,
                    isBanned: false,
                    welcome: true,
                    detect: true,
                    sWelcome: '',
                    sBye: '',
                    sPromote: '',
                    sDemote: '',
                    desc: true,
                    descUpdate: true,
                    stiker: false,
                    delete: false,
                    antiLink: true,
                    expired: 0,
                    antiBadword: true,
                    antispam: true,
                    antitroli: false,
                    antivirtex: false,
                    viewonce: true,
                    nsfw: false,
                    simi: false,
                    clear: false,
                    clearTime: 0
                }
                let settings = global.db.data.settings[this.user.jid]
                if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
                if (settings) {
                    if (!'tag' in settings) settings.tag = true
                    if (!'self' in settings) settings.self = false
                    if (!'anon' in settings) settings.anon = true
                    if (!'anticall' in settings) settings.anticall = true
                    if (!'backup' in settings) settings.backup = false
                    if (!isNumber(settings.backupDB)) settings.backupDB = 0
                    if (!'groupOnly' in settings) settings.groupOnly = false
                    if (!'jadibot' in settings) settings.jadibot = false
                    if (!isNumber(settings.status)) settings.status = 0
                    if (!'epe' in settings) settings.epe = true
                    if (!'game' in settings) settings.game = true
                } else global.db.data.settings[this.user.jid] = {
                    tag: true,
                    self: false,
                    anon: true,
                    anticall: true,
                    backup: false,
                    backupDB: 0,
                    groupOnly: false,
                    jadibot: false,
                    status: 0,
                    epe: true,
                    game: true,
                }
            } catch (e) {
                console.error(e)
            }
            if (opts['nyimak']) return
            if (!m.fromMe && opts['self']) return
            if (opts['pconly'] && m.chat.endsWith('s.whatsapp.net')) return
            if (opts['gconly'] && !m.chat.endsWith('g.us')) return
            if (opts['swonly'] && m.chat !== 'status@broadcast') return
            if (typeof m.text !== 'string') m.text = ''
            if (opts['queque'] && m.text) {
                this.msgqueque.push(m.id || m.key.id)
                await delay(this.msgqueque.length * 1000)
            }
            for (let name in global.plugins) {
                let plugin = global.plugins[name]
                if (!plugin) continue
                if (plugin.disabled) continue
                if (!plugin.all) continue
                if (typeof plugin.all !== 'function') continue
                try {
                    await plugin.all.call(this, m, chatUpdate)
                } catch (e) {
                    if (typeof e === 'string') continue
                    console.error(e)
                }
            }
            if (m.isBaileys) return
            m.exp += Math.ceil(Math.random() * 10)

            let usedPrefix
            let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

            global.prems = global.db.data.users[m.sender].premium ///JSON.parse(fs.readFileSync('./data/premium.json')) // Premium user has unlimited limit
            const isROwner = [global.conn.user.jid, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
            const isOwner = isROwner || m.fromMe
            if (!isOwner && db.data.settings.self) return // Saat mode self diaktifkan hanya owner yang dapat menggunakannya
            const isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
            const isPrems = isROwner || db.data.users[m.sender].premium || false
            //let isPrems = isROwner || global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
            if (!isPrems && !m.isGroup && global.db.data.settings.groupOnly) return
            const groupMetadata = (m.isGroup ? ((conn.chats[m.chat] || {}).metadata || await this.groupMetadata(m.chat).catch(_ => null)) : {}) || {}
            const participants = (m.isGroup ? groupMetadata.participants : []) || []
            const user = (m.isGroup ? participants.find(u => this.decodeJid(u.id) === m.sender) : {}) || {} // User Data
            const bot = (m.isGroup ? participants.find(u => this.decodeJid(u.id) == this.user.jid) : {}) || {} // Your Data
            const isAdmin = user && user?.admin || false // Is User Admin?
            const isBotAdmin = bot && bot?.admin || false // Are you Admin?

            for (let name in global.plugins) {
                let plugin = global.plugins[name]
                if (!plugin) continue
                if (plugin.disabled) continue
                if (!opts['restrict']) if (plugin.tags && plugin.tags.includes('admin')) {
                    // global.dfail('restrict', m, this)
                    continue
                }
                const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
                let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
                let match = (_prefix instanceof RegExp ? // RegExp Mode?
                    [[_prefix.exec(m.text), _prefix]] :
                    Array.isArray(_prefix) ? // Array?
                        _prefix.map(p => {
                            let re = p instanceof RegExp ? // RegExp in Array?
                                p :
                                new RegExp(str2Regex(p))
                            return [re.exec(m.text), re]
                        }) :
                        typeof _prefix === 'string' ? // String?
                            [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
                            [[[], new RegExp]]
                ).find(p => p[1])
                if (typeof plugin.before === 'function') if (await plugin.before.call(this, m, {
                    match,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                })) continue
                if (typeof plugin !== 'function') continue
                if ((usedPrefix = (match[0] || '')[0])) {
                    let noPrefix = m.text.replace(usedPrefix, '')
                    let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
                    args = args || []
                    let _args = noPrefix.trim().split` `.slice(1)
                    let text = _args.join` `
                    command = (command || '').toLowerCase()
                    let fail = plugin.fail || global.dfail // When failed
                    let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
                        plugin.command.test(command) :
                        Array.isArray(plugin.command) ? // Array?
                            plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                                cmd.test(command) :
                                cmd === command
                            ) :
                            typeof plugin.command === 'string' ? // String?
                                plugin.command === command :
                                false

                    if (!isAccept) continue
                    m.plugin = name
                    if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
                        let chat = global.db.data.chats[m.chat]
                        let user = global.db.data.users[m.sender]
                        if (!['unbanchat.js', 'dompet.js', 'creator.js'].includes(name) && chat && chat?.isBanned && !isPrems) return // Kecuali ini, bisa digunakan
                        if (!['unbanchat.js', 'dompet.js', 'creator.js'].includes(name) && user && user?.banned) return
                    }
                    if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner
                        fail('owner', m, this)
                        continue
                    }
                    if (plugin.rowner && !isROwner) { // Real Owner
                        fail('rowner', m, this)
                        continue
                    }
                    if (plugin.owner && !isOwner) { // Owner UserJid
                        fail('owner', m, this)
                        continue
                    }
                    if (plugin.mods && !isMods) { // Moderator
                        fail('mods', m, this)
                        continue
                    }
                    if (plugin.premium && !isPrems) { // Premium
                        fail('premium', m, this)
                        continue
                    }
                    if (plugin.group && !m.isGroup) { // Group Only
                        fail('group', m, this)
                        continue
                    } else if (plugin.botAdmin && !isBotAdmin) { // You Admin
                        fail('botAdmin', m, this)
                        continue
                    } else if (plugin.admin && !isAdmin) { // User Admin
                        fail('admin', m, this)
                        continue
                    }
                    if (plugin.private && m.isGroup) { // Private Chat Only
                        fail('private', m, this)
                        continue
                    }
                    if (plugin.register == true && _user.registered == false) { // Need register?
                        fail('unreg', m, this)
                        continue
                    }
                    m.isCommand = true
                    let xp = 'exp' in plugin ? parseInt(plugin.exp) : 17 // XP Earning per command
                    if (xp > 200) m.reply('Ngecit -_-') // Hehehe
                    else m.exp += xp
                    if (!isPrems && plugin.limit && global.db.data.users[m.sender].limit < plugin.limit * 1) {
                        this.sendButton(m.chat, `Limit anda habis, silahkan beli melalui *${usedPrefix}buy*`, wm, 'Buy', '.buy', m)
                        // this.reply(m.chat, `Limit anda habis, silahkan beli melalui *${usedPrefix}buy*`, m)
                        continue // Limit habis
                    }
                    if (plugin.level > _user.level) {
                        this.sendButton(m.chat, `diperlukan level ${plugin.level} untuk menggunakan perintah ini. Level kamu ${_user.level}`, wm, `Levelup`, `.levelup`, m)
                        // this.reply(m.chat, `diperlukan level ${plugin.level} untuk menggunakan perintah ini. Level kamu ${_user.level}`, m)
                        continue // If the level has not been reached
                    }
                    let extra = {
                        match,
                        usedPrefix,
                        noPrefix,
                        _args,
                        args,
                        command,
                        text,
                        conn: this,
                        participants,
                        groupMetadata,
                        user,
                        bot,
                        isROwner,
                        isOwner,
                        isAdmin,
                        isBotAdmin,
                        isPrems,
                        chatUpdate,
                    }
                    try {
                        await plugin.call(this, m, extra)
                        if (!isPrems) m.limit = m.limit || plugin.limit || false
                    } catch (e) {
                        // Error occured
                        m.error = e
                        console.error(e)
                        if (e) {
                            let text = util.format(e)
                            for (let key of Object.values(global.APIKeys))
                                text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
                            if (e.name)
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != this.user.jid)) {
                                let data = (await this.onWhatsApp(jid))[0] || {}
                                if (data.exists)
                                    m.reply(`*Plugin:* ${m.plugin}\n*Sender:* @${m.sender.split`@`[0]}\n*Chat:* ${m.chat}\n*Chat Name:* ${await this.getName(m.chat)}\n*Command:* ${usedPrefix}${command} ${args.join(' ')}\n\n\`\`\`${text}\`\`\``.trim(), data.jid, { mentions: [m.sender] })
                            }
                            m.reply(text)
                        }
                    } finally {
                        // m.reply(util.format(_user))
                        if (typeof plugin.after === 'function') {
                            try {
                                await plugin.after.call(this, m, extra)
                            } catch (e) {
                                console.error(e)
                            }
                        }
                        if (m.limit) m.reply(+ m.limit + ' Limit terpakai')
                        //jika risih matiin aja 
                    }
                    break
                }
            }
        } catch (e) {
            console.error(e)
        } finally {
            // conn.sendPresenceUpdate('composing', m.chat) 
            //console.log(global.db.data.users[m.sender])
            let user, stats = global.db.data.stats
            if (m) {
                if (m.sender && (user = global.db.data.users[m.sender])) {
                    user.exp += m.exp
                    user.limit -= m.limit * 1
                }

                let stat
                if (m.plugin) {
                    let now = + new Date
                    if (m.plugin in stats) {
                        stat = stats[m.plugin]
                        if (!isNumber(stat.total)) stat.total = 1
                        if (!isNumber(stat.success)) stat.success = m.error != null ? 0 : 1
                        if (!isNumber(stat.last)) stat.last = now
                        if (!isNumber(stat.lastSuccess)) stat.lastSuccess = m.error != null ? 0 : now
                    } else stat = stats[m.plugin] = {
                        total: 1,
                        success: m.error != null ? 0 : 1,
                        last: now,
                        lastSuccess: m.error != null ? 0 : now
                    }
                    stat.total += 1
                    stat.last = now
                    if (m.error == null) {
                        stat.success += 1
                        stat.lastSuccess = now
                    }
                }
            }

            try {
                require('./lib/print')(m, this)
            } catch (e) {
                console.log(m, m.quoted, e)
            }
            if (opts['autoread']) await this.chatRead(m.chat, m.isGroup ? m.sender : undefined, m.id || m.key.id).catch(() => { })
            let quequeIndex = this.msgqueque.indexOf(m.id || m.key.id)
            if (opts['queque'] && m.text && quequeIndex !== -1) this.msgqueque.splice(quequeIndex, 1)
        }
    },

    async participantsUpdate({ id, participants, action }) {
        if (opts['self']) return
        // if (id in conn.chats) return // First login will spam
        if (global.isInit) return
        let chat = global.db.data.chats[id] || {}
        let text = ''
        switch (action) {
            case 'add':
            case 'remove':
                if (chat.welcome) {
                    let groupMetadata = await this.groupMetadata(id) || (conn.chats[id] || {}).metadata
                    for (let user of participants) {
                        let pp = 'https://telegra.ph/file/2d06f0936842064f6b3bb.png'
                        try {
                            pp = await this.profilePictureUrl(user, 'image')
                        } catch (e) {

                        } finally {
                            text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user!').replace('@subject', await this.getName(id)).replace('@desc', groupMetadata.desc ? String.fromCharCode(8206).repeat(4001) + groupMetadata.desc : '') :
                                (chat.sBye || this.bye || conn.bye || 'Bye, @user!')).replace('@user', await this.getName(user))
                            let wel = API('males', '/welcome2', {
                                profile: pp,
                                username: await this.getName(user),
                                background: 'https://telegra.ph/file/c538a6f5b0649a7861174.png',
                                groupname: await this.getName(id),
                                membercount: groupMetadata.participants.length
                            })
                            let lea = API('males', '/goodbye2', {
                                profile: pp,
                                username: await this.getName(user),
                                background: 'https://telegra.ph/file/c538a6f5b0649a7861174.png',
                                groupname: await this.getName(id),
                                membercount: groupMetadata.participants.length
                            })
                            await this.send3TemplateButtonImg(id, action === 'add' ? wel : lea, text, wm, action === 'add' ? 'selamat datang' : 'sampai jumpa', action === 'add' ? '.intro' : 'FokusID')
                        }
                    }
                }
                break

            case 'promote':
                text = (chat.sPromote || this.spromote || conn.spromote || '@user ```is now Admin```')
            case 'demote':
                if (!text) text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ```is no longer Admin```')
                text = text.replace('@user', '@' + participants[0].split('@')[0])
                if (chat.detect) this.sendButtonDoc(id, text, wm, 'Matikan Fitur Ini', '.off detect', fkontak, { contextInfo: global.adReply.contextInfo })
                break
        }
    },
    async groupsUpdate(groupsUpdate, fromMe, m) {
        if (opts['self'] && m.fromMe) return
            console.log(m)
        // Ingfo tag orang yg update group
        for (let groupUpdate of groupsUpdate) {
            const id = groupUpdate.id
            const participant = groupUpdate.participants
            console.log('\n\n=============\n\n In Groups Update \n\n============\n\n'+ `Id: ${id}\nParticipants: ${participant}` + '\n\n==============================\n')
            if (!id) continue
            let chats = global.db.data.chats[id], text = ''
            if (!chats.detect) continue
            if (groupUpdate.desc) text = (chats.sDesc || this.sDesc || conn.sDesc || '```Description has been changed to```\n@desc').replace('@desc', groupUpdate.desc)
            if (groupUpdate.subject) text = (chats.sSubject || this.sSubject || conn.sSubject || '```Subject has been changed to```\n@subject').replace('@subject', groupUpdate.subject)
            if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || conn.sIcon || '```Icon has been changed to```').replace('@icon', groupUpdate.icon)
            if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || conn.sRevoke || '```Group link has been changed to```\n@revoke').replace('@revoke', groupUpdate.revoke)
            if (groupUpdate.announce == true) text = (chats.sAnnounceOn || this.sAnnounceOn || conn.sAnnounceOn || '```Group has been closed!')
            if (groupUpdate.announce == false) text = (chats.sAnnounceOff || this.sAnnounceOff || conn.sAnnounceOff || '```Group has been open!')
            if (groupUpdate.restrict == true) text = (chats.sRestrictOn || this.sRestrictOn || conn.sRestrictOn || '```Group has been all participants!')
            if (groupUpdate.restrict == false) text = (chats.sRestrictOff || this.sRestrictOff || conn.sRestrictOff || '```Group has been only admin!')
            //console.log('=============\n\ngroupsUpdate \n\n============\n\n' + await groupUpdate)
            if (!text) continue
            await this.sendButtonDoc(id, text, wm, 'Matikan Fitur', `.off detect`, global.fkontak, { contextInfo: global.adReply.contextInfo, mentions: await this.parseMention(text) })
        }
    },
    async delete({ remoteJid, fromMe, id, participant }) {
        if (fromMe) return
        let chats = Object.entries(await this.chats).find(([user, data]) => data.messages && data.messages[id])
        if (!chats) return
        let msg = JSON.parse(JSON.stringify(chats[1].messages[id]))
        let chat = global.db.data.chats[msg.key.remoteJid] || {}
        if (chat.delete) return
        await this.sendButton(msg.key.remoteJid, `
Terdeteksi @${participant.split`@`[0]} telah menghapus pesan
Untuk mematikan fitur ini, ketik
*.enable delete*
`.trim(), wm, 'Matikan Fitur ini', '.enable delete', msg, {
            mentions: [participant]
        })
        await this.delay(1000)
        this.copyNForward(msg.key.remoteJid, msg).catch(e => console.log(e, msg))
    }
}

global.dfail = async (type, m, conn) => {
    let msg = {
        rowner: `Perintah ini hanya dapat digunakan oleh _*Team Bot Discussion!1!1!*_`,
        owner: `Perintah ini hanya dapat digunakan oleh _*Team Bot Discussion!1!1!*_`,
        mods: `Perintah ini hanya dapat digunakan oleh *Moderator*`,
        premium: 'Perintah ini hanya untuk member _*Premium*_ !',
        group: `Perintah ini hanya dapat digunakan di grup!`,
        private: 'Perintah ini hanya dapat digunakan di Chat Pribadi!',
        admin: 'Perintah ini hanya untuk *Admin* grup!',
        botAdmin: 'Jadikan bot sebagai *Admin* untuk menggunakan perintah ini!',
        unreg: 'Silahkan daftar untuk menggunakan fitur ini dengan cara mengetik:\n\n*#daftar nama.umur*\n\nContoh: *#daftar Manusia.16*',
        nsfw: `NSFW tidak aktif, Silahkan hubungi Team Bot Discussion untuk mengaktifkan fitur ini!`,
        rpg: `RPG tidak aktif, Silahkan hubungi Team Bot Discussion Untuk mengaktifkan fitur ini!`,
        restrict: 'Fitur ini di *disable*!'
    }[type]
    if (msg) return conn.reply(m.chat, msg, m, { mentions: conn.parseMention(msg) })
}

let fs = require('fs')
let chalk = require('chalk')
const { default: fetch } = require('node-fetch')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright("Update 'handler.js'"))
    delete require.cache[file]
    if (global.reloadHandler) console.log(global.reloadHandler())
})

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
