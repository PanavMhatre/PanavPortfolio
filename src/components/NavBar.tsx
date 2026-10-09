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

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <nav className="sticky top-4 z-40 flex w-full justify-center px-6">
      <div className="no-scrollbar flex max-w-full items-center gap-0.5 overflow-x-auto rounded-full border border-white/10 bg-[#111419]/90 px-2 py-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:gap-1">
        <a
          href="#about"
          onClick={(event) => handleClick(event, "about")}
          aria-label="Back to the top"
          className="hidden h-9 shrink-0 items-center rounded-full px-3 font-mono text-[10px] font-medium tracking-[0.14em] text-sky transition-colors hover:bg-white/[0.06] sm:flex"
        >
          PM
        </a>
        {links.map((link) => {
          const isActive = active === link.id;
          return (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(event) => handleClick(event, link.id)}
              className={`flex h-9 shrink-0 items-center whitespace-nowrap rounded-full px-2.5 text-[10px] font-medium uppercase tracking-[0.15em] transition-colors sm:px-3 ${
                isActive
                  ? "bg-white/[0.08] text-neutral-100"
                  : "text-neutral-500 hover:bg-white/[0.04] hover:text-neutral-300"
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

export default NavBar;
