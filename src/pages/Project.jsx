export default function Projects() {
  const projects = [
    "E-Commerce",
    "Dashboard",
    "Chat App",
    "Maps",
    "Auth",
    "Portfolio"
  ];

  return (
    <section id="projects" className="py-32 px-12 bg-[var(--bg2)]">

      <h2 className="text-6xl font-extrabold mb-16">My Work</h2>

      <div className="grid grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="bg-[var(--surface)] border border-white/10 rounded-xl overflow-hidden hover:-translate-y-2 transition">

            <div className="aspect-video flex items-center justify-center text-3xl">
              🚀
            </div>

            <div className="p-5">
              <h3 className="font-bold">{p}</h3>
              <p className="text-xs text-[var(--muted)]">Development</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}