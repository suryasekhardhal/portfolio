export default function Navbar() {
  const links = ["home", "about", "projects", "experience", "contact"];

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between px-12 py-5 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="font-extrabold text-[var(--purple-light)]">
        Suryasekhar._
      </div>

      <ul className="flex gap-8 text-xs tracking-widest">
        {links.map((l, i) => (
          <a
            key={i}
            href={`#${l}`}
            className="text-[var(--muted)] hover:text-white relative group"
          >
            <sup className="text-[var(--purple-light)] mr-1">0{i + 1}</sup>
            // {l}
            <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-[var(--purple-light)] group-hover:w-full transition-all"></span>
          </a>
        ))}
      </ul>
    </nav>
  );
}