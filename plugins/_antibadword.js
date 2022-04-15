let handler = m => m

let badwordRegex = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole/i // tambahin sendiri

handler.before = function (m, { isOwner, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe && isOwner) return !0
    let chat = db.data.chats[m.chat]
    let user = db.data.users[m.sender]
    let isBadword = badwordRegex.exec(m.text)

    if (!chat.antiBadword && !chat.isBanned && !user.banned && isBadword && !isOwner && !isAdmin) {
        user.warning += 1
        this.send2Button(m.chat, `*Badword terdeteksi!*
Warning: ${user.warning} / 10
Jika warning mencapai 10 kamu akan *dibanned+kick*

ketik *#on antibadword* untuk menyalakan antibadword
ketik *#astagfirullah* atau *#maaf* untuk mengurangi warning

“Barang siapa yang beriman kepada Allah dan Hari Akhir maka hendaklah dia berkata baik atau diam” (HR. al-Bukhari dan Muslim).`, wm, 'MATIKAN ANTIBADWORD', '.off antibadword', 'ASTAGHFIRULLAH', '.maaf', m)
        if (user.warning >= 10) {
            user.banned = true
            if (m.isGroup) {
                if (isBotAdmin) {
                	this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
                   //this.groupSettingChange(m.chat, GroupSettingChange.messageSend, false)
                }
            }
        }
    }
    return !0
}
module.exports = handler