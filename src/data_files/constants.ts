import ogImageSrc from '@images/social.png';

export const SITE = {
  title: 'Gwave Innovation',
  tagline: 'Process-Driven Electronics Manufacturing',
  description:
    'Gwave Innovation Pvt. Ltd. is a process-driven electronics manufacturing and plastic injection company offering end-to-end PCBA job work — from component sourcing and SMT assembly to testing, IC programming, and box build — for low-volume prototypes through bulk production.',
  description_short:
    'Process-driven electronics manufacturing (PCBA job work) and plastic injection molding — from prototype to bulk.',
  url: 'https://www.gwaveinnovation.com',
  author: 'Gwave Innovation Pvt. Ltd.',
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    inLanguage: 'en-US',
    '@id': SITE.url,
    url: SITE.url,
    name: SITE.title,
    legalName: SITE.author,
    description: SITE.description,
    slogan: SITE.tagline,
  },
};

export const OG = {
  locale: 'en_US',
  type: 'website',
  url: SITE.url,
  title: `${SITE.title}: Electronics Manufacturing & Plastic Injection`,
  description:
    'End-to-end PCBA job work and plastic injection molding from Gwave Innovation — component & PCB sourcing, automated SMT assembly, manual assembly, board testing, IC programming, and box build. Standardized, repeatable processes from prototype to bulk production.',
  image: ogImageSrc,
};
