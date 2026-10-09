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
    <nav className="sticky top-0 z-40 w-full bg-ink/85 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-3xl px-6 pt-6">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#about"
            onClick={(event) => handleClick(event, "about")}
            aria-label="Back to the top"
            className="hidden h-11 items-center font-mono text-[10px] font-medium tracking-[0.14em] text-sky sm:flex"
          >
            PM
          </a>
          <div className="flex w-full items-center justify-between sm:w-auto sm:justify-start sm:gap-x-8">
            {links.map((link) => {
              const isActive = active === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(event) => handleClick(event, link.id)}
                  className={`relative flex min-h-11 items-center whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.15em] transition-colors ${
                    isActive ? "text-neutral-100" : "text-neutral-600 hover:text-neutral-300"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-px w-full bg-sky" />
                  )}
                </a>
              );
            })}
          </div>
        </div>
        <div className="h-px bg-white/[0.07]" />
      </div>
    </nav>
  );
}

export default NavBar;
