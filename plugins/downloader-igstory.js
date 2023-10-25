import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `Example: ${usedPrefix + command} fitra_wahyudi_`
let res = await fetch(`https://api.zahwazein.xyz/downloader/instagram/story?apikey=zenzkey_5ecc47890c&username=${text}`)
if (!res.ok) throw await `Terjadi Kesalahan.`
let json = await res.json()
// if (json.status != '200') throw `Terjadi kesalahan, coba lagi nanti.`
let get_result = json.result
m.reply(wait)
let ini_txt 
for (let r of get_result) 

conn.sendFile(m.chat, r.url, null, "Nih Kk",m)
}

handler.help = ['igstory <username>']
handler.tags = ['downloader']
handler.command = /^igstory/i

handler.limit = true

export default handler
