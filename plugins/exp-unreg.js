import { createHash } from 'crypto'

let handler = async function (m, { args, usedPrefix, command }) {
  if (!args[0]) {
    return m.reply(`
🚫 *Silahkan Masukkan Serial Number*
Contoh: *${usedPrefix}${command} 12345678*
    `)
  }

  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')

  if (args[0] !== sn) {
    return m.reply(`
🚫 *Serial Number Anda Salah.*
Silahkan Masukkan Serial Number yang benar
Contoh: *${usedPrefix}${command} dawdafasjd6ad8999*
    `)
  }

  user.registered = false

  return m.reply(`
✅ *Kamu berhasil unregister*
Terima Kasih telah menggukan BOT.
  `)
}

handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <SN|SERIAL NUMBER>')
handler.tags = ['xp']
handler.command = /^unreg(ister)?$/i
handler.register = true

export default handler
