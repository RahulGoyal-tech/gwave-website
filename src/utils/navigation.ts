// An array of links for the navigation bar
const navBarLinks = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'About', url: '/#about' },
  { name: 'Contact', url: '/contact' },
];

// An array of links for the footer
const footerLinks = [
  {
    section: 'Company',
    links: [
      { name: 'About Us', url: '/#about' },
      { name: 'Services', url: '/services' },
      { name: 'Contact', url: '/contact' },
    ],
  },
  {
    section: 'Services',
    links: [
      { name: 'Electronics Assembly', url: '/services#electronics' },
      { name: 'Plastic Injection Molding', url: '/services#plastic' },
      { name: 'Testing & Programming', url: '/services#testing' },
    ],
  },
];

// An object of links for social icons.
// Delete keys you don't use and the matching icon disappears from the footer.
const socialLinks = {
  linkedin: 'https://www.linkedin.com/company/gwave-innovation',
  // facebook: '#',
  // x: '#',
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
