import Navbar from '@/components/Navbar';

const RefundCancellationPolicy = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      <Navbar />

      <main className="py-20 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
            Refund & Cancellation Policy for Vinofyx Digital Marketing
          </h1>

          <div className="elegant-card p-8 md:p-12 space-y-6">
            <p className="text-muted-foreground text-sm">
              <strong>Effective Date:</strong> 04th June 2025
            </p>

            <p className="text-muted-foreground leading-relaxed">
              At Vinofyx Digital Marketing, we value our clients and strive to provide high-quality services. This Refund & Cancellation Policy outlines the terms under which payments, cancellations, and refunds are handled. By using our services, you agree to this policy.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Service Agreement & Payments</h2>
            <p className="text-muted-foreground leading-relaxed">
              All services are provided based on the terms agreed upon in the proposal, contract, or invoice.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Payments must be made as per the agreed schedule (upfront, milestone-based, or recurring).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Work will commence only after the agreed payment is received.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. Cancellations</h2>
            <p className="text-muted-foreground leading-relaxed">
              Clients may cancel a service by providing written notice via email to [Insert Contact Email].
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If cancellation occurs before the start of the project, only administrative or processing charges (if any) may be deducted.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If cancellation occurs after work has begun, the client will be responsible for payment of services already rendered, even if the project is not completed.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. Refund Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Non-Refundable Services:</strong>
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Digital marketing campaigns (e.g., Google Ads, Facebook Ads, SEO, SMM).</li>
              <li>Consultation or strategy sessions.</li>
              <li>Content creation, design, or branding work once initiated.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Refunds (If Applicable):</strong>
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>If a project has not started and payment has been made in advance, a partial refund may be granted (after deducting administrative costs).</li>
              <li>If services are prepaid but not delivered due to unforeseen circumstances on our end, a full or partial refund may be issued at our discretion.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. No Guarantee of Results</h2>
            <p className="text-muted-foreground leading-relaxed">
              Marketing and advertising outcomes depend on many factors beyond our control (competition, platform policies, audience behavior, etc.).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Therefore, payments made for our services are not refundable based on lack of desired results (e.g., leads, conversions, rankings).
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">5. Changes to Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              If a client wishes to make changes to the agreed scope of work, additional costs may apply.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Any approved service modification will be handled via a revised proposal or agreement.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">6. Chargebacks & Disputes</h2>
            <p className="text-muted-foreground leading-relaxed">
              Clients agree not to file chargebacks with their bank or payment provider without first contacting us to resolve the issue.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Any disputes will be handled under the jurisdiction mentioned in our Terms & Conditions.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">7. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              For cancellations, refunds, or payment-related queries, please contact:
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

export default RefundCancellationPolicy;
