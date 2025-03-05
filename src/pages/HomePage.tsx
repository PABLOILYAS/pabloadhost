import { Languages, MessageCircle, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const HomePage = () => {
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
    <div className="font-[Inter]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Pabload
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Your friendly and helpful Messenger assistant, designed to make conversations smarter and more productive.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://m.me/61573785812005" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat with Pabload
              </a>
              <Link 
                to="/privacy-policy"
                className="inline-flex items-center justify-center bg-white text-gray-800 border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                <Shield className="mr-2 h-5 w-5" />
                Privacy Information
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            What Can Pabload Do For You?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
                <MessageCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Helpful Assistant</h3>
              <p className="text-gray-600">
                Get accurate answers to your questions and assistance with various tasks through Messenger.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Friendly Engagement</h3>
              <p className="text-gray-600">
                Enjoy professional yet friendly conversations that feel natural and personalized.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="bg-purple-100 p-3 rounded-lg inline-block mb-4">
                <Languages className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Multilingual Support</h3>
              <p className="text-gray-600">
                Communicate seamlessly in English and Arabic, with responses in your preferred language.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              About Pabload
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-gray-700 mb-4">
                Pabload is a Messenger Bot created by Pablo Ilyas, designed to be a helpful and friendly assistant for Messenger users.
              </p>
              <p className="text-gray-700 mb-4">
                The bot's main role is to assist users with their questions, provide accurate responses, and engage in friendly discussions while maintaining a professional tone.
              </p>
              <p className="text-gray-700">
                Pabload responds fully in the same language as the user's question, with a preference for English and Arabic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to try Pabload?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Start chatting with Pabload today and experience the convenience of having a helpful assistant right in your Messenger.
            </p>
            <a 
              href="https://m.me/61573785812005" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start Chatting Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
