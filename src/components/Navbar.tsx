import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">Pabload</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link to="/privacy-policy" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Terms of Service
            </Link>
          </nav>
          
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-gray-500 hover:text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link 
              to="/" 
              className="block py-2 text-base font-medium text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/privacy-policy" 
              className="block py-2 text-base font-medium text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms-of-service" 
              className="block py-2 text-base font-medium text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
