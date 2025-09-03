import Navbar from '@/components/Navbar';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      <Navbar />

      <main className="py-20 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
            Disclaimer for Vinofyx Digital Marketing
          </h1>

          <div className="elegant-card p-8 md:p-12 space-y-6">
            <p className="text-muted-foreground text-sm">
              <strong>Effective Date:</strong> 04th June 2025
            </p>

            <p className="text-muted-foreground leading-relaxed">
              The information provided by Vinofyx Digital Marketing ("we," "our," or "us") on our website and through our services is for general informational and business purposes only. By using our website or services, you acknowledge and agree to the terms of this Disclaimer.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. No Guarantees</h2>
            <p className="text-muted-foreground leading-relaxed">
              While we strive to deliver high-quality digital marketing services, we do not guarantee specific results such as:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Increased sales or revenue.</li>
              <li>Specific search engine rankings.</li>
              <li>Audience engagement, leads, or conversions.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Marketing outcomes depend on various factors, including competition, industry, audience behavior, and third-party platform policies.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. Third-Party Links & Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may contain links to third-party websites, tools, or services. We are not responsible for:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>The accuracy, reliability, or security of any external website.</li>
              <li>Any loss or damage caused by third-party platforms (e.g., Google, Meta/Facebook, LinkedIn, hosting providers, payment gateways).</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Use of third-party services is at your own risk and subject to their terms and policies.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. Content Accuracy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We make reasonable efforts to ensure that the content on our website and marketing materials is accurate and up to date. However:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>We make no warranties regarding completeness, reliability, or accuracy.</li>
              <li>Content may change without prior notice.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. Professional Advice</h2>
            <p className="text-muted-foreground leading-relaxed">
              All information provided on our website, blog, or marketing content is for informational purposes only. It should not be considered:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Legal advice</li>
              <li>Financial advice</li>
              <li>Investment advice</li>
              <li>Professional consulting (outside of agreed digital marketing services)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              You should consult appropriate professionals before making any business or financial decisions.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">5. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the maximum extent permitted by law:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Vinofyx Digital Marketing shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of our website, services, or reliance on provided information.</li>
              <li>Your use of our services and website is solely at your own risk.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">6. Changes to Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Disclaimer at any time. Changes will be reflected on this page with a revised Effective Date.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">7. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Disclaimer, please contact us:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-muted-foreground"><strong>Vinofyx Digital Marketing</strong></p>
              <p className="text-muted-foreground">Email: info@vinofyx.com</p>
              <p className="text-muted-foreground">Phone: +91 - 93919 34534</p>
              <p className="text-muted-foreground">Website: www.vinofyx.com</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Disclaimer;
