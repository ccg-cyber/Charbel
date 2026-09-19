# charbel.cierp.uk

Deployment scaffold, set up the same way as [Joy Taxi](https://github.com/ccg-cyber/Joy-Taxi).
**The domain plumbing is here. The site itself is not written yet** — what is
currently served is a deliberate `noindex` placeholder.

---

## How it is deployed

This repository **is** the site. No build step, no framework, no CDN. GitHub
Pages serves the `gh-pages` branch exactly as it is, and `.nojekyll` stops
GitHub from running Jekyll over it.

**To change anything live:** edit a file, push to `gh-pages`, and it is live
within a minute.

**Custom domain** — `charbel.cierp.uk`: the `CNAME` file at the root of this
branch tells GitHub the domain; the matching record in Cloudflare is
`CNAME charbel → ccg-cyber.github.io` (DNS only — grey cloud, not proxied).
GitHub issues the certificate itself once both exist.

---

## Two switches that are still off

Neither can be thrown from a git push; both are one click each.

1. **GitHub Pages** — repo *Settings → Pages*, set source to branch `gh-pages`,
   folder `/ (root)`. Then tick **Enforce HTTPS** once the certificate has been
   issued (it can take a few minutes after DNS resolves).
2. **Cloudflare DNS** — add `CNAME charbel → ccg-cyber.github.io`, **DNS only**.
   Proxying it breaks GitHub's certificate issuance.

---

## What to change when the real site lands

The placeholder is built to be deleted, not edited. When the actual site is
written, three things have to change or the site will be invisible to search:

- `index.html` — replace it. It carries `<meta name="robots" content="noindex, nofollow">`.
- `404.html` — same; it is also `noindex`.
- `robots.txt` — currently `Disallow: /`, which blocks the whole site on
  purpose. Flip it to:

  ```
  User-agent: *
  Allow: /

  Sitemap: https://charbel.cierp.uk/sitemap.xml
  ```

- Add a `sitemap.xml`. There isn't one yet, because there is nothing to list.

If the site gets an Arabic version, it goes in `/ar/index.html` and both URLs
get `hreflang` entries in the sitemap — that is how Joy Taxi does it.
