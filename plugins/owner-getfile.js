/**
  * Made by MannR
  * ini wm njirr jan didelete
  * https://whatsapp.com/channel/0029VaGqCO6I1rcjc9hisJ3U
**/
import fs from "fs"


  let handler = async (m, { conn, usedPrefix, args, command, text }) => {
    if (!text) throw `Apana nama filenya?`

    const filePath = `./${text}`;

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      return m.reply(`File ${text} tidak ditemukan di direktori ./`);
    }

    try {
      const fileContent = fs.readFileSync(filePath).toString();
      m.reply(fileContent);
    } catch (error) {
    console.error(error);
    m.reply(`[❗] Error: ${error.message || error}`);
    }
  }
  
handler.help = ['getfile']
handler.tags = ['owner'];
handler.command = /^(getfile)$/i;
handler.owner = true

export default handler;