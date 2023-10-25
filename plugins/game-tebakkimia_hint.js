let handler = async (m, { conn }) => {
    conn.tebakkimia = conn.tebakkimia ? conn.tebakkimia : {}
    let id = m.chat
    if (!(id in conn.tebakkimia)) throw false
    let json = conn.tebakkimia[id][1]
    conn.reply(m.chat, '```' + json.result.lambang.replace(/[AIUEOaiueo]/ig, '_') + '```', m)
}
handler.command = /^tekim$/i

handler.limit = 10

export default handler