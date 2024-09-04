const {
  proto,
  generateWAMessageFromContent,
  prepareWAMessageMedia
} = (await import("@adiwajshing/baileys")).default;
import { promises } from "fs";
import { join } from "path";
import { xpRange } from "../lib/levelling.js";
import _0x88d70d from "moment-timezone";
import _0xe5f078 from "os";
import _0x3d3e62 from "fs";
import _0x235161 from "node-fetch";
const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);
let emot = "" + pickRandom(["ぎ", "᭻", "々", "〆", "∘"]);
const defaultMenu = {
  before: "╔┈┈「 *Info Bot* 」\n╎❏ *Bot Name:* %me\n╎❏ *Mode:* %mode\n╎❏ *Platform:* %platform\n╎❏ *Type:* Node.Js\n╎❏ *Baileys:* Multi Device\n╎❏ *Prefix:* [ *%prefixx* ]\n╎❏ *Uptime:* %muptime\n╎❏ *Database:* %totalreg\n╚────────────┈ ⳹ %read".trimStart(),
  header: "\n╔┈┈「 *%category* 」",
  body: "╎" + emot + " %cmd",
  footer: "╚────────────┈ ⳹",
  after: ""
};
let handler = async (_0x34b789, {
  conn: _0x429872,
  usedPrefix: _0x5a5833,
  args: _0x49f01d,
  command: _0x54b5f6
}) => {
  let _0x213c2b;
  let _0x14b3ba = ("" + _0x49f01d[0]).toLowerCase();
  let _0x2d6fa8 = ["anime", "ai", "downloader", "internet", "islamic", "quotes", "game", "group", "info", "store", "sticker", "user", "tools", "owner"];
  if (!_0x2d6fa8.includes(_0x14b3ba)) {
    _0x14b3ba = "404";
  }
  if (_0x14b3ba == "anime") {
    _0x213c2b = {
      anime: "Animanga"
    };
  }
  if (_0x14b3ba == "ai") {
    _0x213c2b = {
      ai: "Artificial Intelligence"
    };
  }
  if (_0x14b3ba == "downloader") {
    _0x213c2b = {
      downloader: "Downloader"
    };
  }
  if (_0x14b3ba == "internet") {
    _0x213c2b = {
      internet: "Internet"
    };
  }
  if (_0x14b3ba == "islamic") {
    _0x213c2b = {
      islamic: "Religions"
    };
  }
  if (_0x14b3ba == "quotes") {
    _0x213c2b = {
      quotes: "Quotes"
    };
  }
  if (_0x14b3ba == "game") {
    _0x213c2b = {
      game: "Game"
    };
  }
  if (_0x14b3ba == "group") {
    _0x213c2b = {
      group: "Group"
    };
  }
  if (_0x14b3ba == "info") {
    _0x213c2b = {
      info: "Info"
    };
  }
  if (_0x14b3ba == "store") {
    _0x213c2b = {
      store: "Store"
    };
  }
  if (_0x14b3ba == "sticker") {
    _0x213c2b = {
      sticker: "Sticker"
    };
  }
  if (_0x14b3ba == "user") {
    _0x213c2b = {
      user: "User"
    };
  }
  if (_0x14b3ba == "tools") {
    _0x213c2b = {
      tools: "Tools"
    };
  }
  if (_0x14b3ba == "owner") {
    _0x213c2b = {
      owner: "Owner"
    };
  }
  let _0x3ec3df = db.data.users[_0x34b789.sender];
  let {
    exp: _0x443435,
    limit: _0x3f1cef,
    level: _0x2cdce2,
    role: _0x27e699,
    daftar: _0x17da29,
    umur: _0x40c80e,
    premium: _0x419082,
    hit: _0x160c9a,
    koin: _0x413555
  } = global.db.data.users[_0x34b789.sender];
  let {
    min: _0x4db062,
    xp: _0x5bebe4,
    max: _0x1f7796
  } = xpRange(_0x3ec3df.level, global.multiplier);
  let _0x489013 = await _0x429872.getName(_0x34b789.sender);
  let _0x45f2ca = "" + (_0x3ec3df.premium ? "Premium user" : "Free user");
  let _0x28a049 = "" + (_0x3ec3df.premium ? "~ Infinity ~" : _0x3ec3df.limit);
  let _0x1f22ee = "" + ucapan();
  let _0x2c675c = "@" + _0x34b789.sender.replace(/@.+/g, "");
  let _0x1f9c82 = global.opts.self ? "Private" : "Publik";
  let _0x3a8a10 = _0xe5f078.platform();
  let _0x5c8fcb = readMore;
  let _0x1b44c5 = _0x5a5833;
  let _0x15857d = "" + _0x429872.getName(_0x34b789.sender);
  let _0x2dde4e = new Date(new Date() + 3600000);
  let _0x5ba742 = "id";
  let _0x3e4594 = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][Math.floor(_0x2dde4e / 84600000) % 5];
  let _0x3dacae = _0x2dde4e.toLocaleDateString(_0x5ba742, {
    weekday: "long"
  });
  let _0x25f22a = _0x2dde4e.toLocaleDateString(_0x5ba742, {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  let _0x4fbc6e = Intl.DateTimeFormat(_0x5ba742 + "-TN-u-ca-islamic", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(_0x2dde4e);
  let _0x36ff03 = _0x2dde4e.toLocaleTimeString(_0x5ba742, {
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });
  const _0x242234 = new Date("January 1, 2024 00:00:00");
  const _0x434f6e = new Date();
  const _0x506496 = _0x242234.getTime() - _0x434f6e.getTime();
  const _0x4dbb52 = Math.floor(_0x506496 / 1000) % 60;
  const _0x1c4f82 = Math.floor(_0x506496 / 1000 / 60) % 60;
  const _0x578401 = Math.floor(_0x506496 / 1000 / 60 / 60) % 24;
  const _0x236430 = Math.floor(_0x506496 / 1000 / 60 / 60 / 24);
  let _0x569aba = _0x88d70d.tz("Asia/Jakarta").format("HH:mm:ss");
  let _0x53e9c8 = _0x236430 + " Hari, " + _0x578401 + " Jam, " + _0x1c4f82 + " Menit, " + _0x4dbb52 + " Detik Lagi Menuju Tahun Baru!";
  let _0x3d20cd = process.uptime() * 1000;
  let _0x25fe8b;
  if (process.send) {
    process.send("uptime");
    _0x25fe8b = (await new Promise(_0x3ee458 => {
      process.once("message", _0x3ee458);
      setTimeout(_0x3ee458, 1000);
    })) * 1000;
  }
  let _0x505dce = clockString(_0x25fe8b);
  let _0x3893a4 = clockString(_0x3d20cd);
  let _0x5a1355 = Object.keys(global.db.data.users).length;
  let _0x4079b5 = Object.values(global.db.data.users).filter(_0x23f738 => _0x23f738.daftar == true).length;
  let _0x2425ec = Object.values(global.plugins).filter(_0x157b7b => !_0x157b7b.disabled).map(_0x545c5c => {
    return {
      help: Array.isArray(_0x545c5c.help) ? _0x545c5c.help : [_0x545c5c.help],
      tags: Array.isArray(_0x545c5c.tags) ? _0x545c5c.tags : [_0x545c5c.tags],
      prefix: "customPrefix" in _0x545c5c,
      limit: _0x545c5c.limit,
      premium: _0x545c5c.premium,
      enabled: !_0x545c5c.disabled
    };
  });
  let _0x40fb7b = await _0x429872.profilePictureUrl(_0x34b789.sender, "image").catch(_0xa64bd9 => "https://telegra.ph/file/a2ae6cbfa40f6eeea0cf1.jpg");
  const _0x4a6a00 = {
    key: {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      ...(_0x34b789.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    },
    message: {
      contactMessage: {
        displayName: "" + _0x489013,
        vcard: "BEGIN:VCARD\nVERSION:3.0\nN:XL;mari,;;;\nFN:mari,\nitem1.TEL;waid=" + _0x34b789.sender.split("@")[0] + ":" + _0x34b789.sender.split("@")[0] + "\nitem1.X-ABLabell:Ponsel\nEND:VCARD",
        jpegThumbnail: _0x40fb7b,
        thumbnail: _0x40fb7b,
        sendEphemeral: true
      }
    }
  };
  const _0x3ee9a8 = {
    title: "Touch Here",
    sections: [{
      title: "Main Menu",
      rows: [{
        title: "「ღ」Speed Bot",
        description: "Menampilkan kecepatan respon bot",
        id: ".ping"
      }, {
        title: "「ღ」Owner Bot",
        description: "Menampilkan pemilik dari bot ini",
        id: ".owner"
      }, {
        title: "「ღ」Runtime Bot",
        description: "Menampilkan seberapa lama bot aktif",
        id: ".runtime"
      }, {
        title: "「ღ」List Store",
        description: "Menampilkan Store Termasuk Sewa Bot",
        id: ".list"
      }]
    }, {
      title: "List Menu",
      rows: [{
        title: "「ღ」All Menu",
        description: "Menampilkan Semua Fitur Bot",
        id: ".allmenu"
      }, {
        title: "「ღ」Menu Animanga",
        description: "Fitur Ini Khusus Kaum Wibu",
        id: _0x5a5833 + _0x54b5f6 + " anime"
      }, {
        title: "「ღ」Menu Ai",
        description: "Meminta Bantuan Ai Karna Mager",
        id: _0x5a5833 + _0x54b5f6 + " ai"
      }, {
        title: "「ღ」Menu Download",
        description: "Jangan Download Yang Nggak2 Lu!!!!",
        id: _0x5a5833 + _0x54b5f6 + " downloader"
      }, {
        title: "「ღ」Menu Internet",
        description: "Jangan Nyari Video Cabul Ya Manisss...",
        id: _0x5a5833 + _0x54b5f6 + " internet"
      }, {
        title: "「ღ」Menu Islamic",
        description: "Hati Tenang, Dunia Sampai Akhirat",
        id: _0x5a5833 + _0x54b5f6 + " islamic"
      }, {
        title: "「ღ」Menu Quotes",
        description: "Bukannya Nyari Solusi, Malah Nyari Quotes Yang Relate",
        id: _0x5a5833 + _0x54b5f6 + " quotes"
      }, {
        title: "「ღ」Menu Game",
        description: "Di Khususkan Untuk Para Kaum Gabut",
        id: _0x5a5833 + _0x54b5f6 + " game"
      }, {
        title: "「ღ」Menu Group",
        description: "Fitur Ini Sangat Membantu Untuk Group Kamu >,<",
        id: _0x5a5833 + _0x54b5f6 + " group"
      }, {
        title: "「ღ」Menu Info",
        description: "Menampilkan Beberapa Informasi Yang Kamu Butuhkan",
        id: _0x5a5833 + _0x54b5f6 + " info"
      }, {
        title: "「ღ」Menu Store",
        description: "Ini Fitur Untuk Nyari Income Owner Dan Admin",
        id: _0x5a5833 + _0x54b5f6 + " store"
      }, {
        title: "「ღ」Menu Sticker",
        description: "Jangan Korbankan Wajah Temenmu Untuk Di Jadikan Sticker :v",
        id: _0x5a5833 + _0x54b5f6 + " sticker"
      }, {
        title: "「ღ」Menu User",
        description: "Ini Untuk Menampilkan Data Kamu Yang Tercantum Pada System Bot",
        id: _0x5a5833 + _0x54b5f6 + " user"
      }, {
        title: "「ღ」Menu Tools",
        description: "Banyak Kegunaanya Tapi Jarang Di Pakai_-",
        id: _0x5a5833 + _0x54b5f6 + " Tools"
      }, {
        title: "「ღ」Menu Owner",
        description: "Yang Bukan Owner Gausah Buka Fitur Ini!!!!",
        id: _0x5a5833 + _0x54b5f6 + " owner"
      }]
    }]
  };
  let _0x110e46 = "╭─「 *Information* 」\n┊• *Nama:* " + _0x489013 + "\n┊• *Umur:* " + _0x40c80e + "\n┊• *Level:* " + _0x2cdce2 + "\n┊• *Role:* " + _0x27e699 + "\n┊• *User:* " + Object.keys(global.db.data.users).length + "\n╰──────────┈༓";
  let _0x5635a8 = generateWAMessageFromContent(_0x34b789.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: _0x110e46
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "_Note: Jika Menemukan Fitur Yang Error, Silahkan Hubungin Owner_"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "Hai Kak " + _0x2c675c,
            subtitle: "",
            hasMediaAttachment: false
          }),
          contextInfo: {
            forwardingScore: 9999,
            isForwarded: false,
            mentionedJid: _0x429872.parseMention(_0x34b789.sender)
          },
          externalAdReply: {
            showAdAttribution: true,
            renderLargerThumbnail: false,
            mediaType: 1
          },
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
              name: "single_select",
              buttonParamsJson: JSON.stringify(_0x3ee9a8)
            }]
          })
        })
      }
    }
  }, {
    quoted: _0x4a6a00
  });
  if (_0x14b3ba == "404") {
    return _0x429872.relayMessage(_0x34b789.chat, _0x5635a8.message, {});
  }
  let _0x543262 = {};
  for (let _0x4745a8 in _0x213c2b) {
    _0x543262[_0x4745a8] = [];
    for (let _0x476f34 of _0x2425ec) {
      if (_0x476f34.tags && _0x476f34.tags.includes(_0x4745a8)) {
        if (_0x476f34.help) {
          _0x543262[_0x4745a8].push(_0x476f34);
        }
      }
    }
  }
  _0x429872.menu = _0x429872.menu ? _0x429872.menu : {};
  let _0x423bc6 = _0x429872.menu.before || defaultMenu.before;
  let _0x4c8a33 = _0x429872.menu.header || defaultMenu.header;
  let _0x43e77c = _0x429872.menu.body || defaultMenu.body;
  let _0x525478 = _0x429872.menu.footer || defaultMenu.footer;
  let _0x252046 = _0x429872.menu.after || (_0x429872.user.jid == global.conn.user.jid ? "" : "Powered By https://wa.me/" + global.conn.user.jid.split`@`[0]) + defaultMenu.after;
  let _0x24ad4c = [_0x423bc6, ...Object.keys(_0x213c2b).map(_0x1856ab => {
    return _0x4c8a33.replace(/%category/g, _0x213c2b[_0x1856ab]) + "\n" + [..._0x2425ec.filter(_0x224fc6 => _0x224fc6.tags && _0x224fc6.tags.includes(_0x1856ab) && _0x224fc6.help).map(_0x6366cb => {
      return _0x6366cb.help.map(_0x41773c => {
        return _0x43e77c.replace(/%cmd/g, _0x6366cb.prefix ? _0x41773c : "%p" + _0x41773c).replace(/%islimit/g, _0x6366cb.limit ? "(Limit)" : "").replace(/%isPremium/g, _0x6366cb.premium ? "(Premium)" : "").trim();
      }).join("\n");
    }), _0x525478].join("\n");
  }), _0x252046].join("\n");
  let _0x4dc569 = typeof _0x429872.menu == "string" ? _0x429872.menu : typeof _0x429872.menu == "object" ? _0x24ad4c : "";
  let _0x4eb46c = {
    "%": "%",
    p: _0x5a5833,
    uptime: _0x3893a4,
    muptime: _0x505dce,
    me: _0x429872.user.name,
    exp: _0x443435 - _0x4db062,
    maxexp: _0x5bebe4,
    totalexp: _0x443435,
    xp4levelup: _0x1f7796 - _0x443435 <= 0 ? "Siap Untuk *" + _0x5a5833 + "levelup*" : _0x1f7796 - _0x443435 + " XP Lagi Untuk Naik Level",
    level: _0x2cdce2,
    limit: _0x3f1cef,
    name: _0x489013,
    weton: _0x3e4594,
    week: _0x3dacae,
    date: _0x25f22a,
    dateIslamic: _0x4fbc6e,
    dateCountdown: _0x53e9c8,
    time: _0x36ff03,
    totalreg: _0x5a1355,
    rtotalreg: _0x4079b5,
    role: _0x27e699,
    readmore: readMore,
    umur: _0x40c80e,
    premium: _0x419082,
    prems: _0x45f2ca,
    unLimit: _0x28a049,
    ucap: _0x1f22ee,
    tg: _0x2c675c,
    hit: _0x160c9a,
    mode: _0x1f9c82,
    platform: _0x3a8a10,
    read: _0x5c8fcb,
    wib: _0x569aba,
    prefixx: _0x1b44c5,
    koin: _0x413555,
    nomornya: _0x15857d
  };
  _0x4dc569 = _0x4dc569.replace(new RegExp("%(" + Object.keys(_0x4eb46c).sort((_0x2548a9, _0xf5d08c) => _0xf5d08c.length - _0x2548a9.length).join`|` + ")", "g"), (_0x55ed0f, _0x11c8fe) => "" + _0x4eb46c[_0x11c8fe]);
  await _0x429872.sendMessage(_0x34b789.chat, {
    text: _0x4dc569.trim(),
    contextInfo: {
      externalAdReply: {
        title: namebot,
        body: global.author,
        thumbnailUrl: global.fotonya,
        sourceUrl: sgc,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  });
};
handler.help = ["menu"];
handler.command = /^(menu|help)$/i;
handler.daftar = true;
export default handler;
function pickRandom(_0x5206bc) {
  return _0x5206bc[Math.floor(Math.random() * _0x5206bc.length)];
}
function clockString(_0x22ce2c) {
  let _0x4a20a6 = isNaN(_0x22ce2c) ? "--" : Math.floor(_0x22ce2c / 3600000);
  let _0x4fb97d = isNaN(_0x22ce2c) ? "--" : Math.floor(_0x22ce2c / 60000) % 60;
  let _0x3dca49 = isNaN(_0x22ce2c) ? "--" : Math.floor(_0x22ce2c / 1000) % 60;
  return [_0x4a20a6, _0x4fb97d, _0x3dca49].map(_0x48fe99 => _0x48fe99.toString().padStart(2, 0)).join(":");
}
function ucapan() {
  let _0x49af24 = _0x88d70d.tz("Asia/Jakarta").format("HH");
  let _0x3a5ad0 = "Selamat dinihari";
  if (_0x49af24 >= 4) {
    _0x3a5ad0 = "Selamat pagi";
  }
  if (_0x49af24 > 10) {
    _0x3a5ad0 = "Selamat siang";
  }
  if (_0x49af24 >= 15) {
    _0x3a5ad0 = "Selamat sore";
  }
  if (_0x49af24 >= 18) {
    _0x3a5ad0 = "Selamat malam";
  }
  return _0x3a5ad0;
}