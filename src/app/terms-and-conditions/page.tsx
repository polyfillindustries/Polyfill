import { FileText, AlertCircle, Package, Truck, IndianRupee, Shield, Scale, FileCheck } from 'lucide-react'

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-white to-blue-50">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex rounded-full bg-linear-to-br from-bprimary to-bsecondary p-4 text-white">
            <FileText className="h-10 w-10" />
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-bgray sm:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Last updated: January 7, 2026
          </p>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-border bg-white p-8 shadow-sm sm:p-12">
            {/* Scope */}
            <section className="mb-10">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-bgray">
                <FileCheck className="h-6 w-6 text-bprimary" />
                Scope
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                By using our products or services, you agree to these terms and conditions. 
                If you do not agree with any part of these terms, please do not proceed with 
                placing an order.
              </p>
            </section>

            {/* Product Information */}
            <section className="mb-10">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-bgray">
                <Package className="h-6 w-6 text-bprimary" />
                Product Information
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                We ensure accurate product details on our website. However, minor variations 
                in color, size, or appearance may occur due to manufacturing processes. We 
                strive to provide the best representation of our products, but physical samples 
                may differ slightly from digital images.
              </p>
            </section>

            {/* Orders & Delivery */}
            <section className="mb-10">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-bgray">
                <Truck className="h-6 w-6 text-bprimary" />
                Orders & Delivery
              </h2>
              <div className="space-y-3">
                <p className="leading-relaxed text-muted-foreground">
                  Orders are confirmed based on product availability. Delivery timelines are 
                  approximate and may vary due to:
                </p>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  <li>Production schedules and capacity</li>
                  <li>Raw material availability</li>
                  <li>Logistics and transportation factors</li>
                  <li>Force majeure events beyond our control</li>
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  We will notify you of any significant delays as soon as possible.
                </p>
              </div>
            </section>

            {/* Pricing & Payment */}
            <section className="mb-10">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-bgray">
                <IndianRupee className="h-6 w-6 text-bprimary" />
                Pricing & Payment
              </h2>
              <div className="space-y-3">
                <p className="leading-relaxed text-muted-foreground">
                  All prices are listed in Indian Rupees (INR) and are subject to change without 
                  prior notice. Final pricing will be confirmed in your invoice.
                </p>
                <div className="rounded-lg border border-border bg-blue-50/50 p-4">
                  <p className="text-sm font-semibold text-bgray mb-2">Payment Terms</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Payments must be made as per the terms specified in your invoice. Orders 
                    will be processed only after payment confirmation. We accept bank transfers, 
                    cheques, and other payment methods as agreed upon.
                  </p>
                </div>
              </div>
            </section>

            {/* Quality & Warranty */}
            <section className="mb-10">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-bgray">
                <Shield className="h-6 w-6 text-bprimary" />
                Quality & Warranty
              </h2>
              <div className="space-y-3">
                <p className="leading-relaxed text-muted-foreground">
                  We follow strict quality standards to ensure our products meet industry 
                  requirements. Any product quality issues should be reported promptly upon 
                  receipt of goods.
                </p>
                <div className="rounded-lg border border-border bg-blue-50/50 p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Warranty, if applicable to the product, covers repair or replacement at our 
                    discretion. Warranty terms will be specified in your order documentation. 
                    Claims must be made within the specified warranty period with proper 
                    documentation.
                  </p>
                </div>
              </div>
            </section>

            {/* Liability */}
            <section className="mb-10">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-bgray">
                <Scale className="h-6 w-6 text-bprimary" />
                Limitation of Liability
              </h2>
              <div className="space-y-3">
                <p className="leading-relaxed text-muted-foreground">
                  To the fullest extent permitted by law:
                </p>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  <li>We are not responsible for indirect, incidental, or consequential damages 
                  arising from the use of our products</li>
                  <li>Our liability is limited to the value of the product supplied</li>
                  <li>We do not accept liability for damages caused by improper use, storage, 
                  or handling of products</li>
                  <li>Claims must be made within a reasonable timeframe after delivery</li>
                </ul>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-bgray">Intellectual Property</h2>
              <p className="leading-relaxed text-muted-foreground">
                All content and branding on this website, including logos, product names, images, 
                and text, are owned by Shakti Polymers and are protected by intellectual property 
                laws. You may not copy, reproduce, distribute, or create derivative works without 
                our prior written permission.
              </p>
            </section>

            {/* Governing Law */}
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-bgray">Governing Law</h2>
              <p className="leading-relaxed text-muted-foreground">
                These Terms and Conditions are governed by and construed in accordance with the 
                laws of India. Any disputes arising from these terms shall be subject to the 
                exclusive jurisdiction of the courts in Delhi.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-bgray">Changes to Terms</h2>
              <p className="leading-relaxed text-muted-foreground">
                We may update these Terms and Conditions at any time without prior notice. 
                Updated terms will be posted on this page and will apply to all future orders 
                and transactions. Your continued use of our services after changes are posted 
                constitutes acceptance of the modified terms.
              </p>
            </section>

            {/* Contact */}
            <section className="rounded-xl bg-linear-to-br from-bprimary/10 to-bsecondary/10 p-6">
              <h2 className="mb-3 text-2xl font-semibold text-bgray">Questions?</h2>
              <p className="leading-relaxed text-muted-foreground">
                If you have any questions about these Terms and Conditions, please contact us 
                through our{' '}
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
