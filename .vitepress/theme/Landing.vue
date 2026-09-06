<script setup lang="ts">
import { withBase } from 'vitepress';

const repo = 'https://github.com/coysh-digital/client-reporter';

const steps = [
    {
        title: 'We connect the tools behind a site',
        body: 'We point it at the CMS, analytics, search console, the shop, the uptime monitor. WordPress and Craft connect through a small read-only plugin; the rest take an API key or a login, usually once for every site at once.',
    },
    {
        title: 'It collects on its own',
        body: 'From then on it pulls the numbers in on a schedule and keeps them together, per site and per client. One cron line runs the lot. We don’t touch it between reports.',
    },
    {
        title: 'The report is already there',
        body: 'When we need to send one, the numbers are waiting. We pick the sections, it comes out in our branding, and we send a link, a PDF, or an email. That’s the whole job.',
    },
];

const features = [
    ['Twenty integrations', 'CMS, analytics, search, the shop, uptime, performance and invoices — all feeding one report.'],
    ['Collected on a schedule', 'The numbers arrive on their own, so the report is already put together by the time you need it.'],
    ['Your branding, not ours', 'Every report goes out as your agency — logo, colours, name. There’s no Client Reporter logo anywhere a client can see.'],
    ['Written from the numbers', 'The plain-English summaries come straight from the data that was collected. Nothing is invented.'],
    ['A page per client', 'Each client’s sites, data and reports sit in one place, with a portal so a client can see their own.'],
    ['Completely free, self-hosted', 'It’s free and open source, and it runs on your own server. The data stays with you and nothing phones home.'],
];

const integrations = [
    { category: 'CMS', items: ['WordPress', 'Craft CMS'] },
    { category: 'Analytics', items: ['Google Analytics 4', 'Google Ads', 'Plausible', 'Fathom', 'Matomo', 'Umami'] },
    { category: 'Search', items: ['Google Search Console'] },
    { category: 'Ecommerce', items: ['WooCommerce', 'Craft Commerce', 'Shopify', 'Stripe'] },
    { category: 'Forms & Leads', items: ['Mailchimp'] },
    { category: 'Monitoring', items: ['UptimeRobot', 'Uptime Kuma', 'Better Uptime'] },
    { category: 'Performance', items: ['PageSpeed Insights'] },
    { category: 'Billing', items: ['FreeAgent', 'Xero'] },
];

const notFor = [
    'a deployment tracker, server monitor, or anything that SSHes into boxes',
    'a backup, malware-scanning or “update all the plugins for me” tool — the companion plugins are read-only',
    'its own uptime monitor — it plugs into UptimeRobot, Uptime Kuma or Better Uptime instead',
    'an invoicing or accounting system — it can show invoices from FreeAgent or Xero in a report, and that’s it',
    'a CRM, a project manager, or an integration marketplace',
];
</script>

