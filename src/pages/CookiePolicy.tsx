import Navbar from '@/components/Navbar';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      <Navbar />

      <main className="py-20 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
            Cookie Policy for Vinofyx Digital Marketing
          </h1>

          <div className="elegant-card p-8 md:p-12 space-y-6">
            <p className="text-muted-foreground text-sm">
              <strong>Effective Date:</strong> 04th June 2025
            </p>

            <p className="text-muted-foreground leading-relaxed">
              At Vinofyx Digital Marketing, we use cookies and similar technologies to improve your browsing experience, analyze website traffic, and deliver personalized content and ads. This Cookie Policy explains what cookies are, how we use them, and how you can manage your preferences.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. What Are Cookies?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files stored on your device (computer, tablet, smartphone) when you visit a website. They help websites recognize your device, store preferences, and improve user experience.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. Types of Cookies We Use</h2>
            <p className="text-muted-foreground leading-relaxed">
              <strong>(a) Essential Cookies</strong><br />
              Necessary for website functionality (e.g., login, navigation).<br />
              Cannot be disabled as they are required for the site to work properly.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>(b) Performance & Analytics Cookies</strong><br />
              Collect information about how visitors use our site (e.g., pages visited, time spent).<br />
              Help us improve site performance and usability.<br />
              Examples: Google Analytics.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>(c) Functional Cookies</strong><br />
              Remember user preferences (e.g., language, region).<br />
              Enhance personalized user experience.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>(d) Advertising & Targeting Cookies</strong><br />
              Track browsing behavior across websites to deliver personalized ads.<br />
              Examples: Facebook Pixel, Google Ads Remarketing.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. Third-Party Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may use third-party services (e.g., Google, Meta/Facebook, LinkedIn) that place cookies on your device for analytics, advertising, or other business purposes. We do not control these cookies, and their use is subject to the respective third parties' privacy policies.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. How We Use Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Ensure proper website functionality.</li>
              <li>Analyze website traffic and performance.</li>
              <li>Improve user experience and personalization.</li>
              <li>Deliver relevant ads and marketing campaigns.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">5. Managing Your Cookie Preferences</h2>
            <p className="text-muted-foreground leading-relaxed">
              You can manage or disable cookies through your browser settings. However, please note:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Disabling cookies may affect website functionality and user experience.</li>
              <li>Some cookies are strictly necessary and cannot be disabled.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              For more detailed instructions on managing cookies, visit your browser's help pages:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Chrome: <a href="https://support.google.com/chrome/answer/95647" className="text-primary hover:underline">https://support.google.com/chrome/answer/95647</a></li>
              <li>Firefox: <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies" className="text-primary hover:underline">https://support.mozilla.org/en-US/kb/enable-and-disable-cookies</a></li>
              <li>Safari: <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-primary hover:underline">https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac</a></li>
              <li>Edge: <a href="https://support.microsoft.com/help/4027947/microsoft-edge-delete-cookies" className="text-primary hover:underline">https://support.microsoft.com/help/4027947/microsoft-edge-delete-cookies</a></li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">6. Consent</h2>
            <p className="text-muted-foreground leading-relaxed">
              When you visit our website for the first time, you may see a cookie banner/pop-up requesting your consent. By continuing to use our site, you consent to our use of cookies in accordance with this policy.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">7. Updates to This Cookie Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Cookie Policy from time to time. Updates will be posted on this page with a revised Effective Date.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">8. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              For any questions regarding our Cookie Policy, please contact:
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

export default CookiePolicy;
