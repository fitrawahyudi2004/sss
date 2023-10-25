import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${usedPrefix + command} Orang yang sama`
let res = await fetch (`https://api.zahwazein.xyz/searching/liriklagu?query=${text}&apikey=zenzkey_5ecc47890c`)    
let json = await res.json()
conn.sendFile(m.chat, json.result.thumb, null, json.result.lirik, m)
}

handler.help = ['lirik'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric)$/i

export default handler