<template>
    <div class="ed">
        <!-- Masthead / hero -->
        <header class="masthead">
            <div class="wrap">
                <p class="dateline">Completely free · Open source · Self-hosted</p>
                <h1 class="title">All the numbers behind a<br class="br" /> client’s site, in one report.</h1>
                <p class="standfirst">
                    We connect to everything behind a client’s site — CMS, analytics, shop, search, uptime — and turn it into
                    one branded report. We built it for our own agency; it’s completely free and open source, and you host it
                    yourself.
                </p>
                <div class="actions">
                    <a class="btn" :href="withBase('/docs/installation')">Install it</a>
                    <a class="textlink" :href="withBase('/sample-report')">See a sample report →</a>
                    <a class="textlink" :href="repo" rel="noopener">Source on GitHub ↗</a>
                </div>
            </div>

            <figure class="plate">
                <img
                    :src="withBase('/images/dashboard.png')"
                    alt="The Client Reporter dashboard: every client site, its health, and the reports that are ready to send"
                    width="1440"
                    height="900"
                    loading="eager"
                />
                <figcaption>Fig. 1 — The dashboard: every site we look after, its health, and what’s ready to send.</figcaption>
            </figure>
        </header>

        <!-- 01 Why -->
        <section class="wrap sec">
            <div class="sec-head">
                <span class="num">01</span>
                <h2>Why we built it</h2>
            </div>
            <div class="prose two-col">
                <p>
                    We’re a web agency, and we look after a stack of client sites. Every month each one needs a report —
                    pulling numbers out of analytics, the shop, the uptime monitor and a handful of other tools, then laying
                    them out so a client can read them. Doing that by hand, per client, got old fast, and the tools that do it
                    for you charge per client and keep the data on their servers.
                </p>
                <p>
                    So we built the version we wanted: it gathers everything itself, we host it, and the data stays ours. It’s
                    completely free and open source. One install is for one agency — it’s not a multi-tenant SaaS, and it
                    doesn’t try to be everything. It does client reporting. It’s also early, so there are still rough edges.
                </p>
            </div>
        </section>

        <!-- 02 How it works -->
        <section class="band">
            <div class="wrap sec">
                <div class="sec-head">
                    <span class="num">02</span>
                    <h2>How it works</h2>
                </div>
                <ol class="how">
                    <li v-for="(step, i) in steps" :key="step.title">
                        <span class="how-num">{{ i + 1 }}</span>
                        <h3>{{ step.title }}</h3>
                        <p>{{ step.body }}</p>
                    </li>
                </ol>
            </div>
        </section>

        <!-- 03 What it does -->
        <section class="wrap sec">
            <div class="sec-head">
                <span class="num">03</span>
                <h2>What it does</h2>
            </div>
            <div class="grid">
                <div v-for="[title, body] in features" :key="title" class="cell">
                    <h3>{{ title }}</h3>
                    <p>{{ body }}</p>
                </div>
            </div>
        </section>

        <!-- 04 The report -->
        <section class="band">
            <div class="wrap sec">
                <div class="sec-head">
                    <span class="num">04</span>
                    <h2>A report it made</h2>
                </div>
                <div class="report-copy">
                    <p>
                        We set our branding once and it flows down to every client and every site. For each report we pick the
                        sections that matter for that client — traffic, search, sales, uptime, performance, downloads,
                        invoices — and send it as a secure link, a PDF, or an email. Here’s one it put together:
                    </p>
                    <a class="report-link" :href="withBase('/sample-report')">See the full sample report →</a>
                </div>
                <a class="plate plate-inline" :href="withBase('/sample-report')">
                    <img :src="withBase('/images/report-example.png')" alt="The cover and overview of a report Client Reporter generated, in the agency's own branding" loading="lazy" />
                    <span class="plate-cap">Fig. 2 — the top of a report it generated, in our branding. See the full one →</span>
                </a>
            </div>
        </section>

        <!-- 05 Integrations -->
        <section class="wrap sec">
            <div class="sec-head">
                <span class="num">05</span>
                <h2>Integrations</h2>
            </div>
            <p class="lead">Everything it can pull from — twenty integrations so far, across eight categories. Most connect once for the whole workspace and match themselves to your sites.</p>
            <div class="index">
                <div v-for="group in integrations" :key="group.category" class="index-col">
                    <p class="index-cat">{{ group.category }}</p>
                    <ul>
                        <li v-for="item in group.items" :key="item">{{ item }}</li>
                    </ul>
                </div>
            </div>
            <p class="note">
                WordPress and Craft connect through small companion plugins that only ever hand back read-only data over
                signed requests. If an integration you use isn’t here, there’s a small SDK and a generator for
                <a :href="withBase('/docs/creating-an-integration')">adding one</a>.
            </p>
        </section>

        <!-- 06 Boundaries -->
        <section class="band">
            <div class="wrap sec">
                <div class="sec-head">
                    <span class="num">06</span>
                    <h2>What it doesn’t do</h2>
                </div>
                <p class="lead">We kept it to one job. On purpose, it’s <strong>not</strong>:</p>
                <ul class="ruled">
                    <li v-for="item in notFor" :key="item">{{ item }}</li>
                </ul>
                <p class="note">There are good dedicated tools for each of those. This one just does the reporting.</p>
            </div>
        </section>

        <!-- Get started -->
        <section class="wrap sec start">
            <div class="sec-head">
                <span class="num">→</span>
                <h2>Running it yourself</h2>
            </div>
            <p class="lead">It’s a Laravel app, and it’s completely free. Clone it, point a web server at <code>public/</code>, open it in your browser for the install wizard, and add one cron line. SQLite works out of the box, so there’s nothing else to set up.</p>
            <pre class="code"><code>git clone https://github.com/coysh-digital/client-reporter.git
cd client-reporter
composer install
npm install &amp;&amp; npm run build

