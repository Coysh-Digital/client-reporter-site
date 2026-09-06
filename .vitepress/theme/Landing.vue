<script setup lang="ts">
import { withBase } from 'vitepress';

const repo = 'https://github.com/coysh-digital/client-reporter';

const features = [
    {
        title: 'One tidy structure',
        body: 'Client → Sites → Integrations → Data → Reports. Nothing more to learn than that.',
    },
    {
        title: 'Data collected for you',
        body: 'Laravel’s scheduler pulls the numbers in on a schedule. A single cron line runs the whole show, so it’s happy on cheap shared hosting.',
    },
    {
        title: 'Fully white-label',
        body: 'Your logo, your colours, your name. Your clients never see a Client Reporter logo anywhere — the report is yours.',
    },
    {
        title: 'Reports clients actually read',
        body: 'Clean sections, plain-English summaries worked out straight from the numbers, a shareable link, a PDF, or an email in your branding.',
    },
    {
        title: 'Room for your team',
        body: 'Administrator, Manager and Viewer roles for you, plus a locked-down portal for the people you report to.',
    },
    {
        title: 'Yours to keep',
        body: 'You host it, you own the data. No seats, no per-client pricing, no licence keys, nothing phoning home.',
    },
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

const steps = [
    { title: 'Clone and install', code: 'git clone https://github.com/coysh-digital/client-reporter.git\ncd client-reporter\ncomposer install\nnpm install && npm run build' },
    { title: 'Point a web server at public/', code: null, body: 'Apache, nginx, Caddy, a shared host’s control panel — anything that can serve a folder.' },
    { title: 'Open it in your browser', code: null, body: 'The install wizard checks the server, sets up the database (SQLite is the easy default) and creates your admin account.' },
    { title: 'Add one cron line', code: '* * * * * php /path/to/artisan schedule:run' },
];
</script>

<template>
    <div class="landing">
        <!-- Hero -->
        <section class="hero">
            <div class="wrap hero-grid">
                <div class="hero-copy">
                    <p class="eyebrow">Free · open source · self-hosted</p>
                    <h1>Client reporting you host yourself. <span class="accent">Your logo, your data, no monthly fee.</span></h1>
                    <p class="lede">
                        Client Reporter plugs into the services your clients’ sites already run on — their CMS, analytics,
                        shop, uptime monitor — pulls the numbers in on a schedule, and turns them into a clean, branded
                        report you can hand over with your name on it.
                    </p>
                    <div class="actions">
                        <a class="btn btn-primary" :href="withBase('/docs/installation')">Install it</a>
                        <a class="btn btn-secondary" :href="repo" rel="noopener">See the code on GitHub</a>
                    </div>
                    <p class="fineprint">MIT licensed. PHP 8.3+, SQLite or MySQL or PostgreSQL. No Docker, no Redis, nothing exotic.</p>
                </div>
                <figure class="hero-shot">
                    <img :src="withBase('/images/dashboard.png')" alt="The Client Reporter dashboard: a portfolio of client sites, their health, and reports ready to send" width="1440" height="900" loading="eager" />
                </figure>
            </div>
        </section>

        <!-- Why -->
        <section class="why">
            <div class="wrap narrow">
                <h2>Why this exists</h2>
                <p>
                    I got tired of paying a monthly fee, per client, to a SaaS just to send people a tidy monthly report —
                    and of the data living on someone else’s server. So I built the thing I wanted: you host it, you own the
                    data, and it’s free. No seats, no per-client pricing, no licence keys, nothing to phone home.
                </p>
                <p>
                    One install is for one agency. It’s not a multi-tenant SaaS, and it’s not trying to be everything — it
                    does client reporting and tries to do that one thing really well.
                </p>
                <div class="callout">
                    <strong>Heads up: it’s early.</strong> Client Reporter is under active development, so expect a few rough
                    edges and do give it a test run before you point real clients at it.
                </div>
            </div>
        </section>

        <!-- Features -->
        <section class="features">
            <div class="wrap">
                <div class="section-head">
                    <h2>What you get</h2>
                    <p>The pieces of a monthly report, without the monthly bill.</p>
                </div>
                <div class="feature-grid">
                    <article v-for="feature in features" :key="feature.title" class="feature">
                        <h3>{{ feature.title }}</h3>
                        <p>{{ feature.body }}</p>
                    </article>
                </div>
            </div>
        </section>

        <!-- Report -->
        <section class="showcase">
            <div class="wrap showcase-grid">
                <figure class="shot">
                    <img :src="withBase('/images/report-example.png')" alt="A finished client report with the agency’s own branding" loading="lazy" />
                </figure>
                <div class="showcase-copy">
                    <p class="eyebrow">The report</p>
                    <h2>Looks like you made it. Because you did.</h2>
                    <p>
                        Branding cascades from your agency to each client to each site, so you can set a house style once and
                        tweak it where it matters. Cover, traffic, search, sales, uptime, performance, downloads, invoices —
                        pick the sections each client cares about, or save the arrangement as a template.
                    </p>
                    <p>
                        Send it as a secure link (with an expiry and a password if you like), as a PDF, or as an email in your
                        branding. Clients can also sign in to a portal that only ever shows them their own sites and reports.
                    </p>
                    <a class="link" :href="withBase('/docs/reports')">How reports work →</a>
                </div>
            </div>
        </section>

        <!-- Integrations -->
        <section class="integrations">
            <div class="wrap">
                <div class="section-head">
                    <h2>Plugs into what you already use</h2>
                    <p>Twenty integrations so far. Most connect once for the whole workspace and match themselves to your sites.</p>
                </div>
                <div class="integration-grid">
                    <div v-for="group in integrations" :key="group.category" class="integration-group">
                        <h3>{{ group.category }}</h3>
                        <ul>
                            <li v-for="item in group.items" :key="item">{{ item }}</li>
                        </ul>
                    </div>
                </div>
                <p class="integration-note">
                    WordPress and Craft connect through small companion plugins that only ever hand back read-only data over
                    signed requests. Missing something? There’s a small SDK and a generator for
                    <a :href="withBase('/docs/creating-an-integration')">writing your own</a>.
                </p>
            </div>
        </section>

        <!-- Not for -->
        <section class="not-for">
            <div class="wrap narrow">
                <h2>What it deliberately doesn’t do</h2>
                <p>Keeping the scope tight is a feature, not laziness. On purpose, Client Reporter is <strong>not</strong>:</p>
                <ul>
                    <li v-for="item in notFor" :key="item">{{ item }}</li>
                </ul>
                <p>If you need one of those, there are great dedicated tools for it — this happily stays in its lane.</p>
            </div>
        </section>

        <!-- Install -->
        <section class="install">
            <div class="wrap">
                <div class="section-head">
                    <h2>Getting it running</h2>
                    <p>Four steps, none of them scary.</p>
                </div>
                <ol class="steps">
                    <li v-for="(step, index) in steps" :key="step.title" class="step">
                        <span class="step-number">{{ index + 1 }}</span>
                        <div class="step-body">
                            <h3>{{ step.title }}</h3>
                            <pre v-if="step.code"><code>{{ step.code }}</code></pre>
                            <p v-if="step.body">{{ step.body }}</p>
                        </div>
                    </li>
                </ol>
                <div class="actions centred">
                    <a class="btn btn-primary" :href="withBase('/docs/installation')">Read the install guide</a>
                    <a class="btn btn-secondary" :href="withBase('/docs/shared-hosting')">Running on shared hosting</a>
                </div>
            </div>
        </section>

        <!-- Outro -->
        <section class="outro">
            <div class="wrap narrow">
                <h2>Want to help?</h2>
                <p>
                    Contributions are genuinely welcome — code, docs, bug reports, or just telling me what’s confusing.
                    Everything happens in the open on <a :href="repo" rel="noopener">GitHub</a>. Found a security issue?
                    Please report it privately — the details are in the
                    <a :href="withBase('/docs/security')">security guide</a>.
                </p>
            </div>
        </section>
    </div>
</template>

<style scoped>
.landing {
    --pad: clamp(20px, 5vw, 64px);
    color: var(--cr-ink);
}

.wrap {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 var(--pad);
}

.narrow {
    max-width: 760px;
}

section {
    padding: clamp(56px, 8vw, 104px) 0;
}

h1,
h2,
h3 {
    font-family: var(--cr-serif);
    letter-spacing: -0.015em;
    line-height: 1.12;
    margin: 0;
}

h1 {
    font-size: clamp(2.1rem, 4.6vw, 3.4rem);
    font-weight: 600;
}

h2 {
    font-size: clamp(1.7rem, 3vw, 2.25rem);
    font-weight: 600;
}

h3 {
    font-size: 1.15rem;
    font-weight: 600;
}

p {
    line-height: 1.65;
    margin: 0;
}

.eyebrow {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    color: var(--cr-brass);
    margin-bottom: 14px;
}

.accent {
    color: var(--cr-accent);
}

.lede {
    font-size: 1.15rem;
    color: var(--cr-muted);
    margin-top: 20px;
    max-width: 44ch;
}

.fineprint {
    margin-top: 16px;
    font-size: 0.85rem;
    color: var(--cr-faint);
}

.actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 28px;
}

