<script setup lang="ts">
import { withBase } from 'vitepress';

const repo = 'https://github.com/coysh-digital/client-reporter';

const features = [
    {
        title: 'One tidy structure',
        body: 'Client → Sites → Integrations → Data → Reports. Nothing more to learn than that.',
    },
    {
        title: 'Collected on a schedule',
        body: 'Laravel’s scheduler pulls the numbers in for you. A single cron line runs the whole show, so it’s happy on cheap shared hosting.',
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

// A flat list for the scrolling "works with your stack" strip.
const stack = [
    'WordPress', 'Craft CMS', 'GA4', 'Google Ads', 'Plausible', 'Fathom', 'Matomo', 'Umami',
    'Search Console', 'WooCommerce', 'Shopify', 'Stripe', 'Mailchimp', 'UptimeRobot',
    'Uptime Kuma', 'Better Uptime', 'PageSpeed', 'FreeAgent', 'Xero',
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
    { title: 'Point a web server at public/', body: 'Apache, nginx, Caddy, a shared host’s control panel — anything that can serve a folder.' },
    { title: 'Open it in your browser', body: 'The install wizard checks the server, sets up the database (SQLite is the easy default) and creates your admin account.' },
    { title: 'Add one cron line', code: '* * * * * php /path/to/artisan schedule:run' },
];
</script>

<template>
    <div class="landing">
        <!-- Hero -->
        <section class="hero">
            <div class="wrap hero-inner">
                <a class="pill" :href="repo" rel="noopener">
                    <span class="pill-dot" aria-hidden="true"></span>
                    <span class="pill-label">Free &amp; open source</span>
                    <span class="pill-sep" aria-hidden="true">|</span>
                    <span class="pill-text">MIT · self-hosted</span>
                    <span class="pill-arrow" aria-hidden="true">→</span>
                </a>

                <p class="eyebrow">[ SELF-HOSTED CLIENT REPORTING ]<span class="cursor" aria-hidden="true"></span></p>

                <h1 class="headline">
                    Your clients’ numbers.<br />
                    <em>One report with your name on it.</em>
                </h1>

                <p class="lede">
                    Client Reporter plugs into the services your clients’ sites already run on — their CMS, analytics,
                    shop, uptime monitor — pulls the numbers in on a schedule, and turns them into a clean, branded
                    report you can hand over as your own.
                </p>

                <div class="actions">
                    <a class="btn btn-primary" :href="withBase('/docs/installation')">Install it</a>
                    <a class="btn btn-ghost" :href="repo" rel="noopener">See the code on GitHub&nbsp;↗</a>
                </div>
                <p class="fineprint">
                    <code>PHP 8.3+</code> · <code>SQLite / MySQL / PostgreSQL</code> · no Docker, no Redis, nothing exotic
                </p>

                <figure class="hero-shot">
                    <img
                        :src="withBase('/images/dashboard.png')"
                        alt="The Client Reporter dashboard: a portfolio of client sites, their health, and reports ready to send"
                        width="1440"
                        height="900"
                        loading="eager"
                    />
                </figure>
            </div>
        </section>

        <!-- Stack strip -->
        <section class="strip">
            <div class="wrap">
                <p class="strip-label">[ CONNECTS WITH THE STACK YOU ALREADY RUN ]</p>
            </div>
            <div class="marquee" aria-hidden="true">
                <div class="marquee-track">
                    <span v-for="item in stack" :key="`a-${item}`" class="chip">{{ item }}</span>
                    <span v-for="item in stack" :key="`b-${item}`" class="chip">{{ item }}</span>
                </div>
            </div>
            <p class="sr-only">Works with {{ stack.join(', ') }}.</p>
        </section>

        <!-- Why -->
        <section class="why">
            <div class="wrap narrow">
                <p class="eyebrow">[ WHY THIS EXISTS ]</p>
                <h2>Built because the monthly bill was the silly part.</h2>
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

        <!-- Section A: plugins -->
        <section class="split split-a">
            <div class="wrap split-grid">
                <div class="split-copy">
                    <p class="eyebrow warm">[ FIRST-CLASS PLUGINS ]<span class="cursor warm-cursor" aria-hidden="true"></span></p>
                    <h2>Connect. Collect. <em>Report.</em></h2>
                    <p>
                        Drop the companion plugin into a WordPress or Craft site and it detects the stack — the forms plugin,
                        the shop, the CMS version, how many plugins are installed — then starts pulling the numbers in on its own.
                    </p>
                    <p>
                        No manual mapping, no CSV imports. And it only ever reads: every request is HMAC-signed and nothing is
                        written back to your client’s site.
                    </p>
                    <a class="link" :href="withBase('/docs/wordpress')">How the plugins connect →</a>
                </div>

                <div class="device" aria-hidden="true">
                    <div class="device-head">
                        <span class="device-name"><span class="device-icon">◇</span> client-reporter-wordpress</span>
                        <span class="badge badge-ok">Active</span>
                    </div>
                    <div class="device-body">
                        <div class="check-row">
                            <span class="tick">✓</span>
                            <div>
                                <p class="check-title">Plugin installed</p>
                                <p class="check-sub">v1.0.0 · read-only · acme.com</p>
                            </div>
                        </div>
                        <div class="check-row">
                            <span class="tick">✓</span>
                            <div>
                                <p class="check-title">Stack detected</p>
                                <p class="tag-row">
                                    <span class="tag tag-woo">WooCommerce</span>
                                    <span class="tag tag-gf">Gravity Forms</span>
                                    <span class="tag tag-wp">WordPress 6.5</span>
                                </p>
                            </div>
                        </div>
                        <div class="check-row">
                            <span class="tick">✓</span>
                            <div>
                                <p class="check-title">Signed &amp; read-only</p>
                                <p class="check-sub">HMAC-SHA256 · nothing written back</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section B: one place -->
        <section class="split split-b">
            <div class="wrap split-grid reverse">
                <div class="split-copy">
                    <p class="eyebrow warm">[ RUNS ON ONE CRON LINE ]</p>
                    <h2>Every tool you use, <em>one place.</em></h2>
                    <p>
                        Analytics, search, sales, uptime, Core Web Vitals, CMS activity, invoices — the scheduler collects
                        from every connected service and keeps it all together, per site and per client. There’s no worker to
                        babysit and nothing to keep alive.
                    </p>
                    <p>
                        Prefer a service that isn’t bundled? There’s a small SDK and a generator, so you can add your own in
                        PHP. And when you want answers fast, point an AI assistant at it over read-only <a :href="withBase('/docs/mcp')">MCP</a>.
                    </p>
                    <a class="link" :href="withBase('/docs/integrations')">See how collection works →</a>
                </div>

                <div class="terminal" aria-hidden="true">
                    <div class="terminal-head">
                        <span class="dot"></span><span class="dot"></span><span class="dot"></span>
                        <span class="terminal-title">crontab</span>
                    </div>
                    <pre class="terminal-body"><code><span class="c-comment"># one cron line runs everything</span>
<span class="c-prompt">*</span> * * * * php artisan <span class="c-cmd">schedule:run</span>

<span class="c-comment"># ask your data anything — read-only</span>
<span class="c-prompt">$</span> php artisan <span class="c-cmd">mcp:start</span> client-reporter
<span class="c-out">→ 21 clients · 34 sites · 30 connected</span>
<span class="c-out">→ 3 reports ready to send</span></code></pre>
                </div>
            </div>
        </section>

        <!-- Features -->
        <section class="features">
            <div class="wrap">
                <div class="section-head">
                    <p class="eyebrow">[ WHAT YOU GET ]</p>
                    <h2>The pieces of a monthly report, without the monthly bill.</h2>
                </div>
                <div class="feature-grid">
                    <article v-for="feature in features" :key="feature.title" class="feature">
                        <h3>{{ feature.title }}</h3>
                        <p>{{ feature.body }}</p>
                    </article>
                </div>
            </div>
        </section>

        <!-- Report showcase -->
        <section class="showcase">
            <div class="wrap showcase-grid">
                <figure class="shot">
                    <img :src="withBase('/images/report-example.png')" alt="A finished client report with the agency’s own branding" loading="lazy" />
                </figure>
                <div class="showcase-copy">
                    <p class="eyebrow warm">[ FULLY WHITE-LABEL ]</p>
                    <h2>Looks like you made it. <em>Because you did.</em></h2>
                    <p>
                        Branding cascades from your agency to each client to each site, so you set a house style once and tweak
                        it where it matters. Cover, traffic, search, sales, uptime, performance, downloads, invoices — pick the
                        sections each client cares about, or save the arrangement as a template.
                    </p>
                    <p>
                        Send it as a secure link (with an expiry and a password if you like), as a PDF, or as an email in your
                        branding. Clients can also sign in to a portal that only ever shows them their own sites and reports.
                    </p>
                    <a class="link" :href="withBase('/docs/reports')">How reports work →</a>
                </div>
            </div>
        </section>

        <!-- Integrations grid -->
        <section class="integrations">
            <div class="wrap">
                <div class="section-head">
                    <p class="eyebrow">[ TWENTY INTEGRATIONS, AND COUNTING ]</p>
                    <h2>Plugs into what you already use.</h2>
                    <p class="section-sub">Most connect once for the whole workspace and match themselves to your sites.</p>
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
                <p class="eyebrow">[ STAYS IN ITS LANE ]</p>
                <h2>What it deliberately doesn’t do.</h2>
                <p class="section-sub">Keeping the scope tight is a feature, not laziness. On purpose, Client Reporter is <strong>not</strong>:</p>
                <ul class="cross-list">
                    <li v-for="item in notFor" :key="item"><span class="cross" aria-hidden="true">✕</span>{{ item }}</li>
                </ul>
                <p>If you need one of those, there are great dedicated tools for it — this happily stays in its lane.</p>
            </div>
        </section>

        <!-- Install -->
        <section class="install">
            <div class="wrap">
                <div class="section-head">
                    <p class="eyebrow warm">[ GETTING IT RUNNING ]</p>
                    <h2>Four steps, none of them scary.</h2>
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
                    <a class="btn btn-ghost" :href="withBase('/docs/shared-hosting')">Running on shared hosting&nbsp;→</a>
                </div>
            </div>
        </section>

        <!-- Outro -->
        <section class="outro">
            <div class="wrap narrow">
                <p class="eyebrow">[ OPEN SOURCE ]</p>
                <h2>Want to help?</h2>
                <p>
                    Contributions are genuinely welcome — code, docs, bug reports, or just telling me what’s confusing.
                    Everything happens in the open on <a :href="repo" rel="noopener">GitHub</a>. Found a security issue?
                    Please report it privately — the details are in the
                    <a :href="withBase('/docs/security')">security guide</a>.
                </p>
                <div class="actions">
                    <a class="btn btn-primary" :href="withBase('/docs/')">Read the docs</a>
                    <a class="btn btn-ghost" :href="repo" rel="noopener">Star it on GitHub&nbsp;↗</a>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.landing {
    --pad: clamp(20px, 5vw, 64px);
    color: var(--cr-ink);
    overflow-x: clip;
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
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
    padding: clamp(54px, 8vw, 100px) 0;
}

h1,
h2,
h3 {
    font-family: var(--cr-serif);
    letter-spacing: -0.015em;
    line-height: 1.1;
    margin: 0;
}

h2 {
    font-size: clamp(1.75rem, 3.2vw, 2.5rem);
    font-weight: 600;
}

h2 em,
.headline em {
    font-style: italic;
    color: var(--cr-accent);
}

h3 {
    font-size: 1.15rem;
    font-weight: 600;
}

p {
    line-height: 1.65;
    margin: 0;
}

/* Monospace eyebrows in brackets, with a blinking cursor block. */
.eyebrow {
    font-family: var(--cr-mono);
    font-size: 0.74rem;
    font-weight: 500;
    letter-spacing: 0.04em;
    color: var(--cr-accent);
    margin: 0 0 16px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.eyebrow.warm {
    color: var(--cr-warm);
}

.cursor {
    display: inline-block;
    width: 8px;
    height: 15px;
    background: var(--cr-accent);
    animation: blink 1.1s steps(1) infinite;
}

.cursor.warm-cursor {
    background: var(--cr-warm);
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}

.headline {
    font-family: var(--cr-serif);
    font-size: clamp(2.3rem, 6vw, 4rem);
    font-weight: 600;
    line-height: 1.08;
    letter-spacing: -0.02em;
    margin: 0;
}

.lede {
    font-size: 1.15rem;
    color: var(--cr-muted);
    margin-top: 22px;
    max-width: 44ch;
}

.section-head {
    max-width: 680px;
    margin-bottom: 38px;
}

.section-sub {
    margin-top: 12px;
    color: var(--cr-muted);
    font-size: 1.05rem;
}

/* Pill */
.pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px 6px 12px;
    border: 1px solid var(--cr-line-strong);
    border-radius: 999px;
    background: var(--cr-surface);
    font-size: 0.82rem;
    text-decoration: none;
    color: var(--cr-ink);
    margin-bottom: 26px;
    transition: border-color 0.15s, transform 0.15s;
}

.pill:hover {
    border-color: var(--cr-faint);
    transform: translateY(-1px);
}

.pill-dot {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: var(--cr-ok);
    box-shadow: 0 0 0 3px rgba(63, 125, 84, 0.16);
}

.pill-label {
    font-weight: 600;
}

.pill-sep {
    color: var(--cr-line-strong);
}

.pill-text {
    font-family: var(--cr-mono);
    font-size: 0.76rem;
    color: var(--cr-muted);
}

.pill-arrow {
    color: var(--cr-faint);
}

/* Buttons */
.actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 30px;
}

.actions.centred {
    justify-content: center;
    margin-top: 40px;
}

.btn {
    display: inline-flex;
    align-items: center;
    padding: 11px 22px;
    border-radius: 10px;
    font-weight: 600;
    font-size: 0.98rem;
    text-decoration: none;
    transition: background-color 0.15s, border-color 0.15s, transform 0.1s;
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

.btn-ghost {
    background: var(--cr-surface);
    color: var(--cr-ink);
    border: 1px solid var(--cr-line-strong);
    font-family: var(--cr-mono);
    font-size: 0.88rem;
    font-weight: 500;
}

.btn-ghost:hover {
    border-color: var(--cr-faint);
}

.link {
    display: inline-block;
    margin-top: 20px;
    font-weight: 600;
    color: var(--cr-accent);
    text-decoration: none;
}

.link:hover {
    text-decoration: underline;
}

.fineprint {
    margin-top: 18px;
    font-size: 0.85rem;
    color: var(--cr-faint);
}

.fineprint code {
    font-family: var(--cr-mono);
    font-size: 0.8rem;
    background: var(--cr-brass-soft);
    color: var(--cr-brass);
    padding: 2px 7px;
    border-radius: 6px;
}

/* Hero */
.hero {
    padding-top: clamp(36px, 6vw, 72px);
    padding-bottom: 0;
    background:
        radial-gradient(70% 60% at 78% -10%, var(--cr-accent-soft) 0%, transparent 62%),
        linear-gradient(var(--cr-paper), var(--cr-paper));
    background-color: var(--cr-paper);
}

.hero-inner {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.hero .eyebrow {
    justify-content: center;
}

.hero .lede {
    margin-left: auto;
    margin-right: auto;
    max-width: 52ch;
}

.hero .actions {
    justify-content: center;
}

.hero-shot {
    margin: clamp(44px, 6vw, 72px) auto 0;
    max-width: 960px;
    width: 100%;
    border-radius: 14px 14px 0 0;
    overflow: hidden;
    border: 1px solid var(--cr-line);
    border-bottom: 0;
    background: var(--cr-surface);
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.02), 0 40px 90px -40px rgba(27, 26, 24, 0.4);
}

.hero-shot img {
    display: block;
    width: 100%;
    height: auto;
}

/* Stack strip */
.strip {
    padding: 40px 0;
    background: var(--cr-surface);
    border-top: 1px solid var(--cr-line);
    border-bottom: 1px solid var(--cr-line);
}

.strip-label {
    font-family: var(--cr-mono);
    font-size: 0.72rem;
    letter-spacing: 0.06em;
    color: var(--cr-faint);
    text-align: center;
    margin-bottom: 22px;
}

.marquee {
    overflow: hidden;
    -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
    mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
}

.marquee-track {
    display: inline-flex;
    gap: 12px;
    white-space: nowrap;
    animation: marquee 44s linear infinite;
    will-change: transform;
}

.chip {
    font-family: var(--cr-mono);
    font-size: 0.86rem;
    color: var(--cr-muted);
    background: var(--cr-paper);
    border: 1px solid var(--cr-line);
    border-radius: 8px;
    padding: 7px 14px;
}

@keyframes marquee {
    to {
        transform: translateX(-50%);
    }
}

/* Why */
.why {
    background: var(--cr-paper);
}

.why p {
    font-size: 1.08rem;
    color: var(--cr-muted);
    margin-top: 18px;
}

.why h2 {
    max-width: 20ch;
}

.callout {
    margin-top: 28px;
    padding: 16px 20px;
    border-left: 3px solid var(--cr-warm);
    background: var(--cr-warm-soft);
    border-radius: 0 10px 10px 0;
    color: var(--cr-ink);
    line-height: 1.6;
}

/* Split sections */
.split {
    background: var(--cr-surface);
    border-top: 1px solid var(--cr-line);
}

.split-b {
    background: var(--cr-paper);
}

.split-grid {
    display: grid;
    gap: 40px;
    align-items: center;
}

@media (min-width: 900px) {
    .split-grid {
        grid-template-columns: 1fr 1fr;
        gap: 64px;
    }

    .split-grid.reverse .split-copy {
        order: 2;
    }
}

.split-copy p {
    margin-top: 16px;
    color: var(--cr-muted);
}

.split-copy h2 {
    margin-bottom: 4px;
}

/* Device (plugin card) */
.device {
    border: 1px solid var(--cr-line);
    border-radius: 14px;
    background: var(--cr-surface);
    box-shadow: 0 30px 70px -40px rgba(27, 26, 24, 0.4);
    overflow: hidden;
}

.device-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 18px;
    border-bottom: 1px solid var(--cr-line);
    background: var(--cr-paper);
}

.device-name {
    font-family: var(--cr-mono);
    font-size: 0.9rem;
    font-weight: 500;
}

.device-icon {
    color: var(--cr-warm);
    margin-right: 4px;
}

.badge {
    font-size: 0.72rem;
    font-weight: 600;
    padding: 3px 10px;
    border-radius: 999px;
}

.badge-ok {
    color: var(--cr-ok);
    background: rgba(63, 125, 84, 0.12);
}

.device-body {
    padding: 8px 18px 18px;
}

.check-row {
    display: flex;
    gap: 14px;
    align-items: flex-start;
    padding: 14px 0;
    border-top: 1px solid var(--cr-line);
}

.check-row:first-child {
    border-top: 0;
}

.tick {
    flex-shrink: 0;
    width: 26px;
    height: 26px;
    border-radius: 999px;
    background: rgba(63, 125, 84, 0.14);
    color: var(--cr-ok);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.85rem;
    font-weight: 700;
    margin-top: 1px;
}

.check-title {
    font-weight: 600;
    margin: 0;
}

.check-sub {
    font-family: var(--cr-mono);
    font-size: 0.82rem;
    color: var(--cr-faint);
    margin-top: 3px !important;
}

.tag-row {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 8px !important;
}

.tag {
    font-family: var(--cr-mono);
    font-size: 0.74rem;
    padding: 3px 9px;
    border-radius: 6px;
    border: 1px solid var(--cr-line);
    color: var(--cr-muted);
    background: var(--cr-paper);
}

.tag-woo::before {
    content: '● ';
    color: #7f54b3;
}

.tag-gf::before {
    content: '● ';
    color: var(--cr-warm);
}

.tag-wp::before {
    content: '● ';
    color: var(--cr-accent);
}

/* Terminal */
.terminal {
    border-radius: 14px;
    overflow: hidden;
    background: #201f24;
    border: 1px solid #34323a;
    box-shadow: 0 30px 70px -40px rgba(27, 26, 24, 0.5);
}

.terminal-head {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 16px;
    background: #2a292f;
    border-bottom: 1px solid #34323a;
}

.dot {
    width: 11px;
    height: 11px;
    border-radius: 999px;
    background: #4a4850;
}

.dot:first-child {
    background: #e0644d;
}

.dot:nth-child(2) {
    background: #e0b23c;
}

.dot:nth-child(3) {
    background: #55a66a;
}

.terminal-title {
    font-family: var(--cr-mono);
    font-size: 0.78rem;
    color: #8b8892;
    margin-left: 6px;
}

.terminal-body {
    margin: 0;
    padding: 18px 20px;
    overflow-x: auto;
}

.terminal-body code {
    font-family: var(--cr-mono);
    font-size: 0.84rem;
    line-height: 1.75;
    color: #d7d3dd;
    white-space: pre;
}

.c-comment {
    color: #7c7986;
}

.c-prompt {
    color: var(--cr-warm);
}

.c-cmd {
    color: #9fb2ec;
}

.c-out {
    color: #6f9f7e;
}

/* Features */
.features {
    background: var(--cr-surface);
    border-top: 1px solid var(--cr-line);
    border-bottom: 1px solid var(--cr-line);
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
    background: var(--cr-paper);
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
    background: var(--cr-paper);
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
    box-shadow: 0 30px 80px -40px rgba(27, 26, 24, 0.35);
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
.integrations {
    background: var(--cr-surface);
    border-top: 1px solid var(--cr-line);
}

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
    background: var(--cr-paper);
    border: 1px solid var(--cr-line);
    border-radius: 12px;
    padding: 18px 20px;
}

.integration-group h3 {
    font-family: var(--cr-mono);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--cr-warm);
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

.integration-note a,
.split-copy a,
.showcase-copy a,
.outro a {
    color: var(--cr-accent);
    font-weight: 600;
}

/* Not for */
.not-for {
    background: var(--cr-paper);
}

.not-for p {
    color: var(--cr-muted);
    font-size: 1.05rem;
}

.not-for > .wrap > p:last-child {
    margin-top: 18px;
}

.cross-list {
    list-style: none;
    margin: 22px 0 0;
    padding: 0;
}

.cross-list li {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    padding: 12px 0;
    border-top: 1px solid var(--cr-line);
    color: var(--cr-ink);
    line-height: 1.6;
}

.cross {
    flex-shrink: 0;
    color: var(--cr-warm);
    font-weight: 700;
    margin-top: 2px;
}

/* Install */
.install {
    background: var(--cr-surface);
    border-top: 1px solid var(--cr-line);
    border-bottom: 1px solid var(--cr-line);
}

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
    background: var(--cr-paper);
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
    background: #201f24;
    overflow-x: auto;
    font-size: 0.84rem;
    line-height: 1.6;
}

.step-body code {
    font-family: var(--cr-mono);
    color: #d7d3dd;
    white-space: pre;
}

/* Outro */
.outro {
    background: var(--cr-paper);
    text-align: center;
}

.outro .eyebrow {
    justify-content: center;
}

.outro h2 {
    max-width: none;
}

.outro p {
    margin: 16px auto 0;
    max-width: 60ch;
    color: var(--cr-muted);
    font-size: 1.05rem;
}

.outro .actions {
    justify-content: center;
}

@media (prefers-reduced-motion: reduce) {
    .cursor {
        animation: none;
    }

    .marquee-track {
        animation: none;
        flex-wrap: wrap;
        white-space: normal;
        justify-content: center;
    }

    .marquee {
        -webkit-mask-image: none;
        mask-image: none;
    }
}
</style>
