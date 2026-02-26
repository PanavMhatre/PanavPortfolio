import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function NavBar() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const links = [
    { path: "/", label: "Home" },
    { path: "/resume/", label: "Resume" },
    { path: "/projects/", label: "Projects" },
    { path: "/blog/", label: "Blog" },
  ];

  return (
    <nav className="w-full max-w-3xl mx-auto px-6 pt-8 pb-0">
      <div className="flex items-center justify-end space-x-6">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              className={`relative text-sm font-medium transition-colors pb-3 ${
                isActive
                  ? "text-black dark:text-white"
                  : "text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
              }`}
              to={link.path}
            >
              {link.label}
              {isActive && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-gray-400 dark:bg-gray-500 rounded-full" />
              )}
            </Link>
          );
        })}
        <button
          onClick={toggleTheme}
          className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors pb-3"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </div>
      <hr className="border-gray-200 dark:border-gray-700/50" />
    </nav>
  );
}

export default NavBar;
