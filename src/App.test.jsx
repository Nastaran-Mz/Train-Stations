import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

// Mock the hooks
vi.mock('./hooks/useStations', () => ({
  useStations: () => ({
    stations: [
      { name: 'Berlin Hbf', city: 'Berlin', latitude: 52.5200, longitude: 13.4050 },
      { name: 'Hamburg Hbf', city: 'Hamburg', latitude: 53.5511, longitude: 9.9937 }
    ],
    loading: false,
    error: null,
    cities: ['Berlin', 'Hamburg']
  })
}));

vi.mock('./hooks/useStationFilter', () => ({
  useStationFilter: (stations) => ({
    filteredStations: stations,
    selectedCity: '',
    setSelectedCity: vi.fn(),
    selectedStation: null,
    setSelectedStation: vi.fn()
  })
}));

// Mock Leaflet components
vi.mock('react-leaflet', () => ({
  MapContainer: ({ children }) => <div data-testid="map-container">{children}</div>,
  TileLayer: () => <div data-testid="tile-layer" />,
  Marker: () => <div data-testid="marker" />,
  Popup: ({ children }) => <div>{children}</div>,
  useMap: () => ({
    setView: vi.fn()
  })
}));

describe('App Integration', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the application successfully', async () => {
    render(<App />);
    
    await waitFor(() => {
      expect(screen.getByText('German Train Stations')).toBeInTheDocument();
    });
  });

  it('displays stations in sidebar', async () => {
    render(<App />);
    
    await waitFor(() => {
      expect(screen.getByText('Berlin Hbf')).toBeInTheDocument();
      expect(screen.getByText('Hamburg Hbf')).toBeInTheDocument();
    });
  });

  it('renders map container', async () => {
    render(<App />);
    
    await waitFor(() => {
      expect(screen.getByTestId('map-container')).toBeInTheDocument();
    });
  });
});