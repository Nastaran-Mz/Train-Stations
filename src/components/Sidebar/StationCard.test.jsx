import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import StationCard from './StationCard';

describe('StationCard', () => {
  const mockStation = {
    name: 'Berlin Hauptbahnhof',
    city: 'Berlin',
    latitude: 52.5200,
    longitude: 13.4050
  };

  it('renders station information correctly', () => {
    const mockOnClick = vi.fn();
    
    render(
      <StationCard
        station={mockStation}
        isSelected={false}
        onClick={mockOnClick}
      />
    );

    expect(screen.getByText('Berlin Hauptbahnhof')).toBeInTheDocument();
    expect(screen.getByText('Berlin')).toBeInTheDocument();
  });

  it('calls onClick when card is clicked', () => {
    const mockOnClick = vi.fn();
    
    render(
      <StationCard
        station={mockStation}
        isSelected={false}
        onClick={mockOnClick}
      />
    );

    const card = screen.getByRole('button');
    fireEvent.click(card);

    expect(mockOnClick).toHaveBeenCalledWith(mockStation);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('applies selected styles when isSelected is true', () => {
    const mockOnClick = vi.fn();
    
    render(
      <StationCard
        station={mockStation}
        isSelected={true}
        onClick={mockOnClick}
      />
    );

    const card = screen.getByRole('button');
    expect(card.className).toContain('from-blue-500');
  });

  it('handles keyboard interaction', () => {
    const mockOnClick = vi.fn();
    
    render(
      <StationCard
        station={mockStation}
        isSelected={false}
        onClick={mockOnClick}
      />
    );

    const card = screen.getByRole('button');
    fireEvent.keyPress(card, { key: 'Enter', code: 'Enter' });

    expect(mockOnClick).toHaveBeenCalledWith(mockStation);
  });
});