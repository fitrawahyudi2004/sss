let handler = async (m, { conn, command, text, args }) => {
    if (!text) throw 'Berapa Limit Sayang?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag??'
    let users = global.db.data.users
    users[who].limit += 10
    conn.reply(m.chat, 'Sukses', m)
}
handler.help = ['addlimit']
handler.tags = ['owner']
handler.command = /^addlimit(user)?$/i
handler.rowner = true

export default handler