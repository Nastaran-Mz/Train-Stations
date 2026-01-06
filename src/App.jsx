import { useEffect } from 'react';
import { useStations } from './hooks/useStations';
import { useStationFilter } from './hooks/useStationFilter';
import { fixLeafletIcons } from './utils/leafletConfig';
import AppLayout from './components/Layout/AppLayout';
import Sidebar from './components/Sidebar/Sidebar';
import Map from './components/Map/Map';
import LoadingSpinner from './components/UI/LoadingSpinner';
import ErrorMessage from './components/UI/ErrorMessage';

function App() {
  const { stations, loading, error, cities } = useStations();
  const {
    filteredStations,
    selectedCity,
    setSelectedCity,
    selectedStation,
    setSelectedStation
  } = useStationFilter(stations);

  // Fix Leaflet icons on mount
  useEffect(() => {
    fixLeafletIcons();
  }, []);

  if (loading) {
    return <LoadingSpinner message="Loading train stations..." />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <AppLayout>
      <Sidebar
        cities={cities}
        selectedCity={selectedCity}
        onCityChange={setSelectedCity}
        filteredStations={filteredStations}
        allStations={stations}
        selectedStation={selectedStation}
        onStationClick={setSelectedStation}
      />
      <Map 
        stations={filteredStations} 
        selectedStation={selectedStation} 
      />
    </AppLayout>
  );
}

export default App;