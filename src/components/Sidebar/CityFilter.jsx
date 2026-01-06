import React from 'react';

/**
 * CityFilter component
 * Allows filtering stations by city and shows station counts
 */
const CityFilter = ({
  cities,
  selectedCity,
  onCityChange,
  totalStations,
  allStations
}) => {
  const getCityStationCount = (city) =>
    allStations.filter(station => station.city === city).length;

  return (
    <div className="p-4 border-b border-gray-200">
      <label
        htmlFor="city-filter"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Filter by city
      </label>

      <select
        id="city-filter"
        value={selectedCity}
        onChange={(e) => onCityChange(e.target.value)}
        className="w-full border border-gray-300 rounded-md p-2 text-sm"
      >
        <option value="">
          All cities ({totalStations} stations)
        </option>

        {cities.map(city => (
          <option key={city} value={city}>
            {city} ({getCityStationCount(city)})
          </option>
        ))}
      </select>
    </div>
  );
};

export default CityFilter;
