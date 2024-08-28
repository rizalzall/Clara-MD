import fetch from 'node-fetch';

// Token GitHub dan informasi repository
const GITHUB_TOKEN = '[TOKEN_REMOVED]'; // Ganti dengan token GitHub Anda
const REPO_OWNER = 'rizalzall';
const REPO_NAME = 'Clara-MD';

// Fungsi untuk mendapatkan SHA dari file yang akan dihapus
async function getFileSha(filePath) {
    const githubApiUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}`;

    const response = await fetch(githubApiUrl, {
        method: 'GET',
        headers: {
            'Authorization': `token ${GITHUB_TOKEN}`,
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        const data = await response.json();
        return data.sha;
    } else if (response.status === 404) {
        throw new Error(`File tidak ditemukan: ${filePath}`);
    } else {
        const error = await response.json();
        throw new Error(`Gagal mendapatkan SHA: ${error.message}`);
    }
}

// Fungsi untuk menghapus file dari GitHub
async function deleteFileFromGitHub(filePath) {
    try {
        const fileSha = await getFileSha(filePath);
        const githubApiUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}`;

        const response = await fetch(githubApiUrl, {
            method: 'DELETE',
            headers: {
                'Authorization': `token ${GITHUB_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: 'Menghapus file via API',
                sha: fileSha,
            }),
        });

        if (response.ok) {
            return `File ${filePath} berhasil dihapus dari GitHub`;
        } else {
            const error = await response.json();
            throw new Error(`Gagal menghapus file: ${error.message}`);
        }
    } catch (error) {
        throw new Error(`Gagal menghapus file: ${error.message}`);
    }
}

    const handler = async (m, { conn, args, text, quoted }) => {
        if (!text) return m.reply('Mau hapus plugin di path apa?');

        const filePath = `${text.trim()}`;

        try {
            const result = await deleteFileFromGitHub(filePath);
            m.reply(result);
        } catch (error) {
            m.reply(error.message);
        }


handler.help = ['dg'];
handler.tags = ['owner'];
handler.command = /^(dg)$/i;
handler.owner = true;

export default handler;