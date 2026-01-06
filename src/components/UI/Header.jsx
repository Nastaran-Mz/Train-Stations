/**
 * Reusable header component
 */
const Header = ({ title, subtitle }) => {
  return (
    <header className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 shadow-lg">
      <div className="flex items-center">
        <span className="text-4xl mr-3">🚂</span>
        <div>
          <h1 className="text-1xl font-bold">{title}</h1>
          {subtitle && <p className="text-blue-100 text-sm mt-1">{subtitle}</p>}
        </div>
      </div>
    </header>
  );
};

export default Header;
