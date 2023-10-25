let handler = async function (m, { text, args,  usedPrefix, command }) {
    conn.verify = conn.verify ? conn.verify : {}
    let user = global.db.data.users[m.sender]
    function sn(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
       return result;
}
    let sn_hasil = sn(7)

    // let kode = Math.floor(Math.random() * 99999999999)
    if (user.registered === true) return m.reply('Akun Kamu Sudah Terverifikasi dan terdaftar di *DATABASE* AI-ChatBot')
     let anus = (`\nKode OTP anda adalah\n\nJangan Berikan kepada Siapapun Maupun Owner!\n\n${wm}`)
    let img = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=${sn_hasil}`
    let ucup = await conn.sendFile(m.sender, img,'g.jpg', anus, m)

    let aww = await m.reply(`Kode Verifikasi Anda Telah Dikirim melalui Chat Pribadi, *Balas Gambar tersebut Menggunakan Kode Yang Telah Di Kirim Untuk Verifikasi di Database Smart Bot!*\n\n*Powered by ${wm}*`)
   
    //if (!generateString) throw "Kode yang anda masukkan tidak sesuai, harap perhatikan besar kecil kode tersebut"
    conn.verify[m.sender] = { code: sn_hasil, key: ucup.key.id }
    // if (!sn_hasil) throw "Kode yang anda masukkan tidak sesuai, harap periksa kembali"
}

handler.all = async m => {
    let flas = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=AKUN TERVERIFIKASI`
    if (!conn.verify) return
    if (!m.quoted) return
    if ((m.sender in conn.verify) == false) return
    if (m.text == conn.verify[m.sender].code && m.quoted.id == conn.verify[m.sender].key) {
        conn.sendFile(m.chat, flas, 'nih.jpg', '*Terima Kasih karena sudah memverifikasi akun anda di DATABASE AI-ChatBot*', m)
        m.reply('Silahkan ketik *.help* Jika anda tidak mengerti cara penggunaan BOT, atau *.allmenu* untuk menikmati berbagai fitur yang tersedia di *AI-ChatBot*')
        DATABASE.data.users[m.sender].registered = true
        delete conn.verify[m.sender]
    }
}


handler.private = false
handler.command = /^verifikasiotp$/i
export default handler