.actions.centred {
    justify-content: center;
    margin-top: 40px;
}

.btn {
    display: inline-flex;
    align-items: center;
    padding: 11px 20px;
    border-radius: 10px;
    font-weight: 600;
    font-size: 0.95rem;
    text-decoration: none;
    transition: background-color 0.15s, border-color 0.15s, transform 0.15s;
}

.btn:active {
    transform: translateY(1px);
}

.btn-primary {
    background: var(--cr-accent);
    color: #fff;
}

.btn-primary:hover {
    background: #2a355a;
}

.dark .btn-primary {
    background: #4b5a94;
}

.dark .btn-primary:hover {
    background: #5a6aa8;
}

.btn-secondary {
    background: var(--cr-surface);
    color: var(--cr-ink);
    border: 1px solid var(--cr-line-strong);
}

.btn-secondary:hover {
    border-color: var(--cr-faint);
}

.link {
    display: inline-block;
    margin-top: 18px;
    font-weight: 600;
    color: var(--cr-accent);
    text-decoration: none;
}

.link:hover {
    text-decoration: underline;
}

/* Hero */
.hero {
    padding-top: clamp(40px, 7vw, 88px);
    background:
        radial-gradient(60% 50% at 80% 0%, var(--cr-accent-soft) 0%, transparent 70%),
        var(--cr-paper);
}

