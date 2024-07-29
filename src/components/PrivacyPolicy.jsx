import React from 'react';
import Section from './Section';

const PrivacyPolicy = () => {
  return (
    <Section className="!px-0 !py-10 bg-gray-800 text-white">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          At Codesec, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
        </p>
        <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
        <p className="mb-4">
          We may collect personal identification information from Users in various ways, including, but not limited to, when Users visit our site, register on the site, and in connection with other activities, services, features, or resources we make available on our Site.
        </p>
        {/* Add more sections as needed */}
      </div>
    </Section>
  );
};

export default PrivacyPolicy;
