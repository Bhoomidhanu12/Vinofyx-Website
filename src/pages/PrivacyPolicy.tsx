import Navbar from '@/components/Navbar';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      <Navbar />

      <main className="py-20 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
            Privacy Policy for Vinofyx Digital Marketing
          </h1>

          <div className="elegant-card p-8 md:p-12 space-y-6">
            <p className="text-muted-foreground text-sm">
              <strong>Effective Date:</strong> 04th June 2025
            </p>

            <p className="text-muted-foreground leading-relaxed">
              At Vinofyx Digital Marketing, your privacy is extremely important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you interact with our website, services, and digital marketing solutions. Please read this policy carefully to understand our practices regarding your personal information.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may collect the following types of information when you use our services:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li><strong>Personal Information:</strong> Name, email address, phone number, company name, billing details, etc.</li>
              <li><strong>Non-Personal Information:</strong> Browser type, IP address, device information, cookies, and analytics data.</li>
              <li><strong>Business Information:</strong> Details about your business, marketing goals, and project requirements.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use the information we collect for purposes such as:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Providing and improving our digital marketing services.</li>
              <li>Communicating with you regarding inquiries, projects, or updates.</li>
              <li>Processing payments and invoices.</li>
              <li>Personalizing marketing strategies to meet your business goals.</li>
              <li>Sending newsletters, promotions, and industry updates (only if you opt-in).</li>
              <li>Ensuring website functionality, security, and performance.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. Sharing of Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We respect your privacy and do not sell or rent your personal information. However, we may share your information in the following cases:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>With trusted third-party service providers (such as payment processors, hosting services, analytics tools) strictly for business operations.</li>
              <li>To comply with legal obligations or respond to lawful requests.</li>
              <li>In case of a business transfer (e.g., merger, acquisition, or sale of assets).</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may use cookies, pixels, and analytics tools to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Enhance user experience.</li>
              <li>Track website performance and user behavior.</li>
              <li>Deliver targeted advertisements and marketing campaigns.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              You can choose to disable cookies in your browser settings, but some website features may not function properly.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">5. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">6. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Access, correct, or delete your personal information.</li>
              <li>Opt-out of receiving marketing communications.</li>
              <li>Restrict or object to certain data processing activities.</li>
              <li>Request data portability.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              To exercise these rights, please contact us at info@vinofyx.com.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">7. Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">8. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">9. Updates to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised Effective Date.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">10. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
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

export default PrivacyPolicy;
