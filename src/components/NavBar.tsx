import { useEffect, useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

function NavBar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="w-full max-w-3xl mx-auto px-6 pt-8 pb-0">
        <div className="flex items-center justify-end gap-x-8 overflow-x-auto">
          {links.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleClick(e, link.id)}
                className={`relative pb-3 text-[11px] font-medium uppercase tracking-[0.2em] whitespace-nowrap transition-colors ${
                  isActive
                    ? "text-neutral-100"
                    : "text-neutral-500 hover:text-neutral-300"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-px bg-neutral-500" />
                )}
              </a>
            );
          })}
        </div>
        <div className="mt-3 h-px bg-white/[0.06]" />
      </div>
    </nav>
  );
}

export default NavBar;
