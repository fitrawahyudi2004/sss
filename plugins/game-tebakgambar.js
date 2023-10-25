import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {


    conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
    let id = m.chat
    if (id in conn.tebakgambar) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakgambar[id][0])
        throw false
    }
    let src = await (await fetch('https://api.botcahx.live/api/game/tebakgambar?apikey=fitra_wahyudi_'))
    let json = await src.json()
  let caption = `*${command.toUpperCase()}*

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}tegam untuk bantuan
Bonus: ${poin} XP
    `.trim()
    conn.tebakgambar[id] = [
        await conn.sendFile(m.chat, json.image, "nih.jpg", caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakgambar[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.result.jawaban}*`, conn.tebakgambar[id][0])
            delete conn.tebakgambar[id]
        }, timeout)
    ]
}
handler.help = ['tebakgambar']
handler.tags = ['game']
handler.command = /^tebakgambar/i

export default handler