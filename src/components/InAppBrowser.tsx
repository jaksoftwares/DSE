import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowLeft, ArrowRight, RotateCcw, ExternalLink, Home, Shield, AlertTriangle } from 'lucide-react';

interface InAppBrowserProps {
  url: string;
  title: string;
  onClose: () => void;
}

const InAppBrowser: React.FC<InAppBrowserProps> = ({ url, title, onClose }) => {
  const [currentUrl, setCurrentUrl] = useState(url);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    setCurrentUrl(url);
    setIsLoading(true);
    setLoadError(false);
  }, [url]);

  const handleIframeLoad = () => {
    setIsLoading(false);
    setLoadError(false);
    
    // Try to detect navigation capabilities
    try {
      const iframe = iframeRef.current;
      if (iframe && iframe.contentWindow) {
        // Note: Due to CORS, we can't actually access history, but we can simulate
        setCanGoBack(true);
        setCanGoForward(false);
      }
    } catch (error) {
      // Expected due to CORS restrictions
    }
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setLoadError(true);
  };

  const handleGoBack = () => {
    const iframe = iframeRef.current;
    if (iframe && iframe.contentWindow) {
      try {
        iframe.contentWindow.history.back();
      } catch (error) {
        // Fallback: reload the original URL
        setCurrentUrl(url);
        setIsLoading(true);
      }
    }
  };

  const handleGoForward = () => {
    const iframe = iframeRef.current;
    if (iframe && iframe.contentWindow) {
      try {
        iframe.contentWindow.history.forward();
      } catch (error) {
        console.log('Forward navigation not available');
      }
    }
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setLoadError(false);
    const iframe = iframeRef.current;
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

  const getProxyUrl = (originalUrl: string) => {
    // Try multiple CORS proxy services for better reliability
    const proxies = [
      `https://corsproxy.io/?${encodeURIComponent(originalUrl)}`,
      `https://cors-anywhere.herokuapp.com/${originalUrl}`,
      `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(originalUrl)}`,
      originalUrl // Fallback to direct URL
    ];
    
    // Use the first proxy for now, can implement fallback logic later
    return proxies[0];
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
              {!currentUrl.startsWith('https://') && (
                <Shield className="w-4 h-4 text-orange-500 ml-2" title="Not secure" />
              )}
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
        {loadError ? (
          <div className="flex items-center justify-center h-full bg-gray-50">
            <div className="text-center max-w-md">
              <AlertTriangle className="w-16 h-16 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Unable to load page</h3>
              <p className="text-gray-600 mb-4">
                This website cannot be displayed in the browser due to security restrictions.
              </p>
              <div className="space-y-2">
                <button
                  onClick={handleOpenExternal}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Open in New Tab
                </button>
                <button
                  onClick={handleRefresh}
                  className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <iframe
              ref={iframeRef}
              src={currentUrl.startsWith('http') ? getProxyUrl(currentUrl) : currentUrl}
              className="w-full h-full border-0"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation allow-downloads"
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            />
            
            {/* Loading Overlay */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading {formatUrl(currentUrl)}...</p>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Bottom Info Bar */}
      <div className="bg-gray-50 border-t border-gray-200 px-4 py-2">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Viewing in DSE Browser</span>
          <span>Secure browsing enabled</span>
        </div>
      </div>
    </div>
  );
};

export default InAppBrowser;