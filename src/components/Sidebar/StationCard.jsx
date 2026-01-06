/**
 * Reusable station card component
 */
const StationCard = ({ station, isSelected, onClick }) => {
  return (
    <div
      onClick={() => onClick(station)}
      className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
        isSelected
          ? 'bg-blue-100 border-2 border-blue-500 shadow-md transform scale-[1.02]'
          : 'bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 hover:shadow-sm'
      }`}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick(station);
        }
      }}
    >
      <h3 className={`font-semibold text-base mb-2 ${
        isSelected ? 'text-blue-900' : 'text-gray-800'
      }`}>
        {station.name}
      </h3>
      <div className="flex items-center text-sm">
        <span className="mr-1">📍</span>
        <span className={isSelected ? 'text-blue-700' : 'text-gray-600'}>
          {station.city}
        </span>
      </div>
    </div>
  );
};

export default StationCard;