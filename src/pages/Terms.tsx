import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Scale, Shield, AlertTriangle } from 'lucide-react';

const Terms: React.FC = () => {
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
              <h1 className="text-2xl font-medium text-gray-900">Terms of Service</h1>
              <p className="text-gray-600">Legal terms and conditions for using DSE</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            These terms govern your use of DSE (Dovepeak Search Engine) and our services. 
            Please read them carefully.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: January 15, 2024</p>
        </div>

        {/* Acceptance of Terms */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">1. Acceptance of Terms</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-blue-800 mb-4">
              By accessing or using DSE, you agree to be bound by these Terms of Service and 
              our Privacy Policy. If you do not agree to these terms, please do not use our service.
            </p>
            <ul className="list-disc list-inside text-blue-700 space-y-2">
              <li>These terms apply to all users of DSE</li>
              <li>You must be at least 13 years old to use our service</li>
              <li>Additional terms may apply to specific features or services</li>
            </ul>
          </div>
        </div>

        {/* Description of Service */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">2. Description of Service</h2>
          <p className="text-gray-700 mb-4">
            DSE is a search engine that aggregates results from multiple sources to provide 
            comprehensive search results. Our service includes:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Core Search</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Web search across multiple engines</li>
                <li>• Multiple search depth levels</li>
                <li>• Real-time result aggregation</li>
                <li>• Result deduplication and ranking</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Additional Features</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Image, video, news, and maps search</li>
                <li>• Voice search capabilities</li>
                <li>• User accounts and preferences</li>
                <li>• API access for developers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* User Responsibilities */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">3. User Responsibilities</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Acceptable Use</h3>
              <p className="text-gray-700 mb-3">You agree to use DSE only for lawful purposes and in accordance with these terms.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Respect intellectual property rights</li>
                <li>Do not attempt to circumvent security measures</li>
                <li>Use the service for personal or business purposes only</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Prohibited Activities</h3>
              <p className="text-gray-700 mb-3">The following activities are strictly prohibited:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Automated scraping or data mining without permission</li>
                <li>Attempting to overload or disrupt our servers</li>
                <li>Using the service for illegal activities</li>
                <li>Violating others' privacy or rights</li>
                <li>Distributing malware or harmful content</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Account Terms */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">4. Account Terms</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Creation</h3>
            <p className="text-gray-700 mb-4">
              While DSE can be used without an account, creating one provides additional features:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Personalized search preferences</li>
              <li>Search history (if enabled)</li>
              <li>API access for developers</li>
              <li>Priority customer support</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Security</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>You are responsible for maintaining account security</li>
              <li>Use a strong, unique password</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>You may delete your account at any time</li>
            </ul>
          </div>
        </div>

        {/* Privacy and Data */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">5. Privacy and Data</h2>
          <div className="flex items-start space-x-4 p-6 bg-green-50 rounded-lg">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-900 mb-2">Privacy First</h3>
              <p className="text-green-800 mb-3">
                Your privacy is fundamental to our service. Please review our Privacy Policy 
                for detailed information about how we handle your data.
              </p>
              <ul className="list-disc list-inside text-green-700 space-y-1">
                <li>We don't track your searches</li>
                <li>No personal data is sold to third parties</li>
                <li>You control your account data</li>
                <li>Transparent data practices</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Intellectual Property */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">6. Intellectual Property</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">DSE Content</h3>
              <p className="text-gray-700">
                All content, features, and functionality of DSE are owned by us and are protected 
                by copyright, trademark, and other intellectual property laws.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Search Results</h3>
              <p className="text-gray-700">
                Search results are aggregated from third-party sources. We do not claim ownership 
                of the content in search results, which remains the property of the original creators.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">User Content</h3>
              <p className="text-gray-700">
                Any content you submit to DSE (such as feedback or support requests) may be used 
                by us to improve our services, while respecting your privacy rights.
              </p>
            </div>
          </div>
        </div>

        {/* Service Availability */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">7. Service Availability</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">Service Disclaimer</h3>
                <p className="text-yellow-800 mb-3">
                  While we strive to provide reliable service, DSE is provided "as is" without warranties:
                </p>
                <ul className="list-disc list-inside text-yellow-700 space-y-1">
                  <li>Service may be temporarily unavailable for maintenance</li>
                  <li>Search results depend on third-party sources</li>
                  <li>We cannot guarantee 100% uptime</li>
                  <li>Features may change or be discontinued</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Limitation of Liability */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">8. Limitation of Liability</h2>
          <div className="border border-gray-200 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by law, DSE and its operators shall not be liable for:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of data, profits, or business opportunities</li>
              <li>Damages resulting from third-party content or services</li>
              <li>Service interruptions or technical issues</li>
            </ul>
          </div>
        </div>

        {/* Termination */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">9. Termination</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">By You</h3>
              <p className="text-gray-600 text-sm mb-2">
                You may stop using DSE at any time and delete your account if you have one.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• No cancellation fees</li>
                <li>• Data deletion upon request</li>
                <li>• Immediate effect</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">By Us</h3>
              <p className="text-gray-600 text-sm mb-2">
                We may suspend or terminate access for violations of these terms.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Notice when possible</li>
                <li>• Data preservation period</li>
                <li>• Appeal process available</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Changes to Terms */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">10. Changes to Terms</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              We may update these terms from time to time. When we do, we will:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Post the updated terms on this page</li>
              <li>Update the "Last updated" date</li>
              <li>Notify users of significant changes</li>
              <li>Provide a reasonable notice period</li>
            </ul>
            <p className="text-gray-600 text-sm">
              Your continued use of DSE after changes constitutes acceptance of the new terms.
            </p>
          </div>
        </div>

        {/* Governing Law */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">11. Governing Law</h2>
          <div className="flex items-start space-x-4 p-6 border border-gray-200 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Scale className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-gray-700 mb-2">
                These terms are governed by the laws of the State of California, United States, 
                without regard to conflict of law principles.
              </p>
              <p className="text-gray-600 text-sm">
                Any disputes will be resolved through binding arbitration in San Francisco, CA, 
                except where prohibited by law.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">12. Contact Information</h2>
          <div className="bg-blue-50 rounded-lg p-6">
            <p className="text-blue-800 mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-blue-700">
              <p><strong>Email:</strong> legal@dse.com</p>
              <p><strong>Address:</strong> DSE Legal Team, 123 Search Street, San Francisco, CA 94105</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Severability */}
        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Severability</h2>
          <p className="text-gray-700 mb-4">
            If any provision of these terms is found to be unenforceable, the remaining 
            provisions will continue in full force and effect.
          </p>
          <p className="text-gray-600 text-sm">
            These terms constitute the entire agreement between you and DSE regarding 
            the use of our service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;