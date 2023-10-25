import fetch from 'node-fetch'
let handler = async (m, { conn, command, text, args,usedPrefix }) => {
let imgr = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=CUACA`

let res = await fetch(`http://api.weatherapi.com/v1/current.json?key=ef2d2c6864f04dd196d201850232805&q=${text}&aqi=no`)
let json = await res.json()

await m.reply(wait)
let anu = (` 
─────〔 *Weather* 〕─────

City : ${json.location.name}
Region : ${json.location.region}
Country : ${json.location.country}
Lattitude : ${json.location.lat}
Longitude : ${json.location.lon}
Country ID : ${json.location.tz_id}
Time : ${json.location.localtime}
Temperature Celcius : ${json.current.temp_c} °c
Temperatur Fahrenheit : ${json.current.temp_f} °f
Condition : ${json.current.condition.text}
Wind Mph : ${json.current.wind_mph} Mph
Wind Kph : ${json.current.wind_kph} Kph
Wind Degree : ${json.current.wind_degree}
Pressure : ${json.current.pressure_in}

${wm}
`.trim())

conn.sendFile(m.chat, imgr, null, anu, m)
}
handler.help = ['cuaca <kota>']
handler.tags = ['internet']
handler.command = /^cuaca$/i

handler.register = true
handler.split = true


export default handler