let handler = async (m, {
	command,
	usedPrefix,
	DevMode,
	args
}) => {
    let type = (args[0] || '').toLowerCase()
    let user = global.db.data.users[m.sender]
    let author = global.author
    let cok = `
▧ Ayambakar
〉Butuh 5 Ayam Dan 3 Coal

▧ Ayamgoreng
〉Butuh 7 Ayam Dan 3 Coal

▧ Oporayam
〉Butuh 10 Ayam Dan 5 Coal

▧ Steak
〉Butuh 4 Sapi Dan 3 Coal

▧ Rendang
〉Butuh 5 Sapi Dan 4 Coal

▧ Gulaiayam
〉Butuh 7 Ayam Dan 3 Coal

▧ Udangcrispy
〉Butuh 5 Udang Dan 3 Coal

▧ Sushi
〉Butuh 2 Ikan Dan 1 Coal

▧ Kepitingbakar
〉Butuh 4 Kepiting Dan 4 Coal
`

    try {
        if (/masak|cook/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(5, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'ayambakar':
                    if (user.ayam >= count * 5 && user.coal >= count * 3) {
                        user.ayam -= count * 5
                        user.coal -= count * 3
                        user.ayambakar += count * 1
                        conn.reply(m.chat, `Sukses Memasak ${count} Ayam Bakar`, m)
                    } else {
                        conn.reply(m.chat, `Kamu Tidak Memiliki Bahan Untuk Memasak Ayam Bakar\nAnda butuh 5 ayam dan 3 coal untuk memasak`, m)
                    }
                    break
                case 'ayamgoreng':
                    if (user.ayam >= count * 7 && user.coal >= count * 3) {
                        user.ayam -= count * 7
                        user.coal -= count * 3
                        user.ayamgoreng += count * 1
                        conn.reply(m.chat, `Sukses Memasak ${count} Ayam Goreng`, m)
                    } else {
                        conn.reply(m.chat, `Kamu Tidak Memiliki Bahan Untuk Memasak Ayam Goreng\nAnda butuh 7 ayam dan 3 coal untuk memasak`, m)
                    }
                    break
                case 'oporayam':
                    if (user.ayam >= count * 10 && user.coal >= count * 5) {
                        user.ayam -= count * 10
                        user.coal -= count * 5
                        user.oporayam += count * 1
                        conn.reply(m.chat, `Sukses Memasak ${count} Opor Ayam`, m)
                    } else {
                        conn.reply(m.chat, `Kamu Tidak Memiliki Bahan Untuk Memasak Opor Ayam\nAnda butuh 10 ayam dan 5 coal untuk memasak`, m)
                    }
                    break
                case 'steak':
                    if (user.sapi >= count * 4 && user.coal >= count * 3) {
                        user.sapi -= count * 4
                        user.coal -= count * 3
                        user.ssapi += count * 1
                        conn.reply(m.chat, `Sukses Memasak ${count} Steak`, m)
                    } else {
                        conn.reply(m.chat, `Kamu Tidak Memiliki Bahan Untuk Memasak Steak\nAnda butuh 4 sapi dan 3 coal untuk memasak`, m)
                    }
                    break
                case 'rendang':
                    if (user.sapi >= count * 5 && user.coal >= count * 4) {
                        user.sapi -= count * 5
                        user.coal -= count * 4
                        user.sapir += count * 1
                        conn.reply(m.chat, `Sukses Memasak ${count} Rendang`, m)
                    } else {
                        conn.reply(m.chat, `Kamu Tidak Memiliki Bahan Untuk Memasak Rendang\nAnda butuh 5 sapi dan 4 coal untuk memasak`, m)
                    }
                    break
                case 'gulaiayam':
                    if (user.ayam >= count * 7 && user.coal >= count * 3) {
                        user.ayam -= count * 7
                        user.coal -= count * 3
                        user.gulai += count * 1
                        conn.reply(m.chat, `Sukses Memasak ${count} Gulai Ayam`, m)
                    } else {
                        conn.reply(m.chat, `Kamu Tidak Memiliki Bahan Untuk Memasak Gulai Ayam\nAnda butuh 7 ayam dan 3 coal untuk memasak`, m)
                    }
                    break
                case 'udangcrispy':
                    if (user.udang >= count * 5 && user.coal >= count * 3) {
                        user.udang -= count * 5
                        user.coal -= count * 3
                        user.udangbakar += count * 1
                        conn.reply(m.chat, `Sukses Memasak ${count} Udang Crispy`, m)
                    } else {
                        conn.reply(m.chat, `Kamu Tidak Memiliki Bahan Untuk Memasak Udang Crispy\nAnda butuh 5 udang dan 3 coal untuk memasak`, m)
                    }
                    break
                case 'sushi':
                    if (user.ikan >= count * 2 && user.coal >= count * 1) {
                        user.ikan -= count * 2
                        user.coal -= count * 1
                        user.ikanbakar += count * 1
                        conn.reply(m.chat, `Sukses Memasak ${count} Sushi`, m)
                    } else {
                        conn.reply(m.chat, `Kamu Tidak Memiliki Bahan Untuk Memasak Sushi\nAnda butuh 2 ikan dan 1 coal untuk memasak`, m)
                    }
                    break
                case 'kepitingbakar':
                    if (user.kepiting >= count * 4 && user.coal >= count * 4) {
                        user.kepiting -= count * 4
                        user.coal -= count * 4
                        user.kepitingbakar += count * 1
                        conn.reply(m.chat, `Sukses Memasak ${count} Kepiting Bakar`, m)
                    } else {
                        conn.reply(m.chat, `Kamu Tidak Memiliki Bahan Untuk Memasak Kepiting Bakar\nAnda butuh 4 kepiting dan 4 coal untuk memasak`, m)
                    }
                    break
                default:
                    await conn.reply(m.chat, cok, m)
            }
        }
    } catch (e) {
        conn.reply(m.chat, `Sepertinya Ada Yang Eror, Coba Laporkan Ke Owner`, m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['masak']
handler.tags = ['rpg']
handler.command = /^(masak|cook)$/i
handler.group = true
export default handler
