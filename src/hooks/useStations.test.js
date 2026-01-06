import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useStations } from './useStations';

describe('useStations', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('fetches stations successfully', async () => {
    const mockData = [
      { name: 'Berlin Hbf', city: 'Berlin', latitude: 52.5200, longitude: 13.4050 },
      { name: 'Hamburg Hbf', city: 'Hamburg', latitude: 53.5511, longitude: 9.9937 }
    ];

    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData
    });

    const { result } = renderHook(() => useStations());

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.stations).toEqual(mockData);
    expect(result.current.error).toBeNull();
    expect(result.current.cities).toEqual(['Berlin', 'Hamburg']);
  });

  it('handles fetch error', async () => {
    global.fetch.mockRejectedValueOnce(new Error('Network error'));

    const { result } = renderHook(() => useStations());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBe('Network error');
    expect(result.current.stations).toEqual([]);
  });

  it('handles invalid data format', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => 'invalid data'
    });

    const { result } = renderHook(() => useStations());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBe('Invalid data format received');
  });

  it('extracts unique cities correctly', async () => {
    const mockData = [
      { name: 'Berlin Hbf', city: 'Berlin', latitude: 52.5200, longitude: 13.4050 },
      { name: 'Berlin Ost', city: 'Berlin', latitude: 52.5105, longitude: 13.4346 },
      { name: 'Hamburg Hbf', city: 'Hamburg', latitude: 53.5511, longitude: 9.9937 }
    ];

    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData
    });

    const { result } = renderHook(() => useStations());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.cities).toEqual(['Berlin', 'Hamburg']);
    expect(result.current.cities).toHaveLength(2);
  });
});