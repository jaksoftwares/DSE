import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, Database, Zap, Filter, TrendingUp, Shield, Globe } from 'lucide-react';

const HowSearchWorks: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link to="/" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Link>
            <div>
              <h1 className="text-2xl font-medium text-gray-900">How Search Works</h1>
              <p className="text-gray-600">Understanding DSE's search technology</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            How <span className="text-blue-600">DSE</span> Search Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the technology and algorithms that power DSE's comprehensive search experience. 
            From query processing to result ranking, learn how we deliver the most relevant results.
          </p>
        </div>

        {/* Search Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">The Search Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Query Processing</h3>
              <p className="text-gray-600 text-sm">
                Your search query is analyzed, cleaned, and optimized for maximum relevance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Multi-Source Search</h3>
              <p className="text-gray-600 text-sm">
                We simultaneously search across multiple engines including DuckDuckGo and Bing.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Result Processing</h3>
              <p className="text-gray-600 text-sm">
                Results are filtered, deduplicated, and processed for quality and relevance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Ranking & Display</h3>
              <p className="text-gray-600 text-sm">
                Results are ranked using our proprietary algorithm and displayed to you.
              </p>
            </div>
          </div>
        </div>

        {/* Search Levels Explained */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">Search Levels Explained</h2>
          <div className="space-y-8">
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-900 mb-3">Level 1 - Quick Search</h3>
                  <p className="text-blue-800 mb-4">
                    Designed for immediate answers and quick lookups. Perfect when you need fast results 
                    for simple queries.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <strong className="text-blue-900">Sources:</strong>
                      <p className="text-blue-700">DuckDuckGo (30 results), Bing (10 results)</p>
                    </div>
                    <div>
                      <strong className="text-blue-900">Speed:</strong>
                      <p className="text-blue-700">~0.5-1 seconds</p>
                    </div>
                    <div>
                      <strong className="text-blue-900">Best For:</strong>
                      <p className="text-blue-700">Quick facts, definitions, simple queries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl border border-green-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-green-900 mb-3">Level 2 - Standard Search</h3>
                  <p className="text-green-800 mb-4">
                    Balanced approach providing good coverage for most search needs. The default choice 
                    for everyday searches.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <strong className="text-green-900">Sources:</strong>
                      <p className="text-green-700">DuckDuckGo (50 results), Bing (20 results)</p>
                    </div>
                    <div>
                      <strong className="text-green-900">Speed:</strong>
                      <p className="text-green-700">~1-2 seconds</p>
                    </div>
                    <div>
                      <strong className="text-green-900">Best For:</strong>
                      <p className="text-green-700">General searches, shopping, news</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-8 rounded-2xl border border-orange-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-orange-900 mb-3">Level 3 - Deep Search</h3>
                  <p className="text-orange-800 mb-4">
                    Comprehensive search across more sources and pages. Ideal for research and 
                    when you need thorough coverage.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <strong className="text-orange-900">Sources:</strong>
                      <p className="text-orange-700">DuckDuckGo (100 results), Bing (50 results)</p>
                    </div>
                    <div>
                      <strong className="text-orange-900">Speed:</strong>
                      <p className="text-orange-700">~2-4 seconds</p>
                    </div>
                    <div>
                      <strong className="text-orange-900">Best For:</strong>
                      <p className="text-orange-700">Research, detailed information, comparisons</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-8 rounded-2xl border border-purple-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-purple-900 mb-3">Level 4 - Comprehensive Search</h3>
                  <p className="text-purple-800 mb-4">
                    Maximum depth search for the most thorough results possible. Perfect for academic 
                    research and professional investigations.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <strong className="text-purple-900">Sources:</strong>
                      <p className="text-purple-700">DuckDuckGo (200+ results), Bing (100+ results)</p>
                    </div>
                    <div>
                      <strong className="text-purple-900">Speed:</strong>
                      <p className="text-purple-700">~4-8 seconds</p>
                    </div>
                    <div>
                      <strong className="text-purple-900">Best For:</strong>
                      <p className="text-purple-700">Academic research, professional analysis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">Our Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">High-Performance Infrastructure</h3>
              <p className="text-gray-600">
                Distributed servers worldwide ensure fast response times regardless of your location.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Algorithms</h3>
              <p className="text-gray-600">
                Machine learning models continuously improve result relevance and ranking accuracy.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Privacy Protection</h3>
              <p className="text-gray-600">
                Your searches are encrypted and never stored or tracked, ensuring complete privacy.
              </p>
            </div>
          </div>
        </div>

        {/* Quality Measures */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">Quality Assurance</h2>
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Result Quality</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Duplicate removal across all sources</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Spam and low-quality content filtering</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Relevance scoring based on multiple factors</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Fresh content prioritization</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Optimization</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Parallel processing of multiple search engines</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Intelligent caching for faster results</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Load balancing across global servers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Continuous performance monitoring</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Future Developments */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">What's Next</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered Search</h3>
              <p className="text-gray-700 mb-4">
                We're developing advanced AI models to better understand search intent and provide 
                more contextual, personalized results.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Natural language query processing</li>
                <li>• Semantic search capabilities</li>
                <li>• Personalized result ranking</li>
                <li>• Voice search optimization</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expanded Coverage</h3>
              <p className="text-gray-700 mb-4">
                We're continuously adding new search sources and improving our coverage of 
                specialized content areas.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Academic and research databases</li>
                <li>• Real-time social media content</li>
                <li>• Specialized industry sources</li>
                <li>• Multilingual search expansion</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-semibold mb-4">Experience the Difference</h2>
          <p className="text-xl mb-8 opacity-90">
            Try DSE's advanced search technology and see how we deliver better results, faster.
          </p>
          <Link 
            to="/"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Searching
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowSearchWorks;