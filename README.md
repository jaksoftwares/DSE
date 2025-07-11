# DSE - Dovepeak Search Engine

A professional search engine interface that aggregates results from multiple search engines including DuckDuckGo and Bing.

## Features

- **Multi-Engine Search**: Combines results from DuckDuckGo and Bing
- **4 Search Levels**: From quick searches to comprehensive deep searches
- **Google-like Interface**: Clean, professional, and responsive design
- **Real-time Results**: Fast search with loading states
- **Result Deduplication**: Removes duplicate URLs across search engines
- **Professional UI**: Modern design with hover effects and smooth transitions

## Search Levels

1. **Level 1 - Quick**: Fast search with basic results
2. **Level 2 - Standard**: More comprehensive results
3. **Level 3 - Deep**: Extended search across more pages
4. **Level 4 - Comprehensive**: Maximum depth search

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development servers:
```bash
npm run dev:full
```

This will start both the React frontend (port 5173) and the Express backend (port 3001).

### Individual Commands

- Frontend only: `npm run dev`
- Backend only: `npm run dev:server`
- Build for production: `npm run build`

## API Endpoints

### POST /api/search
Search for a query with specified level.

**Request Body:**
```json
{
  "query": "your search query",
  "level": 1
}
```

**Response:**
```json
{
  "query": "your search query",
  "results": [
    {
      "title": "Result Title",
      "url": "https://example.com",
      "description": "Result description",
      "source": "DuckDuckGo"
    }
  ],
  "totalResults": 25,
  "searchTime": "1.23 seconds",
  "level": 1
}
```

### GET /api/health
Health check endpoint.

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── SearchBox.tsx
│   │   ├── SearchResults.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   └── main.tsx
├── server/
│   ├── search-engine.js
│   └── server.js
└── public/
    └── ddslogo1.jpg
```

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS, Vite
- **Backend**: Node.js, Express
- **Search**: Axios, Cheerio for web scraping
- **Icons**: Lucide React

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.# DSE
# DSE
# DSE
