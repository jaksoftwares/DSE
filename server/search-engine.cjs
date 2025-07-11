const axios = require('axios');
const cheerio = require('cheerio');

// Helper: sanitize filename from query
const sanitizeFilename = (str) =>
  str.toLowerCase().replace(/[^a-z0-9]+/gi, '_').replace(/^_+|_+$/g, '');

class SearchEngine {
  constructor() {
    this.seenUrls = new Set();
  }

  async searchDuckDuckGo(query, maxResults = 30) {
    const results = [];
    const encodedQuery = encodeURIComponent(query);
    
    console.log(`🦆 Searching DuckDuckGo for "${query}"...`);
    
    for (let offset = 0; offset < maxResults; offset += 30) {
      const ddgUrl = `https://html.duckduckgo.com/html/?q=${encodedQuery}&s=${offset}`;
      try {
        const { data } = await axios.get(ddgUrl, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
          }
        });
        const $ = cheerio.load(data);

        $('.result__title').each((_, el) => {
          const anchor = $(el).find('a.result__a');
          const title = anchor.text().trim();
          const rawUrl = anchor.attr('href');

          if (rawUrl && rawUrl.includes('uddg=')) {
            const realUrl = decodeURIComponent(
              new URL(`https://duckduckgo.com${rawUrl}`).searchParams.get('uddg') || ''
            );
            if (realUrl && !this.seenUrls.has(realUrl)) {
              this.seenUrls.add(realUrl);
              
              // Get description
              const description = $(el).parent().find('.result__snippet').text().trim();
              
              results.push({ 
                title, 
                url: realUrl, 
                description,
                source: 'DuckDuckGo'
              });
            }
          }
        });
      } catch (error) {
        console.warn(`❌ DuckDuckGo error at offset ${offset}: ${error.message}`);
      }
    }
    
    return results;
  }

  async searchBing(query, maxResults = 20) {
    const results = [];
    const encodedQuery = encodeURIComponent(query);
    
    console.log(`🟦 Searching Bing for "${query}"...`);
    
    for (let offset = 0; offset < maxResults; offset += 10) {
      const bingUrl = `https://www.bing.com/search?q=${encodedQuery}&first=${offset + 1}`;
      try {
        const { data } = await axios.get(bingUrl, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
          }
        });
        const $ = cheerio.load(data);

        $('li.b_algo').each((_, el) => {
          const title = $(el).find('h2').text().trim();
          let url = $(el).find('h2 a').attr('href');
          const description = $(el).find('.b_caption p').text().trim();

          if (!url) return;

          // Clean Bing redirect URLs
          if (url.startsWith('/ck/a')) {
            try {
              const full = `https://www.bing.com${url}`;
              const parsed = new URL(full);
              let u = parsed.searchParams.get('u');

              if (!u) {
                const regexMatch = url.match(/u=([^&]+)/);
                if (regexMatch) u = regexMatch[1];
              }

              if (u && u.startsWith('a1')) {
                const base64 = u.replace(/^a1/, '');
                const padded = base64 + '='.repeat((4 - base64.length % 4) % 4);
                const decoded = Buffer.from(padded, 'base64').toString('utf-8');
                url = decoded;
              } else if (u) {
                url = decodeURIComponent(u);
              } else {
                return;
              }
            } catch {
              return;
            }
          }

          if (url.startsWith('http') && !this.seenUrls.has(url)) {
            this.seenUrls.add(url);
            results.push({ 
              title, 
              url, 
              description,
              source: 'Bing'
            });
          }
        });
      } catch (error) {
        console.warn(`❌ Bing error at offset ${offset}: ${error.message}`);
      }
    }
    
    return results;
  }

  async search(query, level = 1) {
    this.seenUrls.clear();
    const combinedResults = [];
    
    try {
      // Determine search intensity based on level
      const ddgResults = level >= 2 ? 50 : 30;
      const bingResults = level >= 3 ? 30 : 20;
      
      // Search DuckDuckGo
      const ddgData = await this.searchDuckDuckGo(query, ddgResults);
      combinedResults.push(...ddgData);
      
      // Search Bing
      const bingData = await this.searchBing(query, bingResults);
      combinedResults.push(...bingData);
      
      // Sort by relevance (you can implement more sophisticated ranking)
      const sortedResults = combinedResults.sort((a, b) => {
        // Prioritize results with query terms in title
        const aHasQuery = a.title.toLowerCase().includes(query.toLowerCase());
        const bHasQuery = b.title.toLowerCase().includes(query.toLowerCase());
        
        if (aHasQuery && !bHasQuery) return -1;
        if (!aHasQuery && bHasQuery) return 1;
        
        return 0;
      });
      
      return {
        query,
        results: sortedResults,
        totalResults: sortedResults.length,
        searchTime: Date.now(),
        level
      };
      
    } catch (error) {
      console.error('Search error:', error);
      throw error;
    }
  }
}

module.exports = SearchEngine;