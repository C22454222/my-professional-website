// Everything you are likely to want to edit lives in this file.

export const site = {
  name: 'Christopher Noblett',
  url: 'https://christophernoblett.ie',
  email: 'christophernoblett.dev@gmail.com',
  phone: '+353 87 381 7162',
  phoneHref: 'tel:+353873817162',
  linkedin: 'https://www.linkedin.com/in/christopher-noblett/',
  // Web3Forms access keys are designed to be public. Messages go to the email set up in Web3Forms.
  web3formsKey: 'b1dec726-cbf5-4a4b-a49c-82e2251eb72e',
};

export const nav = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Process', href: '/process' },
  { label: 'About', href: '/about' },
];

export type Plan = {
  name: string;
  price: string;
  unit?: string;
  summary: string;
  includes: string[];
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: 'Simple website',
    price: '€250',
    summary: 'A clean, credible site for a clinic that needs to look right online, fast.',
    includes: [
      '3 to 5 pages, designed for your clinic',
      'Works properly on every phone and screen',
      'Tap-to-call and a contact form',
      'Link to your existing booking system',
      'Opening hours, map and directions',
    ],
  },
  {
    name: 'Custom clinic website',
    price: '€400–€600',
    summary: 'For clinics that want more bookings and want to show up on Google.',
    includes: [
      'Everything in the simple website',
      'A page for each treatment you offer',
      'Online booking built into the site',
      'Local SEO and Google Business Profile setup',
      'Fees page, new patient info and forms',
    ],
    featured: true,
  },
  {
    name: 'Hosting & care',
    price: '€20–€50',
    unit: '/ month',
    summary: 'Keeps your site fast, secure and up to date without you thinking about it.',
    includes: [
      'Fast hosting and an SSL certificate',
      'Backups and uptime monitoring',
      'Small text, price and photo changes',
      'Help with your domain and email setup',
    ],
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: 'How much does a dental clinic website cost?',
    a: 'A simple 3 to 5 page site is €250. Most clinics go for the custom website at €400 to €600, which adds treatment pages, built-in booking and local SEO. You get a fixed quote before any work starts, and that price doesn’t change.',
  },
  {
    q: 'How long does it take?',
    a: 'A simple site is usually live within a week of our first call. A larger site with treatment pages and booking takes two to three weeks, mostly depending on how quickly we can pull together your text and photos.',
  },
  {
    q: 'Can patients book appointments online?',
    a: 'Yes. If you already use a practice management or booking system, I link to it or build it into the site. If you don’t, I can set up a simple booking request form that lands straight in your inbox.',
  },
  {
    q: 'Do I own the website?',
    a: 'Yes. The domain, the design and the code are yours. If you ever want to move it somewhere else, I hand everything over.',
  },
  {
    q: 'What do I need to give you?',
    a: 'Your logo if you have one, any photos of the clinic and team, and the list of treatments you offer. I can help write the text from a short call, so you don’t need to start from a blank page.',
  },
  {
    q: 'I already have a website. Can you improve it instead?',
    a: 'Often, yes. Send me the link and I’ll tell you honestly whether it needs a rebuild or just some fixes. The review is free and there’s no obligation.',
  },
];

export type Review = { name: string; clinic?: string; rating: number; text: string };

// Add real client reviews here once you have them. The reviews section stays hidden while this is empty.
export const reviews: Review[] = [];
