import { Link } from 'react-router-dom';
import { Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="space-y-4 md:space-y-2">
            <div className="flex items-center">
              <span className="text-lg font-semibold text-gray-900">Pabload</span>
            </div>
            <p className="text-sm text-gray-500">
              A messenger bot created by Pablo Ilyas
            </p>
            <div className="flex flex-col space-y-2">
              <p className="text-sm text-gray-500 flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>Contact: </span>
                <a href="mailto:pabloall@proton.me" className="ml-1 underline hover:text-gray-700">pabloall@proton.me</a>
              </p>
              <p className="text-sm text-gray-500 flex items-center">
                <Github className="h-4 w-4 mr-2" />
                <span>GitHub: </span>
                <a href="https://github.com/PABLOILYAS" target="_blank" rel="noopener noreferrer" className="ml-1 underline hover:text-gray-700">github.com/PABLOILYAS</a>
              </p>
            </div>
          </div>
          
          <div className="mt-8 md:mt-0">
            <ul className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
              <li>
                <Link to="/" className="text-sm text-gray-500 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm text-gray-500 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-sm text-gray-500 hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Pabload Messenger Bot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
