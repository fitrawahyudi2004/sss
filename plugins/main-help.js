let handler = async (m, { conn }) => {

   let text = `
*Fitur AI-ChatBot* 

 - *Pembuat stiker* : ketik *'.stiker'* untuk membuat stiker. 
 - *IG Downloader* : ketik *'.igdl'* untuk mengunduh video atau foto dari Instagram. 
 - *Tiktok Downloader* : ketik *'.tiktok'* untuk mengunduh video dari Tiktok. 
 - *Semua perintah*  : ketik *'.allmenu'* untuk melihat semua perintah AI-ChatBot. 
 - *Pemilik*  : Ketik *'.owner'* Jika Anda memiliki kebutuhan / tidak mengerti cara menggunakan AI-ChatBot. 

 CARA PENGGUNAAN: 
 Ketik perintah yang sesuai di obrolan dengan AI-ChatBot. 

 Catatan: 
 - Pastikan untuk mengirim pesan ke AI-ChatBot dalam bentuk teks atau keterangan. 
 - Beberapa fitur memerlukan tautan untuk diunduh, jadi pastikan Anda mengirim tautan dengan benar. 

 Jangan ragu untuk bertanya kepada pemilik AI-ChatBot apakah Anda mengalami kesulitan atau memiliki pertanyaan lebih lanjut. 

 Terima kasih telah menggunakan AI-ChatBot!

 Powered By FWD`
  
  return conn.reply(m.chat, text, m)
}

handler.help = ['help']
handler.tags = ['main']
handler.command = /^help$/i

export default handler
