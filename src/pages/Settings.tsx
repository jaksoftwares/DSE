import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Globe, Shield, Search, Bell, Palette, Monitor } from 'lucide-react';

const Settings: React.FC = () => {
  const [searchSettings, setSearchSettings] = useState({
    safeSearch: 'moderate',
    resultsPerPage: 10,
    openLinksInNewTab: true,
    autoComplete: true,
    searchHistory: true
  });

  const [privacySettings, setPrivacySettings] = useState({
    saveSearchHistory: true,
    personalizedResults: true,
    locationServices: false,
    adPersonalization: false
  });

  const [appearanceSettings, setAppearanceSettings] = useState({
    theme: 'light',
    language: 'en',
    region: 'US'
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link to="/" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Link>
            <div>
              <h1 className="text-2xl font-medium text-gray-900">Settings</h1>
              <p className="text-gray-600">Customize your DSE search experience</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Search Settings */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Search className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900">Search Settings</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  SafeSearch
                </label>
                <select
                  value={searchSettings.safeSearch}
                  onChange={(e) => setSearchSettings({...searchSettings, safeSearch: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="strict">Strict - Filter explicit content</option>
                  <option value="moderate">Moderate - Filter most explicit content</option>
                  <option value="off">Off - Don't filter results</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Results per page
                </label>
                <select
                  value={searchSettings.resultsPerPage}
                  onChange={(e) => setSearchSettings({...searchSettings, resultsPerPage: Number(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value={10}>10 results</option>
                  <option value={20}>20 results</option>
                  <option value={50}>50 results</option>
                  <option value={100}>100 results</option>
                </select>
              </div>

              <div className="space-y-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={searchSettings.openLinksInNewTab}
                    onChange={(e) => setSearchSettings({...searchSettings, openLinksInNewTab: e.target.checked})}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Open search results in new tab</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={searchSettings.autoComplete}
                    onChange={(e) => setSearchSettings({...searchSettings, autoComplete: e.target.checked})}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Enable autocomplete suggestions</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={searchSettings.searchHistory}
                    onChange={(e) => setSearchSettings({...searchSettings, searchHistory: e.target.checked})}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Save search history</span>
                </label>
              </div>
            </div>
          </div>

          {/* Privacy Settings */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-6 h-6 text-green-600" />
              <h2 className="text-xl font-semibold text-gray-900">Privacy & Security</h2>
            </div>
            
            <div className="space-y-4">
              <label className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium text-gray-700">Save search history</span>
                  <p className="text-xs text-gray-500">Store your searches to improve recommendations</p>
                </div>
                <input
                  type="checkbox"
                  checked={privacySettings.saveSearchHistory}
                  onChange={(e) => setPrivacySettings({...privacySettings, saveSearchHistory: e.target.checked})}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </label>

              <label className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium text-gray-700">Personalized results</span>
                  <p className="text-xs text-gray-500">Use your activity to personalize search results</p>
                </div>
                <input
                  type="checkbox"
                  checked={privacySettings.personalizedResults}
                  onChange={(e) => setPrivacySettings({...privacySettings, personalizedResults: e.target.checked})}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </label>

              <label className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium text-gray-700">Location services</span>
                  <p className="text-xs text-gray-500">Use your location for local search results</p>
                </div>
                <input
                  type="checkbox"
                  checked={privacySettings.locationServices}
                  onChange={(e) => setPrivacySettings({...privacySettings, locationServices: e.target.checked})}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </label>

              <label className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium text-gray-700">Ad personalization</span>
                  <p className="text-xs text-gray-500">Show ads based on your interests</p>
                </div>
                <input
                  type="checkbox"
                  checked={privacySettings.adPersonalization}
                  onChange={(e) => setPrivacySettings({...privacySettings, adPersonalization: e.target.checked})}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </label>
            </div>
          </div>

          {/* Appearance Settings */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Palette className="w-6 h-6 text-purple-600" />
              <h2 className="text-xl font-semibold text-gray-900">Appearance</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Theme
                </label>
                <select
                  value={appearanceSettings.theme}
                  onChange={(e) => setAppearanceSettings({...appearanceSettings, theme: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="auto">Auto (system preference)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Language
                </label>
                <select
                  value={appearanceSettings.language}
                  onChange={(e) => setAppearanceSettings({...appearanceSettings, language: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                  <option value="zh">中文</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Region
                </label>
                <select
                  value={appearanceSettings.region}
                  onChange={(e) => setAppearanceSettings({...appearanceSettings, region: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="CA">Canada</option>
                  <option value="AU">Australia</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                </select>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;