/*
 | Pulls the documentation out of the Client Reporter app repository so the
 | app stays the single source of truth and this site never drifts from it.
 |
 |   npm run sync-docs                   # expects ../client-reporter
 |   APP_REPO=/path/to/app npm run sync-docs
 |
 | Each docs/<section>/README.md becomes docs/<section>.md here, links between
 | sections are rewritten, images are copied to public/images, and links that
 | point at files only the repository has (CHANGELOG, SECURITY, CONTRIBUTING)
 | go to GitHub instead.
 */
import fs from 'node:fs';
import path from 'node:path';

const APP = path.resolve(process.env.APP_REPO ?? '../client-reporter');
const SOURCE = path.join(APP, 'docs');
const TARGET = path.resolve('docs');
const IMAGES = path.resolve('public/images');
const REPO_URL = 'https://github.com/coysh-digital/client-reporter';

if (!fs.existsSync(SOURCE)) {
    console.error(`Could not find the app docs at ${SOURCE}. Set APP_REPO to the app checkout.`);
    process.exit(1);
}

const repoFiles = {
    'CHANGELOG.md': `${REPO_URL}/blob/main/CHANGELOG.md`,
    'SECURITY.md': `${REPO_URL}/security/policy`,
    'CONTRIBUTING.md': `${REPO_URL}/blob/main/CONTRIBUTING.md`,
    'CODE_OF_CONDUCT.md': `${REPO_URL}/blob/main/CODE_OF_CONDUCT.md`,
    'LICENSE': `${REPO_URL}/blob/main/LICENSE`,
    'AGENTS.md': `${REPO_URL}/blob/main/AGENTS.md`,
};

const rewriteLinks = (markdown, section) =>
    markdown.replace(/\]\(([^)\s]+)(\s+"[^"]*")?\)/g, (match, href, title = '') => {
        if (/^(https?:|mailto:|#)/.test(href)) return match;

        let [target, hash] = href.split('#');
        hash = hash ? `#${hash}` : '';

        // ../images/x.png or images/x.png → /images/x.png
        const image = target.match(/(?:\.\.\/)?images\/(.+)$/);
        if (image) return `](/images/${image[1]}${hash}${title})`;

        // ../../CHANGELOG.md and friends → GitHub
        const repoFile = Object.keys(repoFiles).find((name) => target.endsWith(name));
        if (repoFile) return `](${repoFiles[repoFile]}${title})`;

        // ../section/README.md or section/README.md → /docs/section
        const other = target.match(/^(?:\.\.\/)?([a-z0-9-]+)\/README\.md$/);
        if (other) return `](/docs/${other[1] === 'README' ? '' : other[1]}${hash}${title})`;

        // README.md (same page) → this page
        if (target === 'README.md' || target === './README.md') return `](/docs/${section}${hash}${title})`;

        // Anything else that lives in the repository
        const rel = path.posix.normalize(path.posix.join('docs', section, target));
        return `](${REPO_URL}/blob/main/${rel}${hash}${title})`;
    });

fs.mkdirSync(TARGET, { recursive: true });
fs.mkdirSync(IMAGES, { recursive: true });

let count = 0;
for (const entry of fs.readdirSync(SOURCE, { withFileTypes: true })) {
    if (entry.name === 'images' && entry.isDirectory()) {
        for (const file of fs.readdirSync(path.join(SOURCE, 'images'))) {
            fs.copyFileSync(path.join(SOURCE, 'images', file), path.join(IMAGES, file));
        }
        continue;
    }

    const readme = entry.isDirectory() ? path.join(SOURCE, entry.name, 'README.md') : entry.name === 'README.md' ? path.join(SOURCE, entry.name) : null;
    if (!readme || !fs.existsSync(readme)) continue;

    const section = entry.isDirectory() ? entry.name : 'index';
    const body = rewriteLinks(fs.readFileSync(readme, 'utf8'), section === 'index' ? '' : section);
    const header = `<!-- Synced from ${REPO_URL}/blob/main/docs/${section === 'index' ? '' : `${section}/`}README.md by scripts/sync-docs.mjs. Edit it there, not here. -->\n\n`;
    fs.writeFileSync(path.join(TARGET, `${section}.md`), header + body);
    count++;
}

console.log(`Synced ${count} pages and the images from ${SOURCE}.`);
