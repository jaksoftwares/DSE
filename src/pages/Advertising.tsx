import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, TrendingUp, Users, BarChart3, Shield, Zap } from 'lucide-react';

const Advertising: React.FC = () => {
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
              <h1 className="text-2xl font-medium text-gray-900">DSE Advertising</h1>
              <p className="text-gray-600">Reach your audience with targeted search advertising</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Advertise on <span className="text-blue-600">DSE</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Connect with millions of users actively searching for products and services like yours. 
            Our advertising platform delivers targeted, relevant ads that drive real results.
          </p>
          <div className="space-x-4">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Why Advertise on DSE */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">Why Choose DSE Advertising?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Precise Targeting</h3>
              <p className="text-gray-600">
                Reach users based on search intent, demographics, location, and behavior patterns.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">High Performance</h3>
              <p className="text-gray-600">
                Our ads consistently deliver higher click-through rates and conversion rates.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Audience</h3>
              <p className="text-gray-600">
                Connect with engaged users who are actively searching for solutions.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Detailed Analytics</h3>
              <p className="text-gray-600">
                Comprehensive reporting and insights to optimize your campaigns.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Brand Safety</h3>
              <p className="text-gray-600">
                Your ads appear in a safe, professional environment alongside quality content.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Setup</h3>
              <p className="text-gray-600">
                Get your campaigns running in minutes with our intuitive ad platform.
              </p>
            </div>
          </div>
        </div>

        {/* Ad Formats */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">Advertising Formats</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Search Ads</h3>
              <p className="text-blue-800 mb-6">
                Text-based ads that appear at the top of search results, perfectly timed when users 
                are looking for your products or services.
              </p>
              <ul className="space-y-2 text-blue-700">
                <li>• Appear above organic search results</li>
                <li>• Pay only when users click your ad</li>
                <li>• Highly targeted based on search keywords</li>
                <li>• Customizable ad copy and extensions</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Display Ads</h3>
              <p className="text-green-800 mb-6">
                Visual banner ads that appear on our partner network, perfect for brand awareness 
                and retargeting campaigns.
              </p>
              <ul className="space-y-2 text-green-700">
                <li>• Rich media and interactive formats</li>
                <li>• Extensive reach across partner sites</li>
                <li>• Advanced audience targeting options</li>
                <li>• Multiple creative sizes and formats</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Starter</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$0.50</div>
              <div className="text-gray-600 mb-6">per click</div>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>Search ads only</li>
                <li>Basic targeting</li>
                <li>Standard reporting</li>
                <li>Email support</li>
              </ul>
              <button className="w-full px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get Started
              </button>
            </div>

            <div className="border-2 border-blue-600 rounded-2xl p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$0.35</div>
              <div className="text-gray-600 mb-6">per click</div>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>Search & display ads</li>
                <li>Advanced targeting</li>
                <li>Detailed analytics</li>
                <li>Priority support</li>
              </ul>
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>

            <div className="border border-gray-200 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">Custom</div>
              <div className="text-gray-600 mb-6">pricing</div>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>All ad formats</li>
                <li>Custom targeting</li>
                <li>Dedicated account manager</li>
                <li>24/7 phone support</li>
              </ul>
              <button className="w-full px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  T
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">TechStart Inc.</h4>
                  <p className="text-gray-600">Software Company</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "DSE advertising helped us increase our lead generation by 300% while reducing our 
                cost per acquisition by 45%. The targeting options are incredibly precise."
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">300%</div>
                  <div className="text-sm text-gray-600">Lead Increase</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">45%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  E
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">EcoShop</h4>
                  <p className="text-gray-600">E-commerce</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The ROI from DSE ads is outstanding. We've seen a 250% increase in online sales 
                and our brand awareness has grown significantly in our target markets."
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">250%</div>
                  <div className="text-sm text-gray-600">Sales Increase</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">4.2x</div>
                  <div className="text-sm text-gray-600">Return on Ad Spend</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-semibold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of businesses already advertising on DSE. Start your first campaign today.
          </p>
          <div className="space-x-4">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Advertising
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertising;