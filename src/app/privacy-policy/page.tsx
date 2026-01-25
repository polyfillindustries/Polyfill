import type { Metadata } from 'next';
import { Shield, Mail, Phone, User, Lock, Eye } from 'lucide-react'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://shaktipolymersindia.com';

export const metadata: Metadata = {
  title: 'Privacy Policy - Polyfill Industries',
  description: 'Read our privacy policy to understand how we collect, use, and protect your personal information when you interact with Polyfill Industries.',
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-white to-blue-50">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex rounded-full bg-linear-to-br from-bprimary to-bsecondary p-4 text-white">
            <Shield className="h-10 w-10" />
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-bgray sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Last updated: January 6, 2026
          </p>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-border bg-white p-8 shadow-sm sm:p-12">
            {/* Introduction */}
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-bgray">Introduction</h2>
              <p className="leading-relaxed text-muted-foreground">
                We respect your privacy and are committed to protecting your personal information. 
                This Privacy Policy explains how we collect, use, and safeguard your data when you 
                use our website or services.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-bgray">Information We Collect</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                We collect minimal personal information to provide our services effectively. 
                The information we collect includes:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-blue-100 p-2 text-bprimary">
                    <User className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-bgray">Name</h3>
                    <p className="text-sm text-muted-foreground">Your full name for personalized communication</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-blue-100 p-2 text-bprimary">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-bgray">Email Address</h3>
                    <p className="text-sm text-muted-foreground">For responding to inquiries and sharing information</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-blue-100 p-2 text-bprimary">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-bgray">Phone Number</h3>
                    <p className="text-sm text-muted-foreground">For direct communication regarding your inquiries</p>
                  </div>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-bgray">How We Use Your Information</h2>
              <div className="space-y-3">
                <div className="rounded-lg border border-border bg-blue-50/50 p-4">
                  <h3 className="mb-2 font-semibold text-bgray">Communication Only</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    We use your contact information exclusively to respond to your inquiries, 
                    provide product information, and communicate about our services.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-blue-50/50 p-4">
                  <h3 className="mb-2 font-semibold text-bgray">No Marketing Spam</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    We will not send unsolicited marketing emails or share your information 
                    with third parties for marketing purposes.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-blue-50/50 p-4">
                  <h3 className="mb-2 font-semibold text-bgray">Service Improvement</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    We may use aggregated, anonymized data to improve our website and services.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Protection */}
            <section className="mb-10">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-bgray">
                <Lock className="h-6 w-6 text-bprimary" />
                Data Protection
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                We implement appropriate technical and organizational security measures to protect 
                your personal information against unauthorized access, alteration, disclosure, or 
                destruction. Your data is stored securely and accessed only by authorized personnel 
                for legitimate business purposes.
              </p>
            </section>

            {/* Data Sharing */}
            <section className="mb-10">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-bgray">
                <Eye className="h-6 w-6 text-bprimary" />
                Data Sharing
              </h2>
              <p className="mb-3 leading-relaxed text-muted-foreground">
                We do not sell, trade, or rent your personal information to third parties. 
                We may share your information only in the following circumstances:
              </p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>With your explicit consent</li>
                <li>When required by law or legal process</li>
                <li>To protect our rights, property, or safety</li>
              </ul>
            </section>

            {/* Your Rights */}
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-bgray">Your Rights</h2>
              <p className="mb-3 leading-relaxed text-muted-foreground">
                You have the right to:
              </p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal data</li>
                <li>Opt-out of communications at any time</li>
              </ul>
            </section>

            {/* Cookies */}
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-bgray">Cookies</h2>
              <p className="leading-relaxed text-muted-foreground">
                Our website may use cookies to enhance user experience and analyze website traffic. 
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            {/* Contact */}
            <section className="rounded-xl bg-linear-to-br from-bprimary/10 to-bsecondary/10 p-6">
              <h2 className="mb-3 text-2xl font-semibold text-bgray">Contact Us</h2>
              <p className="leading-relaxed text-muted-foreground">
                If you have any questions about this Privacy Policy or wish to exercise your rights 
                regarding your personal data, please contact us through our{' '}
                <a href="/contact-us" className="font-medium text-bprimary hover:underline">
                  Contact Us
                </a>{' '}
                page.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
