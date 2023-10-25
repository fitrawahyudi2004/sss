let handler = async (m, { conn, usedPrefix: _p, __dirname, text, command }) => {
  let imgr = flaaa.getRandom()
  let don = 'media/qr.png'
  let cap = `▷ DONASI BOT ◁
▪ Pulsa: ${global.ppulsa}
▫ Pulsa: ${global.ppulsa2}
▫ Dana: ${global.pdana}
▫ OVO: ${global.povo}
▪ Gopay: ${global.pgopay}

Semoga Anda diberikan kemudahan rezeki dan dilipatgandakan rezeki Anda.`
conn.sendMessage(m.chat, {
text: cap,
contextInfo: {
externalAdReply: {
title: v,
body: 'D O N A T E',
thumbnailUrl: imgr + command,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}

handler.help = ['donasi'];
handler.tags = ['info'];
handler.command = /^(donasi)$/i;

export default handler;