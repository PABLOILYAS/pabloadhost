import { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    // Add Google Font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 font-[Inter]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-gray-700 mb-6">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Introduction</h2>
          <p className="text-gray-700 mb-4">
            Welcome to Pabload ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Messenger bot service.
          </p>
          <p className="text-gray-700 mb-4">
            Please read this Privacy Policy carefully. By using Pabload, you agree to the collection and use of information in accordance with this policy.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            We may collect several types of information from and about users of our service, including:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Messages and content you send to our bot</li>
            <li className="mb-2">Information provided by Facebook Messenger (such as your name and profile picture)</li>
            <li className="mb-2">Usage data (such as interaction frequency and feature usage)</li>
          </ul>
          
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Provide, maintain, and improve our services</li>
            <li className="mb-2">Respond to your messages and requests</li>
            <li className="mb-2">Understand how users interact with our bot</li>
            <li className="mb-2">Develop new features and functionality</li>
            <li className="mb-2">Prevent fraudulent or illegal activities</li>
          </ul>
          
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Data Retention</h2>
          <p className="text-gray-700 mb-4">
            We retain your information for as long as necessary to provide you with our services and for legitimate business purposes such as maintaining the performance of the service, making data-driven decisions about new features, complying with our legal obligations, and resolving disputes.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Disclosure of Your Information</h2>
          <p className="text-gray-700 mb-4">
            We may disclose information we collect:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">To comply with any court order, law, or legal process</li>
            <li className="mb-2">To protect the rights, property, or safety of our service, our users, or others</li>
            <li className="mb-2">With service providers who help us operate our service</li>
          </ul>
          
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Data Security</h2>
          <p className="text-gray-700 mb-4">
            We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Your Data Protection Rights</h2>
          <p className="text-gray-700 mb-4">
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">The right to access the personal information we hold about you</li>
            <li className="mb-2">The right to request correction of inaccurate information</li>
            <li className="mb-2">The right to request deletion of your information</li>
            <li className="mb-2">The right to restrict or object to our processing of your information</li>
          </ul>
          <p className="text-gray-700 mb-4">
            To exercise these rights, please contact us at pabloall@proton.me.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">8. Changes to Our Privacy Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
          <p className="text-gray-700 mb-4">
            You are advised to review this Privacy Policy periodically for any changes.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">9. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="text-gray-700 mb-8">
            <a href="mailto:pabloall@proton.me" className="text-blue-600 hover:underline">pabloall@proton.me</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
