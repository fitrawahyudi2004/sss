import fetch from 'node-fetch'
let handler = m => m

handler.before = async (m) => {
    let chat = global.db.data.chats[m.chat]
    if (chat.ai && !chat.isBanned ) {
        if (/^.*false|disable|(turn)?off|0/i.test(m.text)) return
        if (!m.text) return
        let res = await fetch(`https://api.lolhuman.xyz/api/openai-turbo?apikey=fitra_wahyudi_&text=${m.text}&system=`)
        // if (!res.ok) throw eror
        let json = await res.json()
        // if (json.success == 'gapaham banh:v') return m.reply('lu ngetik apaaan sih')
        await m.reply(`${json.result}`)
        return !0
    }
    return true
}
export default handler
// import fetch from 'node-fetch'
// import { Configuration, OpenAIApi } from 'openai'
// import { generateWAMessageFromContent } from '@adiwajshing/baileys'
// import fs from 'fs'
// let handler = m => m

// handler.before = async (m) => {
//     let chat = global.db.data.chats[m.chat]
//     if (chat.ai && !chat.isBanned ) {
//         if (/^.*false|disable|(turn)?off|0/i.test(m.text)) return
//         if (!m.text) throw "Halo kak, ada yang bisa saya bantu?"
// const configuration = new Configuration({
//     apiKey: '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'
// });
// var openai = new OpenAIApi(configuration);
//         const response = await openai.createCompletion({
//             model: "text-davinci-003",
//             prompt: m.text,
//             temperature: 0,
//             max_tokens: 3000,
//             top_p: 1,
//             frequency_penalty: 0.5,
//             presence_penalty: 0
//         });
// m.reply(response.data.choices[0].text)

//     }
//     return true
// }
// export default handler