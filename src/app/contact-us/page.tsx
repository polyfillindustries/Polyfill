import { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Script from "next/script";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export const metadata: Metadata = {
  title: "Contact Us - Get Quote for Polypropylene & BOPP Granules | Polyfill Industries",
  description:
    "Contact Polyfill Industries for bulk orders, pricing, and product inquiries. Located in Bawana Industrial Area, Delhi. Call +91 9810355151 or email polyfillindustries@gmail.com",
  keywords: [
    "contact PP manufacturer",
    "PP supplier contact",
    "get PP quote",
    "bulk PP order",
    "polypropylene price inquiry",
    "BOPP granules supplier contact Delhi",
    "polymer manufacturer contact India",
    "contact polyfill industries",
    "polymer products inquiry",
    "get quote",
    "polymer solutions delhi",
  ],
  openGraph: {
    title: "Contact Polyfill Industries - Get a Quote",
    description:
      "Get in touch for bulk orders and pricing. Located in Bawana, Delhi, India. Expert polymer solutions.",
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Polyfill Industries',
    description: 'Get in touch for bulk orders and pricing.',
    images: ['/og-image.png'],
  },
};

export default function ContactUsPage() {
  const words = [
    { text: "Contact" },
    { text: "Us", className: "text-bprimary" },
  ];
  return (
    <>
      {/* Load reCAPTCHA v3 Script */}
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="lazyOnload"
      />

      <div className="min-h-screen mt-15 items-center justify-center my-5 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12">
            <div className="flex justify-center">
              <TypewriterEffectSmooth words={words} />
            </div>
            {/* <h1 className="text-4xl md:text-5xl font-playfair font-bold text-bgray mb-4">
              Contact Us
            </h1> */}
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our polymer solutions? We're here to help.
            </p>
          </div>

          {/* Main Contact Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-black p-6 md:p-8 rounded-2xl items-center">
            {/* Left Side - Image with Overlay Text */}
            <div className="relative w-full h-full min-h-75 md:min-h-125">
              <Image
                src="/hero/img1.JPG"
                alt="Contact Polyfill Industries"
                fill
                className="object-cover rounded-lg"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60 rounded-lg" />

              {/* Text over image */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 text-center">
                <h2 className="text-2xl md:text-4xl font-bold font-playfair mb-4">
                  Get in touch with us!
                </h2>
                <p className="text-base md:text-lg font-medium italic leading-relaxed">
                  For product inquiries, partnerships, or general questions,
                  please send us your details through this form.
                  <br />
                  We'll get back to you promptly.
                </p>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="w-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
