import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `Example: ${usedPrefix + command} SPXID032636284`
let res = await fetch(`https://api.binderbyte.com/v1/track?api_key=492365b89f8317b2bf1fbc91719308f281730f2a0f190e174e8f0453ed1720e4&courier=spx&awb=${encodeURIComponent(text)}`)
if (!res.ok) throw await `Terjadi Kesalahan.`
let json = await res.json()
if (json.status != '200') throw `Terjadi kesalahan, coba lagi nanti.`
let get_result = json.data.history
m.reply(wait)
let ini_txt = `
─────〔 *Lacak Paket Shopee* 〕─────

*No Resi :* ${json.data.summary.awb}
*Service :* ${json.data.summary.service}
*Status :* ${json.data.summary.status}
*Date :* ${json.data.summary.date}
*Receiver :*${json.data.detail.receiver}
`
for (var x of get_result) {
	ini_txt += `\n\n${x.date}`
	ini_txt += `\n${x.desc}\n`
	ini_txt += `───────────────────\n`
}
m.reply(ini_txt)
}

handler.help = ['lacakshopee']
handler.tags = ['lacak']
handler.command = /^lacakshopee/i

handler.limit = true

export default handler
