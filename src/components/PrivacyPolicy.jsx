import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Effective Date: [Insert Date]</p>

      <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
      <p className="mb-6">
        At CodeSec, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Personal Information:</strong> We may collect personal information such as your name, email address, phone number, and payment information when you interact with our website, sign up for our services, or contact us.</li>
        <li><strong>Usage Data:</strong> We collect information about your interactions with our website and services, including your IP address, browser type, pages visited, and the date and time of your visits.</li>
        <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to enhance your experience on our website and gather information about your usage patterns.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
      <p className="mb-6">
        We use the collected information for various purposes, including:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>Providing and maintaining our services</li>
        <li>Processing transactions and managing your account</li>
        <li>Communicating with you about updates, offers, and promotions</li>
        <li>Improving our website and services</li>
        <li>Conducting research and analysis</li>
        <li>Ensuring the security of our website and services</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Disclosure of Your Information</h2>
      <p className="mb-6">
        We may share your information with:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Service Providers:</strong> Third-party vendors who assist us in providing our services, such as payment processors and IT support.</li>
        <li><strong>Legal Requirements:</strong> Authorities when required by law or to protect our rights.</li>
        <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
      <p className="mb-6">
        We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, use, or disclosure.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
      <p className="mb-6">
        You have the right to:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>Access, correct, or delete your personal information</li>
        <li>Object to or restrict the processing of your data</li>
        <li>Withdraw consent at any time</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
      <p className="mb-6">
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page with the updated effective date.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at [your contact email].
      </p>
    </div>
  );
};

export default PrivacyPolicy;

