import fetch from 'node-fetch';
import path from 'path';
import { promises as fs } from 'fs'; // Menggunakan fs.promises untuk dukungan async/await

// Token GitHub dan informasi repository
const GITHUB_TOKEN = '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'; // Ganti dengan token GitHub Anda
const REPO_OWNER = 'rizalzall';
const REPO_NAME = 'Clara-MD';

// Fungsi untuk mendapatkan SHA file dari GitHub
async function getFileSha(filePath) {
    const githubApiUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}`;
    
    const response = await fetch(githubApiUrl, {
        headers: {
            'Authorization': `token ${GITHUB_TOKEN}`,
            'Accept': 'application/vnd.github.v3+json'
        }
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

    const githubApiUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}`;

    // Dapatkan SHA jika file sudah ada
    const sha = await getFileSha(filePath);

    const body = {
        message: 'Menambahkan atau memperbarui file via API',
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
            'Accept': 'application/vnd.github.v3+json'
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

// Fungsi untuk membaca konten file dari sistem file lokal
async function readLocalFile(filePath) {
    try {
        const content = await fs.readFile(filePath, 'utf8');
        return content;
    } catch (error) {
        throw new Error(`Gagal membaca file: ${error.message}`);
    }
}

const handler = async (m, { conn, args, text, quoted }) => {
    const targetPath = 'database.json'; // Path di repository GitHub
    const localFilePath = 'database.json'; // Path lokal

    try {
        const content = await readLocalFile(localFilePath); // Membaca konten file lokal
        const result = await uploadFileToGitHub(targetPath, content); // Mengunggah ke GitHub
        m.reply(result);
    } catch (error) {
        m.reply(error.message);
    }
}

handler.help = ['updb'];
handler.tags = ['owner'];
handler.command = /^(updb)$/i;
handler.owner = true;

export default handler;
