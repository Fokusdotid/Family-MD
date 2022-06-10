let fetch = require('node-fetch')
let handler = m => m
let levelling = require('../lib/levelling')
handler.before = async function (m) {
        let user = global.db.data.users[m.sender]
        let users = Object.entries(global.db.data.users).map(([key, value]) => {
                return { ...value, jid: key }
        })
        let pp = 'https://telegra.ph/file/4acb59eadbcad0093defd.png'
        let who = m.sender
        let discriminator = who.substring(9, 13)
        let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
        let usersLevel = sortedLevel.map(enumGetKey)
        let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
        try {
                pp = await this.profilePictureUrl(who, 'image')
        } catch (e) {

        } finally {

                if (!user.autolevelup) return !0
                let before = user.level * 1
                while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++

                if (before !== user.level) {
                        let rank = (await fetch(API('males', '/levelup', {
                                profile: pp
                        }),
                        )).buffer()
                        .then(async data => {
                        	await this.sendTemplateButtonFakeImg(m.chat, data, `_*Level Up!*_\n_${before}_ -> _${user.level}_`.trim(), wm, `Claim`, `.claim`)
                              //  conn.sendButtonLoc(m.chat, data, `_*Level Up!*_\n_${before}_ -> _${user.level}_`.trim(), wm, `Claim`, `.claim`)
                                //await this.sendButtonImg(m.chat, `_*Level Up!*_\n_${before}_ -> _${user.level}_`.trim(), data, wm, 'CLAIM', ',claim', m)
                        })
                }
        }
}
module.exports = handler

function sort(property, ascending = true) {
        if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
        else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
        if (property) return (a, i, b) => {
                return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
        }
        else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
        return a.jid
}
