let handler = async (m, { conn, usedPrefix }) => {
let health = global.db.data.users[m.sender].health
    let armor = global.db.data.users[m.sender].armor 
   // let warn = global.db.data.users[m.sender].warn
   let sdurability = global.db.data.users[m.sender].sworddurability
   let stamina = global.db.data.users[m.sender].stamina
   let role = global.db.data.users[m.sender].role
   let adurability = global.db.data.users[m.sender].armordurability
   let fdurability = global.db.data.users[m.sender].fishingroddurability
   let pdurability = global.db.data.users[m.sender].pickaxedurability
   let pickaxe = global.db.data.users[m.sender].pickaxe
   let pancing = global.db.data.users[m.sender].pancingan
   
   let {
                registered,
                age,
                lastrampok,
                lastdagang,
                lastcodereg,
                lastberkebon,
                lasthourly,
                lastberburu,
                lastbansos,
                lastadventure,
                lastfishing,
                lastwar,
                lastduel,
                lastmining,
                lastdungeon,
                lastclaim,
                lastweekly,
                lastmonthly
            } = global.db.data.users[m.sender]
            
            let {
                gulai,
                kepitingbakar,
                ikanbakar,
udangbakar,
oporayam,
ssapi,
sapir,
ayamgoreng,
ayambakar
            } = global.db.data.users[m.sender]
            
   let paus = global.db.data.users[m.sender].paus
            let kepiting = global.db.data.users[m.sender].kepiting
            let gurita = global.db.data.users[m.sender].gurita
            let cumi = global.db.data.users[m.sender].cumi
            let lumba = global.db.data.users[m.sender].lumba
            let lobster = global.db.data.users[m.sender].lobster
            let hiu = global.db.data.users[m.sender].hiu
            let udang = global.db.data.users[m.sender].udang
            let orca = global.db.data.users[m.sender].orca
            let ikan = global.db.data.users[m.sender].ikan
            let buntal = global.db.data.users[m.sender].buntal
            let dory = global.db.data.users[m.sender].dory
            
            let kambing = global.db.data.users[m.sender].kambing
            let kerbau = global.db.data.users[m.sender].kerbau
            let harimau = global.db.data.users[m.sender].harimau
            let monyet = global.db.data.users[m.sender].monyet
            let babihutan = global.db.data.users[m.sender].babihutan
            let panda = global.db.data.users[m.sender].panda
            let gajah = global.db.data.users[m.sender].gajah
            let buaya = global.db.data.users[m.sender].buaya
            let ayam = global.db.data.users[m.sender].ayam
            let babi = global.db.data.users[m.sender].babi
            let sapi = global.db.data.users[m.sender].sapi
            let banteng = global.db.data.users[m.sender].banteng
   
    let pet = global.db.data.users[m.sender].pet
    let kucing = global.db.data.users[m.sender].kucing
    let _anjing = global.db.data.users[m.sender].anakanjing
    let anjing = global.db.data.users[m.sender].anjing
    let _kucing = global.db.data.users[m.sender].anakkucing
    let rubah = global.db.data.users[m.sender].rubah
    let _rubah = global.db.data.users[m.sender].anakrubah
    let serigala = global.db.data.users[m.sender].serigala
    let _serigala = global.db.data.users[m.sender].anakserigala
    let naga = global.db.data.users[m.sender].naga
    let _naga = global.db.data.users[m.sender].anaknaga
    let kuda = global.db.data.users[m.sender].kuda
    let _kuda = global.db.data.users[m.sender].anakkuda
    let phonix = global.db.data.users[m.sender].phonix
    let _phonix = global.db.data.users[m.sender].anakphonix
    let griffin = global.db.data.users[m.sender].griffin
    let _griffin = global.db.data.users[m.sender].anakgriffin
    let kyubi = global.db.data.users[m.sender].kyubi
    let _kyubi = global.db.data.users[m.sender].anakkyubi
    let centaur = global.db.data.users[m.sender].centaur
    let _centaur = global.db.data.users[m.sender].anakcentaur
    let diamond = global.db.data.users[m.sender].diamond
    let potion = global.db.data.users[m.sender].potion
    let ramuan = global.db.data.users[m.sender].ramuan
    let common = global.db.data.users[m.sender].common
    let makananpet = global.db.data.users[m.sender].makananpet
    let makanannaga = global.db.data.users[m.sender].makanannaga
    let makananphonix = global.db.data.users[m.sender].makananphonix
    let makanangriffin = global.db.data.users[m.sender].makanangriffin
    let makanankyubi = global.db.data.users[m.sender].makanankyubi
    let makanancentaur = global.db.data.users[m.sender].makanancentaur
    let uncommon = global.db.data.users[m.sender].uncommon
    let mythic = global.db.data.users[m.sender].mythic
    let legendary = global.db.data.users[m.sender].legendary
    let level = global.db.data.users[m.sender].level
    let money = global.db.data.users[m.sender].money
    let exp = global.db.data.users[m.sender].exp
    let sampah = global.db.data.users[m.sender].sampah
    let anggur = global.db.data.users[m.sender].anggur
    let jeruk = global.db.data.users[m.sender].jeruk
    let apel = global.db.data.users[m.sender].apel
    let mangga = global.db.data.users[m.sender].mangga
    let pisang = global.db.data.users[m.sender].pisang
    let bibitanggur = global.db.data.users[m.sender].bibitanggur
    let bibitjeruk = global.db.data.users[m.sender].bibitjeruk
    let bibitapel = global.db.data.users[m.sender].bibitapel
    let bibitmangga = global.db.data.users[m.sender].bibitmangga
    let bibitpisang = global.db.data.users[m.sender].bibitpisang 
    let gardenboxs = global.db.data.users[m.sender].gardenboxs
    let nabung = global.db.data.users[m.sender].nabung
    let bank = global.db.data.users[m.sender].bank
    let limit = global.db.data.users[m.sender].limit
    let cupon = global.db.data.users[m.sender].cupon
    let tiketcoin = global.db.data.users[m.sender].tiketcoin
    let tiketm = global.db.data.users[m.sender].healtmonster
    let aqua = global.db.data.users[m.sender].aqua
    let expg = global.db.data.users[m.sender].expg
    let boxs = global.db.data.users[m.sender].boxs
    let botol = global.db.data.users[m.sender].botol
    let kayu = global.db.data.users[m.sender].kayu 
    let batu = global.db.data.users[m.sender].batu
    let coal = global.db.data.users[m.sender].coal
    let iron = global.db.data.users[m.sender].iron
    let sword = global.db.data.users[m.sender].sword
    let string = global.db.data.users[m.sender].string
    let kaleng = global.db.data.users[m.sender].kaleng
    let kardus = global.db.data.users[m.sender].kardus
    let berlian = global.db.data.users[m.sender].berlian
    let emas = global.db.data.users[m.sender].emas
    let emaspro = global.db.data.users[m.sender].emasbatang
    let hero = global.db.data.users[m.sender].hero
    let exphero = global.db.data.users[m.sender].exphero
    let who = m.sender
   let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
    let name = m.sender
    let sortedmoney = Object.entries(global.db.data.users).sort((a, b) => b[1].money - a[1].money)
    let sortedlevel = Object.entries(global.db.data.users).sort((a, b) => b[1].level - a[1].level)
    let sorteddiamond = Object.entries(global.db.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
    let sortedpotion = Object.entries(global.db.data.users).sort((a, b) => b[1].potion - a[1].potion)
    let sortedsampah = Object.entries(global.db.data.users).sort((a, b) => b[1].sampah - a[1].sampah)
    let sortedcommon = Object.entries(global.db.data.users).sort((a, b) => b[1].common - a[1].common)
    let sorteduncommon = Object.entries(global.db.data.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
    let sortedmythic = Object.entries(global.db.data.users).sort((a, b) => b[1].mythic - a[1].mythic)
    let sortedlegendary = Object.entries(global.db.data.users).sort((a, b) => b[1].legendary - a[1].legendary)
    let usersmoney = sortedmoney.map(v => v[0])
    let usersdiamond = sorteddiamond.map(v => v[0])
    let userspotion = sortedpotion.map(v => v[0])
    let userssampah = sortedsampah.map(v => v[0])
    let userslevel = sortedlevel.map(v => v[0])
    let userscommon = sortedcommon.map(v => v[0])
    let usersuncommon = sorteduncommon.map(v => v[0])
    let usersmythic = sortedmythic.map(v => v[0])
    let userslegendary = sortedlegendary.map(v => v[0])
    let str = `

╭──────━• *STATUS*
│❤️️ *Health:* ${health}
│⚡ *Stamina:* ${stamina}
│💹 *Money:* $${money}
│🎫 *Limit:* ${limit}
│📊 *Level:* ${level} ➠  ${level + 1}
│✨ *Exp:* ${exp}
│📍 *Role:* ${role}
│💳 *Bank:* $${bank}
│🏷Cupon: *${cupon}*
│📈Expg: *${expg}*
│🧾Tiketm: *${tiketm}*
│📃Tiketcoin: *${tiketcoin}*
╰──────────━⃝┅⃝━━────────┄⸙

╭──────━• *TOOLS*
│🥼 *Armor:* ${armor == 0 ? '❌' : '' || armor == 1 ? 'Leather Armor' : '' || armor == 2 ? 'Iron Armor' : '' || armor == 3 ? 'Gold Armor' : '' || armor == 4 ? 'Diamond Armor' : '' || armor == 5 ? 'Netherite Armor' : ''}
│╰ *Durability:* ${adurability}
│⚔️ *Sword:* ${sword == 0 ? '❌' : '' || sword == 1 ? 'wooden sword' : '' || sword == 2 ? 'Stone sword' : '' || sword == 3 ? 'Iron sword' : '' || sword == 4 ? 'Diamond sword' : '' || sword > 0 && sword < 5 ? `Ketahanan (*${_sword}* / *${sword *100}*)` : '' || sword == 5 ? '*Netherite Sword*' : ''}
│╰ *Durability:* ${sdurability}
│⛏️ *Pickaxe:* ${pickaxe == 0 ? '❌' : '' || pickaxe == 1 ? 'wooden pickaxe' : '' || pickaxe == 2 ? 'stone pickaxe' : '' || pickaxe == 3 ? 'Iron pickaxe' : '' || pickaxe == 4 ? 'Diamond pickaxe' : '' || pickaxe == 5 ? 'Netherite pickaxe' : ''}
│╰ *Durability:* ${pdurability}
│🎣 *Fishingrod:* ${pancing == 0 ? '❌' : '' || pancing == 1 ? 'Wooden Fishingrod' : '' || pancing == 2 ? 'Iron Fishingrod' : '' || pancing == 1 ? 'Diamond Fishingrod' : '' || pancing == 1 ? 'Netherite Fishingrod' : '' }
│╰ *Durability:* ${fdurability}
│🏹 *Bow:* Cooming Soon!
╰──────────━⃝┅⃝━━────────┄⸙

╭──────━• *INVENTORY*
│🧪 *Ramuan:* ${ramuan}
│🍾 *Potion:* ${potion}
│⛓  *Iron:* ${iron}
│🕸️ *String:* ${string}
│🪵  *Kayu:* ${kayu}
│🪨  *Batu:* ${batu}
│ 🧱 *Coal:* ${coal}
│🥤Aqua: *${aqua}*
╰──────────━⃝┅⃝━━────────┄⸙

╭──────━• *CRATE*
│📦Boxs: *${boxs}*
│📦 *Common:* ${common}
│🛍️ *Uncommon:* ${uncommon}
│🎁 *Mythic:* ${mythic}
│🧰 *Legendary:* ${legendary}
│📫 *Pet:* ${pet}
│📦Gardenboxs: *${gardenboxs}*
╰──────────━⃝┅⃝━━────────┄⸙

╭──────━• *FRUIT & SEED*
│🥭 *Mangga:* ${mangga}
│🍇 *Anggur:* ${anggur}
│🍌 *Pisang:* ${pisang}
│🍊 *Jeruk:* ${jeruk}
│🍎 *Apel:* ${apel}
│
│🌾 *Bibit Mangga:* ${bibitmangga}
│🌾 *Bibit Anggur:* ${bibitanggur}                                    
│🌾 *Bibit Pisang:* ${bibitpisang}
│🌾 *Bibit Jeruk:* ${bibitjeruk}
│🌾 *Bibit Apel:* ${bibitapel}
╰──────────━⃝┅⃝━━────────┄⸙

╭──────━• *KOLAM*
│🐋 *Orca:* ${orca}
│🐳 *Paus:* ${paus}
│🐬 *Lumba:* ${lumba}
│🦈 *Hiu:* ${hiu}
│🐟 *Ikan:* ${ikan}
│🐡 *Buntal:* ${buntal}
│🐠 *Dory:* ${dory}
│🦀 *Kepiting:* ${kepiting}
│🦞 *Lobster:* ${lobster}
│🐙 *Gurita:* ${gurita}
│🦑 *Cumi:* ${cumi}
│🦐 *Udang:* ${udang}
│
│💬 *Total Ikan:* ${orca + udang + hiu + lobster + lumba + cumi + gurita + kepiting + paus + dory + buntal + ikan }
╰──────────━⃝┅⃝━━────────┄⸙

╭──────━• *KANDANG*
│🐔 *Ayam:* ${ayam}    
│🐐 *Kambing:* ${kambing}
│🐄 *Sapi:* ${sapi} 
│🐃 *Kerbau:* ${kerbau}
│🐖 *Babi:* ${babi}    
│🐅 *Harimau:* ${harimau}
│🐂 *Banteng:* ${banteng} 
│🐒 *Monyet:* ${monyet}
│🐗 *Babi Hutan:* ${babihutan}
│🐼 *Panda:* ${panda}
│🐘 *Gajah:* ${gajah}
│🐊 *Buaya:* ${buaya}
│
│🥢 Bisa kamu masak */masak ayamb*
│💬 *Total Hewan:* ${ buaya + gajah + panda + babihutan + monyet + harimau + kerbau + kambing + ayam + sapi + babi + banteng } tangkapan
╰──────────━⃝┅⃝━━────────┄⸙

╭──────━• *TRASH*
│🗑️ *Sampah:* ${sampah}
│🥫 *Kaleng:* ${kaleng}
│📦 *Kardus:* ${kardus}
╰──────────━⃝┅⃝━━────────┄⸙

╭──────━• *TAMBANG*
│🪩 *Berlian:* ${berlian}
│🪙 *Emas:* ${emas}
│💎 *Diamond:* ${diamond}
╰──────────━⃝┅⃝━━────────┄⸙

╭──────━• *FOOD*
│🍖 *Ayam Bakar:* ${ayambakar}
│🍗 *Ayam Goreng:* ${ayamgoreng}
│🥘 *Rendang Sapi :* ${sapir}
│🥩 *Steak Sapi:* ${ssapi}
│ 🍛 *Opor Ayam:* ${oporayam}
│🍤 *Udang Crispy:* ${udangbakar}
│🍣 *Sushi:* ${ikanbakar}
│🍲 *Gulai:* ${gulai}
│🥗 *Kepiting Bakar:* ${kepitingbakar}
╰──────────━⃝┅⃝━━────────┄⸙

╭──────━• *FOOD PET*
│Makanan Pet: *${makananpet}*
│Makanan Phonix: *${makananphonix}*
│Makanan Naga: *${makanannaga}*
│Makanan Griffin: *${makanangriffin}*
│Makanan Kyubi: *${makanankyubi}*
│Makanan Centaur: *${makanancentaur}*
╰──────────━⃝┅⃝━━────────┄⸙

╭──────━• *COOLDOWN*
│ *🏹 Berburu :* ${lastberburu > 0 ? '❌' : '✅'}
│ *⛰️ Adventure :* ${lastadventure > 0 ? '❌' : '✅'}
│ *⚔️ Duel :* ${lastduel > 0 ? '❌' : '✅'}
│ *🛡️ War :* ${lastwar > 0 ? '❌'  : '✅'}
│ *🎃 Dungeon :* ${lastdungeon > 0 ? '❌' : '✅'}
│ *💱 Berdagang :* ${lastdagang > 0 ? '❌'  : '✅'}
│ *🧺 Berkebun :* ${lastberkebon > 0 ? '❌'  : '✅'}
│ *⛏️ Mining :* ${lastmining > 0 ? '❌' : '✅'}
│ *🎣 Fishing :* ${lastfishing > 0 ? '❌'  : '✅'}
│ *💰 Bansos :* ${lastbansos > 0 ? '❌' : '✅'}
│
│ *📦 Claim :* ${lastclaim > 0 ? '❌' : '✅'}
│ *🎁 Weekly :* ${lastweekly > 0 ? '❌' : '✅'}
│ *📮 Monthly :* ${lastmonthly > 0 ? '❌' : '✅'}
╰──────────━⃝┅⃝━━────────┄⸙

╭──────━• *PET*
╰┫🐱Kucing: *${kucing == 0 ? 'Tidak Punya' : '' || kucing == 1 ? 'Level 1' : '' || kucing == 2 ? 'Level 2' : '' || kucing == 3 ? 'Level 3' : '' || kucing == 4 ? 'Level 4' : '' || kucing == 5 ? 'Level MAX' : ''}*
╰──┬─┄
╭──┴─────────┄⸙
╰┫🐴Kuda: *${kuda == 0 ? 'Tidak Punya' : '' || kuda == 1 ? 'Level 1' : '' || kuda == 2 ? 'Level 2' : '' || kuda == 3 ? 'Level 3' : '' || kuda == 4 ? 'Level 4' : '' || kuda == 5 ? 'Level MAX' : ''}*
╰──┬─┄
╭──┴─────────┄⸙
╰┫🐶Anjing: *${anjing == 0 ? 'Tidak Punya' : '' || anjing == 1 ? 'Level 1' : '' || anjing == 2 ? 'Level 2' : '' || anjing == 3 ? 'Level 3' : '' || anjing == 4 ? 'Level 4' : '' || anjing == 5 ? 'Level MAX' : ''}*
╰──┬─┄
╭──┴─────────┄⸙
╰┫🐲Naga: *${naga == 0 ? 'Tidak Punya' : '' || naga == 1 ? 'Level 1' : '' || naga == 2 ? 'Level 2' : '' || naga == 3 ? 'Level 3' : '' || naga == 4 ? 'Level 4' : '' || naga == 5 ? 'Level 5' : '' || naga == 6 ? 'Level 6' : '' || naga == 7 ? 'Level 7' : '' || naga == 8 ? 'Level 8' : '' || naga == 9 ? 'Level 9' : '' || naga == 10 ? 'Level 10' : '' || naga == 11 ? 'Level 11' : '' || naga == 12 ? 'Level 12' : '' || naga == 13 ? 'Level 13' : '' || naga == 14 ? 'Level 14' : '' || naga == 15 ? 'Level 15' : '' || naga == 16 ? 'Level 16' : '' || naga == 17 ? 'Level 17' : '' || naga == 18 ? 'Level 18' : '' || naga == 19 ? 'Level 19' : '' || naga == 20 ? 'Level MAX' : ''}*
╰──┬─┄
╭──┴─────────┄⸙
╰┫🐾Kyubi: *${kyubi == 0 ? 'Tidak Punya' : '' || kyubi == 1 ? 'Level 1' : '' || kyubi == 2 ? 'Level 2' : '' || kyubi == 3 ? 'Level 3' : '' || kyubi == 4 ? 'Level 4' : '' || kyubi == 5 ? 'Level 5' : '' || kyubi == 6 ? 'Level 6' : '' || kyubi == 7 ? 'Level 7' : '' || kyubi == 8 ? 'Level 8' : '' || kyubi == 9 ? 'Level 9' : '' || kyubi == 10 ? 'Level 10' : '' || kyubi == 11 ? 'Level 11' : '' || kyubi == 12 ? 'Level 12' : '' || kyubi == 13 ? 'Level 13' : '' || kyubi == 14 ? 'Level 14' : '' || kyubi == 15 ? 'Level 15' : '' || kyubi == 16 ? 'Level 16' : '' || kyubi == 17 ? 'Level 17' : '' || kyubi == 18 ? 'Level 18' : '' || kyubi == 19 ? 'Level 19' : '' || kyubi == 20 ? 'Level MAX' : ''}*
╰──┬─┄
╭──┴─────────┄⸙
╰┫🦌Centaur: *${centaur == 0 ? 'Tidak Punya' : '' || centaur == 1 ? 'Level 1' : '' || centaur == 2 ? 'Level 2' : '' || centaur == 3 ? 'Level 3' : '' || centaur == 4 ? 'Level 4' : '' || centaur == 5 ? 'Level 5' : '' || centaur == 6 ? 'Level 6' : '' || centaur == 7 ? 'Level 7' : '' || centaur == 8 ? 'Level 8' : '' || centaur == 9 ? 'Level 9' : '' || centaur == 10 ? 'Level 10' : '' || centaur == 11 ? 'Level 11' : '' || centaur == 12 ? 'Level 12' : '' || centaur == 13 ? 'Level 13' : '' || centaur == 14 ? 'Level 14' : '' || centaur == 15 ? 'Level 15' : '' || centaur == 16 ? 'Level 16' : '' || centaur == 17 ? 'Level 17' : '' || centaur == 18 ? 'Level 18' : '' || centaur == 19 ? 'Level 19' : '' || centaur == 20 ? 'Level MAX' : ''}*
╰──┬─┄
╭──┴─────────┄⸙
╰┫🦊Rubah: *${rubah == 0 ? 'Tidak Punya' : '' || rubah == 1 ? 'Level 1' : '' || rubah == 2 ? 'Level 2' : '' || rubah == 3 ? 'Level 3' : '' || rubah == 4 ? 'Level 4' : '' || rubah == 5 ? 'Level MAX' : ''}*  
╰──┬─┄
╭──┴─────────┄⸙
╰┫🦃Phonix: *${phonix == 0 ? 'Tidak Punya' : '' || phonix == 1 ? 'Level 1' : '' || phonix == 2 ? 'Level 2' : '' || phonix == 3 ? 'Level 3' : '' || phonix == 4 ? 'Level 4' : '' || phonix == 5 ? 'Level 5' : '' || phonix == 6 ? 'Level 6' : '' || phonix == 7 ? 'Level 7' : '' || phonix == 8 ? 'Level 8' : '' || phonix == 9 ? 'Level 9' : '' || phonix == 10 ? 'Level 10' : '' || phonix == 11 ? 'Level 11' : '' || phonix == 12 ? 'Level 12' : '' || phonix == 13 ? 'Level 13' : '' || phonix == 14 ? 'Level 14' : '' || phonix == 15 ? 'Level MAX' : ''}*
╰──┬─┄
╭──┴─────────┄⸙
╰┫🦅Griffin: *${griffin == 0 ? 'Tidak Punya' : '' || griffin == 1 ? 'Level 1' : '' || griffin == 2 ? 'Level 2' : '' || griffin == 3 ? 'Level 3' : '' || griffin == 4 ? 'Level 4' : '' || griffin == 5 ? 'Level 5' : '' || griffin == 6 ? 'Level 6' : '' || griffin == 7 ? 'Level 7' : '' || griffin == 8 ? 'Level 8' : '' || griffin == 9 ? 'Level 9' : '' || griffin == 10 ? 'Level 10' : '' || griffin == 11 ? 'Level 11' : '' || griffin == 12 ? 'Level 12' : '' || griffin == 13 ? 'Level 13' : '' || griffin == 14 ? 'Level 14' : '' || griffin == 15 ? 'Level MAX' : ''}*
╰──┬─┄
╭──┴─────────┄⸙
╰┫🐺Serigala: *${serigala == 0 ? 'Tidak Punya' : '' || serigala == 1 ? 'Level 1' : '' || serigala == 2 ? 'Level 2' : '' || serigala == 3 ? 'Level 3' : '' || serigala == 4 ? 'Level 4' : '' || serigala == 5 ? 'Level 5' : '' || serigala == 6 ? 'Level 6' : '' || serigala == 7 ? 'Level 7' : '' || serigala == 8 ? 'Level 8' : '' || serigala == 9 ? 'Level 9' : '' || serigala == 10 ? 'Level 10' : '' || serigala == 11 ? 'Level 11' : '' || serigala == 12 ? 'Level 12' : '' || serigala == 13 ? 'Level 13' : '' || serigala == 14 ? 'Level 14' : '' || serigala == 15 ? 'Level MAX' : ''}*
╰──────────━⃝┅⃝━━────────┄⸙
`.trim()
conn.sendMessage(m.chat, { 
  text: str,
  contextInfo: {
    externalAdReply: {
      title: `                         𝙄𝙣𝙫𝙚𝙣𝙩𝙤𝙧𝙮 ${await conn.getName(name)}`,
      body: "",
      thumbnailUrl: pp,
      sourceUrl: "https://chat.whatsapp.com/FS2vHrR5Y1b9GBGxMnDinY",
      mediaType: 1,
      showAdAttribution: true,
      renderLargerThumbnail: true
    }
  }
}, { quoted: m })

}
handler.help = ['inventory']
handler.tags = ['rpg']
handler.command = /^(inv|inventory)$/i
handler.limit = true
handler.group = false
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)