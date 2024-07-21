const cooldown = 7200000

function handler(m, { conn, usedPrefix, args, text, command }) {
    let user = global.db.data.users[m.sender];
    let hasPancing = user.pancing > 0;
    let hasUmpan = user.umpan > 0;

    if (!hasPancing || !hasUmpan) {
        m.reply(`
*⚠️ Anda membutuhkan setidaknya:*
*🎣 1 Pancing*
*🍤 1 Umpan*
*Untuk memancing!*

*Cara mendapatkan:*
*Kamu dapat membelinya di toko dengan cara:*
*${usedPrefix}toko buy fishingrod 1*
*${usedPrefix}toko buy umpan 1*
`);
        return;
    }
    
    if (new Date - user.lastmancing < cooldown) {
        conn.reply(m.chat, `*Kamu sudah kelelahan*\n*Silakan istirahat dulu selama* ${clockString((user.lastmancing + cooldown) - new Date())}`, m)
    } else {
        let random1 = `${Math.floor(Math.random() * 10)}`
        let random2 = `${Math.floor(Math.random() * 10)}`
        let random3 = `${Math.floor(Math.random() * 10)}`
        let random4 = `${Math.floor(Math.random() * 10)}`
        let random5 = `${Math.floor(Math.random() * 10)}`
        let random6 = `${Math.floor(Math.random() * 10)}`
        let random7 = `${Math.floor(Math.random() * 10)}`
        let random8 = `${Math.floor(Math.random() * 10)}`
        let random9 = `${Math.floor(Math.random() * 10)}`
        let random10 = `${Math.floor(Math.random() * 10)}`
        let random11 = `${Math.floor(Math.random() * 10)}`
        let random12 = `${Math.floor(Math.random() * 10)}`

        let fish1 = (random1 * 1)
        let fish2 = (random2 * 1)
        let fish3 = (random3 * 1)
        let fish4 = (random4 * 1)
        let fish5 = (random5 * 1)
        let fish6 = (random6 * 1)
        let fish7 = (random7 * 1)
        let fish8 = (random8 * 1)
        let fish9 = (random9 * 1)
        let fish10 = (random10 * 1)
        let fish11 = (random11 * 1)
        let fish12 = (random12 * 1)

        let result = `Hasil Mancing

🦀 = [ ${fish1} ]           🦐 = [ ${fish7} ]
🐠 = [ ${fish2} ]           🐟 = [ ${fish8} ]
🐡 = [ ${fish3} ]           🦑 = [ ${fish9} ]
🐙 = [ ${fish4} ]           🦞 = [ ${fish10} ]
🐬 = [ ${fish5} ]           🐳 = [ ${fish11} ]
🐋 = [ ${fish6} ]           🦈 = [ ${fish12} ]

Ketik: .kolam untuk melihat hasilnya`

        global.db.data.users[m.sender].kepiting += fish1
        global.db.data.users[m.sender].dory += fish2
        global.db.data.users[m.sender].buntal += fish3
        global.db.data.users[m.sender].gurita += fish4
        global.db.data.users[m.sender].lumba += fish5
        global.db.data.users[m.sender].orca += fish6
        global.db.data.users[m.sender].udang += fish7
        global.db.data.users[m.sender].ikan += fish8
        global.db.data.users[m.sender].cumi += fish9
        global.db.data.users[m.sender].lobster += fish10
        global.db.data.users[m.sender].paus += fish11
        global.db.data.users[m.sender].hiu += fish12

        setTimeout(() => {
            conn.reply(m.chat, result, m)
        }, 20000)

        setTimeout(() => {
            conn.reply(m.chat, `Nah, ini dia hasil mancingmu!`, m)
        }, 18000)

        setTimeout(() => {
            conn.reply(m.chat, `Wah, kamu berhasil menangkap ikan!`, m)
        }, 15000)

        setTimeout(() => {
            conn.reply(m.chat, `Selamat! Kamu mendapatkan ikan dan siap untuk menjualnya`, m)
        }, 14000)

        setTimeout(() => {
            conn.reply(m.chat, `Sedang mencari ikan...`, m)
        }, 0)
        user.lastmancing = new Date * 1
    }
}
handler.help = ['mancing']
handler.tags = ['rpg']
handler.command = /^(mancing|fishing)$/i
handler.group = true
export default handler

function clockString(ms) {
    let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return ['\n' + d, ' *Hari*\n ', h, ' *Jam*\n ', m, ' *Menit*\n ', s, ' *Detik* '].map(v => v.toString().padStart(2, 0)).join('')
}