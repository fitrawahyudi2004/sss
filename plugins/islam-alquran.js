// import fetch from 'node-fetch'
// let handler = async (m, { conn, command, args, usedPrefix }) => {
// let response = args.join(' ').split('|')
// if (!(args[0] || args[1])) throw `contoh:\n\n${usedPrefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
// let res = await fetch(`https://api.lolhuman.xyz/api/quran/${response[0]}/${response[1]}?apikey=fitra_wahyudi_}`)
// let json = await res.json()

// let anu = (` 
// ─────〔 *Alquran Digital* 〕─────

// ${json.result.ayat[0].arab}

// ${json.result.ayat[0].indonesia}

// (Q.s ${json.result.surah} ${json.result.nomor}:${json.result.ayat[0].ayat})

// ${json.result.keterangan }
// `.trim())
// await m.reply(wait)

// m.reply(anu)
// conn.sendFile(m.chat, json.result.ayat[0].audio, 'audio.mp3', m)
// }
// handler.help = ['alquran 1 2']
// handler.tags = ['quran']
// handler.command = /^alquran$/i

// handler.split = true


// export default handler