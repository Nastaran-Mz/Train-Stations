const StationCard = ({ station, isSelected, onClick }) => {
  return (
    <div
      onClick={() => onClick(station)}
      className={`group relative p-5 rounded-xl cursor-pointer transition-all duration-300 transform ${
        isSelected
          ? "bg-gradient-to-r from-blue-500 to-indigo-600 shadow-2xl scale-105 -translate-y-1"
          : "bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 shadow-md hover:shadow-xl hover:scale-102 hover:-translate-y-0.5"
      }`}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick(station);
        }
      }}
    >
      {/* Animated border effect */}
      <div
        className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
          isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-indigo-400 opacity-20 blur-sm"></div>
      </div>

      <div className="relative">
        {/* Station icon with animation */}
        <div
          className={`absolute -top-1 -left-1 text-2xl transition-transform duration-300 ${
            isSelected
              ? "scale-125"
              : "group-hover:scale-110 group-hover:rotate-12"
          }`}
        >
          🚉
        </div>

        <div className="ml-8">
          <h3
            className={`font-bold text-lg mb-2 transition-colors duration-300 ${
              isSelected
                ? "text-white"
                : "text-gray-800 group-hover:text-blue-600"
            }`}
          >
            {station.name}
          </h3>

          <div className="flex items-center text-sm">
            <span
              className={`mr-2 transition-transform duration-300 ${
                isSelected ? "" : "group-hover:scale-110"
              }`}
            >
              📍
            </span>
            <span
              className={`font-medium transition-colors duration-300 ${
                isSelected
                  ? "text-blue-100"
                  : "text-gray-600 group-hover:text-blue-500"
              }`}
            >
              {station.city}
            </span>
          </div>
        </div>

        {/* Arrow indicator for selected */}
        {isSelected && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white animate-bounce">
            →
          </div>
        )}
      </div>
    </div>
  );
};

export default StationCard;
