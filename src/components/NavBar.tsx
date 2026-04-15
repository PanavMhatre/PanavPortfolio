import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  const links = [
    { path: "/", label: "Home" },
    { path: "/resume/", label: "Resume" },
    { path: "/projects/", label: "Projects" },
    { path: "/blog/", label: "Blog" },
  ];

  return (
    <nav className="w-full max-w-3xl mx-auto px-6 pt-8 pb-0">
      <div className="flex items-center justify-end gap-x-8">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              className={`relative pb-3 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors ${
                isActive
                  ? "text-neutral-100"
                  : "text-neutral-500 hover:text-neutral-300"
              }`}
              to={link.path}
            >
              {link.label}
              {isActive && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-px bg-neutral-500" />
              )}
            </Link>
          );
        })}
      </div>
      <div className="mt-3 h-px bg-white/[0.06]" />
    </nav>
  );
}

export default NavBar;
