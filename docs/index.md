<!-- Synced from https://github.com/coysh-digital/client-reporter/blob/main/docs/README.md by scripts/sync-docs.mjs. Edit it there, not here. -->

# Client Reporter documentation

Hello, and welcome to the docs. Client Reporter is open-source, self-hosted client reporting for web agencies - you point it at the services behind your clients' sites (their CMS, analytics, shop, uptime monitor) and it turns the numbers into clean, branded reports you can hand over with your name on them.

![The Client Reporter dashboard](/images/dashboard.png)

## Getting started

- [Installation](/docs/installation) - install Client Reporter and run the install wizard.
- [Shared hosting](/docs/shared-hosting) - running Client Reporter on shared hosting with a single cron entry.
- [Updating](/docs/updating) - keeping your installation up to date.
- [Configuration](/docs/configuration) - databases, drivers, PDF rendering and other settings.

## Using Client Reporter

- [Reports](/docs/reports) - building, scheduling and sharing client reports.
- [Branding](/docs/branding) - fully white-labelling your client-facing reports, and [editing or translating the report wording](/docs/branding#report-wording-and-translation).

## Integrations

Client Reporter talks to the services behind your clients' sites, spread across eight categories - CMS, Analytics, Search, Ecommerce, Forms & Leads, Monitoring, Performance and Billing.

- [Integrations overview](/docs/integrations) - how integrations work, the auth methods, workspace ("connect once") connections, encrypted credentials, and the full bundled set.
- [WordPress](/docs/wordpress) - the WordPress companion plugin integration (read-only, HMAC-signed).
- [Craft CMS](/docs/craft) - the Craft CMS companion plugin integration (read-only, HMAC-signed).
- [Analytics](/docs/analytics) - Google Analytics 4, Google Ads, Plausible, Fathom, Matomo and Umami.
- [UptimeRobot](/docs/uptime-robot) - uptime monitoring via UptimeRobot, Uptime Kuma and Better Uptime.

Also bundled and covered in the [integrations overview](/docs/integrations): **Search** (Google Search Console), **Ecommerce** (WooCommerce, Craft Commerce, Shopify, Stripe), **Forms & Leads** (Mailchimp), **Performance** (PageSpeed) and **Billing** (FreeAgent, Xero).

## Ask an AI about your data

- [MCP server](/docs/mcp) - point an AI assistant (Claude Desktop, Claude Code, etc.) at your install and ask read-only questions about your clients, sites, reports and metrics.

## Extending Client Reporter

- [Development](/docs/development) - contributing to the core application.
- [Creating an integration](/docs/creating-an-integration) - building an integration with the Integration SDK.
- [Contributing and integration pull requests](/docs/contributing) - proposing an integration for inclusion in the core project.

## Security

- [Security](/docs/security) - the security model and how to report vulnerabilities.
