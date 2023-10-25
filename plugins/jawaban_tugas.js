import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let name = await conn.getName(m.sender)
let krtu = `

0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       「 Jawaban Tugas 」

Halo kak ${name}, kamu mau liat tugas apa ?

 1. Prak. Algoritma dan Pemrograman
    command : ${usedPrefix}prakalgoritma

 2. Algoritma dan Pemrograman
    command : ${usedPrefix}algoritma
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙

By Fitra Wahyudi
`
m.reply(krtu)
}

  handler.command = /^(jawabantugas)$/i
  handler.register = true
  
  export default handler
 