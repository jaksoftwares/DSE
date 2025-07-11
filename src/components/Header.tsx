import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Settings, Grid3X3, User } from 'lucide-react';

interface HeaderProps {
  showLogo?: boolean;
  onLogoClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ showLogo = false, onLogoClick }) => {
  const location = useLocation();

  return (
    <header className="flex items-center justify-between p-4">
      {/* Left side - Logo (when on results page) */}
      <div className="flex items-center">
        {showLogo && (
          <button
            onClick={onLogoClick}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <img
              src="/ddslogo1.jpg"
              alt="DSE Logo"
              className="w-8 h-8 rounded"
            />
            <span className="text-xl font-medium text-gray-800">DSE</span>
          </button>
        )}
      </div>

      {/* Right side - Navigation */}
      <div className="flex items-center space-x-4">
        <nav className="hidden md:flex items-center space-x-6 text-sm">
          <Link 
            to="/images" 
            className={`text-gray-700 hover:text-gray-900 transition-colors ${
              location.pathname === '/images' ? 'text-blue-600 font-medium' : ''
            }`}
          >
            Images
          </Link>
          <Link 
            to="/videos" 
            className={`text-gray-700 hover:text-gray-900 transition-colors ${
              location.pathname === '/videos' ? 'text-blue-600 font-medium' : ''
            }`}
          >
            Videos
          </Link>
          <Link 
            to="/news" 
            className={`text-gray-700 hover:text-gray-900 transition-colors ${
              location.pathname === '/news' ? 'text-blue-600 font-medium' : ''
            }`}
          >
            News
          </Link>
          <Link 
            to="/maps" 
            className={`text-gray-700 hover:text-gray-900 transition-colors ${
              location.pathname === '/maps' ? 'text-blue-600 font-medium' : ''
            }`}
          >
            Maps
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <Link to="/settings" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Settings className="w-5 h-5 text-gray-600" />
          </Link>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Grid3X3 className="w-5 h-5 text-gray-600" />
          </button>
          <Link to="/profile" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <User className="w-5 h-5 text-gray-600" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;