import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `Example: ${usedPrefix + command} https://api.lolhuman.xyz/api/instagram?apikey=fitra_wahyudi_&url=https://www.instagram.com/reel/CtoXnPyPeHD/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==`
let res = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=fitra_wahyudi_&url=${text}`)
if (!res.ok) throw await `Terjadi Kesalahan.`
let json = await res.json()
if (json.status != '200') throw `Terjadi kesalahan, coba lagi nanti.`
let get_result = json.result
m.reply(wait)
let ini_txt 
for (let r of get_result) 
conn.sendFile(m.chat, r, null, wm, m)
}

handler.help = ['igdl']
handler.tags = ['downloader']
handler.command = /^igdl/i

handler.limit = true

export default handler
