# Linycon linked website — full Next.js code

This is the Next.js App Router and TypeScript version of:

https://linycon-corporate.nuttyalder4.chatgpt.site/

The linked website's HTML, stylesheet, service icons, project data and image assets were used as the reference. The split hero, colors, typography, sections and responsive layouts are preserved. The original JavaScript interactions are implemented as React components.

## Requirements

Node.js 20.9 or newer, with npm. The project was verified using Node.js 24.

## Start locally

Extract the ZIP and open a terminal inside the `linycon-linked-site-nextjs` folder:

```sh
npm install
npm run dev
```

Visit http://localhost:3000.

If you prefer pnpm, the included lockfile supports a reproducible install:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Production

```sh
npm run typecheck
npm run build
npm start
```

For Vercel, import this folder and select the Next.js framework preset. No custom output directory is needed. For another Node.js host, use the production commands above.

Optionally copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to your deployed origin. This controls canonical and Open Graph metadata.

## Included

- The same split hero, original highway photograph, lime and teal styling, DM Sans and Manrope fonts.
- Header, footer, mobile menu and section-anchor navigation.
- All eight icon service cards and their detail dialogs.
- The four engineering-capability columns.
- Six project cards, category filters and project scope dialogs.
- Original company-logo treatment and six reasons to choose Linycon.
- Expanded enquiry form: name, company, email, phone, area of interest and project requirements.
- Service/project enquiry actions select the relevant area of interest and move focus to the form.
- Original company-profile PDF and all thirteen image/document assets stored locally in `public/assets`.
- Optimized images through `next/image` and fonts through `next/font`.
- TypeScript, SEO metadata, keyboard focus, native dialog Escape handling, reduced-motion support and mobile layouts.

## Email behavior

Like the linked site, the form opens a prefilled email draft addressed to `linycon.info@gmail.com`. The visitor reviews and sends it using their email app. The page does not store enquiries or send mail from a server. No mail-provider API key is required.

To add direct server-side email delivery later, connect `components/EnquiryForm.tsx` to a server route and keep mail credentials server-side.

## File map

```text
app/
  layout.tsx              Fonts, document metadata and global stylesheet
  page.tsx                Server-rendered homepage sections
  globals.css             The linked site's responsive styles
components/
  Header.tsx              Header and mobile navigation
  Solutions.tsx           Eight service cards
  Projects.tsx            Portfolio and category filters
  SiteProvider.tsx        Shared detail dialogs and enquiry selection
  EnquiryForm.tsx         Form validation and email draft
lib/
  site-data.ts            Typed projects, services and SVG paths
public/assets/            Original images, logos and brochure
next.config.ts
package.json
pnpm-lock.yaml
tsconfig.json
.env.example
```

Edit copy and projects in `lib/site-data.ts`, static sections in `app/page.tsx`, and design values in `app/globals.css`.

Google font files are downloaded at build time by Next.js and served from the built application. The build therefore needs access to Google Fonts as well as the package registry during dependency installation.

The ZIP contains source and assets. Dependency folders and generated build output are excluded. The existing hosted site has not been changed or republished.