.hero-grid {
    display: grid;
    gap: 40px;
    align-items: center;
}

@media (min-width: 960px) {
    .hero-grid {
        grid-template-columns: 1fr 1.15fr;
        gap: 56px;
    }
}

.hero-shot {
    margin: 0;
    border-radius: 14px;
    border: 1px solid var(--cr-line);
    background: var(--cr-surface);
    box-shadow: 0 30px 80px -30px rgba(27, 26, 24, 0.35);
    overflow: hidden;
}

.hero-shot img {
    display: block;
    width: 100%;
    height: auto;
}

/* Why */
.why {
    background: var(--cr-surface);
    border-top: 1px solid var(--cr-line);
    border-bottom: 1px solid var(--cr-line);
}

.why p {
    font-size: 1.08rem;
    color: var(--cr-muted);
    margin-top: 18px;
}

.callout {
    margin-top: 28px;
    padding: 16px 20px;
    border-left: 3px solid var(--cr-brass);
    background: var(--cr-brass-soft);
    border-radius: 0 10px 10px 0;
    color: var(--cr-ink);
    line-height: 1.6;
}

/* Features */
.section-head {
    max-width: 640px;
    margin-bottom: 36px;
}

.section-head p {
    margin-top: 10px;
    color: var(--cr-muted);
    font-size: 1.05rem;
}

