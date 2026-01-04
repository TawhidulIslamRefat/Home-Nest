import React from "react";

const Terms = () => {
  return (
    <div className="bg-gray-50 dark:bg-[#1D232A] min-h-screen">

      <div className="bg-linear-to-br from-[#FF5A3C] via-[#ff6b4a] to-[#ff7a5c]  py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms & Conditions
          </h1>
          <p className="text-blue-100 text-lg">
            Please read these terms carefully before using HomeNest
          </p>
        </div>
      </div>

      <div className="max-w-5xl  mx-auto px-6 py-16">
        <div className="bg-white dark:bg-[#1D232A] shadow rounded-2xl p-8 md:p-12 space-y-10">
          

          <p className="text-gray-600 dark:text-white/98 leading-relaxed">
            Welcome to <span className="font-semibold">HomeNest</span>. By
            accessing or using our real estate listing platform, you agree to
            comply with and be bound by the following terms and conditions.
            If you do not agree, please do not use our services.
          </p>


          <div>
            <h2 className="text-2xl font-bold mb-3">
              1. Use of the Platform
            </h2>
            <p className="text-gray-600 dark:text-white/98 leading-relaxed">
              HomeNest allows users to browse, list, buy, sell, and rent
              properties. You agree to use this platform only for lawful
              purposes and in a manner that does not infringe the rights of
              others.
            </p>
          </div>


          <div>
            <h2 className="text-2xl font-bold mb-3">
              2. User Accounts
            </h2>
            <p className="text-gray-600 dark:text-white/98 leading-relaxed">
              To access certain features, you may be required to create an
              account. You are responsible for maintaining the confidentiality
              of your account information and for all activities under your
              account.
            </p>
          </div>


          <div>
            <h2 className="text-2xl font-bold mb-3">
              3. Property Listings
            </h2>
            <p className="text-gray-600 dark:text-white/98 leading-relaxed">
              Users are responsible for ensuring that property information,
              images, pricing, and descriptions are accurate and up to date.
              HomeNest does not guarantee the accuracy of any listing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">
              4. Payments & Fees
            </h2>
            <p className="text-gray-600 dark:text-white/98 leading-relaxed">
              Some services may require payment. All fees are clearly stated
              before purchase. HomeNest reserves the right to change pricing at
              any time.
            </p>
          </div>


          <div>
            <h2 className="text-2xl font-bold mb-3">
              5. Prohibited Activities
            </h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-white/98 space-y-2">
              <li>Posting false or misleading property information</li>
              <li>Engaging in fraudulent activities</li>
              <li>Violating any applicable laws or regulations</li>
              <li>Attempting to access restricted areas of the platform</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-600 dark:text-white/98 leading-relaxed">
              HomeNest shall not be held liable for any direct or indirect
              damages resulting from the use or inability to use the platform,
              including disputes between buyers and sellers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">
              7. Termination
            </h2>
            <p className="text-gray-600 dark:text-white/98 leading-relaxed">
              We reserve the right to suspend or terminate your access to
              HomeNest at any time, without notice, if you violate these terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">
              8. Changes to Terms
            </h2>
            <p className="text-gray-600 dark:text-white/98 leading-relaxed">
              HomeNest may update these Terms & Conditions from time to time.
              Continued use of the platform indicates acceptance of the updated
              terms.
            </p>
          </div>

          <div className="border-t pt-6 text-sm text-gray-500 dark:text-white/98">
            <p>
              Last updated: January 2026
            </p>
            <p>
              If you have any questions about these terms, please contact us at{" "}
              <span className="text-[#FF5A3C] font-medium">
                support@homenest.com
              </span>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Terms;
