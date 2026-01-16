export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact Us', href: '/contact-us' },
];

export const CONTACT_INFO = {
  phone: '+91 9810355151',
  email: 'polyfillindustries@gmail.com',
  address: 'C-57, Sector-4, Dsidc Bawana Ind. Area, Bawana, Delhi - 110039, India',
  addressLink: '#',
};

export const COMPANY_INFO = {
  name: 'Polyfill ',
  description: 'A Shakti Polymers Unit',
  tagline: 'Innovative Polymer Solutions',
};

export const FOOTER_LINKS = {
  company: [
    { name: 'About Us', href: '/about-us' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms-and-conditions' },
    { name: 'Contact Form', href: '/contact-us' },
  ],
  products: [
    { name: 'Products', href: '/products' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Site Map', href: '/sitemap' },
    {name : 'Catalog ', href: '/' },
  ],
};

// export const SOCIAL_LINKS = [
//   { name: 'Facebook', href: '#', icon: 'facebook' },
//   { name: 'Twitter', href: '#', icon: 'twitter' },
//   { name: 'LinkedIn', href: '#', icon: 'linkedin' },
//   { name: 'Instagram', href: '#', icon: 'instagram' },
// ];

/**
 * Form validation constants
 */
export const FORM_VALIDATION = {
  MESSAGE_MIN_LENGTH: 10,
  PHONE_PATTERN: /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/,
  EMAIL_PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
} as const;

/**
 * API response messages
 */
export const API_MESSAGES = {
  CONTACT_SUCCESS: "Thank you for contacting us! We'll get back to you soon.",
  CONTACT_ERROR: "Something went wrong. Please try again.",
  QUOTE_SUCCESS: "Thank you for your quote request! We'll be in touch shortly.",
  QUOTE_ERROR: "Failed to submit quote request. Please try again.",
  FORM_VALIDATION_ERROR: "Please check the form for errors.",
} as const;

