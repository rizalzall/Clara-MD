/**
  * Type ESM
  * Made by MannR
  * don't forget to follow
  * https://whatsapp.com/channel/0029VaGqCO6I1rcjc9hisJ3U
**/
import axios from "axios"
var URL = "https://hercai.onrender.com/v3/hercai"
let handler = async (m, { text }) => {
if (!text) return m.reply("Masukan query!")
try {
  let { data } = await axios({
    method: "GET",
    url: URL,
    params: {
      question: text
    }
  })
  m.reply(data.reply)
} catch (e) {
  console.log(e)
  m.reply("error kak")
}
}
handler.command = handler.help = ["hercai"]
handler.tags = ["ai"]
export default handler