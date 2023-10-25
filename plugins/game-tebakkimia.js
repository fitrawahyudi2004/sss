import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {
let imgr = flaaa.getRandom()

    conn.tebakkimia = conn.tebakkimia ? conn.tebakkimia : {}
    let id = m.chat
    if (id in conn.tebakkimia) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakkimia[id][0])
        throw false
    }
    let src = await (await fetch('https://api.lolhuman.xyz/api/tebak/unsurkimia?apikey=fitra_wahyudi_'))
    let json = await src.json()
  let caption = `*${command.toUpperCase()}*

${json.result.nama}
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}tekim untuk bantuan
Bonus: ${poin} XP
    `.trim()
    conn.tebakkimia[id] = [
         await conn.sendFile(m.chat, `${imgr + command}`, null, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkimia[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.result.lambang}*`, conn.tebakkimia[id][0])
            delete conn.tebakkimia[id]
        }, timeout)
    ]
}
handler.help = ['tebakkimia']
handler.tags = ['game']
handler.command = /^tebakkimia/i

export default handler