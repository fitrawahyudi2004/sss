import fetch from "node-fetch";
import api from "dhn-api"
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!text) throw `Masukkan ID Pelanggan\n\nContoh : ${usedPrefix + command} 126100003782`
let img = 'https://i.postimg.cc/sX6JRVt2/pln.jpg'	
let buffer = await fetch(`https://api.lolhuman.xyz/api/tagihanlistrik/${text}?apikey=fitra_wahyudi_`)
let json = await buffer.json()
m.reply(wait)
let ingus = (`
 ─────〔 *Info Tagihan Listrik* 〕─────

*Id Pelanggan :* ${json.result.id}
*Nama Pelanggan :* ${json.result.name}
*Jumlah Tagihan :* Rp. ${json.result.amount}

Powered By FWD
	`.trim())
conn.sendFile(m.chat, img, null, ingus, m)
}
handler.help = ['cektagihanlistrik <id pelanggan>']
handler.tags = ['internet']
handler.command = /^(cektagihanlistrik)$/i;
export default handler;
