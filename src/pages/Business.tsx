import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building2, TrendingUp, Users, Shield, Zap, BarChart3, Globe, Headphones } from 'lucide-react';

const Business: React.FC = () => {
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
              <h1 className="text-2xl font-medium text-gray-900">DSE for Business</h1>
              <p className="text-gray-600">Enterprise search solutions for your organization</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Power Your Business with <span className="text-blue-600">DSE</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform how your organization finds and uses information with our enterprise-grade 
            search solutions. Built for scale, security, and performance.
          </p>
          <div className="space-x-4">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Request Demo
            </button>
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>

        {/* Business Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">Enterprise Solutions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Enterprise Search API</h3>
              <p className="text-blue-800 mb-6">
                Integrate DSE's powerful search capabilities directly into your applications, 
                websites, and internal systems with our robust API.
              </p>
              <ul className="space-y-2 text-blue-700">
                <li>• RESTful API with comprehensive documentation</li>
                <li>• 99.9% uptime SLA guarantee</li>
                <li>• Custom rate limits and priority support</li>
                <li>• White-label search solutions</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Private Cloud Deployment</h3>
              <p className="text-green-800 mb-6">
                Deploy DSE within your own infrastructure for maximum security and control. 
                Perfect for organizations with strict compliance requirements.
              </p>
              <ul className="space-y-2 text-green-700">
                <li>• On-premises or private cloud deployment</li>
                <li>• Full data sovereignty and control</li>
                <li>• Custom security configurations</li>
                <li>• Dedicated support team</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">Why Enterprises Choose DSE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Scalable Performance</h3>
              <p className="text-gray-600">
                Handle millions of queries per day with consistent sub-second response times.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Security</h3>
              <p className="text-gray-600">
                SOC 2 Type II certified with advanced encryption and access controls.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Analytics</h3>
              <p className="text-gray-600">
                Comprehensive insights into search patterns, user behavior, and performance metrics.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Infrastructure</h3>
              <p className="text-gray-600">
                Distributed across multiple regions for optimal performance worldwide.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Integration</h3>
              <p className="text-gray-600">
                Simple APIs and SDKs for quick integration with existing systems.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Dedicated support team with guaranteed response times for enterprise customers.
              </p>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">E-commerce Platforms</h3>
              <p className="text-gray-700 mb-4">
                Enhance your online store with intelligent product search, recommendations, 
                and content discovery that drives sales and improves user experience.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Product search and filtering</li>
                <li>• Personalized recommendations</li>
                <li>• Inventory-aware results</li>
                <li>• Multi-language support</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Content Management</h3>
              <p className="text-gray-700 mb-4">
                Power your CMS, knowledge base, or documentation site with advanced search 
                capabilities that help users find information quickly.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Full-text search across documents</li>
                <li>• Faceted search and filtering</li>
                <li>• Auto-complete suggestions</li>
                <li>• Search analytics and insights</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Internal Search</h3>
              <p className="text-gray-700 mb-4">
                Improve employee productivity with powerful internal search across all your 
                company's documents, databases, and knowledge repositories.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Cross-platform search</li>
                <li>• Permission-based results</li>
                <li>• Integration with existing tools</li>
                <li>• Advanced security controls</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Application Search</h3>
              <p className="text-gray-700 mb-4">
                Embed search functionality directly into your applications to help users 
                find data, features, and content within your software.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Real-time search results</li>
                <li>• Custom ranking algorithms</li>
                <li>• API-first architecture</li>
                <li>• Flexible data indexing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">Enterprise Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Startup</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$99</div>
              <div className="text-gray-600 mb-6">per month</div>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>Up to 100K queries/month</li>
                <li>Basic API access</li>
                <li>Email support</li>
                <li>Standard SLA</li>
              </ul>
              <button className="w-full px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get Started
              </button>
            </div>

            <div className="border-2 border-blue-600 rounded-2xl p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Growth</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$499</div>
              <div className="text-gray-600 mb-6">per month</div>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>Up to 1M queries/month</li>
                <li>Advanced API features</li>
                <li>Priority support</li>
                <li>99.9% uptime SLA</li>
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
                <li>Unlimited queries</li>
                <li>Custom deployment</li>
                <li>Dedicated support</li>
                <li>Custom SLA</li>
              </ul>
              <button className="w-full px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Alex Chen</h4>
                  <p className="text-gray-600">CTO, TechCorp</p>
                </div>
              </div>
              <p className="text-gray-700">
                "DSE's enterprise API has transformed our internal search capabilities. Our employees 
                can now find information 5x faster, and the integration was seamless."
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  S
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                  <p className="text-gray-600">VP Engineering, DataFlow</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The performance and reliability of DSE's search infrastructure is outstanding. 
                We've processed over 10 million queries without a single issue."
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-semibold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of companies already using DSE to power their search experiences.
          </p>
          <div className="space-x-4">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Request Demo
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;