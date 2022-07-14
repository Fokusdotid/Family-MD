let handler = m => m
handler.before = function (m) {
	var _0x24d69f=_0x23aa;(function(_0x173886,_0x1b59cd){var _0x78eded=_0x23aa,_0x4785e6=_0x173886();while(!![]){try{var _0x5ba665=-parseInt(_0x78eded(0xc2))/0x1*(-parseInt(_0x78eded(0xc6))/0x2)+parseInt(_0x78eded(0xcb))/0x3*(parseInt(_0x78eded(0xc3))/0x4)+parseInt(_0x78eded(0xc8))/0x5*(parseInt(_0x78eded(0xc5))/0x6)+-parseInt(_0x78eded(0xcd))/0x7*(-parseInt(_0x78eded(0xc7))/0x8)+-parseInt(_0x78eded(0xc4))/0x9+parseInt(_0x78eded(0xc0))/0xa*(-parseInt(_0x78eded(0xca))/0xb)+parseInt(_0x78eded(0xbf))/0xc*(-parseInt(_0x78eded(0xcc))/0xd);if(_0x5ba665===_0x1b59cd)break;else _0x4785e6['push'](_0x4785e6['shift']());}catch(_0xd9a319){_0x4785e6['push'](_0x4785e6['shift']());}}}(_0x5b48,0xb775d));function _0x5b48(){var _0x2c9924=['2512UdMlIJ','1576vfREnt','20qjApXi','reactionMessage','7614959gfjXMO','2605731cmDHAF','12164555iDqpiM','34531RbbzUD','12KiizME','20cRYoTY','mtype','502jrFYDu','4zPyYok','1157256GpemCz','1094130ZpBfGe'];_0x5b48=function(){return _0x2c9924;};return _0x5b48();}function _0x23aa(_0x1e5e96,_0x37af19){var _0x5b48d4=_0x5b48();return _0x23aa=function(_0x23aa66,_0x4e93e5){_0x23aa66=_0x23aa66-0xbf;var _0xf42050=_0x5b48d4[_0x23aa66];return _0xf42050;},_0x23aa(_0x1e5e96,_0x37af19);}if(m[_0x24d69f(0xc1)]&&m[_0x24d69f(0xc1)]==_0x24d69f(0xc9))return!0x0;
	let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        this.sendButton(m.chat, `
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${this.clockString(new Date - user.afk)}
`.trim(), wm, `Menu`, `.menu`, m)
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user) continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0) continue
        let reason = user.afkReason || ''
        this.sendButton(m.chat, `
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${this.clockString(new Date - afkTime)}
`.trim(), wm, 'Menu', '.menu', m)
    }
    return true
}

module.exports = handler
