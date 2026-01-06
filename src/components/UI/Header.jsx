
const Header = ({ title, subtitle }) => {
  return (
    <header className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white p-6 shadow-2xl overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-48 -left-48 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative flex items-center">
        <div className="text-5xl mr-4 animate-bounce">🚂</div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          {subtitle && (
            <p className="text-blue-100 text-sm mt-1 font-medium">{subtitle}</p>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;