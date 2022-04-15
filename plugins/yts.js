let yts = require('yt-search')
let handler = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, 'Cari apa?', m)
  let results = await yts(text)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
*Judul:* ${v.title} 
*Link:* (${v.url})
*Duration:* ${v.timestamp}
*Uploaded:* ${v.ago}
*Viewer:* ${v.views} 
 `.trim()
      case 'channel': return `
*Chanel:* ${v.name} 
*Link:* (${v.url})
*Subscriber:* ${v.subCountLabel} (${v.subCount})
*Total Video:* ${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n\n*=========================*\n\n')
 conn.reply(m.chat, '*───「 Youtube Search 」───*\n\n' + teks, m)
}
handler.help = ['ytsearch <query>']
handler.tags = ['tools', 'internet']
handler.command = /^yts(earch)?$/i

module.exports = handler
