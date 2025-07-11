import React, { useState } from 'react';
import { Search, Play, Clock, Eye, Filter } from 'lucide-react';

interface VideoResult {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  channel: string;
  uploadDate: string;
  description: string;
}

const Videos: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<VideoResult[]>([]);
  const [loading, setLoading] = useState(false);

  // Mock video results for demonstration
  const mockResults: VideoResult[] = [
    {
      id: '1',
      title: 'How to Build a Modern Web Application',
      thumbnail: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?w=400',
      duration: '15:32',
      views: '125K views',
      channel: 'Tech Academy',
      uploadDate: '2 days ago',
      description: 'Learn how to build modern web applications using the latest technologies and best practices.'
    },
    {
      id: '2',
      title: 'JavaScript ES6 Features Explained',
      thumbnail: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?w=400',
      duration: '22:15',
      views: '89K views',
      channel: 'Code Masters',
      uploadDate: '1 week ago',
      description: 'A comprehensive guide to ES6 features including arrow functions, destructuring, and more.'
    },
    {
      id: '3',
      title: 'React Hooks Tutorial for Beginners',
      thumbnail: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?w=400',
      duration: '18:45',
      views: '203K views',
      channel: 'React Pro',
      uploadDate: '3 days ago',
      description: 'Master React Hooks with practical examples and real-world applications.'
    },
    {
      id: '4',
      title: 'CSS Grid Layout Complete Guide',
      thumbnail: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?w=400',
      duration: '25:18',
      views: '156K views',
      channel: 'Design Hub',
      uploadDate: '5 days ago',
      description: 'Everything you need to know about CSS Grid Layout with practical examples.'
    }
  ];

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setResults(mockResults);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Search Header */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <form onSubmit={handleSearch} className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for videos..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Search Videos
            </button>
          </form>

          {/* Filters */}
          <div className="flex items-center space-x-4 mt-4">
            <button className="flex items-center space-x-2 px-3 py-1 border border-gray-300 rounded-full hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
            <select className="px-3 py-1 border border-gray-300 rounded-md">
              <option>Any duration</option>
              <option>Under 4 minutes</option>
              <option>4-20 minutes</option>
              <option>Over 20 minutes</option>
            </select>
            <select className="px-3 py-1 border border-gray-300 rounded-md">
              <option>Upload date</option>
              <option>Last hour</option>
              <option>Today</option>
              <option>This week</option>
              <option>This month</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        {loading ? (
          <div className="space-y-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex space-x-4">
                <div className="w-80 h-48 bg-gray-200 rounded-lg animate-pulse" />
                <div className="flex-1 space-y-2">
                  <div className="h-6 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        ) : results.length > 0 ? (
          <div className="space-y-6">
            {results.map((video) => (
              <div key={video.id} className="flex space-x-4 group cursor-pointer">
                <div className="relative w-80 h-48 flex-shrink-0">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-200 flex items-center justify-center rounded-lg">
                    <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {video.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-600 mb-2 space-x-4">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{video.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{video.uploadDate}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{video.channel}</p>
                  <p className="text-sm text-gray-700 line-clamp-2">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-500">
              <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-medium mb-2">Search for videos</h3>
              <p>Enter a search term to find videos from across the web</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Videos;