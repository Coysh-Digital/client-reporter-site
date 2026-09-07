# The Client Reporter website

The landing page and documentation for [Client Reporter](https://github.com/coysh-digital/client-reporter) - free, self-hosted client reporting for web agencies and freelancers. It's a static site built with [VitePress](https://vitepress.dev), so it runs anywhere that can serve a folder of files.

## Running it locally

```bash
npm install
npm run dev        # http://localhost:5173
```

`npm run build` writes the finished site to `.vitepress/dist`, and `npm run preview` serves that build so you can check it before deploying.

## Where the docs come from

The documentation pages under `docs/` are copied from the app repository's `docs/` folder - the app is the single source of truth, so edit the docs there and re-sync here:

```bash
npm run sync-docs                       # expects ../client-reporter next to this folder
APP_REPO=/path/to/client-reporter npm run sync-docs
```

The synced files are committed, so a fresh clone builds on its own without the app repo. The landing page lives in `.vitepress/theme/Landing.vue`; the colours and type are in `.vitepress/theme/custom.css`.

## Hosting

**Cloudflare Pages** - connect the repository, set the build command to `npm run build` and the output directory to `.vitepress/dist`. Nothing else to configure.

**GitHub Pages** - the workflow in `.github/workflows/deploy.yml` builds and publishes on every push to `main`. Turn on Pages for the repository (Settings → Pages → Source: GitHub Actions). If the site is served from `https://<user>.github.io/<repo>/` rather than a custom domain, set the repository variable `SITE_BASE` to `/<repo>/` so links resolve.

Set `SITE_URL` (build environment) to the public address so the sitemap is right.

## Licence

MIT, like the app.
