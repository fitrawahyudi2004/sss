import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let krtu = `0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
「 Jawaban Prak. Algoritma 」

LINK = https://bit.ly/jawaban-prak-algoritma

╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙

`
m.reply(krtu)
}

  handler.command = /^(prakalgoritma)$/i
  handler.register = true
  
  export default handler
 