import { useEffect } from 'react';

const TermsOfService = () => {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-gray-700 mb-6">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-4">
            By accessing or using Pabload, you agree to be bound by these Terms of Service. If you do not agree to these Terms, you may not access or use the service.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Description of Service</h2>
          <p className="text-gray-700 mb-4">
            Pabload is a messenger bot that provides assistance, information, and responses to user queries through Facebook Messenger. The bot is designed to be helpful and friendly while maintaining a professional tone.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. User Conduct</h2>
          <p className="text-gray-700 mb-4">
            When using Pabload, you agree not to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Use the service for any illegal purpose</li>
            <li className="mb-2">Harass, abuse, or harm another person</li>
            <li className="mb-2">Send spam or other unsolicited messages</li>
            <li className="mb-2">Attempt to interfere with or disrupt the service</li>
            <li className="mb-2">Attempt to access areas or features of the service that you are not authorized to access</li>
          </ul>
          
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Intellectual Property Rights</h2>
          <p className="text-gray-700 mb-4">
            The service and its original content, features, and functionality are and will remain the exclusive property of Pablo Ilyas and its licensors. The service is protected by copyright, trademark, and other laws.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. User Content</h2>
          <p className="text-gray-700 mb-4">
            You retain all rights to any content you submit, post, or display through our service. By providing content to Pabload, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute your content in any existing or future media.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Limitation of Liability</h2>
          <p className="text-gray-700 mb-4">
            In no event shall Pabload, its operators, or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the service, even if Pabload has been notified of the possibility of such damages.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Disclaimer</h2>
          <p className="text-gray-700 mb-4">
            The service is provided on an "AS IS" and "AS AVAILABLE" basis. Pabload makes no warranties, expressed or implied, regarding the operation of the service or the information, content, or materials included therein.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">8. Governing Law</h2>
          <p className="text-gray-700 mb-4">
            These Terms shall be governed and construed in accordance with the laws, without regard to its conflict of law provisions.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">9. Changes to Terms</h2>
          <p className="text-gray-700 mb-4">
            We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page and updating the "Last Updated" date.
          </p>
          <p className="text-gray-700 mb-4">
            Your continued use of the service after any such changes constitutes your acceptance of the new Terms.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">10. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="text-gray-700 mb-8">
            <a href="mailto:pabloall@proton.me" className="text-blue-600 hover:underline">pabloall@proton.me</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
