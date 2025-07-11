import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, Server, Globe, UserCheck } from 'lucide-react';

const Privacy: React.FC = () => {
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
              <h1 className="text-2xl font-medium text-gray-900">Privacy Policy</h1>
              <p className="text-gray-600">How we protect your privacy and data</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Privacy Matters</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            At DSE, we believe privacy is a fundamental right. We've built our search engine 
            with privacy at its core, ensuring your searches remain private and secure.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: January 15, 2024</p>
        </div>

        {/* Privacy Principles */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Our Privacy Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4 p-6 bg-green-50 rounded-lg">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-900 mb-2">No Tracking</h3>
                <p className="text-green-800">
                  We don't track your searches, build profiles, or follow you around the web.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Encrypted Searches</h3>
                <p className="text-blue-800">
                  All searches are encrypted in transit and we don't store your search history.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-purple-50 rounded-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Server className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-900 mb-2">No Data Selling</h3>
                <p className="text-purple-800">
                  We never sell your data to third parties or use it for advertising purposes.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-orange-50 rounded-lg">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-orange-900 mb-2">Anonymous Searches</h3>
                <p className="text-orange-800">
                  Your searches are completely anonymous - we can't identify who you are.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What We Collect */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">What Information We Collect</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Search Queries (Temporarily)</h3>
              <p className="text-gray-700 mb-3">
                We temporarily process your search queries to provide results, but we don't store them 
                or associate them with your identity.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Queries are processed in memory only</li>
                <li>No permanent storage of search terms</li>
                <li>No connection to personal identifiers</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Information</h3>
              <p className="text-gray-700 mb-3">
                We collect minimal technical information necessary to provide our service and ensure security.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>IP addresses (anonymized after processing)</li>
                <li>Browser type and version (for compatibility)</li>
                <li>General location (country/region only)</li>
                <li>Timestamp of requests (for rate limiting)</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Optional Account Information</h3>
              <p className="text-gray-700 mb-3">
                If you choose to create an account, we collect only the information you provide.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Email address (for account access)</li>
                <li>Username (chosen by you)</li>
                <li>Preferences and settings</li>
                <li>Account creation date</li>
              </ul>
            </div>
          </div>
        </div>

        {/* What We Don't Collect */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">What We Don't Collect</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <ul className="space-y-3 text-red-800">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                Personal identifying information (unless you create an account)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                Search history or query logs
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                Browsing behavior outside of DSE
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                Device fingerprints or unique identifiers
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                Social media profiles or connections
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                Financial or payment information
              </li>
            </ul>
          </div>
        </div>

        {/* How We Use Information */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">How We Use Information</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Provision</h3>
              <p className="text-gray-700">
                We use the minimal information we collect solely to provide search results and 
                maintain service quality. This includes processing queries, preventing abuse, 
                and ensuring system security.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Improvement</h3>
              <p className="text-gray-700">
                We analyze aggregated, anonymous usage patterns to improve our search algorithms 
                and service performance. This data cannot be traced back to individual users.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Legal Compliance</h3>
              <p className="text-gray-700">
                We may process information as required by law, but we design our systems to 
                minimize the data available for such requests.
              </p>
            </div>
          </div>
        </div>

        {/* Data Sharing */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Data Sharing and Third Parties</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">Our Commitment</h3>
            <p className="text-yellow-800">
              We do not sell, rent, or share your personal information with third parties for 
              marketing purposes. Period.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Search Engine Partners</h4>
              <p className="text-gray-700">
                We query external search engines (DuckDuckGo, Bing) to provide results. These 
                queries are made anonymously and don't include your personal information.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Service Providers</h4>
              <p className="text-gray-700">
                We work with trusted service providers for hosting and infrastructure. These 
                providers are contractually bound to protect your privacy and can only access 
                data necessary for service provision.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Legal Requirements</h4>
              <p className="text-gray-700">
                We may disclose information if required by law, but our privacy-first design 
                means there's minimal data to disclose.
              </p>
            </div>
          </div>
        </div>

        {/* Your Rights */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Your Privacy Rights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <UserCheck className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Access & Control</h3>
              </div>
              <p className="text-gray-700">
                You have the right to access, update, or delete any account information you've 
                provided to us.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Shield className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Data Portability</h3>
              </div>
              <p className="text-gray-700">
                You can export your account data at any time through your account settings.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Lock className="w-6 h-6 text-purple-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Right to Deletion</h3>
              </div>
              <p className="text-gray-700">
                You can delete your account and all associated data at any time.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Eye className="w-6 h-6 text-orange-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Transparency</h3>
              </div>
              <p className="text-gray-700">
                We provide clear information about our data practices and will notify you of 
                any changes.
              </p>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Security Measures</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <ul className="space-y-3 text-blue-800">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>End-to-end encryption for all communications</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Regular security audits and penetration testing</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Secure data centers with physical access controls</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Employee access controls and privacy training</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Incident response procedures and breach notification</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Us</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              If you have questions about this privacy policy or our privacy practices, 
              please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong> privacy@dse.com</p>
              <p><strong>Address:</strong> DSE Privacy Team, 123 Privacy Street, San Francisco, CA 94105</p>
              <p><strong>Response Time:</strong> We respond to privacy inquiries within 48 hours</p>
            </div>
          </div>
        </div>

        {/* Updates */}
        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Policy Updates</h2>
          <p className="text-gray-700 mb-4">
            We may update this privacy policy from time to time. When we do, we will:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Post the updated policy on this page</li>
            <li>Update the "Last updated" date at the top</li>
            <li>Notify users of significant changes via email (if you have an account)</li>
            <li>Provide a summary of changes in our changelog</li>
          </ul>
          <p className="text-gray-600 text-sm">
            Your continued use of DSE after policy updates constitutes acceptance of the new terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;