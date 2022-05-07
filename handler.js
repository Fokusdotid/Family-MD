let { Presence } = require('@adiwajshing/baileys')
let { performance } = require('perf_hooks')
const simple = require('./lib/simple')
const util = require('util')
const moment = require('moment-timezone')

const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(resolve, ms))

const more = String.fromCharCode(8206)
global.readMore = more.repeat(4001)

module.exports = {
    async handler(chatUpdate) {
        if (global.db.data == null) await loadDatabase()
        this.msgqueque = this.msgqueque || []
        // console.log(chatUpdate)//
        if (!chatUpdate) return
        if (chatUpdate.messages.length > 1) console.log(chatUpdate.messages)
        let m = chatUpdate.messages[chatUpdate.messages.length - 1]

        const _uptime = process.uptime() * 1000
        global.u = await conn.clockString(_uptime)
        global.ucapan = ucapan()
        global.settings = global.db.data.settings
        global.pickRandom = pickRandom
        global.doc = pickRandom(["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/msword", "application/pdf"])
        global.img = pickRandom(global.waifu)
        global.fla = pickRandom(global.flaaa)
        global.namabot = conn.user.name
        global.packname = global.namabot
        global.author = global.data.owner
        //global.author = '𝑨𝒈𝒖𝒛 𝑭𝒂𝒎𝒊𝒍𝒊𝒂'
        global.wm2 = global.data.namabot + ' ' + global.data.owner
        global.wm = namabot + ' ву ƒσкυѕ ι∂'
        global.colong1 = 'Ciss 📸'
        global.colong2 = 'ʙy ᴀɢᴜᴢ ꜰᴀᴍɪʟɪᴀ'
        global.kontak2 = [
        ['6281320170984', '𝘼𝙜𝙪𝙯 𝙁𝙖𝙢𝙞𝙡𝙞𝙖', 'ᴅᴇᴠᴇʟᴏᴩᴇʀ ʙᴏᴛ', 'FokusDotId13@gmail.com', true],
        ['6283823916413', await this.getName('6283823916413@s.whatsapp.net'), 'ᴄꜱ ꜰᴀᴍɪʟy-ʙᴏᴛ', 'sa0066588@gmail.com', true],
        ['6285157436653', '𝙴𝙽𝙹𝙴𝙻𝙰-𝙱𝙾𝚃', 'Bot WhatsApp', 'Nothing!', true],
        ['6288276639962', await this.getName('6288276639962@s.whatsapp.net'), 'ᴄꜱ ꜰᴀᴍɪʟy-ʙᴏᴛ', 'khasanahmarifatul28@gmail.com', true],
        ['6285669524800', await this.getName('6285669524800@s.whatsapp.net'), 'ᴄꜱ ꜰᴀᴍɪʟy-ʙᴏᴛ', 'rykkalieeofficiall@gmail.com', true],
        ]
        global.bg = await (await fetch(img)).buffer()
        global.time = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')

        if (!m) return
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
                            let wel = API('hardianto', '/api/welcome3', {
                                profile: pp,
                                name: await this.getName(user),
                                bg: 'https://telegra.ph/file/c538a6f5b0649a7861174.png',
                                namegb: await this.getName(id),
                                member: groupMetadata.participants.length
                            })
                            let lea = API('hardianto', '/api/goodbye3', {
                                profile: pp,
                                name: await this.getName(user),
                                bg: 'https://telegra.ph/file/c538a6f5b0649a7861174.png',
                                namegb: await this.getName(id),
                                member: groupMetadata.participants.length
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
                if (chat.detect) this.sendMessage(id, text, {
                    contextInfo: {
                        mentionedJid: this.parseMention(text)
                    }
                })
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
            await this.sendButton(id, text, wm, 'Matikan Fitur', `.off detect`, global.ftroli, { contextInfo: { mentionedJid: this.parseMention(text) }, mentions: await this.parseMention(text) })
            //await this.sendMessage(id, { text, mentions: this.parseMention(text) })
        }
    },
    async delete({ remoteJid, fromMe, id, participant }) {
        if (fromMe) return
        let chats = Object.entries(conn.chats).find(([user, data]) => data.messages && data.messages[id])
        if (!chats) return
        let msg = JSON.parse(chats[1].messages[id])
        let chat = global.db.data.chats[msg.key.remoteJid] || {}
        if (chat.delete) return
        this.sendButton(msg.key.remoteJid, `
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

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat malam 🌙"
    if (time >= 4) {
        res = "Selamat pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat sore 🌅"
    }
    if (time >= 18) {
        res = "Selamat malam 🌙"
    }
    return res
}
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
  }

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.thumb = 'https://telegra.ph/file/61f2d6d9694b49a2ce7aa.jpg'

global.flaaa = [
 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
]

global.waifu = [
'https://i.pinimg.com/originals/ed/34/f8/ed34f88af161e6278993e1598c29a621.jpg',
'https://i.pinimg.com/originals/85/4d/bb/854dbbd30304cd69f305352f0183fad0.jpg',
'https://i.pinimg.com/originals/32/2c/a4/322ca456fa2cdec4b717895a65adfa8d.jpg',
'https://i.pinimg.com/originals/f2/dd/cc/f2ddccd5a1b89d2302cf75c6520c58dd.png',
'https://i.pinimg.com/originals/aa/6b/df/aa6bdf98cbc9e1fc741c36682fa3e838.jpg',
'https://i.pinimg.com/originals/88/46/88/884688def830c43648f88154836a8b05.jpg',
'https://i.pinimg.com/originals/57/d9/20/57d920d58533915850b431bd0b8e1f1d.jpg',
'https://i.pinimg.com/originals/46/ad/05/46ad0505d33a2c2359f84ed9b867a58c.jpg',
'https://i.pinimg.com/originals/23/b7/fb/23b7fb922770e139a2a57b1a443a2180.jpg',
'https://i.pinimg.com/originals/46/79/25/467925d52634fd098ab6890a23c33f30.jpg',
'https://i.pinimg.com/originals/a4/a1/74/a4a1740e565f4205eb3f700e1936e064.jpg',
'https://i.pinimg.com/originals/f9/8d/2c/f98d2c3f64e50ba6c8efd9fdc7cf0093.png',
'https://i.pinimg.com/originals/29/a4/b4/29a4b4573f993d7d6abb45843f529892.jpg',
'https://i.pinimg.com/originals/40/de/84/40de84ce2ee376d8fae8ff5863d6edb0.jpg',
'https://i.pinimg.com/originals/b6/f5/b7/b6f5b7d59fd4f332b3820db38612a5a0.jpg',
'https://i.pinimg.com/originals/94/38/6d/94386d3c23f509dbc30341fed0363a07.jpg',
'https://i.pinimg.com/originals/b5/94/ef/b594ef0774d29f5a05cd182994aa354e.jpg',
'https://i.pinimg.com/originals/0f/ed/3f/0fed3f4c456158c506d88f5867ca93d2.jpg',
'https://i.pinimg.com/originals/1b/7a/a8/1b7aa80191b83b888e9ea6042f090763.jpg',
'https://i.pinimg.com/originals/72/7a/08/727a08cdf67b62c2ba49e7308c09a1cd.jpg',
'https://i.pinimg.com/originals/86/93/75/8693757390b9d5b83fb8e40ff9ea876f.jpg',
'https://i.pinimg.com/originals/5f/79/71/5f79713647b3e99a787ee7483715c1eb.jpg',
'https://i.pinimg.com/originals/b8/b3/f3/b8b3f397fead38a988174df75d481202.png',
'https://i.pinimg.com/originals/7a/e0/55/7ae055891f8200cd62ec76a40d47118d.jpg',
'https://i.pinimg.com/originals/bc/9b/81/bc9b81c63b4844fd1a434d462bdfbd80.png',
'https://i.pinimg.com/originals/22/8b/ca/228bca60a07d72cac953a9c3be542bab.jpg',
'https://i.pinimg.com/originals/41/10/c6/4110c64fc91a1c85de02166f67aff7ad.jpg',
'https://i.pinimg.com/originals/45/11/41/451141522a9086f56efc0da3fdac1957.jpg',
'https://i.pinimg.com/originals/c1/4e/c7/c14ec7dffbc682f78c52ad8a295b8831.jpg',
'https://i.pinimg.com/originals/25/5d/d9/255dd9dde5f44673092a4f15e917759f.jpg',
'https://i.pinimg.com/originals/1f/95/15/1f95156c3d8e2b339a22b3bad2f69a8a.png',
'https://i.pinimg.com/originals/bb/1a/12/bb1a1249dbc73736ab534fdd52bdc74c.jpg',
'https://i.pinimg.com/originals/d5/58/a7/d558a745f2452d851d480025ab341537.jpg',
'https://i.pinimg.com/originals/e7/00/0e/e7000e7e72c1b37ea7a4c780182d05d8.jpg',
'https://i.pinimg.com/originals/9e/53/a9/9e53a92ee711d979b9bdbb6212115fe0.jpg',
'https://i.pinimg.com/originals/c6/16/d9/c616d9a871ed3cd9fb6a46efb7f92d95.jpg',
'https://i.pinimg.com/originals/ac/f0/29/acf029047efffe57999fa876554cbf1d.jpg',
'https://i.pinimg.com/originals/ae/86/3b/ae863b64ca579f05008dbf027b04988f.jpg',
'https://i.pinimg.com/originals/d5/65/43/d56543a959da518e08012b4db93747bb.jpg',
'https://i.pinimg.com/originals/ed/3c/e2/ed3ce276ca71e5bfec1cf2fbfc5561e1.jpg',
'https://i.pinimg.com/originals/66/30/37/663037f00539f3bc1dbd3efeae0d700b.jpg',
'https://i.pinimg.com/originals/63/6b/7b/636b7bd0e1df03f0bf72c494cedd6f07.png',
'https://i.pinimg.com/originals/db/a4/13/dba413518c0a470a5e81cafa431281da.jpg',
'https://i.pinimg.com/originals/3b/d9/aa/3bd9aa880d23dc3262e119ca09345e99.jpg',
'https://i.pinimg.com/originals/ef/90/4e/ef904eda01a996e5a9d557a55db6da0f.png',
'https://i.pinimg.com/originals/fb/f7/a9/fbf7a92af75577e33a564ce490154c8f.jpg',
'https://i.pinimg.com/originals/16/92/89/1692897136ac3688ab9ccdbb0e54fb21.jpg',
'https://i.pinimg.com/originals/fc/51/4e/fc514e2f4c23eb96721611b483edc28c.jpg',
'https://i.pinimg.com/originals/bb/a4/98/bba49848bc4369333f4128b62fc64258.jpg',
'https://i.pinimg.com/originals/67/a7/54/67a754077a1ffc75c25b3c7bb04d2258.png',
'https://i.pinimg.com/originals/57/d9/20/57d920d58533915850b431bd0b8e1f1d.jpg',
'https://i.pinimg.com/originals/83/e5/71/83e5710c42b9e8b9e1a4b6381c4535fe.jpg',
'https://i.pinimg.com/originals/88/46/88/884688def830c43648f88154836a8b05.jpg',
'https://i.pinimg.com/originals/32/2c/a4/322ca456fa2cdec4b717895a65adfa8d.jpg',
'https://i.pinimg.com/originals/42/88/f1/4288f17ee25b909430fb7e707d961d0b.jpg',
'https://i.pinimg.com/originals/16/14/9c/16149c94a7c0f753230b1edbd03ab3e6.jpg',
'https://i.pinimg.com/originals/7f/f5/46/7ff546b38e2969e578e697c44944b74f.jpg',
'https://i.pinimg.com/originals/6d/bc/61/6dbc616311268a25b0ee0e1bd4de13b6.jpg',
'https://i.pinimg.com/originals/60/34/18/603418ea5c35839914a1071e134add8b.jpg',
'https://i.pinimg.com/originals/5f/79/71/5f79713647b3e99a787ee7483715c1eb.jpg',
'https://i.pinimg.com/originals/ed/ea/37/edea37b6f876bfc8f59bbae4d43e26d7.jpg',
'https://i.pinimg.com/originals/94/38/6d/94386d3c23f509dbc30341fed0363a07.jpg',
'https://i.pinimg.com/originals/f6/20/b4/f620b4b1c2aaf096455952465db8a980.jpg',
'https://i.pinimg.com/originals/97/50/73/9750731b4b004da61d44fe01dbe93d85.jpg',
'https://i.pinimg.com/originals/a0/55/41/a055419e96bc61a5990c575af10ba99e.png',
'https://i.pinimg.com/originals/aa/6b/df/aa6bdf98cbc9e1fc741c36682fa3e838.jpg',
'https://i.pinimg.com/originals/c2/4f/75/c24f7518e17faba4bf8908a39be604a6.jpg',
'https://i.pinimg.com/originals/95/bb/2e/95bb2e7c8b71754003d063f39feb232a.jpg',
'https://i.pinimg.com/originals/c4/e4/1d/c4e41d096e7585a7e6245e852ece25c2.jpg',
'https://i.pinimg.com/originals/87/cf/bc/87cfbc189e773ed9294bccfd50a4fbc7.jpg',
'https://i.pinimg.com/originals/7a/3b/e6/7a3be6cf1595fe6764b5b18b46ca576d.jpg',
'https://i.pinimg.com/originals/c5/42/f8/c542f83b992e51c6d2519f07489b1dec.jpg',
'https://i.pinimg.com/originals/96/29/1e/96291e9abbf311b8fc6c8c3f9f8ae059.jpg',
'https://i.pinimg.com/originals/e5/1a/8d/e51a8d35d2b717fa757fa2abf053a2c7.jpg',
'https://i.pinimg.com/originals/47/18/af/4718afcd517c8e7e07cc9dba48b3b770.jpg',
'https://i.pinimg.com/originals/39/2c/cb/392ccb1793c5a23783869994b1ec24b7.jpg',
'https://i.pinimg.com/originals/0f/98/5f/0f985ffbfff2650d6e3ecf8ba0eb574e.jpg',
'https://i.pinimg.com/originals/ab/f9/50/abf950c9aa1c4710437d9acc83078f87.jpg',
'https://i.pinimg.com/originals/f2/dd/cc/f2ddccd5a1b89d2302cf75c6520c58dd.png',
'https://i.pinimg.com/originals/f1/f7/fc/f1f7fca39eba7d64e50749da5406247c.jpg',
'https://i.pinimg.com/originals/71/18/96/711896c067c28814ec9ec9c25d4a3ba9.jpg',
'https://i.pinimg.com/originals/67/a7/54/67a754077a1ffc75c25b3c7bb04d2258.png',
'https://i.pinimg.com/originals/8f/fe/d4/8ffed485ed8b6db07067e452f8399fff.jpg',
'https://i.pinimg.com/originals/db/b6/46/dbb6463c9134591aa79369f325877e03.jpg',
'https://i.pinimg.com/originals/9f/23/1a/9f231a6acc906f95ff3f917211b9abda.png',
'https://i.pinimg.com/originals/b9/a9/66/b9a9669f0fbbe75e780adad301601b43.jpg',
'https://i.pinimg.com/originals/86/ed/26/86ed265f2dbb22a48bbc612f59303508.png',
'https://i.pinimg.com/originals/da/ae/25/daae25409adec418a9b6f6c5dcdecd47.jpg',
'https://i.pinimg.com/originals/a4/6d/fa/a46dfad749d0577366e9ea2db6cc305e.jpg',
'https://i.pinimg.com/originals/09/5b/4d/095b4d0ce48f40eca7ad23e43e85ab9a.jpg',
'https://i.pinimg.com/originals/d9/e1/30/d9e1307a5fbbeb2a267562eab8abc063.jpg',
'https://i.pinimg.com/originals/db/cf/dc/dbcfdc263095906eabf7e06099ebaef0.png',
'https://i.pinimg.com/originals/89/14/0d/89140d3ef976904013f672fea0157b7e.png',
'https://i.pinimg.com/originals/cf/4f/cf/cf4fcf2036f0b5b974f146f2c0ba81db.jpg',
'https://i.pinimg.com/originals/93/62/9e/93629ee9ab27043076bce2b1f22f9193.jpg',
'https://i.pinimg.com/originals/99/6b/c4/996bc4049d632bdbf7d9bc24dc8081f0.png',
'https://i.pinimg.com/originals/f2/6d/35/f26d354b1421546ae993c83f5c7bcfb0.jpg',
'https://i.pinimg.com/originals/25/5d/d9/255dd9dde5f44673092a4f15e917759f.jpg',
'https://i.pinimg.com/originals/08/8f/1d/088f1dc58092b60652e05cc941ee0fbd.jpg',
'https://i.pinimg.com/originals/14/17/dd/1417dd63009eea0b63252076f3b405e6.jpg',
'https://i.pinimg.com/originals/35/04/d5/3504d53c5850b3bddaa6e0e0714ccacb.jpg',
'https://i.pinimg.com/originals/88/46/88/884688def830c43648f88154836a8b05.jpg',
'https://i.pinimg.com/originals/57/d9/20/57d920d58533915850b431bd0b8e1f1d.jpg',
'https://i.pinimg.com/originals/44/39/17/443917c07ffd65caa7d7cd4065fb8571.jpg',
'https://i.pinimg.com/originals/bc/9b/81/bc9b81c63b4844fd1a434d462bdfbd80.png',
'https://i.pinimg.com/originals/4a/e2/74/4ae274c828a2c719bcf9f644106d26cf.jpg',
'https://i.pinimg.com/originals/d0/cb/da/d0cbdaa334fa92f8b09d1c4d1ddc9cd2.jpg',
'https://i.pinimg.com/originals/71/16/31/711631ac52f7809f530e40f230b371a4.jpg',
'https://i.pinimg.com/originals/af/f1/1b/aff11bcfdf946a7bba1687c80515f902.jpg',
'https://i.pinimg.com/originals/46/79/25/467925d52634fd098ab6890a23c33f30.jpg',
'https://i.pinimg.com/originals/ef/90/4e/ef904eda01a996e5a9d557a55db6da0f.png',
'https://i.pinimg.com/originals/a2/e7/73/a2e773fdb7ce0fc99eb123d8a81764ec.jpg',
'https://i.pinimg.com/originals/79/92/ed/7992ed0c9b272654938ea186cc2e3f4a.jpg',
'https://i.pinimg.com/originals/7a/08/c8/7a08c8c22066a142f22928662d9d70aa.jpg',
'https://i.pinimg.com/originals/20/b0/96/20b0962b8c62584fbcd6e7675b4782a4.jpg',
'https://i.pinimg.com/originals/51/0f/8c/510f8cb8f28b8666d560f89e2006d4b1.jpg',
'https://i.pinimg.com/originals/c2/4f/75/c24f7518e17faba4bf8908a39be604a6.jpg',
'https://i.pinimg.com/originals/4e/43/7b/4e437b1bbdee605d833155a97d35bef1.png',
'https://i.pinimg.com/originals/d5/a2/c9/d5a2c9cdfac835518e45b13cfc39819d.jpg',
'https://i.pinimg.com/originals/95/bb/2e/95bb2e7c8b71754003d063f39feb232a.jpg',
'https://i.pinimg.com/originals/16/92/89/1692897136ac3688ab9ccdbb0e54fb21.jpg',
'https://i.pinimg.com/originals/6f/9a/86/6f9a86eb31e7c5bc34cf0d1d130574e0.png',
'https://i.pinimg.com/originals/f0/67/f0/f067f00a885fab47d76d4e5423d54c35.jpg',
'https://i.pinimg.com/originals/4e/9a/7a/4e9a7a196cea58427163313b7db6363e.jpg',
'https://i.pinimg.com/originals/53/4c/6a/534c6a2e65fdb4c52824f94acc5e2195.jpg',
'https://i.pinimg.com/originals/8d/04/9a/8d049a1e6951491b24ea4c364f2459bc.jpg',
'https://i.pinimg.com/originals/22/dc/94/22dc941e60b0ace15d796a94f07d8ba7.jpg',
'https://i.pinimg.com/originals/80/bc/96/80bc968b4dcd939b60ffe2c8b0c54d75.png',
'https://i.pinimg.com/originals/ed/34/f8/ed34f88af161e6278993e1598c29a621.jpg',
'https://i.pinimg.com/originals/9b/36/24/9b36241f4a3b782c05eadb0805ef0dda.png',
'https://i.pinimg.com/originals/22/8b/ca/228bca60a07d72cac953a9c3be542bab.jpg',
'https://i.pinimg.com/originals/57/0e/9b/570e9b1288f1189a22b39c8e24ec957f.jpg',
'https://i.pinimg.com/originals/68/af/17/68af1781a9120a59629d0f774555185f.jpg',
'https://i.pinimg.com/originals/42/88/f1/4288f17ee25b909430fb7e707d961d0b.jpg',
'https://i.pinimg.com/originals/c8/0e/ee/c80eeea7a37d732d5a1b0e60464f9e18.jpg',
'https://i.pinimg.com/originals/1d/08/cb/1d08cbb9d42812984bed54e8291edaec.jpg',
'https://i.pinimg.com/originals/4e/37/02/4e37020a3e69f16cd04b246c2937b979.jpg',
'https://i.pinimg.com/originals/59/8e/bf/598ebf206f5ec366e2e32e8c6e8cffb4.jpg',
'https://i.pinimg.com/originals/cb/ef/94/cbef94975cfed070027c2175a730155d.jpg',
'https://i.pinimg.com/originals/e0/74/f8/e074f8dc647066a9f112533c789c0e42.png',
'https://i.pinimg.com/originals/60/ac/9e/60ac9edf63fcb43e3f00555cb71ae6f2.jpg',
'https://i.pinimg.com/originals/17/16/76/1716760d93dcbf7664380fd81f3133f5.jpg',
'https://i.pinimg.com/originals/a3/70/e1/a370e1f592136a385ac6cb15918d25f1.jpg',
'https://i.pinimg.com/originals/89/ee/ab/89eeabd90e54b2951459f81f51e2c791.jpg',
'https://i.pinimg.com/originals/77/0d/23/770d235d3f6dcd021bda5efdf53cca36.png',
'https://i.pinimg.com/originals/67/a7/54/67a754077a1ffc75c25b3c7bb04d2258.png',
'https://i.pinimg.com/originals/c3/1e/58/c31e58fae7f58af4d643c5a2facd49d7.jpg',
'https://i.pinimg.com/originals/0f/98/5f/0f985ffbfff2650d6e3ecf8ba0eb574e.jpg',
'https://i.pinimg.com/originals/93/0a/5f/930a5fc6f8f6e64e87ac2cc30b8430ac.jpg',
'https://i.pinimg.com/originals/1e/14/22/1e14229be49534cbf3d43b71b1738b80.jpg',
'https://i.pinimg.com/originals/35/04/d5/3504d53c5850b3bddaa6e0e0714ccacb.jpg',
'https://i.pinimg.com/originals/57/d9/20/57d920d58533915850b431bd0b8e1f1d.jpg',
'https://i.pinimg.com/originals/c2/4f/75/c24f7518e17faba4bf8908a39be604a6.jpg',
'https://i.pinimg.com/originals/7f/f5/46/7ff546b38e2969e578e697c44944b74f.jpg',
'https://i.pinimg.com/originals/bc/9b/81/bc9b81c63b4844fd1a434d462bdfbd80.png',
'https://i.pinimg.com/originals/d5/a2/c9/d5a2c9cdfac835518e45b13cfc39819d.jpg',
'https://i.pinimg.com/originals/d7/02/54/d7025401aec66a4baf0fbcbc1054b499.jpg',
'https://i.pinimg.com/originals/95/bb/2e/95bb2e7c8b71754003d063f39feb232a.jpg',
'https://i.pinimg.com/originals/ee/ee/fd/eeeefda1774a2d5dced265c1a2d398d5.jpg',
'https://i.pinimg.com/originals/c3/1e/58/c31e58fae7f58af4d643c5a2facd49d7.jpg',
'https://i.pinimg.com/originals/1f/9c/1d/1f9c1d5f4d2de0b74e81f190ab4f1792.jpg',
'https://i.pinimg.com/originals/7a/3b/e6/7a3be6cf1595fe6764b5b18b46ca576d.jpg',
'https://i.pinimg.com/originals/51/08/53/5108536a4826d3354ac3fe9c3c867cb1.png',
'https://i.pinimg.com/originals/77/cc/bc/77ccbcd52758458669ed5eadf4437111.jpg',
'https://i.pinimg.com/originals/51/0f/8c/510f8cb8f28b8666d560f89e2006d4b1.jpg',
'https://i.pinimg.com/originals/6f/9a/86/6f9a86eb31e7c5bc34cf0d1d130574e0.png',
'https://i.pinimg.com/originals/79/92/ed/7992ed0c9b272654938ea186cc2e3f4a.jpg',
'https://i.pinimg.com/originals/39/2c/cb/392ccb1793c5a23783869994b1ec24b7.jpg',
'https://i.pinimg.com/originals/3b/2c/02/3b2c020665f835b0dfdd74b8cc9ca22d.jpg',
'https://i.pinimg.com/originals/ee/cf/7c/eecf7cc7f65e5d503399cc88f0e6ef6c.jpg',
'https://i.pinimg.com/originals/4e/9a/7a/4e9a7a196cea58427163313b7db6363e.jpg',
'https://i.pinimg.com/originals/8b/f8/46/8bf8468935d529c6383771097381196a.jpg',
'https://i.pinimg.com/originals/f3/5d/ce/f35dce5f6742bd4f30033fe7b51335cc.jpg',
'https://i.pinimg.com/originals/94/a6/69/94a6692d5bd9ba0bbd80ba1e4122b2f9.jpg',
'https://i.pinimg.com/originals/8f/55/04/8f55043dfd9d244f172077bdc0304c6a.png',
'https://i.pinimg.com/originals/89/ee/ab/89eeabd90e54b2951459f81f51e2c791.jpg',
'https://i.pinimg.com/originals/83/5a/2e/835a2e582d1f803f03ab3a3c3e58b694.jpg',
'https://i.pinimg.com/originals/25/5d/d9/255dd9dde5f44673092a4f15e917759f.jpg',
'https://i.pinimg.com/originals/e2/f1/0e/e2f10ead12c9a2d7c0bb29442604f43d.jpg',
'https://i.pinimg.com/originals/f5/2a/09/f52a09910f1cad9b5b01d79a620870dc.jpg',
'https://i.pinimg.com/originals/d9/e1/30/d9e1307a5fbbeb2a267562eab8abc063.jpg',
'https://i.pinimg.com/originals/6a/4d/11/6a4d11cb5bab1466cf1ccb8c6c4f9eb6.jpg',
'https://i.pinimg.com/originals/f3/b7/37/f3b7376c2a574b8619c197bce72d1f63.png',
'https://i.pinimg.com/originals/93/0a/5f/930a5fc6f8f6e64e87ac2cc30b8430ac.jpg',
'https://i.pinimg.com/originals/30/78/75/307875a9132c6e704eec94bc31fd4f71.jpg',
'https://i.pinimg.com/originals/12/fa/7d/12fa7df7ba74ac00d846d8d490f7c8a4.jpg',
'https://i.pinimg.com/originals/68/f6/f3/68f6f37335624f89cda17ab928f51138.jpg',
'https://i.pinimg.com/originals/de/f6/e7/def6e7ce26ad6a1096e8b1ef395a1904.jpg',
'https://i.pinimg.com/originals/cc/17/be/cc17be94cd520baa4722e0ca2329c2e9.jpg',
'https://i.pinimg.com/originals/b3/c5/d1/b3c5d1076a9a48c075c8a92987b03bf3.jpg',
'https://i.pinimg.com/originals/2c/e6/02/2ce6025d9d1736cf3e67db1fd2bdaf35.jpg',
'https://i.pinimg.com/originals/31/07/53/310753699042b254fdfa0472a2675158.jpg',
'https://i.pinimg.com/originals/6b/87/9c/6b879cc29b5df23941dab4f4aafabcbd.jpg',
'https://i.pinimg.com/originals/52/90/0b/52900bab0f969d9d68207f6ad8510882.jpg',
'https://i.pinimg.com/originals/25/7e/db/257edb1b91a127bcf91cc2ea6b29edaf.jpg',
'https://i.pinimg.com/originals/63/6b/7b/636b7bd0e1df03f0bf72c494cedd6f07.png',
'https://i.pinimg.com/originals/8d/ad/58/8dad58f3b258b3d7f2e913cb4561d99f.jpg',
'https://i.pinimg.com/originals/8d/04/9a/8d049a1e6951491b24ea4c364f2459bc.jpg',
'https://i.pinimg.com/originals/fd/21/41/fd21419275236bb153de3c8dcbbf3bf9.jpg',
'https://i.pinimg.com/originals/80/4f/1a/804f1a05f9996c96a2d492b4854b7fd5.jpg'
]
