import React, { useState } from 'react';
import { Search, Clock, ExternalLink, Filter, TrendingUp } from 'lucide-react';

interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  source: string;
  publishedAt: string;
  imageUrl: string;
  category: string;
  url: string;
}

const News: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock news results for demonstration
  const mockResults: NewsArticle[] = [
    {
      id: '1',
      title: 'Revolutionary AI Technology Transforms Healthcare Industry',
      summary: 'New artificial intelligence breakthrough promises to revolutionize medical diagnosis and treatment, offering unprecedented accuracy in detecting diseases.',
      source: 'Tech News Daily',
      publishedAt: '2 hours ago',
      imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?w=400',
      category: 'Technology',
      url: '#'
    },
    {
      id: '2',
      title: 'Global Climate Summit Reaches Historic Agreement',
      summary: 'World leaders unite on ambitious climate action plan, setting new targets for carbon reduction and renewable energy adoption.',
      source: 'Environmental Times',
      publishedAt: '4 hours ago',
      imageUrl: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?w=400',
      category: 'Environment',
      url: '#'
    },
    {
      id: '3',
      title: 'Stock Markets Surge Following Economic Recovery Signs',
      summary: 'Major indices hit record highs as economic indicators show strong recovery momentum across multiple sectors.',
      source: 'Financial Herald',
      publishedAt: '6 hours ago',
      imageUrl: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?w=400',
      category: 'Business',
      url: '#'
    },
    {
      id: '4',
      title: 'Space Mission Successfully Lands on Mars',
      summary: 'Historic space exploration milestone achieved as robotic mission touches down on Martian surface, beginning new phase of planetary research.',
      source: 'Space Explorer',
      publishedAt: '8 hours ago',
      imageUrl: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?w=400',
      category: 'Science',
      url: '#'
    }
  ];

  const categories = ['all', 'Technology', 'Business', 'Science', 'Environment', 'Health', 'Sports', 'Entertainment'];

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

  const filteredResults = selectedCategory === 'all' 
    ? results 
    : results.filter(article => article.category === selectedCategory);

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
                placeholder="Search for news..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Search News
            </button>
          </form>

          {/* Categories */}
          <div className="flex items-center space-x-2 mt-4 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All News' : category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Trending Topics */}
      <div className="max-w-6xl mx-auto px-4 py-4 border-b border-gray-100">
        <div className="flex items-center space-x-2 mb-3">
          <TrendingUp className="w-5 h-5 text-red-500" />
          <h2 className="font-medium text-gray-900">Trending Topics</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {['AI Revolution', 'Climate Change', 'Space Exploration', 'Economic Recovery', 'Healthcare Innovation'].map((topic) => (
            <span key={topic} className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm hover:bg-red-100 cursor-pointer transition-colors">
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        {loading ? (
          <div className="space-y-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex space-x-4 p-4 border rounded-lg">
                <div className="w-48 h-32 bg-gray-200 rounded-lg animate-pulse flex-shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="h-6 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredResults.length > 0 ? (
          <div className="space-y-6">
            {filteredResults.map((article) => (
              <article key={article.id} className="flex space-x-4 p-4 border rounded-lg hover:shadow-md transition-shadow group">
                <div className="w-48 h-32 flex-shrink-0">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">{article.source}</span>
                    <span className="text-sm text-gray-400">•</span>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>{article.publishedAt}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    <a href={article.url} className="flex items-center space-x-2">
                      <span>{article.title}</span>
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{article.summary}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-500">
              <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-medium mb-2">Search for news</h3>
              <p>Enter a search term to find the latest news articles</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;