import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6281333154367', '𝚉𝚊𝚕𝚕 ×፝֟͜×', true], 
['6281392128956', 'rozz', true]
]
global.mods = []
global.prems = ['62895324126484']
// Info
global.nomorwa = '6281333154367'
global.packname = '𝘼𝙡𝙗𝙚𝙙𝙤 𝙈𝘿 by'
global.author = '© 𝚉𝚊𝚕𝚕 ×፝֟͜×'
global.namebot = '𝘼𝙡𝙗𝙚𝙙𝙤 𝙈𝘿'
global.wm = '© 𝘼𝙡𝙗𝙚𝙙𝙤 𝙈𝘿'
global.stickpack = '𝚉𝚊𝚕𝚕 ×፝֟͜×'
global.stickauth = '© 𝚉𝚊𝚕𝚕 ×፝֟͜×'
global.fotonya = 'https://telegra.ph/file/7a72c74871ac2fb87b8df.jpg'
// Link Sosmed
global.sig = 'https://www.instagram.com/zallzall02'
global.sgh = 'https://github.com/rizalmhmd'
global.sgc = 'https://whatsapp.com/channel/0029Va4K0PZ5a245NkngBA2M'
// Donasi
global.psaweria = 'https://saweria.co/Zeltoria'
global.ptrakterr = 'https://trakteer.id/zeltoria'
global.povo = '0813-3315-4367'
global.dana = '0813-3315-4367'
// Info Wait
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.lol = 'GataDios'
global.rose = 'Rk-ArssDaebotsu'
global.xyro = 'A22WEXdMXh'
global.lann = 'KaJRIjc7'
global.ibeng = 'hUEJ9KPoWR'
global.prokey = '3af65ecb-6644-431c-aa6c-a8478bf0adbf'
global.shin = 'a9d10d8a'
global.xzn = 'zallzall'
global.btc = '54o9LOSC'
global.neoxr = 'Rodotz'
global.keyopenai = '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'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro : "https://api.xyroinee.xyz",
    xzn : "https://skizo.tech/",
    popcat : "https://api.popcat.xyz", 
    lol : "https://api.lolhuman.xyz", 
    can : "https://pnggilajacn.my.id",
    btc : "https://api.botcahx.live", 
    lann : "https://api.betabotz.org"
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "A22WEXdMXh",
    "https://skizo.tech/": "zallzall",
    "https://api.lolhuman.xyz": "GataDios", 
    "https://pnggilajacn.my.id": " ItsukaChan",
    "https://api.betabotz.org": " KaJRIjc7", 
    "https://api.botcahx.live": "54o9LOSC"
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
