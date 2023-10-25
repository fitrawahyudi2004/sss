let handler = async (m, { conn }) => {
    conn.tebaksurah = conn.tebaksurah ? conn.tebaksurah : {}
    let id = m.chat
    if (!(id in conn.tebaksurah)) throw false
    let json = conn.tebaksurah[id][1]
    let nya = json.surah.englishName
    let nyanya = nya.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')
    m.reply('```' + nyanya + '```')
}
handler.command = /^hsur$/i

handler.limit = true

export default handler