/*
* 𝙊𝙬𝙚𝙣𝙨𝘿𝙚𝙫
* 𝘵𝘦𝘭𝘦: https://t.me/owenssw
* 𝘪𝘯𝘧𝘰: -
* 𝘺𝘵: https://youtube.com/CekGem
* 𝘔𝘢𝘬𝘦𝘳: https://whatsapp.com/channel/0029VaRI1OB2P59cTdJKZh3q
* 𝙶𝚛𝚘𝚞𝚙: https://chat.whatsapp.com/LQBLGAalERjE1P5X3REnGC

* 🚨Di Larang Menghapus Wm Ini🚨
* #𝗛𝗮𝗿𝗴𝗮𝗶𝗹𝗮𝗵 𝗣𝗲𝗺𝗯𝘂𝗮𝘁  
*/

import { webcrack } from 'webcrack';

let handler = async (m ,{ conn, text }) => {
let teks
if (m.quoted) {
 teks = m.quoted ? m.quoted.text : text
} else if (text) {
teks = text ? text : text
} else return m.reply(`Masukan query!`)
	try {
		let result = await webcrack(teks);
		m.reply(result.code)
	} catch (e) {
		console.log(e)
		throw "*Error kak!*"
	}
}
handler.command = handler.help = ["decrypt"]
handler.tags = ["tools"]
export default handler