const { default: fetch } = require('node-fetch')
const { createWriteStream, existsSync } = require('fs')
const { promisify } = require('util')
const { join } = require('path')

let confirmation = {}
let repository = 'fokusdotid/family-md'
let branch = 'main'

async function handler(m, { text }) {
    let res = await fetch(`https://raw.githubusercontent.com/${repository}/${branch}/${text}`)
    if (!res.ok) throw await res.text()
    let filename = join(__dirname, '..', text)
    if (existsSync(filename)) {
        confirmation[m.sender] = {
            res,
            filename,
            text,
            timeout: setTimeout(() => (conn.send2Button(m.chat, `Timeout, do you want update again?`, wm, `Yes`, `.u2 ${text}`, `No`, `n`, m), delete confirmation[m.sender]), 60000)
        }
        return conn.send2Button(m.chat, `The file already exists, are you sure you want to overwrite it?  (Y/n) (60s Timeout)`, wm, `Yes`, `y`, `No`, `n`, m)
    }
    res.body.pipe(createWriteStream(filename))
    res.body.once('end', () => {
        m.reply('Update successfully!')
        conn.sendFile(m.chat, filename, text, null, m).catch(console.error)
    })
}

handler.all = async m => {
    if (!(m.sender in confirmation)) return
    let { res, filename, text, timeout } = confirmation[m.sender]
    if (/^y(es|a)?$/i.test(m.text)) {
        res.body.pipe(createWriteStream(filename))
        res.body.once('end', () => {
            m.reply('Done overwrite!')
            conn.sendFile(m.chat, filename, text, null, m).catch(console.error)
        })
        clearTimeout(timeout)
        delete confirmation[m.sender]
        return !0
    } else if (/^no?$/i.test(m.text)) {
        delete confirmation[m.sender]
        m.reply('Rejected')
        clearTimeout(timeout)
        return !0
    }
}
handler.help = ['update2']
handler.tags = ['host']
handler.command = ['update2', 'u2', 'uopdate2', 'uo2'] //ANJIRRR VVIBU

handler.rowner = true

module.exports = handler
