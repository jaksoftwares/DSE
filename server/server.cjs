const express = require('express');
const cors = require('cors');
const path = require('path');

let SearchEngine;
try {
  SearchEngine = require('./search-engine.cjs');
} catch (error) {
  console.error('Failed to load SearchEngine:', error.message);
  process.exit(1);
}

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize search engine
let searchEngine;
try {
  searchEngine = new SearchEngine();
  console.log('✅ SearchEngine initialized successfully');
} catch (error) {
  console.error('❌ Failed to initialize SearchEngine:', error.message);
  process.exit(1);
}

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
      results: results.results || [],
      totalResults: results.totalResults || 0,
      searchTime: `${searchTime} seconds`,
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