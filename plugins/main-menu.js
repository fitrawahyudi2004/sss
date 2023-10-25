import moment from "moment-timezone"
import express from 'express'
const app = express()
let handler = async (m, { conn, command }) => {
let name = await conn.getName(m.sender)  
let bots = global.namebot
 let ucpn = `${ucapan()}` 
let wib = moment.tz("Asia/Jakarta").format("HH:mm:ss")
let text = `
Hai Kak ${name} ${ucpn}
AI-ChatBot adalah Bot WhatsApp yang di buat oleh
seorang pelajar yang di bangun menggunakan bahasa pemrograman
Javascript dan di jalankan melalui NodeJs

Berikut merupakan list yang tersedia di AI-ChatBot

*.allmenu :* Menampilkan seluruh fitur yang tersedia di AI-ChatBot

*.simplemenu :* Menampilkan Menu Simple yang tersedia di AI-ChatBot

*.help :* Menampilkan Cara menggunakan fitur yang tersedia

Powered By FWD`
  
conn.sendMessage(m.chat, {
text:  text,
contextInfo: {
externalAdReply: {
title: wib,
thumbnailUrl: `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=${command.toUpperCase()}`,
sourceUrl: global.sig,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
   
      await conn.sendMessage(m.chat, {
        react: {
            text: global.emojis,
            key: m.key,
        }
    })
}

handler.help = ['menu']

handler.command = /^(menu)$/i

export default handler

function ucapan() {
        const hour_now = moment.tz('Asia/Jakarta').format('HH')
        var ucapanWaktu = 'Selamat Pagi'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'Selamat Pagi'
        } else if (hour_now >= '10' && hour_now <= '15') {
          ucapanWaktu = 'Selamat Siang'
        } else if (hour_now >= '15' && hour_now <= '17') {
          ucapanWaktu = 'Selamat Sore'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'Selamat Petang'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Selamat Malam'
        } else {
          ucapanWaktu = 'Selamat Malam'
        } 
        return ucapanWaktu
}