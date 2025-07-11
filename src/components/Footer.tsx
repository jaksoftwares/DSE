import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        {/* Country */}
        <div className="py-3 border-b border-gray-200">
          <span className="text-gray-600 text-sm">United States</span>
        </div>

        {/* Links */}
        <div className="py-3 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div className="flex flex-wrap items-center space-x-6 text-sm">
            <Link to="/about" className="text-gray-600 hover:text-gray-800 transition-colors">
              About
            </Link>
            <Link to="/advertising" className="text-gray-600 hover:text-gray-800 transition-colors">
              Advertising
            </Link>
            <Link to="/business" className="text-gray-600 hover:text-gray-800 transition-colors">
              Business
            </Link>
            <Link to="/how-search-works" className="text-gray-600 hover:text-gray-800 transition-colors">
              How Search works
            </Link>
          </div>

          <div className="flex flex-wrap items-center space-x-6 text-sm">
            <Link to="/privacy" className="text-gray-600 hover:text-gray-800 transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-gray-600 hover:text-gray-800 transition-colors">
              Terms
            </Link>
            <Link to="/settings" className="text-gray-600 hover:text-gray-800 transition-colors">
              Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;