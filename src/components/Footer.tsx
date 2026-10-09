function Footer() {
  return (
    <footer className="mx-auto w-full max-w-3xl px-6 pb-10">
      <div className="mb-8 h-px bg-white/[0.07]" />
      <div className="flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-600">
          &copy; {new Date().getFullYear()} Panav Mhatre
        </p>
        <p className="font-mono text-[10px] tracking-[0.1em] text-neutral-700">
          30.2672°N, 97.7431°W — Austin, TX
        </p>
      </div>
    </footer>
  );
}

export default Footer;
