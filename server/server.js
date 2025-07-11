const express = require('express');
const cors = require('cors');
const path = require('path');
const SearchEngine = require('./search-engine.cjs');

const app = express();
const port = process.env.PORT || 3001;
const searchEngine = new SearchEngine();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));

// Search endpoint
app.post('/api/search', async (req, res) => {
  try {
    const { query, level = 1 } = req.body;
    
    if (!query || query.trim().length === 0) {
      return res.status(400).json({ error: 'Query is required' });
    }
    
    console.log(`🔍 Search request: "${query}" (Level ${level})`);
    const startTime = Date.now();
    
    const results = await searchEngine.search(query.trim(), level);
    const searchTime = Date.now() - startTime;
    
    res.json({
      ...results,
      searchTime: `${(searchTime / 1000).toFixed(2)} seconds`
    });
    
  } catch (error) {
    console.error('Search API error:', error);
    res.status(500).json({ 
      error: 'Search failed', 
      message: error.message 
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', service: 'DSE Search Engine' });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, () => {
  console.log(`🚀 DSE Search Engine server running on port ${port}`);
});