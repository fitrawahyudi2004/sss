import fetch from 'node-fetch'
let handler = async (m, { conn, command, args,usedPrefix }) => {
let imgr = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Jadwal Tv`	
let res = await fetch(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=fitra_wahyudi_`)
let json = await res.json()
await m.reply(wait)
let anu = (` 
─────〔 *Jadwal Tv Now* 〕─────

*Indosiar :* ${json.result.indosiar}

*Mnctv :* ${json.result.mnctv}

*Trans tv :* ${json.result.transtv}

*Antv :* ${json.result.antv}

*Gtv :* ${json.result.gtv}

*Rcti :* ${json.result.rcti}

*Sctv :* ${json.result.sctv}

*Tvone :* ${json.result.tvone}

*Metro Tv :* ${json.result.metrotv}

*Trans7 :* ${json.result.trans7}

*Net Tv :* ${json.result.nettv}

*Tvri :* ${json.result.tvri}

*Kompas Tv :* ${json.result.kompastv}

*Rtv :* ${json.result.rtv}

*Inews Tv :* ${json.result.inewstv}

`.trim())
conn.sendFile(m.chat, imgr, null, anu, m)
}
handler.help = ['jadwaltvnow']
handler.tags = ['internet']
handler.command = /^jadwaltvnow$/i

handler.register = true
handler.split = true


export default handler