<span class="muted"># then, once installed, one cron line runs everything</span>
* * * * * php /path/to/artisan schedule:run</code></pre>
            <div class="actions">
                <a class="btn" :href="withBase('/docs/installation')">The install guide</a>
                <a class="textlink" :href="withBase('/docs/shared-hosting')">Running on shared hosting →</a>
            </div>
        </section>

        <!-- Colophon -->
        <footer class="colophon">
            <div class="wrap">
                <p class="mark">Client Reporter</p>
                <p>
                    We’re Coysh Digital, a web agency. We built Client Reporter for our own client work and made it completely
                    free and open source under the MIT licence, in case it’s useful to you too. It’s early, so expect rough
                    edges — code, docs and bug reports are all welcome on <a :href="repo" rel="noopener">GitHub</a>. If you find
                    a security issue, please report it privately, per the <a :href="withBase('/docs/security')">security guide</a>.
                </p>
                <p class="by">Made by Coysh Digital</p>
            </div>
        </footer>
    </div>
</template>

<style scoped>
.ed {
    --pad: clamp(20px, 5vw, 56px);
    --measure: 940px;
    color: var(--cr-ink);
    overflow-x: clip;
}

.wrap {
    max-width: var(--measure);
    margin: 0 auto;
    padding: 0 var(--pad);
}

h1,
h2,
h3 {
    font-family: var(--cr-serif);
    margin: 0;
    letter-spacing: -0.015em;
}

p {
    margin: 0;
    line-height: 1.7;
}

/* Small letterspaced label, print-dateline style (no brackets, no mono). */
.dateline {
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--cr-brass);
    margin-bottom: 24px;
}

/* Masthead */
.masthead {
    padding: clamp(52px, 8vw, 104px) 0 0;
    text-align: center;
    background: var(--cr-paper);
}

.title {
    font-size: clamp(2.5rem, 6.4vw, 4.6rem);
    font-weight: 600;
    line-height: 1.04;
    letter-spacing: -0.025em;
}

.standfirst {
    max-width: 40ch;
    margin: 26px auto 0;
    font-size: clamp(1.1rem, 1.7vw, 1.3rem);
    line-height: 1.6;
    color: var(--cr-muted);
}

.actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 14px 24px;
    margin-top: 34px;
}

.masthead .actions {
    justify-content: center;
}

.btn {
    display: inline-flex;
    align-items: center;
    padding: 12px 26px;
    border-radius: 8px;
    background: var(--cr-accent);
    color: #fff;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    transition: background-color 0.15s, transform 0.1s;
}

.btn:hover {
    background: #2a355a;
}

.btn:active {
    transform: translateY(1px);
}

.textlink {
    font-weight: 600;
    color: var(--cr-accent);
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color 0.15s;
}

.textlink:hover {
    border-bottom-color: currentColor;
}

/* Framed plates (figures) with captions — the editorial signature. */
.plate {
    margin: clamp(44px, 6vw, 72px) auto 0;
    max-width: 1080px;
    padding: 0 var(--pad);
}

.plate img {
    display: block;
    width: 100%;
    height: auto;
    border: 1px solid var(--cr-line-strong);
    border-radius: 4px;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.02);
}

.plate figcaption {
    margin-top: 14px;
    font-family: var(--cr-serif);
    font-style: italic;
    font-size: 0.92rem;
    color: var(--cr-faint);
    text-align: center;
}

/* Sections */
.sec {
    padding: clamp(56px, 8vw, 96px) var(--pad);
}

.band {
    background: var(--cr-surface);
    border-top: 1px solid var(--cr-line);
    border-bottom: 1px solid var(--cr-line);
}

.band .sec {
    padding-left: var(--pad);
    padding-right: var(--pad);
}

.sec-head {
    display: flex;
    align-items: baseline;
    gap: 20px;
    padding-bottom: 22px;
    margin-bottom: 34px;
    border-bottom: 1px solid var(--cr-line);
}

.num {
    font-family: var(--cr-serif);
    font-size: clamp(1.4rem, 2.6vw, 2rem);
    font-weight: 600;
    color: var(--cr-brass);
    line-height: 1;
    flex-shrink: 0;
    font-variant-numeric: tabular-nums;
}

.sec-head h2 {
    font-size: clamp(1.6rem, 3vw, 2.35rem);
    font-weight: 600;
    line-height: 1.1;
}

.prose p {
    font-size: 1.1rem;
    color: var(--cr-muted);
}

.two-col {
    display: grid;
    gap: 28px;
}

@media (min-width: 760px) {
    .two-col {
        grid-template-columns: 1fr 1fr;
        gap: 44px;
    }
}

.lead {
    font-size: 1.15rem;
    color: var(--cr-muted);
    max-width: 64ch;
    margin-bottom: 34px;
}

/* 02 How it works — big serif numerals, no cards */
.how {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 40px;
}

@media (min-width: 820px) {
    .how {
        grid-template-columns: repeat(3, 1fr);
        gap: 48px;
    }
}

.how li {
    position: relative;
}

