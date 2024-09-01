/**
  * Made by MannR
  * don't forget to follow
  * https://whatsapp.com/channel/0029VaGqCO6I1rcjc9hisJ3U
**/

import axios from "axios"

var handler = async (m, { text }) => {
let x = await axios.get(text)
let MannR = Object.keys(x.headers)
var v = "*[ G E T  H E A D E R S ]*\n"
for (let z of MannR) {
  v += z + "\n"
}
m.reply(v)
}
handler.command = handler.help = ["getheaders"]
handler.tags = ["tools"]
export default handler