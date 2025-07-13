import React from 'react';
import { ExternalLink, Clock, Globe, Eye } from 'lucide-react';

interface SearchResult {
  title: string;
  url: string;
  description: string;
  source: string;
}

interface SearchResultsProps {
  results: SearchResult[];
  query: string;
  totalResults: number;
  searchTime: string;
  loading: boolean;
  onOpenInApp?: (url: string, title: string) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  query,
  totalResults,
  searchTime,
  loading,
  onOpenInApp
}) => {
  if (loading) {
    return (
      <div className="max-w-2xl mx-auto mt-8">
        <div className="animate-pulse space-y-6">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              <div className="h-3 bg-gray-200 rounded w-full"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!results || results.length === 0) {
    return (
      <div className="max-w-2xl mx-auto mt-8 text-center">
        <div className="text-gray-500">
          <Globe className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <h3 className="text-lg font-medium mb-2">No results found</h3>
          <p>Try different keywords or check your spelling</p>
        </div>
      </div>
    );
  }

  const formatUrl = (url: string) => {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname;
    } catch {
      return url;
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      {/* Search Stats */}
      <div className="flex items-center text-sm text-gray-500 mb-6 space-x-4">
        <span>About {totalResults.toLocaleString()} results</span>
        <span className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          {searchTime}
        </span>
      </div>

      {/* Results */}
      <div className="space-y-6">
        {results.map((result, index) => (
          <div key={index} className="group">
            {/* URL */}
            <div className="flex items-center text-sm text-gray-600 mb-1">
              <span className="truncate">{formatUrl(result.url)}</span>
              <span className="ml-2 px-2 py-0.5 bg-gray-100 text-xs rounded">
                {result.source}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl text-blue-600 mb-1">
              <button
                onClick={() => onOpenInApp?.(result.url, result.title)}
                className="text-left hover:underline group-hover:text-blue-800 transition-colors w-full"
              >
                {result.title}
              </button>
            </h3>

            {/* Description */}
            <p className="text-gray-700 text-sm leading-relaxed">
              {result.description || 'No description available'}
            </p>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => onOpenInApp?.(result.url, result.title)}
                className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm"
              >
                <Eye className="w-4 h-4" />
                <span>View in DSE</span>
              </button>
              <a
                href={result.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open in new tab</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {results.length > 0 && (
        <div className="text-center mt-8">
          <button className="px-6 py-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
            Load more results
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchResults;