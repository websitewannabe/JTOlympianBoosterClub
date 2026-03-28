/**
 * Post-build prerender script for SEO
 *
 * Generates per-route HTML files with correct meta tags, H1, nav links,
 * and JSON-LD so crawlers that don't execute JavaScript see unique content.
 *
 * Fixes: missing meta descriptions, missing H1 tags, orphan pages,
 * duplicate page content, and missing OG tags — all flagged by Ahrefs.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, "..", "dist", "public");
const SITE = "https://olympianboosterclub.com";

// ─── Page metadata for every route ───────────────────────────────────
const pages = [
  {
    path: "/",
    title: "Olympian Booster Club | Youth Sports & Community in Jim Thorpe, PA",
    description:
      "Supporting youth athletics in Jim Thorpe, PA with programs in football, cheerleading, wrestling, volleyball, and cross country for grades K\u20136.",
    canonical: `${SITE}/`,
    ogTitle:
      "Olympian Booster Club | Youth Sports & Community in Jim Thorpe, PA",
    ogDescription:
      "Supporting youth athletics in Jim Thorpe, PA with programs in football, cheerleading, wrestling, volleyball, and cross country for grades K\u20136.",
    ogImage: `${SITE}/og-home.png`,
    h1: "Olympian Booster Club \u2013 Youth Sports in Jim Thorpe, PA",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "SportsOrganization",
      name: "Olympian Booster Club",
      url: SITE,
      logo: `${SITE}/logo.png`,
      description:
        "The Olympian Booster Club supports youth athletics in Jim Thorpe, PA, offering programs in football, cheerleading, wrestling, volleyball, and cross country for grades K\u20136.",
      email: "olympianbooster@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jim Thorpe",
        addressRegion: "PA",
        postalCode: "18229",
        addressCountry: "US",
      },
      foundingDate: "1985",
      areaServed: { "@type": "Place", name: "Jim Thorpe, PA" },
      sport: [
        "Football",
        "Cheerleading",
        "Wrestling",
        "Volleyball",
        "Cross Country",
      ],
    },
  },
  {
    path: "/football",
    title:
      "Football | Olympian Booster Club Youth Football in Carbon County, PA",
    description:
      "Building champions through teamwork, discipline, and competitive excellence with Olympian Booster Club\u2019s youth football program in Carbon County, PA.",
    canonical: `${SITE}/football`,
    ogTitle:
      "Olympian Booster Club Football | Youth Football in Carbon County, PA",
    ogDescription:
      "Join the Olympian Booster Club youth football program for skill-building, sportsmanship, and competitive play in Carbon County.",
    ogImage: `${SITE}/football.webp`,
    h1: "Youth Football \u2013 Olympian Booster Club",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Olympian Booster Club",
      url: `${SITE}/football`,
      description:
        "Youth football program empowering kids through teamwork, fitness, and competitive league play across Carbon County, PA.",
    },
  },
  {
    path: "/cheer",
    title:
      "Cheerleading Programs | Olympian Booster Club Youth Cheer in Carbon County, PA",
    description:
      "Discover competitive and sideline cheerleading programs for youth athletes in Carbon County, PA. Olympian Booster Club offers comprehensive cheer training.",
    canonical: `${SITE}/cheer`,
    ogTitle:
      "Olympian Booster Club Cheer Program | Carbon County Youth Cheerleading",
    ogDescription:
      "Support and join cheerleading programs with the Olympian Booster Club. Competitive and sideline cheer available for youth in Carbon County, PA.",
    ogImage: `${SITE}/competition_cheer.webp`,
    h1: "Cheerleading Programs \u2013 Olympian Booster Club",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Olympian Booster Club",
      url: `${SITE}/cheer`,
      description:
        "Comprehensive cheerleading programs for youth athletes in Carbon County, PA.",
    },
  },
  {
    path: "/competition-cheer",
    title:
      "Competition Cheer | Olympian Booster Club Youth Competition Cheerleading in Carbon County, PA",
    description:
      "Elite athletic training and competitive cheerleading excellence for youth athletes in Carbon County, PA. Join our competition cheer program today.",
    canonical: `${SITE}/competition-cheer`,
    ogTitle:
      "Olympian Booster Club Competition Cheer | Carbon County Youth Cheerleading",
    ogDescription:
      "Support and join cheerleading programs with the Olympian Booster Club. Competitive cheer available for youth in Carbon County, PA.",
    ogImage: `${SITE}/competition_cheer.webp`,
    h1: "Competition Cheer \u2013 Olympian Booster Club",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Olympian Booster Club",
      url: `${SITE}/competition-cheer`,
      description:
        "Elite competitive cheerleading program for youth athletes in Carbon County, PA.",
    },
  },
  {
    path: "/sideline-cheer",
    title:
      "Sideline Cheer | Olympian Booster Club Youth Sideline Cheerleading in Carbon County, PA",
    description:
      "Support your team with school spirit and energy through our youth sideline cheerleading program in Carbon County, PA.",
    canonical: `${SITE}/sideline-cheer`,
    ogTitle:
      "Olympian Booster Club Sideline Cheer | Carbon County Youth Cheerleading",
    ogDescription:
      "Support and join cheerleading programs with the Olympian Booster Club. Sideline cheer available for youth in Carbon County, PA.",
    ogImage: `${SITE}/sideline_cheer.webp`,
    h1: "Sideline Cheer \u2013 Olympian Booster Club",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Olympian Booster Club",
      url: `${SITE}/sideline-cheer`,
      description:
        "Youth sideline cheerleading program in Carbon County, PA.",
    },
  },
  {
    path: "/cross-country",
    title:
      "Cross Country | Olympian Booster Club Youth Running in Carbon County, PA",
    description:
      "Running for fun, friendly competition, and building healthy habits with Olympian Booster Club\u2019s youth cross country program in Carbon County, PA.",
    canonical: `${SITE}/cross-country`,
    ogTitle:
      "Olympian Booster Club Cross Country | Youth Running in Carbon County, PA",
    ogDescription:
      "Join the Olympian Booster Club\u2019s youth cross country program for fun, fitness, and local running competitions across Carbon County.",
    ogImage: `${SITE}/crosscountry.webp`,
    h1: "Cross Country \u2013 Olympian Booster Club",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Olympian Booster Club",
      url: `${SITE}/cross-country`,
      description:
        "Youth cross country running program in Carbon County, PA.",
    },
  },
  {
    path: "/girls-volleyball",
    title:
      "Girls Volleyball | Olympian Booster Club Youth Volleyball in Carbon County, PA",
    description:
      "Serving up excellence through teamwork, skill development, and competitive spirit with Olympian Booster Club\u2019s girls volleyball in Carbon County, PA.",
    canonical: `${SITE}/girls-volleyball`,
    ogTitle:
      "Olympian Booster Club Girls Volleyball | Youth Volleyball in Carbon County",
    ogDescription:
      "Join Olympian Booster Club\u2019s girls volleyball program for youth athletes looking to learn, grow, and compete in Carbon County, PA.",
    ogImage: `${SITE}/girls_volleyball.webp`,
    h1: "Girls Volleyball \u2013 Olympian Booster Club",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Olympian Booster Club",
      url: `${SITE}/girls-volleyball`,
      description:
        "Youth girls volleyball program in Carbon County, PA.",
    },
  },
  {
    path: "/wrestling",
    title:
      "Wrestling | Olympian Booster Club Youth Wrestling in Carbon County, PA",
    description:
      "Building strength, discipline, and mental toughness through youth wrestling at Olympian Booster Club in Carbon County, PA.",
    canonical: `${SITE}/wrestling`,
    ogTitle:
      "Olympian Booster Club Wrestling | Youth Wrestling in Carbon County, PA",
    ogDescription:
      "Train with Olympian Booster Club\u2019s youth wrestling program and develop strength, discipline, and competition skills in Carbon County, PA.",
    ogImage: `${SITE}/wrestling.webp`,
    h1: "Wrestling \u2013 Olympian Booster Club",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Olympian Booster Club",
      url: `${SITE}/wrestling`,
      description:
        "Youth wrestling program in Carbon County, PA.",
    },
  },
  {
    path: "/contact-us",
    title: "Contact Us | Olympian Booster Club in Carbon County, PA",
    description:
      "Have a question or want to get involved? Reach out to Olympian Booster Club in Carbon County, PA. Use our contact form and we will respond promptly.",
    canonical: `${SITE}/contact-us`,
    ogTitle:
      "Contact Olympian Booster Club | Youth Sports in Carbon County, PA",
    ogDescription:
      "Send us a message and learn more about youth sports programs with the Olympian Booster Club. We\u2019re here to help!",
    ogImage: `${SITE}/home_hero.webp`,
    h1: "Contact Us \u2013 Olympian Booster Club",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Olympian Booster Club",
      url: `${SITE}/contact-us`,
      email: "olympianbooster@gmail.com",
      description:
        "Contact the Olympian Booster Club for youth sports information in Carbon County, PA.",
    },
  },
  {
    path: "/about",
    title:
      "About Us | Olympian Booster Club - Supporting Youth Athletics Since 1985",
    description:
      "Learn about Olympian Booster Club\u2019s mission, board members, and 40-year history supporting youth athletics in Jim Thorpe and Carbon County, PA.",
    canonical: `${SITE}/about`,
    ogTitle:
      "About Us | Olympian Booster Club - Supporting Youth Athletics Since 1985",
    ogDescription:
      "Learn about the Olympian Booster Club\u2019s mission, board members, and 40-year history supporting youth athletics in Jim Thorpe and Carbon County, PA since 1985.",
    ogImage: `${SITE}/olympian-logo.png`,
    h1: "About Us \u2013 Olympian Booster Club",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About Olympian Booster Club",
      url: `${SITE}/about`,
      description:
        "Mission, board members, and history of the Olympian Booster Club supporting youth athletics since 1985.",
    },
  },
  {
    path: "/privacy-policy",
    title:
      "Privacy Policy | Olympian Booster Club - Data Protection & Privacy",
    description:
      "Olympian Booster Club privacy policy outlining data collection, cookies, user rights, and our commitment to protecting your personal information.",
    canonical: `${SITE}/privacy-policy`,
    ogTitle:
      "Privacy Policy | Olympian Booster Club - Data Protection & Privacy",
    ogDescription:
      "Olympian Booster Club privacy policy outlining data collection, cookies, user rights, and our commitment to protecting your personal information.",
    ogImage: `${SITE}/olympian-logo.png`,
    h1: "Privacy Policy",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Privacy Policy",
      url: `${SITE}/privacy-policy`,
      description:
        "Privacy policy for the Olympian Booster Club website.",
    },
  },
  {
    path: "/accessibility-statement",
    title:
      "Accessibility Statement | Olympian Booster Club - Digital Accessibility Commitment",
    description:
      "Olympian Booster Club\u2019s commitment to digital accessibility, WCAG 2.1 compliance, and ensuring our website is usable by people with disabilities.",
    canonical: `${SITE}/accessibility-statement`,
    ogTitle:
      "Accessibility Statement | Olympian Booster Club - Digital Accessibility Commitment",
    ogDescription:
      "Olympian Booster Club\u2019s commitment to digital accessibility, WCAG 2.1 compliance, and ensuring our website is usable by people with disabilities.",
    ogImage: `${SITE}/olympian-logo.png`,
    h1: "Accessibility Statement",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Accessibility Statement",
      url: `${SITE}/accessibility-statement`,
      description:
        "Accessibility statement and WCAG 2.1 compliance information.",
    },
  },
  {
    path: "/site-credits",
    title: "Site Credits | Olympian Booster Club",
    description:
      "Website credits for the Olympian Booster Club site. Built by Website Wannabe with web design, SEO, AI, and accessibility services.",
    canonical: `${SITE}/site-credits`,
    ogTitle: "Site Credits | Olympian Booster Club",
    ogDescription:
      "Website credits for the Olympian Booster Club site.",
    ogImage: `${SITE}/og-home.png`,
    h1: "Site Credits",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Site Credits",
      url: `${SITE}/site-credits`,
      description:
        "Website credits and acknowledgements for the Olympian Booster Club website.",
    },
  },
];

// ─── Navigation links (fixes orphan-page issue) ─────────────────────
const navLinks = `
<nav aria-label="Site navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/football">Football</a></li>
    <li><a href="/cheer">Cheerleading</a></li>
    <li><a href="/competition-cheer">Competition Cheer</a></li>
    <li><a href="/sideline-cheer">Sideline Cheer</a></li>
    <li><a href="/cross-country">Cross Country</a></li>
    <li><a href="/girls-volleyball">Girls Volleyball</a></li>
    <li><a href="/wrestling">Wrestling</a></li>
    <li><a href="/contact-us">Contact Us</a></li>
    <li><a href="/about">About Us</a></li>
    <li><a href="/privacy-policy">Privacy Policy</a></li>
    <li><a href="/accessibility-statement">Accessibility</a></li>
    <li><a href="/site-credits">Site Credits</a></li>
    <li><a href="/sitemap.xml">Sitemap</a></li>
  </ul>
</nav>`;

// ─── Helper: escape HTML entities ────────────────────────────────────
function esc(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ─── Main ────────────────────────────────────────────────────────────
function main() {
  const templatePath = resolve(DIST, "index.html");
  if (!existsSync(templatePath)) {
    console.error("ERROR: dist/public/index.html not found. Run vite build first.");
    process.exit(1);
  }
  const template = readFileSync(templatePath, "utf-8");

  let count = 0;
  for (const page of pages) {
    let html = template;

    // 1. Replace <title>
    html = html.replace(
      /<title>[^<]*<\/title>/,
      `<title>${esc(page.title)}</title>`
    );

    // 2. Inject canonical, meta description, OG tags, Twitter cards, JSON-LD
    //    (replace the existing fallback OG block or inject before </head>)
    const seoBlock = [
      `<link rel="canonical" href="${esc(page.canonical)}" />`,
      `<meta name="description" content="${esc(page.description)}" />`,
      `<meta property="og:title" content="${esc(page.ogTitle)}" />`,
      `<meta property="og:description" content="${esc(page.ogDescription)}" />`,
      `<meta property="og:type" content="website" />`,
      `<meta property="og:url" content="${esc(page.canonical)}" />`,
      `<meta property="og:image" content="${esc(page.ogImage)}" />`,
      `<meta property="og:site_name" content="Olympian Booster Club" />`,
      `<meta name="twitter:card" content="summary_large_image" />`,
      `<meta name="twitter:title" content="${esc(page.ogTitle)}" />`,
      `<meta name="twitter:description" content="${esc(page.ogDescription)}" />`,
      `<meta name="twitter:image" content="${esc(page.ogImage)}" />`,
      `<script type="application/ld+json">${JSON.stringify(page.jsonLd)}</script>`,
    ].join("\n    ");

    // Remove existing fallback OG/Twitter blocks from template
    html = html.replace(
      /\s*<!-- Base Open Graph tags[\s\S]*?<meta name="twitter:image"[^>]*\/>\s*/,
      "\n    "
    );

    // Inject before </head>
    html = html.replace("</head>", `    ${seoBlock}\n  </head>`);

    // 3. Place SEO content INSIDE <div id="root"> so crawlers see it.
    //    React replaces root contents on hydration, so users never see this.
    const seoContent = `
    <h1>${esc(page.h1)}</h1>
    <p>${esc(page.description)}</p>
    ${navLinks}`;

    html = html.replace(
      '<div id="root"></div>',
      `<div id="root">${seoContent}\n  </div>`
    );

    // 4. Write to the correct directory
    let outDir, outFile;
    if (page.path === "/") {
      outFile = resolve(DIST, "index.html");
    } else {
      const slug = page.path.replace(/^\//, "");
      outDir = resolve(DIST, slug);
      mkdirSync(outDir, { recursive: true });
      outFile = resolve(outDir, "index.html");
    }

    writeFileSync(outFile, html, "utf-8");
    count++;
    console.log(`  \u2713 ${page.path}`);
  }

  console.log(`\nPrerendered ${count} pages with SEO meta tags.`);
}

main();
