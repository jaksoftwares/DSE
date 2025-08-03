import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import SearchResults from './components/SearchResults';
import InAppBrowser from './components/InAppBrowser';
import Footer from './components/Footer';
import Images from './pages/Images';
import Videos from './pages/Videos';
import News from './pages/News';
import Maps from './pages/Maps';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import About from './pages/About';
import Advertising from './pages/Advertising';
import Business from './pages/Business';
import HowSearchWorks from './pages/HowSearchWorks';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

interface SearchResult {
  title: string;
  url: string;
  description: string;
  source: string;
}

interface SearchResponse {
  query: string;
  results: SearchResult[];
  totalResults: number;
  searchTime: string;
  level: number;
}

function SearchApp() {
  const [searchResults, setSearchResults] = useState<SearchResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [currentQuery, setCurrentQuery] = useState('');
  const [browserState, setBrowserState] = useState<{
    isOpen: boolean;
    url: string;
    title: string;
  }>({
    isOpen: false,
    url: '',
    title: ''
  });
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = async (query: string, level: number) => {
    setLoading(true);
    setCurrentQuery(query);
    
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, level }),
      });

      if (!response.ok) {
        throw new Error('Search failed');
      }

      const data: SearchResponse = await response.json();
      setSearchResults(data);
      
      // Navigate to search results if not already there
      if (location.pathname !== '/') {
        navigate('/');
      }
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogoClick = () => {
    setSearchResults(null);
    setCurrentQuery('');
    setBrowserState({ isOpen: false, url: '', title: '' });
    navigate('/');
  };

  const handleOpenInApp = (url: string, title: string) => {
    console.log('Opening in DSE app browser:', url, title);
    
    // Ensure URL has protocol
    let fullUrl = url;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      fullUrl = 'https://' + url;
    }
    
    setBrowserState({
      isOpen: true,
      url: fullUrl,
      title
    });
  };

  const handleCloseBrowser = () => {
    setBrowserState({ isOpen: false, url: '', title: '' });
  };

  const isHomePage = location.pathname === '/' && !searchResults && !loading;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* In-App Browser */}
      {browserState.isOpen && (
        <InAppBrowser
          url={browserState.url}
          title={browserState.title}
          onClose={handleCloseBrowser}
        />
      )}

      <Header showLogo={!isHomePage} onLogoClick={handleLogoClick} />
      
      <main className="flex-1 flex flex-col">
        {location.pathname === '/' ? (
          isHomePage ? (
            // Home Page
            <div className="flex-1 flex flex-col justify-center items-center px-4 -mt-20">
              <div className="text-center mb-8">
                <img
                  src="/ddslogo1.jpg"
                  alt="DSE Logo"
                  className="w-24 h-24 mx-auto mb-4 rounded-lg shadow-lg"
                />
                <h1 className="text-6xl font-light text-gray-800 mb-2">
                  <span className="text-blue-500">D</span>
                  <span className="text-red-500">S</span>
                  <span className="text-yellow-500">E</span>
                </h1>
                <p className="text-lg text-gray-600">Dovepeak Search Engine</p>
              </div>
              
              <SearchBox onSearch={handleSearch} loading={loading} />
              
              <div className="mt-8 text-center text-sm text-gray-500">
                <p>Powered by multiple search engines for comprehensive results</p>
              </div>
            </div>
          ) : (
            // Results Page
            <div className="px-4 py-4">
              <div className="max-w-2xl mx-auto mb-6">
                <SearchBox 
                  onSearch={handleSearch} 
                  loading={loading} 
                  initialQuery={currentQuery}
                />
              </div>
              
              <SearchResults
                results={searchResults?.results || []}
                query={searchResults?.query || ''}
                totalResults={searchResults?.totalResults || 0}
                searchTime={searchResults?.searchTime || ''}
                loading={loading}
                onOpenInApp={handleOpenInApp}
              />
            </div>
          )
        ) : null}
      </main>
      
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchApp />} />
        <Route path="/images" element={<Images />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/news" element={<News />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/advertising" element={<Advertising />} />
        <Route path="/business" element={<Business />} />
        <Route path="/how-search-works" element={<HowSearchWorks />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
  );
}

export default App;