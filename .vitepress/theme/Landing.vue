<script setup lang="ts">
import { withBase } from 'vitepress';

const repo = 'https://github.com/coysh-digital/client-reporter';

const steps = [
    {
        title: 'Connect the services',
        body: 'Point Client Reporter at the tools behind each site — the CMS, analytics, shop, uptime monitor. WordPress and Craft connect through a small read-only plugin; most others connect once for the whole workspace.',
    },
    {
        title: 'It collects on a schedule',
        body: 'Laravel’s scheduler pulls the numbers in for you and keeps them together, per site and per client. One cron line runs the lot — no worker to babysit, happy on cheap shared hosting.',
    },
    {
        title: 'You brand it and send',
        body: 'Arrange the sections, apply your branding, and hand it over as a secure link, a PDF, or an email in your name. Or let the client sign in to a portal that only shows their own reports.',
    },
];

const features = [
    ['One tidy structure', 'Client → Sites → Integrations → Data → Reports. Nothing more to learn than that.'],
    ['Fully white-label', 'Your logo, your colours, your name. Your clients never see a Client Reporter logo anywhere.'],
    ['Plain-English summaries', 'Worked out straight from the numbers — nothing invented, nothing to hallucinate.'],
    ['Room for your team', 'Administrator, Manager and Viewer roles, plus a locked-down portal for the people you report to.'],
    ['Read-only by design', 'The companion plugins only ever read. Every request is signed; nothing is written back to a client’s site.'],
    ['Yours to keep', 'You host it, you own the data. No seats, no per-client pricing, no licence keys, nothing phoning home.'],
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
    'your invoicing or accounting system — it can show invoices from FreeAgent or Xero in a report, and that’s it',
    'a CRM, a project manager, or an integration marketplace',
];
</script>

<template>
    <div class="ed">
        <!-- Masthead / hero -->
        <header class="masthead">
            <div class="wrap">
                <p class="dateline">Self-hosted · Open source · MIT licence</p>
                <h1 class="title">Reports your clients<br class="br" /> are glad to open.</h1>
                <p class="standfirst">
                    Client Reporter pulls the numbers from the tools your clients’ sites already run on — their CMS,
                    analytics, shop and uptime monitor — and turns them into a clean, branded report you host and own.
                    Free, and yours to keep.
                </p>
                <div class="actions">
                    <a class="btn" :href="withBase('/docs/installation')">Install it</a>
                    <a class="textlink" :href="withBase('/docs/')">Read the docs →</a>
                    <a class="textlink" :href="repo" rel="noopener">Source on GitHub ↗</a>
                </div>
            </div>

            <figure class="plate">
                <img
                    :src="withBase('/images/dashboard.png')"
                    alt="The Client Reporter dashboard: a portfolio of client sites, their health, and reports ready to send"
                    width="1440"
                    height="900"
                    loading="eager"
                />
                <figcaption>Fig. 1 — The dashboard: every client site, its health, and what’s ready to send.</figcaption>
            </figure>
        </header>

        <!-- 01 Why -->
        <section class="wrap sec">
            <div class="sec-head">
                <span class="num">01</span>
                <h2>Why this exists</h2>
            </div>
            <div class="prose two-col">
                <p>
                    I got tired of paying a monthly fee, per client, to a SaaS just to send people a tidy monthly report —
                    and of the data living on someone else’s server. So I built the thing I wanted: you host it, you own
                    the data, and it’s free. No seats, no per-client pricing, no licence keys, nothing to phone home.
                </p>
                <p>
                    One install is for one agency. It’s not a multi-tenant SaaS, and it’s not trying to be everything — it
                    does client reporting and tries to do that one thing really well. It’s also early days, so expect a few
                    rough edges and give it a test run before you point real clients at it.
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

        <!-- 03 What you get -->
        <section class="wrap sec">
            <div class="sec-head">
                <span class="num">03</span>
                <h2>What you get</h2>
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
                    <h2>The report is the point</h2>
                </div>
                <div class="report-copy">
                    <p>
                        Branding cascades from your agency to each client to each site, so you set a house style once and
                        tweak it where it matters. Pick the sections a client cares about — traffic, search, sales, uptime,
                        performance, downloads, invoices — or save the arrangement as a template. Then send it as a secure
                        link, a PDF, or an email, entirely in your name.
                    </p>
                </div>
                <figure class="plate plate-inline">
                    <img :src="withBase('/images/report-example.png')" alt="A finished client report, branded end to end for the agency" loading="lazy" />
                    <figcaption>Fig. 2 — A finished report, branded end to end. No Client Reporter logo in sight.</figcaption>
                </figure>
            </div>
        </section>

        <!-- 05 Integrations -->
        <section class="wrap sec">
            <div class="sec-head">
                <span class="num">05</span>
                <h2>Plugs into what you already use</h2>
            </div>
            <p class="lead">Twenty integrations so far, across eight categories. Most connect once for the whole workspace and match themselves to your sites.</p>
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
                signed requests. Missing something? There’s a small SDK and a generator for
                <a :href="withBase('/docs/creating-an-integration')">writing your own</a>.
            </p>
        </section>

        <!-- 06 Boundaries -->
        <section class="band">
            <div class="wrap sec">
                <div class="sec-head">
                    <span class="num">06</span>
                    <h2>What it deliberately doesn’t do</h2>
                </div>
                <p class="lead">Keeping the scope tight is a feature, not laziness. On purpose, Client Reporter is <strong>not</strong>:</p>
                <ul class="ruled">
                    <li v-for="item in notFor" :key="item">{{ item }}</li>
                </ul>
                <p class="note">If you need one of those, there are great dedicated tools for it — this happily stays in its lane.</p>
            </div>
        </section>

        <!-- Get started -->
        <section class="wrap sec start">
            <div class="sec-head">
                <span class="num">→</span>
                <h2>Getting it running</h2>
            </div>
            <p class="lead">Four steps, none of them scary. Clone it, point a web server at <code>public/</code>, open it in your browser for the install wizard, and add one cron line.</p>
            <pre class="code"><code>git clone https://github.com/coysh-digital/client-reporter.git
cd client-reporter
composer install
npm install &amp;&amp; npm run build

<span class="muted"># then, once installed, one cron line runs everything</span>
* * * * * php /path/to/artisan schedule:run</code></pre>
            <div class="actions">
                <a class="btn" :href="withBase('/docs/installation')">Read the install guide</a>
                <a class="textlink" :href="withBase('/docs/shared-hosting')">Running on shared hosting →</a>
            </div>
        </section>

        <!-- Colophon -->
        <footer class="colophon">
            <div class="wrap">
                <p class="mark">Client Reporter</p>
                <p>
                    Free and open source under the MIT licence. Contributions — code, docs, bug reports, or just telling me
                    what’s confusing — are genuinely welcome on <a :href="repo" rel="noopener">GitHub</a>. Found a security
                    issue? Please report it privately, per the <a :href="withBase('/docs/security')">security guide</a>.
                </p>
                <p class="by">Made by Tim Coysh</p>
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
