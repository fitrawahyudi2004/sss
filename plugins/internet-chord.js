import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let imgr = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Chord Lagu`	
if (!text) throw `${usedPrefix + command} Orang yang sama`
let res = await fetch (`https://api.lolhuman.xyz/api/chord?apikey=fitra_wahyudi_&query=${text}`)    
let json = await res.json()
let inus = (`
─────〔 *Chord Lagu* 〕─────

*Title :* ${json.result.title}
*Created :* ${json.result.created}
*Modified By :* ${json.result.modified.last_name}

${json.result.chord}	
	`)
conn.sendFile(m.chat, imgr, null, inus, m)
}

handler.help = ['chord'].map(v => v + ' <judul>')
handler.tags = ['internet']
handler.command = /^(chord)$/i

export default handler