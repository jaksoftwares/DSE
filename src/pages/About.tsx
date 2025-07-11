import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, Globe, Shield, Zap, Users, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
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
              <h1 className="text-2xl font-medium text-gray-900">About DSE</h1>
              <p className="text-gray-600">Learn about Dovepeak Search Engine</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <img
            src="/ddslogo1.jpg"
            alt="DSE Logo"
            className="w-24 h-24 mx-auto mb-6 rounded-lg shadow-lg"
          />
          <h1 className="text-5xl font-light text-gray-800 mb-4">
            <span className="text-blue-500">D</span>
            <span className="text-red-500">S</span>
            <span className="text-yellow-500">E</span>
          </h1>
          <h2 className="text-2xl text-gray-600 mb-6">Dovepeak Search Engine</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            DSE is a next-generation search engine that aggregates results from multiple sources 
            to provide you with the most comprehensive and relevant search experience possible.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-16">
          <div className="text-center">
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              To democratize access to information by providing a powerful, privacy-focused search engine 
              that delivers comprehensive results from multiple sources, empowering users to find exactly 
              what they're looking for, faster and more efficiently than ever before.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-gray-900 text-center mb-12">Why Choose DSE?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Multi-Engine Search</h4>
              <p className="text-gray-600">
                Aggregates results from DuckDuckGo, Bing, and other sources for comprehensive coverage.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Privacy First</h4>
              <p className="text-gray-600">
                Your searches are private. We don't track, store, or sell your personal information.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Lightning Fast</h4>
              <p className="text-gray-600">
                Optimized algorithms deliver results in milliseconds, not seconds.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Global Reach</h4>
              <p className="text-gray-600">
                Search content from around the world in multiple languages and regions.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Quality Results</h4>
              <p className="text-gray-600">
                Advanced ranking algorithms ensure the most relevant results appear first.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">User Focused</h4>
              <p className="text-gray-600">
                Built by users, for users. Every feature is designed with your needs in mind.
              </p>
            </div>
          </div>
        </div>

        {/* Search Levels */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-gray-900 text-center mb-12">Search Levels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="text-lg font-semibold text-blue-900 mb-2">Level 1 - Quick</h4>
              <p className="text-blue-700 text-sm">
                Fast searches for immediate answers. Perfect for quick lookups and basic queries.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h4 className="text-lg font-semibold text-green-900 mb-2">Level 2 - Standard</h4>
              <p className="text-green-700 text-sm">
                Balanced search with good coverage. Ideal for most everyday search needs.
              </p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h4 className="text-lg font-semibold text-orange-900 mb-2">Level 3 - Deep</h4>
              <p className="text-orange-700 text-sm">
                Comprehensive search across more sources. Great for research and detailed queries.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h4 className="text-lg font-semibold text-purple-900 mb-2">Level 4 - Comprehensive</h4>
              <p className="text-purple-700 text-sm">
                Maximum depth search. Perfect for academic research and thorough investigations.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-gray-900 text-center mb-12">Our Story</h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                DSE was born from a simple observation: existing search engines often miss valuable 
                information scattered across different platforms. We believed there had to be a better way 
                to search the web—one that could aggregate the best results from multiple sources while 
                respecting user privacy.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our team of passionate developers and search enthusiasts worked tirelessly to create 
                a search engine that doesn't just find information, but finds the right information. 
                We've built DSE to be fast, comprehensive, and completely focused on delivering the 
                best possible search experience.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, DSE serves thousands of users worldwide, helping them discover information 
                more efficiently than ever before. We're constantly improving our algorithms and 
                adding new features to make search even better.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-gray-900 text-center mb-12">DSE by the Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1M+</div>
              <div className="text-gray-600">Searches Performed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">0.3s</div>
              <div className="text-gray-600">Average Response Time</div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12">
          <h3 className="text-3xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-xl mb-8 opacity-90">
            Have questions, feedback, or suggestions? We'd love to hear from you.
          </p>
          <div className="space-x-4">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Join Our Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;