import { useState, useEffect, useRef } from "react";
import { UilUserCircle } from "@iconscout/react-unicons";

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Set theme based on system preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e) => {
      if (e.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    // Set initial theme
    handleSystemThemeChange(mediaQuery);
    // Listen to system changes
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () =>
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex flex-col xl:pt-[1rem] pt-2 xl:h-full w-full">
      {/* Logo */}
      <div className="flex justify-start xl:justify-center items-center px-4 xl:px-0">
        <img src="/logo.png" alt="Logo" className="w-12 h-12" />
      </div>

      {/* User Icon Button */}
      <button
        className="absolute xl:bottom-8 right-4 xl:right-auto xl:left-1/2 xl:transform xl:-translate-x-1/2 
        cursor-pointer !bg-transparent !border-none p-0 m-0 focus:outline-none"
        onClick={() => setMenuOpen((prev) => !prev)}
        ref={menuRef}
      >
        <UilUserCircle className="w-10 h-10 text-black dark:fill-white" />

        {menuOpen && (
          <>
            {/* Mobile Dropdown */}
            <div className="absolute top-12 right-0 w-40 p-2 rounded-lg shadow-md bg-white dark:bg-[#2e2e3f] z-50 lg:hidden">
              <ul className="flex flex-col items-start gap-2 text-sm text-gray-800 dark:text-gray-200">
                <li className="w-full hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-1 rounded cursor-pointer !text-left">
                  Contact Us
                </li>
                <li className="w-full hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-1 rounded cursor-pointer !text-left">
                  Sign Out
                </li>
              </ul>
            </div>

            {/* Desktop Dropdown */}
            <div className="absolute bottom-12 right-[-10rem] w-40 p-2 rounded-lg shadow-md bg-white dark:bg-[#2e2e3f] z-50 hidden lg:block">
              <ul className="flex flex-col items-start gap-2 text-sm text-gray-800 dark:text-gray-200">
                <li className="w-full hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-1 rounded cursor-pointer text-left">
                  Contact Us
                </li>
                <li className="w-full hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-1 rounded cursor-pointer text-left">
                  Sign Out
                </li>
              </ul>
            </div>
          </>
        )}
      </button>
    </div>
  );
};

export default Sidebar;
