import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let res = await fetch(`https://api.lolhuman.xyz/api/jadwalbola?apikey=${global.lolkey}`)
if (!res.ok) throw await `Terjadi Kesalahan.`
let json = await res.json()
if (json.status != '200') throw `Terjadi kesalahan, coba lagi nanti.`
let get_result = json.result
m.reply(wait)
let ini_txt = `*Jadwal Bola*\n\n`
for (let x of get_result) {
	ini_txt += `\n\nTime : ${x.time}`
	ini_txt += `\nEvent : ${x.event}\n`
	ini_txt += `Match :${x.match}\n`
	ini_txt += `Tv : ${x.tv}\n`
	ini_txt += `───────────────────\n`
}
m.reply(ini_txt)
}

handler.help = ['jadwalbola']
handler.tags = ['internet']
handler.command = /^jadwalbola/i

handler.limit = true

export default handler
