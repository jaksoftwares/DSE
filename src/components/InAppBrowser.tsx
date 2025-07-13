import React, { useState, useEffect } from 'react';
import { X, ArrowLeft, ArrowRight, RotateCcw, ExternalLink, Home } from 'lucide-react';

interface InAppBrowserProps {
  url: string;
  title: string;
  onClose: () => void;
}

const InAppBrowser: React.FC<InAppBrowserProps> = ({ url, title, onClose }) => {
  const [currentUrl, setCurrentUrl] = useState(url);
  const [isLoading, setIsLoading] = useState(true);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);

  useEffect(() => {
    setCurrentUrl(url);
    setIsLoading(true);
  }, [url]);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleGoBack = () => {
    const iframe = document.getElementById('browser-iframe') as HTMLIFrameElement;
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.history.back();
    }
  };

  const handleGoForward = () => {
    const iframe = document.getElementById('browser-iframe') as HTMLIFrameElement;
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.history.forward();
    }
  };

  const handleRefresh = () => {
    setIsLoading(true);
    const iframe = document.getElementById('browser-iframe') as HTMLIFrameElement;
    if (iframe) {
      iframe.src = iframe.src;
    }
  };

  const handleOpenExternal = () => {
    window.open(currentUrl, '_blank', 'noopener,noreferrer');
  };

  const formatUrl = (url: string) => {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname + urlObj.pathname;
    } catch {
      return url;
    }
  };

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      {/* Browser Header */}
      <div className="bg-gray-100 border-b border-gray-200 p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              title="Close browser"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
            
            <div className="flex items-center space-x-1">
              <button
                onClick={handleGoBack}
                disabled={!canGoBack}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                title="Go back"
              >
                <ArrowLeft className="w-4 h-4 text-gray-600" />
              </button>
              
              <button
                onClick={handleGoForward}
                disabled={!canGoForward}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                title="Go forward"
              >
                <ArrowRight className="w-4 h-4 text-gray-600" />
              </button>
              
              <button
                onClick={handleRefresh}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                title="Refresh"
              >
                <RotateCcw className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="flex-1 mx-4">
            <div className="bg-white border border-gray-300 rounded-full px-4 py-2 flex items-center">
              <Home className="w-4 h-4 text-gray-400 mr-2" />
              <span className="text-sm text-gray-700 truncate">{formatUrl(currentUrl)}</span>
            </div>
          </div>

          <button
            onClick={handleOpenExternal}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
            title="Open in new tab"
          >
            <ExternalLink className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Loading Indicator */}
      {isLoading && (
        <div className="bg-blue-500 h-1">
          <div className="bg-blue-600 h-full animate-pulse"></div>
        </div>
      )}

      {/* Browser Content */}
      <div className="flex-1 relative">
        <iframe
          id="browser-iframe"
          src={currentUrl}
          className="w-full h-full border-0"
          onLoad={handleIframeLoad}
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
          title={title}
        />
        
        {/* Overlay for iframe interaction issues */}
        <div className="absolute inset-0 pointer-events-none">
          {isLoading && (
            <div className="flex items-center justify-center h-full bg-white">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading {formatUrl(currentUrl)}...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InAppBrowser;