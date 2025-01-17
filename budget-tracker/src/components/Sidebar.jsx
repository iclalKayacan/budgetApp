import { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: "🏠" },
    { name: "Departments", path: "/departments", icon: "🏢" },
    { name: "Reports", path: "/reports", icon: "📊" },
    { name: "Settings", path: "/settings", icon: "⚙️" },
  ];

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-20"
      } bg-gray-100 min-h-screen border-r border-gray-300 transition-all duration-300 flex flex-col`}
    >
      {isOpen && (
        <div className="p-4 text-xl font-bold text-gray-700 border-b border-gray-300">
          Bütçe Takip
        </div>
      )}
      <ul className="mt-4">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`p-4 hover:bg-gray-200 cursor-pointer ${
              isOpen ? "text-gray-700" : "text-gray-500"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Link href={item.path}>
              <div className="flex items-center space-x-4">
                <span>{item.icon}</span>
                {isOpen && <span>{item.name}</span>}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
