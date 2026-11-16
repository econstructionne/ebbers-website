# Ebbers Construction website

The public website for Ebbers Construction (ebbersconstruction.com), built with [Astro](https://astro.build) and hosted on Vercel.

## Run it

```sh
npm install
npm run dev      # local site at http://localhost:4321
npm run build    # static site in dist/
```

## Where things live

| Path | What |
| --- | --- |
| `src/pages/` | One file per page (`post-frame.astro` is `/post-frame`) |
| `src/data/site.ts` | Phone, hours, social links, portal links, main menu |
| `src/data/build.ts` | How we build: post frame and deck parts, options, steel colors |
| `src/components/` | Header, footer, photo, drawings and shared blocks |
| `src/styles/global.css` | Colors, type and shared styles (Stone & Sage brand) |
| `public/brand/` | Logos and icons |
| `scripts/make-logos.mjs` | Rebuilds the logo files from `src/assets/logo-master.png` |
| `vercel.json` | Redirects from old GoDaddy URLs and security headers |

## Rules

- The website never talks to the portal database directly. Forms will send leads through one locked-down `website-lead` function, built in the portal project.
- No prices on the public site.
- Deploy previews first, then promote to production.
