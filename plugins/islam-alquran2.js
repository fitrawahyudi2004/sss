import fetch from 'node-fetch'
let handler = async (m, { conn, command, args,usedPrefix }) => {
//let response = args.join(' ').split('|')
if (!(args[0] || args[1])) throw `contoh:\n\n${usedPrefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
let res = await fetch(`https://quran-api-id.vercel.app/surahs/${args[0]}/ayahs/${args[1]}`)
let json = await res.json()
let img = json.image.secondary
let anu = (` 
─────〔 *Alquran Digital* 〕─────

${json.arab}

*Surah ke* : ${args[0]}
*Ayat Ke :* ${args[1]} dalam Surah
*Ayat Ke :* ${json.number.inQuran} dalam Alquran
*Juz Ke :* ${json.meta.juz}
*Halaman ke :* ${json.meta.page}
*Artinya :* ${json.translation}
*Audio :* Syekh Mishari Rashid Al Fasy

*Tafsir Kemenag :* ${json.tafsir.kemenag.long}

*Tafsir Quraish Syihab :* ${json.tafsir.quraish}

*Tafsir Jalalayn :* ${json.tafsir.jalalayn}
`.trim())
await m.reply(wait)
conn.sendFile(m.chat, img, 'hasil.jpg', anu, m)
conn.sendFile(m.chat, json.audio.alafasy, 'audio.mp3', m)
// conn.sendFile(m.chat, json.audio.ahmedajamy, 'audio.mp3', m)
// conn.sendFile(m.chat, json.audio.muhammadayyoub, 'audio.mp3', m)
// conn.sendFile(m.chat, json.audio.muhammadjibreel, 'audio.mp3', m)
// conn.sendFile(m.chat, json.audio.husarymujawwad, 'audio.mp3', m)
// conn.sendFile(m.chat, json.audio.minshawi, 'audio.mp3', m)
}
handler.help = ['alquran namasurah ayat ke']
handler.tags = ['quran']
handler.command = /^alquran$/i
handler.limit = true

handler.split = true


export default handler