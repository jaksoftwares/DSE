import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Mail, Calendar, MapPin, Edit3, Camera, Shield, Activity } from 'lucide-react';

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinDate: 'January 2024',
    location: 'San Francisco, CA',
    bio: 'Technology enthusiast and search power user.',
    avatar: '/ddslogo1.jpg'
  });

  const [stats] = useState({
    totalSearches: 1247,
    savedResults: 89,
    averageSearchesPerDay: 12,
    favoriteCategory: 'Technology'
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to a backend
  };

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
              <h1 className="text-2xl font-medium text-gray-900">Profile</h1>
              <p className="text-gray-600">Manage your DSE account and preferences</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Profile Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={profile.avatar}
                    alt="Profile"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <button className="absolute bottom-0 right-0 p-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                    <Camera className="w-3 h-3" />
                  </button>
                </div>
                <div>
                  {isEditing ? (
                    <div className="space-y-2">
                      <input
                        type="text"
                        value={profile.name}
                        onChange={(e) => setProfile({...profile, name: e.target.value})}
                        className="text-2xl font-semibold text-gray-900 border-b border-gray-300 focus:border-blue-500 outline-none"
                      />
                      <input
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({...profile, email: e.target.value})}
                        className="text-gray-600 border-b border-gray-300 focus:border-blue-500 outline-none"
                      />
                    </div>
                  ) : (
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-900">{profile.name}</h2>
                      <p className="text-gray-600">{profile.email}</p>
                    </div>
                  )}
                </div>
              </div>
              <button
                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <Edit3 className="w-4 h-4" />
                <span>{isEditing ? 'Save' : 'Edit Profile'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Member since</p>
                    <p className="text-gray-900">{profile.joinDate}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profile.location}
                        onChange={(e) => setProfile({...profile, location: e.target.value})}
                        className="text-gray-900 border-b border-gray-300 focus:border-blue-500 outline-none"
                      />
                    ) : (
                      <p className="text-gray-900">{profile.location}</p>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Bio</p>
                {isEditing ? (
                  <textarea
                    value={profile.bio}
                    onChange={(e) => setProfile({...profile, bio: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 outline-none resize-none"
                    rows={3}
                  />
                ) : (
                  <p className="text-gray-900">{profile.bio}</p>
                )}
              </div>
            </div>
          </div>

          {/* Search Statistics */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Activity className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-semibold text-gray-900">Search Statistics</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{stats.totalSearches.toLocaleString()}</div>
                <div className="text-sm text-gray-500">Total Searches</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">{stats.savedResults}</div>
                <div className="text-sm text-gray-500">Saved Results</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">{stats.averageSearchesPerDay}</div>
                <div className="text-sm text-gray-500">Daily Average</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-orange-600">{stats.favoriteCategory}</div>
                <div className="text-sm text-gray-500">Top Category</div>
              </div>
            </div>
          </div>

          {/* Account Security */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold text-gray-900">Account Security</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Password</h4>
                  <p className="text-sm text-gray-500">Last changed 3 months ago</p>
                </div>
                <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors">
                  Change Password
                </button>
              </div>
              
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Two-Factor Authentication</h4>
                  <p className="text-sm text-gray-500">Add an extra layer of security</p>
                </div>
                <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                  Enable 2FA
                </button>
              </div>
              
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Login Sessions</h4>
                  <p className="text-sm text-gray-500">Manage your active sessions</p>
                </div>
                <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                  View Sessions
                </button>
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-white rounded-lg shadow-sm border border-red-200 p-6">
            <h3 className="text-xl font-semibold text-red-600 mb-4">Danger Zone</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg bg-red-50">
                <div>
                  <h4 className="font-medium text-red-900">Delete Account</h4>
                  <p className="text-sm text-red-700">Permanently delete your account and all data</p>
                </div>
                <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;