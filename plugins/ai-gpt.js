import { G4F } from "g4f";

/**
 * Type Plugins
 * Made by MannR
 * Don't forget to follow
 * https://whatsapp.com/channel/0029VaGqCO6I1rcjc9hisJ3U
 **/

let handler = async (m, { text }) => {
    if (!text) return m.reply("Masukkan query!");
    conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });
    let g4f = new G4F();

    try {
        let message = [
            {
                role: "system",
                content: "You are a good component",
            },
            {
                role: "user",
                content: text,
            }
        ];

        let result = await g4f.chatCompletion(message);
        m.reply(result);
    } catch (e) {
        console.log(e);
        m.reply(`Terjadi kesalahan: ${e.message}`);
        conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    }
};

handler.command = handler.help = ["gpt"];
handler.tags = ["ai"];

export default handler;