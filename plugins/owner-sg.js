import fetch from 'node-fetch';
import path from 'path';

// Token GitHub dan informasi repository
const GITHUB_TOKEN = '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'; // Ganti dengan token GitHub Anda
const REPO_OWNER = 'rizalzall';
const REPO_NAME = 'Clara-MD';

// Fungsi untuk mendapatkan SHA file dari GitHub
async function getFileSha(githubApiUrl) {
    const response = await fetch(githubApiUrl, {
        headers: {
            'Authorization': `token ${GITHUB_TOKEN}`,
        },
    });

    if (response.ok) {
        const data = await response.json();
        return data.sha;
    } else if (response.status === 404) {
        return null; // File belum ada, tidak perlu SHA
    } else {
        const error = await response.json();
        throw new Error(`Gagal mendapatkan SHA: ${error.message}`);
    }
}

// Fungsi untuk mengupload atau memperbarui file ke GitHub
async function uploadFileToGitHub(filePath, content) {
    const base64Content = Buffer.from(content).toString('base64');

    const fileName = path.basename(filePath);
    const directoryPath = path.dirname(filePath);
    const TARGET_PATH = `${directoryPath}/${fileName}`;
    const githubApiUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${TARGET_PATH}`;

    // Dapatkan SHA jika file sudah ada
    const sha = await getFileSha(githubApiUrl);

    const body = {
        message: 'Menambahkan atau memperbarui plugin via API',
        content: base64Content,
    };

    if (sha) {
        body.sha = sha; // Tambahkan SHA untuk memperbarui file
    }

    const response = await fetch(githubApiUrl, {
        method: 'PUT',
        headers: {
            'Authorization': `token ${GITHUB_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    if (response.ok) {
        return 'File berhasil diupload atau diperbarui di GitHub';
    } else {
        const error = await response.json();
        throw new Error(`Gagal mengupload file: ${error.message}`);
    }
}

const handler = async (m, { conn, args, text, quoted }) => {
    if (!text) throw 'Textnya mana?';

    const filePath = text.trim();
    const content = m.quoted.text.trim();

    if (!content) return m.reply('Konten file kosong!');

    // Hapus informasi sensitif dari konten jika diperlukan
    const sanitizedContent = content.replace(/ghp_[a-zA-Z0-9]+/, '[TOKEN_REMOVED]');

    try {
        const result = await uploadFileToGitHub(filePath, sanitizedContent);
        m.reply(result);
    } catch (error) {
        m.reply(error.message);
    }
};

handler.help = ['sg'];
handler.tags = ['downloader'];
handler.command = /^(sg|savegithub)$/i;
handler.owner = true;

export default handler;
