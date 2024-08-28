// [ DOWNLOADER-YTAUDIO/MP3 ]

import ytdl from "node-yt-dl"; 

const handler = async (m, { conn, command, text, usedPrefix }) => {
/*
kyzryzz.t.me
Created by 𝘒𝘺𝘻𝘙𝘺𝘻𝘻 𝘟𝘋
https://whatsapp.com/channel/0029VaRI1OB2P59cTdJKZh3q
TITENONO LEK KO HAPUS😂
*/
  if (!text) {
    throw `[❗] Linknya?\nContoh: ${usedPrefix + command} https://youtube.com/watch?v=7D03EZWcFVo`;
  }

  conn.sendMessage(m.chat, { react: { text: '⏱️', key: m.key } });

  try {
    let ytmp4 = await ytdl.mp4(text);

    if (!ytmp4 || !ytmp4.media) {
      throw new Error("Tidak dapat mengunduh audio. Coba lagi nanti.");
    }

    await conn.sendMessage(m.chat, { 
      video: { url: ytmp4.media }, 
      mimetype: 'video/mp4' 
    }, { quoted: m });

    conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    
  } catch (error) {
    console.error(error);
    m.reply(`[❗] Error: ${error.message || error}`);
  }
};

handler.help = ['ytmp4'].map(v => v + ' <query>');
handler.tags = ['downloader'];
handler.command = /^(ytv|ytmp4|ytvideo)$/i;

export default handler;