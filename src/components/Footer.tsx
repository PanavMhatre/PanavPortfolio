function Footer() {
  return (
    <footer className="w-full max-w-3xl mx-auto px-6 pb-10">
      <div className="h-px bg-white/[0.06] mb-8" />
      <div className="text-center">
        <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-600">
          &copy; {new Date().getFullYear()} Panav Mhatre
        </p>
      </div>
    </footer>
  );
}

export default Footer;