.how-num {
    display: block;
    font-family: var(--cr-serif);
    font-size: 2.6rem;
    font-weight: 600;
    color: var(--cr-brass);
    line-height: 1;
    margin-bottom: 16px;
}

.how h3 {
    font-size: 1.25rem;
    margin-bottom: 8px;
}

.how p {
    color: var(--cr-muted);
}

/* 03 What you get */
.grid {
    display: grid;
    gap: 0;
    border-top: 1px solid var(--cr-line);
}

@media (min-width: 640px) {
    .grid {
        grid-template-columns: 1fr 1fr;
    }
}

@media (min-width: 980px) {
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

.cell {
    padding: 26px 28px 30px;
    border-bottom: 1px solid var(--cr-line);
    border-right: 1px solid var(--cr-line);
}

.cell:nth-child(-n + 3) {
    border-top: 0;
}

@media (min-width: 640px) and (max-width: 979px) {
    .cell:nth-child(2n) {
        border-right: 0;
    }
}

@media (min-width: 980px) {
    .cell:nth-child(3n) {
        border-right: 0;
    }
}

@media (max-width: 639px) {
    .cell {
        border-right: 0;
    }
}

.cell h3 {
    font-size: 1.15rem;
    margin-bottom: 8px;
}

.cell p {
    color: var(--cr-muted);
    font-size: 0.98rem;
}

/* 04 Report */
.report-copy {
    max-width: 64ch;
}

.report-copy p {
    font-size: 1.1rem;
    color: var(--cr-muted);
}

.report-link {
    display: inline-block;
    margin-top: 18px;
    font-weight: 600;
    color: var(--cr-accent);
    text-decoration: none;
}

.report-link:hover {
    text-decoration: underline;
}

a.plate-inline {
    display: block;
    text-decoration: none;
}

.plate-cap {
    display: block;
    margin-top: 14px;
    font-family: var(--cr-serif);
    font-style: italic;
    font-size: 0.92rem;
    color: var(--cr-faint);
    text-align: center;
}

.plate-inline {
    margin-top: 40px;
    padding: 0;
    max-width: none;
}

/* 05 Integrations — an index/directory */
.index {
    display: grid;
    gap: 30px 40px;
    border-top: 1px solid var(--cr-line);
    padding-top: 34px;
}

@media (min-width: 560px) {
    .index {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 900px) {
    .index {
        grid-template-columns: repeat(4, 1fr);
    }
}

.index-cat {
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--cr-brass);
    margin-bottom: 12px;
}

.index ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.index li {
    padding: 4px 0;
    font-size: 1rem;
    color: var(--cr-ink);
}

.note {
    margin-top: 34px;
    max-width: 68ch;
    color: var(--cr-muted);
}

.note a,
.report-copy a,
.colophon a {
    color: var(--cr-accent);
    font-weight: 600;
}

/* 06 Boundaries — ruled list */
.ruled {
    list-style: none;
    margin: 0;
    padding: 0;
    border-top: 1px solid var(--cr-line);
    max-width: 72ch;
}

.ruled li {
    padding: 15px 0 15px 28px;
    border-bottom: 1px solid var(--cr-line);
    color: var(--cr-ink);
    line-height: 1.6;
    position: relative;
}

.ruled li::before {
    content: '—';
    position: absolute;
    left: 0;
    color: var(--cr-brass);
}

/* Get started */
.start .lead {
    max-width: 68ch;
}

.code {
    background: #201f24;
    color: #e4e0e8;
    border-radius: 8px;
    padding: 22px 24px;
    overflow-x: auto;
    font-family: var(--cr-mono);
    font-size: 0.9rem;
    line-height: 1.7;
    margin: 0 0 34px;
}

.code .muted {
    color: #8b8892;
}

/* Colophon */
.colophon {
    background: var(--cr-paper);
    border-top: 1px solid var(--cr-line);
    padding: clamp(48px, 7vw, 80px) 0;
    text-align: center;
}

.colophon .mark {
    font-family: var(--cr-serif);
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 14px;
}

.colophon p:not(.mark):not(.by) {
    max-width: 62ch;
    margin: 0 auto;
    color: var(--cr-muted);
}

.by {
    margin-top: 18px;
    font-size: 0.85rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--cr-faint);
}

.code code {
    font-family: inherit;
    color: inherit;
    white-space: pre;
}

.start code,
.lead code {
    font-family: var(--cr-mono);
    font-size: 0.86em;
    background: var(--cr-brass-soft);
    color: var(--cr-brass);
    padding: 1px 6px;
    border-radius: 5px;
}

@media (max-width: 520px) {
    .br {
        display: none;
    }
}
</style>
