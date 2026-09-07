import { defineConfig } from 'vitepress';

const repo = 'https://github.com/coysh-digital/client-reporter';

export default defineConfig({
    title: 'Client Reporter',
    description: 'Free, self-hosted client reporting for web agencies and freelancers. Your logo, your data, your server.',
    // GitHub Pages serves a project site under /<repo>/; Cloudflare Pages and custom domains use /.
    base: process.env.SITE_BASE ?? '/',
    cleanUrls: true,
    appearance: false,
    srcExclude: ['README.md'],
    lastUpdated: false,
    head: [
        ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,400;1,8..60,600&family=JetBrains+Mono:wght@400;500;700&display=swap' }],
        ['meta', { property: 'og:title', content: 'Client Reporter' }],
        ['meta', { property: 'og:description', content: 'Free, self-hosted client reporting for web agencies and freelancers.' }],
        ['meta', { property: 'og:image', content: '/images/dashboard.png' }],
        ['meta', { name: 'theme-color', content: '#33406b' }],
    ],
    sitemap: { hostname: process.env.SITE_URL ?? 'https://clientreporter.dev' },
    themeConfig: {
        logo: '/favicon.svg',
        siteTitle: 'Client Reporter',
        nav: [
            { text: 'Docs', link: '/docs/', activeMatch: '^/docs/' },
            { text: 'Integrations', link: '/docs/integrations' },
            { text: 'Install', link: '/docs/installation' },
            { text: 'GitHub', link: repo },
        ],
        sidebar: {
            '/docs/': [
                {
                    text: 'Getting started',
                    items: [
                        { text: 'Overview', link: '/docs/' },
                        { text: 'Installation', link: '/docs/installation' },
                        { text: 'Shared hosting', link: '/docs/shared-hosting' },
                        { text: 'Configuration', link: '/docs/configuration' },
                        { text: 'Updating', link: '/docs/updating' },
                    ],
                },
                {
                    text: 'Using Client Reporter',
                    items: [
                        { text: 'Reports', link: '/docs/reports' },
                        { text: 'Branding', link: '/docs/branding' },
                        { text: 'Security', link: '/docs/security' },
                    ],
                },
                {
                    text: 'Integrations',
                    items: [
                        { text: 'Overview', link: '/docs/integrations' },
                        { text: 'WordPress', link: '/docs/wordpress' },
                        { text: 'Craft CMS', link: '/docs/craft' },
                        { text: 'Analytics', link: '/docs/analytics' },
                        { text: 'Uptime monitoring', link: '/docs/uptime-robot' },
                    ],
                },
                {
                    text: 'Going further',
                    items: [
                        { text: 'Ask an AI (MCP)', link: '/docs/mcp' },
                        { text: 'Creating an integration', link: '/docs/creating-an-integration' },
                        { text: 'Integration pull requests', link: '/docs/contributing' },
                        { text: 'Development', link: '/docs/development' },
                    ],
                },
            ],
        },
        socialLinks: [{ icon: 'github', link: repo }],
        editLink: {
            pattern: ({ relativePath }) => {
                // Serialised into the client bundle, so it cannot close over `repo`.
                const section = relativePath.replace(/^docs\//, '').replace(/\.md$/, '');
                if (section === 'contributing') {
                    return 'https://github.com/coysh-digital/client-reporter-site/edit/main/docs/contributing.md';
                }
                return `https://github.com/coysh-digital/client-reporter/edit/main/docs/${section === 'index' ? '' : `${section}/`}README.md`;
            },
            text: 'Improve this page on GitHub',
        },
        search: { provider: 'local' },
        outline: { level: [2, 3] },
        footer: {
            message: 'Open source under the MIT licence. Free to use, fork and ship.',
            copyright: 'Made by Coysh Digital',
        },
    },
});
