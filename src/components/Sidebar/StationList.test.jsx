import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import StationList from './StationList';

describe('StationList', () => {
  const mockStations = [
    { name: 'Berlin Hbf', city: 'Berlin', latitude: 52.5200, longitude: 13.4050 },
    { name: 'Hamburg Hbf', city: 'Hamburg', latitude: 53.5511, longitude: 9.9937 }
  ];

  it('renders list of stations', () => {
    const mockOnClick = vi.fn();
    
    render(
      <StationList
        stations={mockStations}
        selectedStation={null}
        onStationClick={mockOnClick}
      />
    );

    expect(screen.getByText('Berlin Hbf')).toBeInTheDocument();
    expect(screen.getByText('Hamburg Hbf')).toBeInTheDocument();
  });

  it('shows empty state when no stations', () => {
    const mockOnClick = vi.fn();
    
    render(
      <StationList
        stations={[]}
        selectedStation={null}
        onStationClick={mockOnClick}
      />
    );

    expect(screen.getByText('No stations found')).toBeInTheDocument();
    expect(screen.getByText('Try selecting a different city')).toBeInTheDocument();
  });

  it('renders correct number of stations', () => {
    const mockOnClick = vi.fn();
    
    const { container } = render(
      <StationList
        stations={mockStations}
        selectedStation={null}
        onStationClick={mockOnClick}
      />
    );

    const stationCards = container.querySelectorAll('[role="button"]');
    expect(stationCards).toHaveLength(2);
  });
});