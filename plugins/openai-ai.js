import fetch from 'node-fetch'
let handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `
await m.reply(wait)
  let apii = await fetch(`https://api.lolhuman.xyz/api/openai-turbo?apikey=fitra_wahyudi_&text=${text}&system=`)
  let js = await apii.json()
let hm = text.toUpperCase()
 m.reply(`
 
Pertanyaan Anda : 
${hm}
 
Jawaban AI : 
${js.result}
 
 `)
}      
handler.command = handler.help = ['ai','openai','chatgpt'];
handler.tags = ['openai'];
handler.premium = false
handler.limit = true
export default handler
