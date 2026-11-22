# christophernoblett.ie

Astro + Tailwind site, hosted on Vercel.

## Run locally

    npm install
    npm run dev

## Edit content

- Contact details, prices, FAQs and reviews: `src/data/site.ts`
- Pages: `src/pages/`
- Before/after slider and clinic mockups: `src/components/BeforeAfter.astro`, `src/components/ClinicMock.astro`
- Concept clinic demo: `src/pages/work/glasmore-dental.astro`

## Reviews

`/reviews` is not in the menu. Send that link to clients after a project. Reviews arrive by email through Web3Forms.
Add the ones you want to show to `reviews` in `src/data/site.ts` and they appear on the home page.

## Deploy

Push to the GitHub repo connected to Vercel. Vercel detects Astro automatically (build `npm run build`, output `dist`).
`vercel.json` adds redirects from the old `/portfolio` and `/links` pages plus security headers.
