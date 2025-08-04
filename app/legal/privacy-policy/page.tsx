import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'DeltaQuest, Inc. Privacy Policy',
  description:
    'DeltaQuest, Inc. Privacy Policy. Learn how we collect, use, and protect your personal information.',
})

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-900">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            DeltaQuest, Inc. Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            <strong>Effective Date:</strong> 4 August 2025
          </p>
        </div>

        {/* Key-Point Summary */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            Key-Point Summary (Plain Language)
          </h2>
          <ul className="mb-4 space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              We (<strong>DeltaQuest, Inc.</strong>) show ads and measure gameplay to improve the
              Game.
            </li>
            <li>
              Advertising and analytics partners (listed below) receive an advertising ID, device
              details and gameplay events.
            </li>
            <li>
              You can limit personalised ads via your device settings or partner links in{' '}
              <a href="#6" className="text-blue-600 hover:underline dark:text-blue-400">
                Section 6
              </a>
              .
            </li>
            <li>
              We never ask for your real name, email or precise GPS and we do not send remote push
              notifications.
            </li>
            <li>
              Need help? Contact our DPO{' '}
              <a href="#16" className="text-blue-600 hover:underline dark:text-blue-400">
                (see Section 16)
              </a>
              .
            </li>
          </ul>
          <p className="text-sm text-gray-600 italic dark:text-gray-400">
            This summary is just a quick overview - please read the full policy below.
          </p>
        </div>

        {/* 1. Scope */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="1">
            1. Scope
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            This policy explains how DeltaQuest, Inc. ("<strong>we</strong>", "<strong>us</strong>",
            "<strong>our</strong>") collects, uses and shares data when you play{' '}
            <strong>At All Costs</strong> (the "<strong>Game</strong>") on Android or iOS. It aligns
            with the disclosures shown in Google Play's Data Safety section and Apple App Store's
            App Privacy details.
          </p>
        </div>

        {/* 2. Data We Collect */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="2">
            2. Data We Collect and Receive
          </h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            We do <em>not</em> run our own tracking servers. Instead, your device sends data
            directly to the partners listed in{' '}
            <a href="#4" className="text-blue-600 hover:underline dark:text-blue-400">
              Section 4
            </a>
            , who share aggregated dashboards with us.
          </p>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Gameplay activity</strong> - level attempts, session length, in-app purchases,
              ads viewed.
            </li>
            <li>
              <strong>Device and usage</strong> - advertising ID (GAID / IDFA), coarse IP (region
              only), device model, OS version, screen resolution, language, crash logs.
            </li>
          </ul>
        </div>

        {/* 3. Third Party Services */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="3">
            3. Third-Party SDKs and Service Providers
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <th className="border border-gray-300 p-2 text-left dark:border-gray-600">
                    Partner
                  </th>
                  <th className="border border-gray-300 p-2 text-left dark:border-gray-600">
                    Purpose
                  </th>
                  <th className="border border-gray-300 p-2 text-left dark:border-gray-600">
                    Typical data shared
                  </th>
                  <th className="border border-gray-300 p-2 text-left dark:border-gray-600">
                    Opt-out / info
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2 dark:border-gray-600">
                    Google AdMob / Ad Manager
                  </td>
                  <td className="border border-gray-300 p-2 dark:border-gray-600">
                    Ad serving and measurement
                  </td>
                  <td className="border border-gray-300 p-2 dark:border-gray-600">
                    Advertising ID, IP (region), device info
                  </td>
                  <td className="border border-gray-300 p-2 dark:border-gray-600">
                    <a
                      href="https://support.google.com/ads/answer/2662922"
                      target="_blank"
                      rel="noopener"
                      className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                      link
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 dark:border-gray-600">
                    Firebase Analytics and Crashlytics
                  </td>
                  <td className="border border-gray-300 p-2 dark:border-gray-600">
                    Analytics and crashes
                  </td>
                  <td className="border border-gray-300 p-2 dark:border-gray-600">
                    App events, device info
                  </td>
                  <td className="border border-gray-300 p-2 dark:border-gray-600">
                    <a
                      href="https://support.google.com/firebase/answer/6318039"
                      target="_blank"
                      rel="noopener"
                      className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                      link
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 dark:border-gray-600">Expo</td>
                  <td className="border border-gray-300 p-2 dark:border-gray-600">
                    App updates and analytics
                  </td>
                  <td className="border border-gray-300 p-2 dark:border-gray-600">
                    App usage statistics, crash reports
                  </td>
                  <td className="border border-gray-300 p-2 dark:border-gray-600">
                    <a
                      href="https://expo.dev/privacy"
                      target="_blank"
                      rel="noopener"
                      className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                      link
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 4. How and Why We Use Information */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="4">
            4. How and Why We Use Information
          </h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Operate and improve the Game</strong> (legitimate interest or performance of
              contract).
            </li>
            <li>
              <strong>Serve ads and measure their performance</strong> (consent where required).
            </li>
            <li>
              <strong>Analyse gameplay</strong> to balance levels and fix bugs (legitimate
              interest).
            </li>
            <li>
              <strong>Prevent fraud and ensure fair play</strong> (legitimate interest).
            </li>
          </ul>
        </div>

        {/* 5. Ad Personalisation Choices */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="5">
            5. Ad Personalisation Choices
          </h2>
          <ol className="space-y-4 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Device controls</strong>
              <br />
              Android 14: Settings → Privacy → Ads → "Delete advertising ID"
              <br />
              Android 13-: Settings → Privacy → Ads → "Opt out of Ads Personalisation"
              <br />
              iOS: Settings → Privacy and Security → Tracking → disable "Allow Apps to Request to
              Track".
            </li>
            <li>
              <strong>Global Privacy Control or Limit Ad Tracking</strong> - the Game honours these
              signals and forwards them to partners.
            </li>
            <li>
              <strong>Partner portals</strong> - see the opt-out links in{' '}
              <a href="#3" className="text-blue-600 hover:underline dark:text-blue-400">
                Section 3
              </a>
              .
            </li>
          </ol>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            An in-app toggle is on our roadmap; in the meantime please use the methods above.
          </p>
        </div>

        {/* 6. Legal Bases */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="6">
            6. Legal Bases (EEA and UK)
          </h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Consent</strong> - personalised advertising.
            </li>
            <li>
              <strong>Legitimate interests</strong> - analytics, fraud prevention, game operation.
            </li>
            <li>
              <strong>Performance of contract</strong> - delivering gameplay and in-app purchases
              you request.
            </li>
          </ul>
        </div>

        {/* 7. Data Retention */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="7">
            7. Data Retention
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Raw analytics logs are kept by our partners for no longer than 24 months (shorter if
            they offer a shorter default).
            <br />
            Aggregated, de-identified statistics may be stored indefinitely for trend analysis.
          </p>
        </div>

        {/* 8. Region-Specific Disclosures */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="8">
            8. Region-Specific Disclosures
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Brazil (LGPD):</strong> You have rights to access, correct or delete your data.
            Contact us to exercise them.
            <br />
            <strong>Canada (PIPEDA):</strong> Our practices comply with the ten Fair Information
            Principles.
            <br />
            <strong>Australia (Privacy Act 1988):</strong> We do not transfer personal data outside
            Australia unless adequate protections apply.
            <br />
            <strong>Other regions:</strong> We honour applicable rights where you reside.
          </p>
        </div>

        {/* 9. International Data Transfers */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="9">
            9. International Data Transfers
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            We are headquartered in Japan. Where partners transfer data outside the EEA or UK, they
            rely on Standard Contractual Clauses or equivalent safeguards.
          </p>
        </div>

        {/* 10. California Privacy Rights */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="10">
            10. California Privacy Rights (CCPA and CPRA)
          </h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              You have rights to <strong>know</strong>, <strong>delete</strong> and{' '}
              <strong>correct</strong> personal information.
            </li>
            <li>
              We "share" identifiers for cross-context behavioural advertising. Use device controls
              or partner links to opt out.
            </li>
            <li>No financial incentives are offered for your data.</li>
          </ul>
        </div>

        {/* 11. Children's Privacy */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="11">
            11. Children's Privacy
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            The Game is directed to users aged 12 plus. We do not knowingly collect personal data
            from children under 12.
            <br />
            If we become aware of such collection, we will delete the information as quickly as
            practicable or seek parental consent.
          </p>
        </div>

        {/* 12. Security Measures */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="12">
            12. Security Measures
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            We follow industry-standard practices, including TLS 1.2 plus for data in transit and
            partner-level encryption at rest, to protect information.
            <br />
            No method of transmission or storage is 100 percent secure, but we aim to mitigate risks
            through regular audits and access controls.
          </p>
        </div>

        {/* 13. Your Rights */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="13">
            13. Your Rights and How to Exercise Them
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Depending on your location you may request access, correction, deletion, restriction or
            portability of your data.
            <br />
            Send a request to{' '}
            <a
              href="mailto:support@deltaquest.co.jp"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              support@deltaquest.co.jp
            </a>{' '}
            and we (or our partners) will respond within 30 days.
          </p>
        </div>

        {/* 14. Changes to Policy */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="14">
            14. Changes to This Policy
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            We may update this policy from time to time. Material changes will be announced in-app
            or on our website at least 7 days before they take effect.
          </p>
        </div>

        {/* 15. Contact Us */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="15">
            15. Contact Us
          </h2>
          <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
            <p className="text-gray-700 dark:text-gray-300">
              DeltaQuest, Inc.
              <br />
              日本〒064-0805 北海道札幌市
              <br />
              <a
                href="mailto:support@deltaquest.co.jp"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                support@deltaquest.co.jp
              </a>
              <br />
              Data-Protection Officer (Kevin Bulmé):{' '}
              <a
                href="mailto:dpo@deltaquest.co.jp"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                kevin.bulme@deltaquest.co.jp
              </a>
            </p>
          </div>
        </div>

        {/* 16. Glossary */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="16">
            16. Glossary
          </h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Advertising ID</strong> - a device-level ID (GAID or IDFA) that resets from
              system settings.
            </li>
            <li>
              <strong>Personal information</strong> - data that identifies or can reasonably
              identify an individual.
            </li>
            <li>
              <strong>Standard Contractual Clauses (SCCs)</strong> - EU model clauses for
              cross-border transfers.
            </li>
          </ul>
        </div>

        {/* Back to top */}
        <div className="text-center">
          <a href="#top" className="text-blue-600 hover:underline dark:text-blue-400">
            ↑ Back to top
          </a>
        </div>
      </div>
    </div>
  )
}
