# 🚂 German Train Stations Map

A modern React application that visualizes train stations across Germany on an interactive map using Leaflet.js.

## ✨ Features

- 🗺️ Interactive map with all German train stations
- 🔍 Filter stations by city
- 📍 Click on station cards to zoom and highlight on map
- 📱 Responsive design
- ⚡ Built with Vite for fast development
- 🧪 Comprehensive test coverage
- 🎨 Styled with Tailwind CSS

## 🛠️ Tech Stack

- **React 18** - Latest version with hooks
- **Vite** - Next generation frontend tooling
- **Leaflet.js** - Interactive map library
- **React-Leaflet** - React components for Leaflet
- **Tailwind CSS** - Utility-first CSS framework
- **Vitest** - Fast unit test framework
- **Testing Library** - React testing utilities

## 📁 Project Structure

```
train-stations-app/
├── src/
│   ├── components/
│   │   ├── Map/
│   │   │   ├── Map.jsx
│   │   │   ├── MapController.jsx
│   │   │   └── StationMarker.jsx
│   │   ├── Sidebar/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── CityFilter.jsx
│   │   │   ├── StationList.jsx
│   │   │   └── StationCard.jsx
│   │   ├── UI/
│   │   │   ├── Header.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   └── ErrorMessage.jsx
│   │   └── Layout/
│   │       └── AppLayout.jsx
│   ├── hooks/
│   │   ├── useStations.js
│   │   └── useStationFilter.js
│   ├── utils/
│   │   └── leafletConfig.js
│   ├── constants/
│   │   └── mapConfig.js
│   ├── test/
│   │   └── setup.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd train-stations-app
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🧪 Testing

Run tests:
```bash
npm run test
```

Run tests with UI:
```bash
npm run test:ui
```

Run tests with coverage:
```bash
npm run test:coverage
```

## 🏗️ Build for Production

```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 🚀 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

Or deploy via GitHub:
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Vite and deploy

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify

Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## 📊 Component Architecture

### Custom Hooks

- **useStations**: Manages station data fetching and state
- **useStationFilter**: Handles filtering logic and selected station state

### Reusable Components

- **Map Components**: Modular map, markers, and controller
- **Sidebar Components**: Filter, list, and card components
- **UI Components**: Loading, error, and header components
- **Layout Components**: Main app layout wrapper

## 🎨 Styling

The project uses Tailwind CSS for styling with a utility-first approach. Custom configurations can be found in `tailwind.config.js`.

## 📝 API

Data is fetched from:
```
https://gist.githubusercontent.com/neysidev/bbd40032f0f4e167a1e6a8b3e99a490c/raw
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License

## 👨‍💻 Developer

Built with ❤️ for PANTOhealth Frontend Assignment

---

**Questions?** Contact: mehdi@panto.org