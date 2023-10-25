import {
  promises,
  readFileSync
} from "fs"
import {
  join
} from "path"
import {
  xpRange
} from "../lib/levelling.js"
import moment from "moment-timezone"
import os from "os"
import fs from "fs"
import fetch from "node-fetch"

let emot = `${pickRandom(['⎔', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '▢', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚝', '⚚', '♪'])}`
   let tags = {
   'ephoto': '*EPHOTO 360*',
}   
const defaultMenu = {
before: ` `.trimStart(),
header: '〆 %category \n',
body: `${emot} %cmd %isPremium %islimit`,
footer: '\n',
after: `${footer}`,
}

let handler = async (m, {
  conn,
  usedPrefix: _p,
  __dirname,
  args,
  command,
  usedPrefix
}) => {
try {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//  let name = await conn.getName(who)
  let names = await conn.getName(who)
  let imgr = flaaa.getRandom()
  await conn.sendMessage(m.chat, {
      react: {
          text: "⏳",
          key: m.key,
      }
  })  
//  let tags
 //  let teks = `${args[0]}`.toLowerCase()

      // DEFAULT MENU
      let dash = global.dashmenu
      let m1 = global.dmenut
      let m2 = global.dmenub
      let m3 = global.dmenuf
      let m4 = global.dmenub2

      // COMMAND MENU
      let cc = global.cmenut
      let c1 = global.cmenuh
      let c2 = global.cmenub
      let c3 = global.cmenuf
      let c4 = global.cmenua

      // LOGO L P
      let lprem = global.lopr
      let llim = global.lolm
      let tag = `@${m.sender.split("@")[0]}`

      /* Gobal */
      let glb = global.db.data.users
      let usrs = glb[m.sender]
      let wib = moment.tz("Asia/Jakarta").format("HH:mm:ss")
      let wibh = moment.tz("Asia/Makassar").format("HH")
      let wibm = moment.tz("Asia/Makassar").format("mm")
      let wibs = moment.tz("Asia/Makassar").format("ss")
      const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
      let wita = moment.tz("Asia/Makassar").format("HH:mm:ss")
      let waktuwita = `${wibh} H ${wibm} M ${wibs} S`

      /* Info Menu */
      let mode = global.opts["self"] ? "Private" : "Publik"
      let _package = JSON.parse(await promises.readFile(join(__dirname, "../package.json")).catch(_ => ({}))) || {}
      let {
          age,
          exp,
          limit,
          level,
          role,
          registered,
          money
      } = glb[m.sender]
      let {
          min,
          xp,
          max
      } = xpRange(level, global.multiplier)
      let name = await conn.getName(m.sender)
      let premium = glb[m.sender].premiumTime
      let prems = `${premium > 0 ? "Premium": "Free"}`
      let platform = os.platform()
      let nbot = global.nameBot
      //-----------TIME---------
      let ucpn = `${ucapan()}`
      let d = new Date(new Date + 3600000)
      let locale = "id"
      // d.getTimeZoneOffset()
      // Offset -420 is 18.00
      // Offset    0 is  0.00
      // Offset  420 is  7.00
      let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][Math.floor(d / 84600000) % 5]
      let week = d.toLocaleDateString(locale, {
          weekday: "long"
      })
      let date = d.toLocaleDateString(locale, {
          day: "numeric",
          month: "long",
          year: "numeric"
      })
      let dateIslamic = Intl.DateTimeFormat(locale + "-TN-u-ca-islamic", {
          day: "numeric",
          month: "long",
          year: "numeric"
      }).format(d)
      let time = d.toLocaleTimeString(locale, {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
      })
      let _uptime = process.uptime() * 1000
      let _muptime
      if (process.send) {
          process.send("uptime")
          _muptime = await new Promise(resolve => {
              process.once("message", resolve)
              setTimeout(resolve, 1000)
          }) * 1000
      }
      let muptime = clockString(_muptime)
      let uptime = clockString(_uptime)
      let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mpt = clockString(_mpt)
      let totalfeatures = Object.values(global.plugins).filter((v) => v.help && v.tags).length;
      let totalreg = Object.keys(glb).length
      let rtotalreg = Object.values(glb).filter(user => user.registered == true).length
      let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
          return {
              help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
              tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
              prefix: "customPrefix" in plugin,
              limit: plugin.limit,
              premium: plugin.premium,
              enabled: !plugin.disabled,
          }
      })
      let groups = {}
      for (let tag in tags) {
          groups[tag] = []
          for (let plugin of help)
              if (plugin.tags && plugin.tags.includes(tag))
                  if (plugin.help) groups[tag].push(plugin)
      }
      conn.menu = conn.menu ? conn.menu : {}
      let before = conn.menu.before || defaultMenu.before
      let header = conn.menu.header || defaultMenu.header
      let body = conn.menu.body || defaultMenu.body
      let footer = conn.menu.footer || defaultMenu.footer
      let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? "" : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
      let _text = [
          before,
          ...Object.keys(tags).map(tag => {
              return header.replace(/%category/g, tags[tag]) + "\n" + [
                  ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
                      return menu.help.map(help => {
                          return body.replace(/%cmd/g, menu.prefix ? help : "%_p" + help)
                              .replace(/%islimit/g, menu.limit ? "Ⓛ" : "")
                              .replace(/%isPremium/g, menu.premium ? "🅟" : "")
                              .trim()
                      }).join("\n")
                  }),
                  footer
              ].join("\n")
          }),
          after
      ].join("\n")
      let text = typeof conn.menu == "string" ? conn.menu : typeof conn.menu == "object" ? _text : ""
      let md = fs.readFileSync('./thumbnail.jpg')
      let replace = {
          "%": "%",
          p: _p,
          uptime,
          muptime,
          me: conn.getName(conn.user.jid),
          npmname: _package.name,
          npmdesc: _package.description,
          version: _package.version,
          exp: exp - min,
          maxexp: xp,
          totalexp: exp,
          xp4levelup: max - exp,
          github: _package.homepage ? _package.homepage.url || _package.homepage : "[unknown github url]",
          tag,
          dash,
          m1,
          m2,
          m3,
          m4,
          cc,
          c1,
          c2,
          c3,
          c4,
          lprem,
          prems,
          llim,
          ucpn,
          platform,
          wib,
          wit,
          wita,
          mode,
          _p,
          money,
          age,
          tag,
          prems,
          level,
          limit,
          name,
          names,
          weton,
          week,
          date,
          dateIslamic,
          time,
          totalreg,
          totalfeatures,
          rtotalreg,
          role,
          readmore: readMore
      }
      text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, "g"), (_, name) => "" + replace[name])
      const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => "./src/avatar_contact.png")
      //FAKE TROLI

  const ftrol = {

      key : {
  
      remoteJid: 'status@broadcast',
  
      participant : '0@s.whatsapp.net'
  
      },
  
      message: {
  
      orderMessage: {
  
      itemCount : 2022,
  
      status: 1,
  
      surface : 1,
  
      message: `Hai Kak ${name}!`, 
  
      orderTitle: `▮Menu ▸`,
  
      thumbnail: await (await fetch(fla + 'Menu')).buffer(), //Gambarnye
  
      sellerJid: '0@s.whatsapp.net' 
  
      }
  
      }
  
      }


      //------------------< MENU All>----------------
let all = `
Hallo kak ${name},
${ucapan()}, Saya adalah WhatsApp Bot yang dilengkapi dengan fitur keren seperti unduhan tiktok, membuat stiker, mencari lagu, dan banyak lagi saya di sini untuk membantu Anda, dalam berbagai cara, termasuk pengiriman, dan dll. Fitur yang tersedia ada di bawah ini

┌–––––––––––––––––✥
┊   「 *I N F O  B O T 克* 」
┊ Uptime : ${mpt}
┊ Database : ${totalreg}
┊ Baileys: Multi Device
┊ Prefix Used : *[ ${usedPrefix} ]*
┊ OS Platform : ${os.platform()}
┊ Battery: ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
┗––––––––––––––––––✥

┌–––––––––––––––––✥
┊  「 *I N F O  U S E R 克* 」
┊ Name : ${usrs.registered ? usrs.name : conn.getName(m.sender)}
┊ Status : ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}
┊ Premium : ${prems}
┊ Limit : ${limit} / day
┊ Role : ${role}
┗––––––––––––––––––✥

┌–––––––––––––––––✥
┊   「 *I N F O  T I M E 克* 」
┊  Tanggal : ${date}
┊  Tanggal Islam: ${dateIslamic}
┊  Hari : ${week} 
┊  Weton : ${weton}
┊  WIB : ${wib}
┊  WITA : ${wita}
┊  WIT : ${wit}
┗––––––––––––––––––✥

*INFO CMD*
     
*Ⓟ* = Premium
*Ⓛ* = Limit

Note : Jika Anda menemukan kesalahan, laporkan segera dengan mengetik .report selamat siang kak fitur download tiktok error
`
conn.sendMessage(m.chat, {
text: all + readMore + '\n\n' + text,
contextInfo: {
externalAdReply: {
title: v,
thumbnailUrl: menu,
sourceUrl: global.sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
   
      await conn.sendMessage(m.chat, {
        react: {
            text: global.emojis,
            key: m.key,
        }
    })
  } catch (e) {
      conn.reply(m.chat, "Maaf, menu sedang error", m)
      throw e
  }
}
handler.help = ['menuephoto']
handler.command = /^(menuephoto)$/i
handler.register = true
handler.exp = 3

export default handler
//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60
  return [h, " H ", m, " M ", s, " S "].map(v => v.toString().padStart(2, 0)).join("")
}

function clockStringP(ms) {
  let ye = isNaN(ms) ? "--" : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? "--" : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? "--" : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60
  return [ye, " *Years 🗓️*\n", mo, " *Month 🌙*\n", d, " *Days ☀️*\n", h, " *Hours 🕐*\n", m, " *Minute ⏰*\n", s, " *Second ⏱️*"].map(v => v.toString().padStart(2, 0)).join("")
}

function ucapan() {
  const time = moment.tz("Asia/Makassar").format("HH")
  let res = "Selamat DiniHari ☀️"
  if (time >= 4) {
      res = "Good Morning 🌄"
  }
  if (time >= 10) {
      res = "Good Afternoon ☀️"
  }
  if (time >= 15) {
      res = "Good Afternoon 🌇"
  }
  if (time >= 18) {
      res = "Good Night 🌙"
  }
  return res
}