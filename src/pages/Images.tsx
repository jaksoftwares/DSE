import React, { useState } from 'react';
import { Search, Filter, Grid, List, Download, ExternalLink } from 'lucide-react';

interface ImageResult {
  id: string;
  url: string;
  thumbnail: string;
  title: string;
  source: string;
  dimensions: string;
  size: string;
}

const Images: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ImageResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Mock image results for demonstration
  const mockResults: ImageResult[] = [
    {
      id: '1',
      url: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
      thumbnail: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?w=300',
      title: 'Beautiful Mountain Landscape',
      source: 'Pexels',
      dimensions: '1920x1080',
      size: '2.1 MB'
    },
    {
      id: '2',
      url: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg',
      thumbnail: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?w=300',
      title: 'Ocean Waves at Sunset',
      source: 'Pexels',
      dimensions: '1920x1280',
      size: '3.2 MB'
    },
    {
      id: '3',
      url: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg',
      thumbnail: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?w=300',
      title: 'City Skyline at Night',
      source: 'Pexels',
      dimensions: '1920x1080',
      size: '1.8 MB'
    },
    {
      id: '4',
      url: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg',
      thumbnail: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?w=300',
      title: 'Forest Path in Autumn',
      source: 'Pexels',
      dimensions: '1920x1280',
      size: '2.7 MB'
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
                placeholder="Search for images..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Search Images
            </button>
          </form>

          {/* Filters and View Options */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-3 py-1 border border-gray-300 rounded-full hover:bg-gray-50">
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>
              <select className="px-3 py-1 border border-gray-300 rounded-md">
                <option>All sizes</option>
                <option>Large</option>
                <option>Medium</option>
                <option>Small</option>
              </select>
              <select className="px-3 py-1 border border-gray-300 rounded-md">
                <option>All colors</option>
                <option>Color</option>
                <option>Black & white</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-lg animate-pulse" />
            ))}
          </div>
        ) : results.length > 0 ? (
          <div className={viewMode === 'grid' ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4' : 'space-y-4'}>
            {results.map((image) => (
              <div key={image.id} className={`group ${viewMode === 'list' ? 'flex space-x-4 p-4 border rounded-lg' : ''}`}>
                <div className={`relative ${viewMode === 'grid' ? 'aspect-square' : 'w-32 h-32 flex-shrink-0'} overflow-hidden rounded-lg`}>
                  <img
                    src={image.thumbnail}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-200 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex space-x-2">
                      <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
                {viewMode === 'list' && (
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{image.source}</p>
                    <div className="text-xs text-gray-500 space-y-1">
                      <div>{image.dimensions}</div>
                      <div>{image.size}</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-500">
              <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-medium mb-2">Search for images</h3>
              <p>Enter a search term to find images from across the web</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Images;