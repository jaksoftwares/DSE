import React, { useState } from 'react';
import { Search, MapPin, Navigation, Phone, Clock, Star } from 'lucide-react';

interface MapLocation {
  id: string;
  name: string;
  address: string;
  phone?: string;
  rating: number;
  reviews: number;
  category: string;
  hours: string;
  distance: string;
  imageUrl: string;
}

const Maps: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<MapLocation[]>([]);
  const [loading, setLoading] = useState(false);

  // Mock location results for demonstration
  const mockResults: MapLocation[] = [
    {
      id: '1',
      name: 'Central Coffee House',
      address: '123 Main Street, Downtown',
      phone: '(555) 123-4567',
      rating: 4.5,
      reviews: 234,
      category: 'Coffee Shop',
      hours: 'Open until 9:00 PM',
      distance: '0.2 miles',
      imageUrl: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?w=400'
    },
    {
      id: '2',
      name: 'Tech Hub Coworking',
      address: '456 Innovation Drive, Tech District',
      phone: '(555) 987-6543',
      rating: 4.8,
      reviews: 89,
      category: 'Coworking Space',
      hours: 'Open 24 hours',
      distance: '0.5 miles',
      imageUrl: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?w=400'
    },
    {
      id: '3',
      name: 'Green Park Restaurant',
      address: '789 Park Avenue, Midtown',
      phone: '(555) 456-7890',
      rating: 4.3,
      reviews: 456,
      category: 'Restaurant',
      hours: 'Closes at 10:00 PM',
      distance: '0.8 miles',
      imageUrl: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?w=400'
    },
    {
      id: '4',
      name: 'City Fitness Center',
      address: '321 Health Street, Sports Complex',
      phone: '(555) 321-0987',
      rating: 4.6,
      reviews: 178,
      category: 'Gym',
      hours: 'Open until 11:00 PM',
      distance: '1.2 miles',
      imageUrl: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?w=400'
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

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
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
                placeholder="Search for places..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Search Maps
            </button>
          </form>

          {/* Quick Categories */}
          <div className="flex items-center space-x-2 mt-4 overflow-x-auto">
            {['Restaurants', 'Coffee', 'Gas Stations', 'Hotels', 'Shopping', 'Hospitals', 'Banks', 'Gyms'].map((category) => (
              <button
                key={category}
                onClick={() => setQuery(category)}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full whitespace-nowrap hover:bg-gray-200 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Map Area */}
        <div className="w-1/2 h-screen bg-gray-100 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-medium mb-2">Interactive Map</h3>
              <p>Map view would be integrated here</p>
              <p className="text-sm mt-2">Using services like Google Maps API or Mapbox</p>
            </div>
          </div>
          
          {/* Map Controls */}
          <div className="absolute top-4 right-4 space-y-2">
            <button className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Navigation className="w-5 h-5" />
            </button>
            <button className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <MapPin className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Results Panel */}
        <div className="w-1/2 h-screen overflow-y-auto">
          <div className="p-4">
            {loading ? (
              <div className="space-y-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex space-x-4 p-4 border rounded-lg">
                    <div className="w-20 h-20 bg-gray-200 rounded-lg animate-pulse flex-shrink-0" />
                    <div className="flex-1 space-y-2">
                      <div className="h-5 bg-gray-200 rounded animate-pulse" />
                      <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
                      <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            ) : results.length > 0 ? (
              <div className="space-y-4">
                <div className="mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {results.length} places found
                  </h2>
                </div>
                {results.map((location) => (
                  <div key={location.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex space-x-4">
                      <img
                        src={location.imageUrl}
                        alt={location.name}
                        className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{location.name}</h3>
                        <div className="flex items-center space-x-1 mb-2">
                          {renderStars(location.rating)}
                          <span className="text-sm text-gray-600 ml-1">
                            {location.rating} ({location.reviews} reviews)
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{location.category}</p>
                        <div className="flex items-center space-x-1 text-sm text-gray-600 mb-1">
                          <MapPin className="w-3 h-3" />
                          <span>{location.address}</span>
                        </div>
                        {location.phone && (
                          <div className="flex items-center space-x-1 text-sm text-gray-600 mb-1">
                            <Phone className="w-3 h-3" />
                            <span>{location.phone}</span>
                          </div>
                        )}
                        <div className="flex items-center space-x-1 text-sm text-gray-600 mb-2">
                          <Clock className="w-3 h-3" />
                          <span>{location.hours}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-blue-600">{location.distance}</span>
                          <button className="flex items-center space-x-1 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm">
                            <Navigation className="w-4 h-4" />
                            <span>Directions</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-500">
                  <MapPin className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <h3 className="text-lg font-medium mb-2">Search for places</h3>
                  <p>Enter a location or business name to find places near you</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;