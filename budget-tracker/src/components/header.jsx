const Header = () => {
  return (
    <header className="bg-white shadow-md border-b border-gray-300 p-4 flex justify-end items-center">
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border rounded-lg bg-gray-100"
        />
        <button className="p-2 hover:bg-gray-200 rounded-full">🔔</button>
        <button className="p-2 hover:bg-gray-200 rounded-full">👤</button>
      </div>
    </header>
  );
};

export default Header;
