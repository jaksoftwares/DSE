const express = require('express');
const cors = require('cors');
const path = require('path');
const SearchEngine = require('./search-engine.cjs');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize search engine
const searchEngine = new SearchEngine();

// API Routes
app.post('/api/search', async (req, res) => {
  try {
    const { query, level = 1 } = req.body;
    
    if (!query) {
      return res.status(400).json({ error: 'Query is required' });
    }

    console.log(`🔍 Searching for "${query}" at level ${level}...`);
    
    const startTime = Date.now();
    const results = await searchEngine.search(query, level);
    const searchTime = ((Date.now() - startTime) / 1000).toFixed(2);

    res.json({
      query,
      results,
      totalResults: results.length,
      searchTime: `${searchTime}s`,
      level
    });

  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ 
      error: 'Search failed',
      message: error.message 
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 DSE Backend server running on http://localhost:${PORT}`);
});