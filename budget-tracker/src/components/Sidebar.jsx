import { useState } from "react";
import {
  FaHome,
  FaChartLine,
  FaBell,
  FaHeart,
  FaWallet,
  FaSignOutAlt,
  FaMoon,
} from "react-icons/fa";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div
      className={`h-screen bg-white shadow-lg fixed transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b">
        <div className={`${isOpen ? "block" : "hidden"} transition-all`}>
          <h1 className="text-lg font-bold text-primary">CodingLab</h1>
          <span className="text-sm text-gray-500">Web Developer</span>
        </div>
        <button className="p-2 text-primary" onClick={toggleSidebar}>
          ▶
        </button>
      </div>

      {/* Search Bar */}
      {isOpen && (
        <div className="px-4 py-4 border-b">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 text-sm border rounded-lg"
          />
        </div>
      )}

      {/* Menu Items */}
      <ul className="mt-4 space-y-2">
        <li>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 transition-all"
          >
            <FaHome className="text-lg text-primary" />
            {isOpen && <span className="ml-3">Dashboard</span>}
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 transition-all"
          >
            <FaChartLine className="text-lg text-primary" />
            {isOpen && <span className="ml-3">Revenue</span>}
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 transition-all"
          >
            <FaBell className="text-lg text-primary" />
            {isOpen && <span className="ml-3">Notifications</span>}
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 transition-all"
          >
            <FaHeart className="text-lg text-primary" />
            {isOpen && <span className="ml-3">Likes</span>}
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 transition-all"
          >
            <FaWallet className="text-lg text-primary" />
            {isOpen && <span className="ml-3">Wallets</span>}
          </a>
        </li>
      </ul>

      {/* Footer */}
      <div className="absolute bottom-4 w-full">
        <ul>
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 transition-all"
            >
              <FaSignOutAlt className="text-lg text-primary" />
              {isOpen && <span className="ml-3">Logout</span>}
            </a>
          </li>
          <li>
            <div className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 transition-all">
              <FaMoon className="text-lg text-primary" />
              {isOpen && (
                <span className="ml-3 flex items-center">
                  Dark Mode
                  <input type="checkbox" className="ml-2" />
                </span>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
