import { useState, useEffect } from 'react';
import { API_CONFIG } from '../constants/mapConfig';

/**
 * Custom hook to fetch and manage train stations data
 * @returns {Object} { stations, loading, error, cities }
 */
export const useStations = () => {
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchStations = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(API_CONFIG.STATIONS_URL);

        if (!response.ok) {
          throw new Error(`Failed to fetch stations: ${response.status}`);
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error('Invalid data format received');
        }

        setStations(data);

        const uniqueCities = [...new Set(data.map(station => station.city))]
          .filter(Boolean)
          .sort();

        setCities(uniqueCities);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching stations:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStations();
  }, []);

  return { stations, loading, error, cities };
};
