import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, command }) => {
  let res = await fetch('https://api.botcahx.live/api/muslim/tahlil?apikey=fitra_wahyudi_')
  //if (!res.ok) throw await res.json()
  let asup = await res.json()
  let hasil = `─────〔 *Tahlil* 〕─────`
  let anuResult = asup.result.data
  for (let x of anuResult){
    hasil += `\n\n\n*${x.title}*`
    hasil += `\n\n${x.arabic}`
    hasil += `\n\n${x.translation}`
  }
  m.reply(hasil)
}
handler.help = ['tahlil']
handler.tags = ['quran']

handler.command = /^(tahlil)$/i

export default handler
