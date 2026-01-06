import { useState, useEffect, useMemo } from 'react';

/**
 * Custom hook to filter stations by city
 * @param {Array} stations - Array of station objects
 * @returns {Object} { filteredStations, selectedCity, setSelectedCity, selectedStation, setSelectedStation }
 */
export const useStationFilter = (stations) => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedStation, setSelectedStation] = useState(null);

  // Filter stations based on selected city
  const filteredStations = useMemo(() => {
    if (!selectedCity) {
      return stations;
    }
    return stations.filter(station => station.city === selectedCity);
  }, [stations, selectedCity]);

  // Reset selected station when filter changes
  useEffect(() => {
    setSelectedStation(null);
  }, [selectedCity]);

  return {
    filteredStations,
    selectedCity,
    setSelectedCity,
    selectedStation,
    setSelectedStation
  };
};