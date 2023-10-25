import fetch from 'node-fetch'
let handler = async (m, { text, command, conn, usedPrefix }) => {

  if (!text) throw `Masukan teks berbahasa inggris untuk diubah menjadi gambar\n\nContoh : ${usedPrefix + command} a women in forest `

  let response = await fetch(`https://api.lolhuman.xyz/api/dall-e?apikey=fitra_wahyudi_&text=${text}`)
  let image = await response.buffer()
  await m.reply("Tunggu sebentar AI sedang mengubah teks menjadi gambar")
  conn.sendFile(m.chat, image, 'aiimg.jpg', wm, m)

}
handler.help = ['aiimage']
handler.command =['aiimage']
handler.tags = ['openai','premium']
handler.limit = true
handler.premium = true
handler.register = true

export default handler