import React, { useState, useRef } from 'react';
import { Search, Mic, Camera, MicOff } from 'lucide-react';

interface SearchBoxProps {
  onSearch: (query: string, level: number) => void;
  loading: boolean;
  initialQuery?: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch, loading, initialQuery = '' }) => {
  const [query, setQuery] = useState(initialQuery);
  const [searchLevel, setSearchLevel] = useState(1);
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim(), searchLevel);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  const startVoiceSearch = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Voice search is not supported in your browser. Please try Chrome or Edge.');
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setQuery(transcript);
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
      if (event.error === 'not-allowed') {
        alert('Microphone access denied. Please allow microphone access and try again.');
      }
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const stopVoiceSearch = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center bg-white rounded-full border border-gray-300 hover:shadow-lg transition-shadow duration-200 focus-within:shadow-lg">
          <Search className="absolute left-4 w-5 h-5 text-gray-400" />
          
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={isListening ? "Listening..." : "Search the web..."}
            className="w-full py-3 pl-12 pr-20 text-lg rounded-full outline-none"
            disabled={loading || isListening}
          />
          
          <div className="absolute right-3 flex items-center space-x-2">
            <button
              type="button"
              onClick={isListening ? stopVoiceSearch : startVoiceSearch}
              className={`p-2 hover:bg-gray-100 rounded-full transition-colors ${
                isListening ? 'bg-red-100' : ''
              }`}
              title={isListening ? "Stop voice search" : "Search by voice"}
            >
              {isListening ? (
                <MicOff className="w-5 h-5 text-red-500" />
              ) : (
                <Mic className="w-5 h-5 text-gray-400 hover:text-blue-500" />
              )}
            </button>
            <button
              type="button"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              title="Search by image"
            >
              <Camera className="w-5 h-5 text-gray-400 hover:text-blue-500" />
            </button>
          </div>
        </div>
      </form>

      {/* Search Level Selector */}
      <div className="flex justify-center mt-4 space-x-4">
        <div className="flex items-center space-x-2">
          <label className="text-sm text-gray-600">Search Depth:</label>
          <select
            value={searchLevel}
            onChange={(e) => setSearchLevel(Number(e.target.value))}
            className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          >
            <option value={1}>Level 1 - Quick</option>
            <option value={2}>Level 2 - Standard</option>
            <option value={3}>Level 3 - Deep</option>
            <option value={4}>Level 4 - Comprehensive</option>
          </select>
        </div>
      </div>

      {/* Search Buttons */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={loading || !query.trim()}
          className="px-6 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Searching...' : 'DSE Search'}
        </button>
        <button
          type="button"
          className="px-6 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors"
          onClick={() => {
            if (query.trim()) {
              onSearch(query.trim(), 1);
            }
          }}
          disabled={loading || !query.trim()}
        >
          I'm Feeling Lucky
        </button>
      </div>
    </div>
  );
};

export default SearchBox;