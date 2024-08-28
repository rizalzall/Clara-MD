import fetch from 'node-fetch';

// Token GitHub dan informasi repository
const GITHUB_TOKEN = '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'; // Ganti dengan token GitHub Anda
const REPO_OWNER = 'rizalzall';
const REPO_NAME = 'Clara-MD';

// Fungsi untuk mengambil konten file dari GitHub
async function getFileFromGitHub(filePath) {
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
        const fileContent = Buffer.from(data.content, 'base64').toString('utf-8');
        return fileContent;
    } else if (response.status === 404) {
        throw new Error(`File tidak ditemukan: ${filePath}`);
    } else {
        const error = await response.json();
        throw new Error(`Gagal mengambil file: ${error.message}`);
    }
}

// Fungsi untuk mendapatkan branch default dari repository
async function getDefaultBranch() {
    const githubApiUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}`;

    const response = await fetch(githubApiUrl, {
        method: 'GET',
        headers: {
            'Authorization': `token ${GITHUB_TOKEN}`,
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        const data = await response.json();
        return data.default_branch;
    } else {
        const error = await response.json();
        throw new Error(`Gagal mengambil branch default: ${error.message}`);
    }
}

// Fungsi untuk mendapatkan semua file path di dalam repository
async function getAllFilePaths() {
    const defaultBranch = await getDefaultBranch();
    const githubApiUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/git/trees/${defaultBranch}?recursive=1`;

    const response = await fetch(githubApiUrl, {
        method: 'GET',
        headers: {
            'Authorization': `token ${GITHUB_TOKEN}`,
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        const data = await response.json();
        const allFilePaths = data.tree
            .filter(item => item.type === 'blob') // Filter hanya file, bukan direktori
            .map(item => item.path);
        return allFilePaths;
    } else {
        const error = await response.json();
        throw new Error(`Gagal mengambil daftar file: ${error.message}`);
    }
}

const handler = async (m, { conn, args, text, quoted }) => {
    const filePath = text.trim();

    try {
        if (filePath) {
            // Jika file path diberikan, ambil konten file tersebut
            const content = await getFileFromGitHub(filePath);
            m.reply(`${content}`);
        } else {
            // Jika tidak ada file path yang diberikan, tampilkan semua file path di repository
            const allFilePaths = await getAllFilePaths();
            m.reply(`Ini daftar semua file di dalam repository:\n\n${allFilePaths.join('\n')}`);
        }
    } catch (error) {
        m.reply(error.message);
    }
};

handler.help = ['gg'];
handler.tags = ['owner'];
handler.command = /^(gg)$/i;
handler.owner = true;

export default handler;