.feature-grid {
    display: grid;
    gap: 16px;
}

@media (min-width: 640px) {
    .feature-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 960px) {
    .feature-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

.feature {
    background: var(--cr-surface);
    border: 1px solid var(--cr-line);
    border-top: 2px solid var(--cr-accent);
    border-radius: 12px;
    padding: 22px 22px 24px;
}

.feature p {
    margin-top: 10px;
    color: var(--cr-muted);
    font-size: 0.97rem;
}

/* Showcase */
.showcase {
    background: var(--cr-surface);
    border-top: 1px solid var(--cr-line);
    border-bottom: 1px solid var(--cr-line);
}

.showcase-grid {
    display: grid;
    gap: 40px;
    align-items: center;
}

@media (min-width: 960px) {
    .showcase-grid {
        grid-template-columns: 1fr 1fr;
        gap: 64px;
    }
}

.shot {
    margin: 0;
    border-radius: 14px;
    border: 1px solid var(--cr-line);
    box-shadow: 0 30px 80px -30px rgba(27, 26, 24, 0.3);
    overflow: hidden;
    background: #fff;
}

.shot img {
    display: block;
    width: 100%;
    height: auto;
}

.showcase-copy p {
    margin-top: 16px;
    color: var(--cr-muted);
}

.showcase-copy h2 {
    margin-bottom: 4px;
}

/* Integrations */
.integration-grid {
    display: grid;
    gap: 14px;
}

@media (min-width: 640px) {
    .integration-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 960px) {
    .integration-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

.integration-group {
    background: var(--cr-surface);
    border: 1px solid var(--cr-line);
    border-radius: 12px;
    padding: 18px 20px;
}

.integration-group h3 {
    font-family: inherit;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--cr-brass);
}

.integration-group ul {
    list-style: none;
    margin: 10px 0 0;
    padding: 0;
}

.integration-group li {
    padding: 5px 0;
    border-top: 1px solid var(--cr-line);
    font-size: 0.95rem;
}

.integration-group li:first-child {
    border-top: 0;
}

.integration-note {
    margin-top: 28px;
    max-width: 720px;
    color: var(--cr-muted);
}

.integration-note a {
    color: var(--cr-accent);
    font-weight: 600;
}

/* Not for */
.not-for {
    background: var(--cr-surface);
    border-top: 1px solid var(--cr-line);
    border-bottom: 1px solid var(--cr-line);
}

.not-for p {
    margin-top: 16px;
    color: var(--cr-muted);
    font-size: 1.05rem;
}

.not-for ul {
    margin: 18px 0 0;
    padding-left: 1.2em;
    color: var(--cr-ink);
    line-height: 1.7;
}

.not-for li + li {
    margin-top: 6px;
}

/* Install */
.steps {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 14px;
}

.step {
    display: grid;
    grid-template-columns: 40px 1fr;
    gap: 16px;
    align-items: start;
    background: var(--cr-surface);
    border: 1px solid var(--cr-line);
    border-radius: 12px;
    padding: 20px 22px;
}

.step-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 999px;
    background: var(--cr-accent);
    color: #fff;
    font-family: var(--cr-serif);
    font-weight: 600;
}

.step-body p {
    margin-top: 8px;
    color: var(--cr-muted);
}

.step-body pre {
    margin: 12px 0 0;
    padding: 14px 16px;
    border-radius: 10px;
    background: var(--vp-code-block-bg);
    overflow-x: auto;
    font-size: 0.86rem;
    line-height: 1.55;
}

.step-body code {
    font-family: var(--vp-font-family-mono);
    color: var(--cr-ink);
}

/* Outro */
.outro p {
    margin-top: 16px;
    color: var(--cr-muted);
    font-size: 1.05rem;
}

.outro a {
    color: var(--cr-accent);
    font-weight: 600;
}
</style>
